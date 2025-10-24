import os
import textwrap
import unicodedata
from typing import List, Tuple

PAGE_WIDTH = 595.0  # A4 portrait in points
PAGE_HEIGHT = 842.0
MARGIN = 54.0


def hex_to_rgb(hex_value: str) -> Tuple[float, float, float]:
    hex_value = hex_value.strip().lstrip('#')
    r = int(hex_value[0:2], 16) / 255.0
    g = int(hex_value[2:4], 16) / 255.0
    b = int(hex_value[4:6], 16) / 255.0
    return (r, g, b)


def sanitize(text: str) -> str:
    prepared = text.replace('•', '*').replace('→', '->').replace('–', '-').replace('—', '-')
    normalized = unicodedata.normalize('NFKD', prepared)
    ascii_text = normalized.encode('ascii', 'ignore').decode('ascii')
    return ascii_text


def escape_pdf_text(text: str) -> str:
    text = text.replace('\\', r'\\')
    text = text.replace('(', r'\(')
    text = text.replace(')', r'\)')
    return text


class PageBuilder:
    def __init__(self) -> None:
        self.commands: List[str] = []

    def set_fill(self, color: Tuple[float, float, float]) -> None:
        self.commands.append(f"{color[0]:.3f} {color[1]:.3f} {color[2]:.3f} rg\n")

    def set_stroke(self, color: Tuple[float, float, float]) -> None:
        self.commands.append(f"{color[0]:.3f} {color[1]:.3f} {color[2]:.3f} RG\n")

    def fill_rect(self, x: float, y: float, w: float, h: float, color: Tuple[float, float, float]) -> None:
        self.set_fill(color)
        self.commands.append(f"{x:.2f} {y:.2f} {w:.2f} {h:.2f} re\n")
        self.commands.append("f\n")

    def stroke_rect(self, x: float, y: float, w: float, h: float, color: Tuple[float, float, float], width: float = 1.0) -> None:
        self.commands.append(f"{width:.2f} w\n")
        self.set_stroke(color)
        self.commands.append(f"{x:.2f} {y:.2f} {w:.2f} {h:.2f} re\n")
        self.commands.append("S\n")

    def text(self, x: float, y: float, size: float, text: str, font: str = 'F1', color: Tuple[float, float, float] = (0, 0, 0)) -> None:
        safe_text = escape_pdf_text(sanitize(text))
        self.set_fill(color)
        self.commands.append(f"BT /{font} {size:.2f} Tf {x:.2f} {y:.2f} Td ({safe_text}) Tj ET\n")

    def paragraph(
        self,
        x: float,
        y: float,
        size: float,
        text: str,
        font: str = 'F1',
        color: Tuple[float, float, float] = (0, 0, 0),
        max_chars: int = 72,
        leading: float = None,
    ) -> None:
        lines = textwrap.wrap(sanitize(text), width=max_chars)
        line_height = leading if leading is not None else size * 1.4
        for index, line in enumerate(lines):
            self.text(x, y - index * line_height, size, line, font=font, color=color)

    def bullet_list(
        self,
        x: float,
        y: float,
        size: float,
        items: List[str],
        font: str = 'F1',
        color: Tuple[float, float, float] = (0, 0, 0),
        max_chars: int = 72,
        leading: float = None,
    ) -> None:
        offset = 0.0
        spacing = leading if leading is not None else size * 1.5
        for item in items:
            lines = textwrap.wrap(sanitize(item), width=max_chars)
            if not lines:
                continue
            bullet_y = y - offset
            self.text(x, bullet_y, size, '*', font=font, color=color)
            self.text(x + 12, bullet_y, size, lines[0], font=font, color=color)
            for idx, extra in enumerate(lines[1:], start=1):
                self.text(x + 12, bullet_y - idx * (size * 1.2), size, extra, font=font, color=color)
            offset += spacing if len(lines) == 1 else spacing + (len(lines) - 1) * (size * 1.2)

    def palette(self, x: float, y: float, swatch: float, colors: List[str]) -> None:
        for idx, hex_value in enumerate(colors):
            cx = x + idx * (swatch + 6)
            self.fill_rect(cx, y, swatch, swatch, hex_to_rgb(hex_value))

    def render(self) -> str:
        return ''.join(self.commands)


class PDFBuilder:
    def __init__(self) -> None:
        self.objects: List[str] = []
        self.font_regular = self.add_object("<< /Type /Font /Subtype /Type1 /Name /F1 /BaseFont /Helvetica >>")
        self.font_bold = self.add_object("<< /Type /Font /Subtype /Type1 /Name /F2 /BaseFont /Helvetica-Bold >>")
        self.page_ids: List[int] = []
        self.contents_ids: List[int] = []

    def add_object(self, content: str) -> int:
        self.objects.append(content)
        return len(self.objects)

    def add_page(self, page_builder: PageBuilder) -> None:
        stream_text = page_builder.render()
        stream_bytes = stream_text.encode('latin-1')
        content_id = self.add_object(f"<< /Length {len(stream_bytes)} >>\nstream\n{stream_text}endstream")
        page_obj = (
            "<< /Type /Page /Parent PARENT_ID 0 R /MediaBox [0 0 595 842] "
            f"/Resources << /Font << /F1 {self.font_regular} 0 R /F2 {self.font_bold} 0 R >> >> "
            f"/Contents {content_id} 0 R >>"
        )
        page_id = self.add_object(page_obj)
        self.page_ids.append(page_id)
        self.contents_ids.append(content_id)

    def build(self, output_path: str) -> None:
        kids_refs = ' '.join(f"{pid} 0 R" for pid in self.page_ids)
        pages_id = self.add_object(f"<< /Type /Pages /Count {len(self.page_ids)} /Kids [{kids_refs}] >>")
        # Patch parent references
        for page_index in self.page_ids:
            original = self.objects[page_index - 1]
            self.objects[page_index - 1] = original.replace('PARENT_ID', str(pages_id))
        catalog_id = self.add_object(f"<< /Type /Catalog /Pages {pages_id} 0 R >>")
        info_id = self.add_object(
            "<< /Producer (Studio Minimal PDF builder) /Title (Portfolio Studio Minimal) >>"
        )

        header = b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n"
        output = bytearray()
        output.extend(header)
        offsets: List[int] = []
        for index, content in enumerate(self.objects, start=1):
            offsets.append(len(output))
            obj_bytes = f"{index} 0 obj\n{content}\nendobj\n".encode('latin-1')
            output.extend(obj_bytes)
        xref_position = len(output)
        total_objects = len(self.objects) + 1
        xref = [f"xref\n0 {total_objects}\n", "0000000000 65535 f \n"]
        for offset in offsets:
            xref.append(f"{offset:010} 00000 n \n")
        trailer = (
            f"trailer\n<< /Size {total_objects} /Root {catalog_id} 0 R /Info {info_id} 0 R >>\n"
            f"startxref\n{xref_position}\n%%EOF"
        )
        output.extend(''.join(xref).encode('latin-1'))
        output.extend(trailer.encode('latin-1'))

        with open(output_path, 'wb') as pdf_file:
            pdf_file.write(output)


# --- Layout helpers -------------------------------------------------------

PRIMARY_DARK = hex_to_rgb('#0F172A')
PRIMARY_STEEL = hex_to_rgb('#1E293B')
PRIMARY_LIGHT = hex_to_rgb('#F8FAFC')
ACCENT_BLUE = hex_to_rgb('#38BDF8')
ACCENT_ORANGE = hex_to_rgb('#F97316')
ACCENT_GOLD = hex_to_rgb('#FCD34D')
ACCENT_GREEN = hex_to_rgb('#34D399')
ACCENT_SAND = hex_to_rgb('#F5E9DD')


def cover_page() -> PageBuilder:
    page = PageBuilder()
    page.fill_rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, PRIMARY_DARK)
    page.fill_rect(MARGIN, MARGIN, PAGE_WIDTH - 2 * MARGIN, PAGE_HEIGHT - 2 * MARGIN, PRIMARY_STEEL)
    page.fill_rect(MARGIN + 12, PAGE_HEIGHT - 180, 96, 96, ACCENT_BLUE)
    page.text(MARGIN + 130, PAGE_HEIGHT - 110, 28, 'Studio Minimal', font='F2', color=PRIMARY_LIGHT)
    page.text(MARGIN + 130, PAGE_HEIGHT - 150, 16, 'Design produit & experience', color=PRIMARY_LIGHT)
    page.paragraph(MARGIN + 130, PAGE_HEIGHT - 190, 11, 'Design systems, interfaces et experiences creatives pour les equipes ambitieuses.', color=PRIMARY_LIGHT, max_chars=70)
    page.paragraph(MARGIN + 130, PAGE_HEIGHT - 240, 11, 'hello@studiominimal.co | +33 6 12 34 56 78 | Paris & remote-first', color=PRIMARY_LIGHT, max_chars=70)
    page.fill_rect(PAGE_WIDTH - MARGIN - 160, MARGIN + 80, 140, 34, ACCENT_BLUE)
    page.text(PAGE_WIDTH - MARGIN - 140, MARGIN + 100, 11, 'Telecharger le portfolio', color=PRIMARY_STEEL, font='F2')
    page.text(MARGIN + 130, PAGE_HEIGHT - 310, 10, 'Monogramme SM - Gradient nuit acier', color=PRIMARY_LIGHT)
    return page


def presentation_page() -> PageBuilder:
    page = PageBuilder()
    page.fill_rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, PRIMARY_LIGHT)
    page.text(MARGIN, PAGE_HEIGHT - MARGIN - 20, 20, 'Presentation', font='F2', color=PRIMARY_DARK)
    intro = (
        'Nous aidons les SaaS, marques lifestyle et equipes internes a transformer des visions en experiences tangibles. '
        'Nous travaillons sur des cycles courts avec une obsession pour la clarte et les resultats mesurables.'
    )
    page.paragraph(MARGIN, PAGE_HEIGHT - MARGIN - 60, 12, intro, color=PRIMARY_STEEL, max_chars=80)
    bullets = [
        '12 ans dexperience en design produit, strategie brand et prototypage',
        'Methode synthese -> maquette -> test sur 2 semaines',
        'Equipe noyau : product designer, brand strategist, creative developer',
        'Reseau partenaire : motion, 3D, copywriting, recherche utilisateur',
    ]
    page.bullet_list(MARGIN, PAGE_HEIGHT - MARGIN - 140, 11, bullets, color=PRIMARY_DARK, max_chars=70)
    page.fill_rect(PAGE_WIDTH - MARGIN - 160, PAGE_HEIGHT - MARGIN - 200, 140, 140, ACCENT_BLUE)
    page.text(PAGE_WIDTH - MARGIN - 140, PAGE_HEIGHT - MARGIN - 120, 11, 'Cycle 14 jours', color=PRIMARY_LIGHT, font='F2')
    page.text(PAGE_WIDTH - MARGIN - 150, PAGE_HEIGHT - MARGIN - 150, 10, 'Brief > Prototype > Test > Launch', color=PRIMARY_LIGHT)
    return page


def aurora_page() -> PageBuilder:
    page = PageBuilder()
    page.fill_rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, PRIMARY_LIGHT)
    page.text(MARGIN, PAGE_HEIGHT - MARGIN - 20, 18, 'Aurora Analytics — Suite data B2B', font='F2', color=PRIMARY_DARK)
    summary = [
        'Contexte : repositionner un outil daide a la decision sur le segment mid-market',
        'Defi : clarifier la hierarchie des dashboards et reduire de 40% le temps onboarding',
        'Livrables : audit UX, design system, maquettes haute fidelite, prototypage Figma',
        'Impact : +28% adoption sur les comptes pilotes, NPS de 21 a 43',
    ]
    page.bullet_list(MARGIN, PAGE_HEIGHT - MARGIN - 80, 10.5, summary, color=PRIMARY_STEEL, max_chars=80)
    visual_y = PAGE_HEIGHT - MARGIN - 320
    page.fill_rect(MARGIN, visual_y, PAGE_WIDTH - 2 * MARGIN, 180, PRIMARY_STEEL)
    page.fill_rect(MARGIN + 16, visual_y + 120, 180, 48, ACCENT_BLUE)
    page.fill_rect(MARGIN + 220, visual_y + 40, 220, 120, hex_to_rgb('#E0F2FE'))
    page.fill_rect(MARGIN + 460, visual_y + 40, 180, 120, hex_to_rgb('#FFE4E6'))
    page.text(MARGIN + 28, visual_y + 140, 10, 'Aurora Data Lab', color=PRIMARY_LIGHT, font='F2')
    page.text(MARGIN + 236, visual_y + 140, 9, '+28% conversion', color=PRIMARY_STEEL)
    page.text(MARGIN + 476, visual_y + 140, 9, '58 clients actifs', color=PRIMARY_STEEL)
    page.palette(MARGIN, visual_y - 40, 18, ['#0F172A', '#1E293B', '#38BDF8', '#F8FAFC'])
    page.text(MARGIN + 96, visual_y - 60, 9, 'Typo : Helvetica Neue / IBM Plex Sans', color=PRIMARY_STEEL)
    return page


def lumen_page() -> PageBuilder:
    page = PageBuilder()
    page.fill_rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, hex_to_rgb('#FEF9E7'))
    page.text(MARGIN, PAGE_HEIGHT - MARGIN - 20, 18, 'Lumen — Application bien-etre', font='F2', color=hex_to_rgb('#F97316'))
    summary = [
        'Contexte : startup sante lancant une offre hybride coaching et application',
        'Defi : creer une identite solaire minimaliste et une experience mobile apaisante',
        'Livrables : identite visuelle, design UI mobile, motion guidelines, pack marketing',
        'Impact : +36% retention semaine 4, 4.8 etoiles sur stores apres lancement',
    ]
    page.bullet_list(MARGIN, PAGE_HEIGHT - MARGIN - 80, 10.5, summary, color=hex_to_rgb('#92400E'), max_chars=76)
    visual_y = PAGE_HEIGHT - MARGIN - 340
    page.fill_rect(MARGIN, visual_y, PAGE_WIDTH - 2 * MARGIN, 200, hex_to_rgb('#FFFFFF'))
    page.fill_rect(MARGIN + 16, visual_y + 40, 200, 120, ACCENT_GREEN)
    page.fill_rect(MARGIN + 240, visual_y + 40, 200, 120, ACCENT_ORANGE)
    page.text(MARGIN + 40, visual_y + 150, 12, 'LUMEN', font='F2', color=hex_to_rgb('#0F172A'))
    page.text(MARGIN + 260, visual_y + 150, 10, 'Routine respiration 4-7-8', color=hex_to_rgb('#0F172A'))
    page.palette(MARGIN, visual_y - 40, 18, ['#FEF3C7', '#F97316', '#34D399', '#111827'])
    page.text(MARGIN + 96, visual_y - 60, 9, 'Typos : Futura / SF Pro', color=hex_to_rgb('#0F172A'))
    return page


def nordic_page() -> PageBuilder:
    page = PageBuilder()
    page.fill_rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, hex_to_rgb('#E2E8F0'))
    page.text(MARGIN, PAGE_HEIGHT - MARGIN - 20, 18, 'Nordic Estate — Plateforme dinvestissement', font='F2', color=PRIMARY_DARK)
    summary = [
        'Contexte : fonds scandinave digitalisant son parcours dinvestissement',
        'Defi : valoriser larchitecture durable et fluidifier le parcours de decision',
        'Livrables : brandbook, maquettes desktop, prototype immersif WebXR, guidelines CRM',
        'Impact : +62% temps passe sur visites virtuelles, closing reduit de 3 semaines',
    ]
    page.bullet_list(MARGIN, PAGE_HEIGHT - MARGIN - 80, 10.5, summary, color=PRIMARY_STEEL, max_chars=78)
    visual_y = PAGE_HEIGHT - MARGIN - 320
    page.fill_rect(MARGIN, visual_y, PAGE_WIDTH - 2 * MARGIN, 190, hex_to_rgb('#FFFFFF'))
    page.fill_rect(MARGIN + 16, visual_y + 40, 160, 110, hex_to_rgb('#0EA5E9'))
    page.fill_rect(MARGIN + 200, visual_y + 40, 200, 110, PRIMARY_STEEL)
    page.fill_rect(MARGIN + 420, visual_y + 40, 160, 110, hex_to_rgb('#0F172A'))
    page.text(MARGIN + 36, visual_y + 140, 10, 'NE', font='F2', color=PRIMARY_LIGHT)
    page.text(MARGIN + 216, visual_y + 140, 9, 'Visites immersives', color=PRIMARY_LIGHT)
    page.palette(MARGIN, visual_y - 40, 18, ['#0F172A', '#1E293B', '#0EA5E9', '#E2E8F0'])
    page.text(MARGIN + 96, visual_y - 60, 9, 'Typos : Avenir Next / Neue Haas Grotesk', color=PRIMARY_DARK)
    return page


def velvet_page() -> PageBuilder:
    page = PageBuilder()
    page.fill_rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, ACCENT_SAND)
    page.text(MARGIN, PAGE_HEIGHT - MARGIN - 20, 18, 'Velvet Brew — Marque cafe premium', font='F2', color=hex_to_rgb('#3C1F0E'))
    summary = [
        'Contexte : torrefacteur independant avec offre ecommerce internationale',
        'Defi : exprimer un univers sensoriel sophistique sans surcharger linterface',
        'Livrables : direction artistique, templates ecommerce, packshot 3D, kits newsletter',
        'Impact : panier moyen +22%, communaute abonnes x3.5 en six mois',
    ]
    page.bullet_list(MARGIN, PAGE_HEIGHT - MARGIN - 80, 10.5, summary, color=hex_to_rgb('#5B341A'), max_chars=76)
    visual_y = PAGE_HEIGHT - MARGIN - 340
    page.fill_rect(MARGIN, visual_y, PAGE_WIDTH - 2 * MARGIN, 200, hex_to_rgb('#FFFFFF'))
    page.fill_rect(MARGIN + 16, visual_y + 40, 200, 120, hex_to_rgb('#3C1F0E'))
    page.fill_rect(MARGIN + 240, visual_y + 40, 200, 120, ACCENT_GOLD)
    page.text(MARGIN + 36, visual_y + 140, 11, 'VELVET', font='F2', color=ACCENT_GOLD)
    page.text(MARGIN + 256, visual_y + 140, 10, 'Abonnement espresso', color=hex_to_rgb('#3C1F0E'))
    page.palette(MARGIN, visual_y - 40, 18, ['#3C1F0E', '#D97706', '#FCD34D', '#F5E9DD'])
    page.text(MARGIN + 96, visual_y - 60, 9, 'Typos : Playfair Display / Helvetica Neue', color=hex_to_rgb('#3C1F0E'))
    return page


def pricing_contact_page() -> PageBuilder:
    page = PageBuilder()
    page.fill_rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, PRIMARY_LIGHT)
    page.text(MARGIN, PAGE_HEIGHT - MARGIN - 20, 18, 'Offre tarifaire', font='F2', color=PRIMARY_DARK)
    table_header_y = PAGE_HEIGHT - MARGIN - 70
    header_bg = hex_to_rgb('#CBD5F5')
    page.fill_rect(MARGIN, table_header_y - 24, PAGE_WIDTH - 2 * MARGIN, 28, header_bg)
    page.text(MARGIN + 12, table_header_y - 8, 10, 'Pack / Positionnement / Inclus / Investissement', font='F2', color=PRIMARY_DARK)
    rows = [
        (
            'Essential Sprint',
            'Lancement fonctionnalite ou mini-brand',
            '2 ateliers, 1 sprint design, 1 iteration UI, livrables Figma + librairie composants',
            '4 200 EUR HT',
        ),
        (
            'Product Scale',
            'Produit SaaS ou service digital en croissance',
            'Recherche mixte, roadmap UX, design system complet, prototypes interactifs, kit marketing',
            '7 800 EUR HT',
        ),
        (
            'Signature Lab',
            'Refonte globale ou lancement premium',
            'Direction creative, prototypage multi-supports, motion et son, accompagnement go-to-market',
            '11 500 EUR HT',
        ),
    ]
    row_height = 78
    start_y = table_header_y - 50
    for idx, (name, position, include, price) in enumerate(rows):
        row_y = start_y - idx * row_height
        page.fill_rect(MARGIN, row_y - 6, PAGE_WIDTH - 2 * MARGIN, row_height - 12, hex_to_rgb('#FFFFFF'))
        page.text(MARGIN + 12, row_y + row_height - 36, 12, name, font='F2', color=PRIMARY_STEEL)
        page.paragraph(MARGIN + 12, row_y + row_height - 56, 10, position, color=PRIMARY_DARK, max_chars=70)
        page.paragraph(MARGIN + 12, row_y + row_height - 82, 9, include, color=PRIMARY_STEEL, max_chars=90)
        page.text(PAGE_WIDTH - MARGIN - 120, row_y + row_height - 36, 11, price, font='F2', color=ACCENT_BLUE)
    page.paragraph(MARGIN, start_y - row_height * len(rows) - 10, 10, 'Chaque pack inclut un suivi de 30 jours et des ateliers dappropriation pour les equipes.', color=PRIMARY_STEEL, max_chars=90)
    contact_y = MARGIN + 160
    page.text(MARGIN, contact_y + 160, 18, 'Contact & prochaines etapes', font='F2', color=PRIMARY_DARK)
    steps = [
        'Prise de brief 30 min pour cadrer objectifs et indicateurs',
        'Atelier dalignement avec les equipes produit, marketing, direction',
        'Prototype narratif livre sous 10 jours ouvres',
        'Coaching de lancement : scripts, guidelines, kit media',
    ]
    page.bullet_list(MARGIN, contact_y + 120, 10.5, steps, color=PRIMARY_STEEL, max_chars=80)
    page.text(MARGIN, contact_y + 20, 10, 'Contact : hello@studiominimal.co | calendly.com/studiominimal/30min | Behance @studiominimal | LinkedIn /studio-minimal', color=PRIMARY_DARK)
    return page


def build_portfolio_pdf(output_path: str) -> None:
    pdf = PDFBuilder()
    for builder in [
        cover_page(),
        presentation_page(),
        aurora_page(),
        lumen_page(),
        nordic_page(),
        velvet_page(),
        pricing_contact_page(),
    ]:
        pdf.add_page(builder)
    pdf.build(output_path)


if __name__ == '__main__':
    target = os.path.join(os.path.dirname(__file__), 'portfolio.pdf')
    build_portfolio_pdf(target)
    print(f'Portfolio PDF generated at {target}')
