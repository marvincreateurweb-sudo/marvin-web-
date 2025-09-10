"""
Script pour initialiser la base de données avec les données du portfolio
"""
import asyncio
import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
from pathlib import Path

# Load environment variables
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Data from mock.js converted to Python
PORTFOLIO_DATA = {
    "personal": {
        "name": "Marvin Lacroix",
        "title": "Développeur Web & Expert en Outils Informatiques",
        "location": "Embrun, France",
        "email": "marvin.createurweb@gmail.com",
        "phone": "07 70 06 10 75",
        "tagline": "Créateur de sites web modernes avec les outils informatiques avancés",
        "description": "Spécialisé dans la création de sites web pour entreprises locales en combinant l'efficacité des outils informatiques modernes avec une personnalisation humaine sur mesure."
    },
    
    "services": {
        "headline": "Ma méthode unique : Outils informatiques + Personnalisation humaine",
        "benefits": [
            {
                "icon": "Zap",
                "title": "Rapidité exceptionnelle",
                "description": "Développement accéléré grâce aux outils informatiques modernes, livraison en 5-10 jours"
            },
            {
                "icon": "Palette",
                "title": "Design moderne",
                "description": "Interfaces élégantes et responsives adaptées à votre secteur"
            },
            {
                "icon": "Search",
                "title": "SEO local optimisé",
                "description": "Référencement local pour attirer vos clients de proximité"
            },
            {
                "icon": "Smartphone",
                "title": "Mobile-first",
                "description": "Sites parfaitement adaptés aux smartphones et tablettes"
            }
        ]
    },
    
    "projects": [
        {
            "id": 1,
            "name": "Le Bistro des Alpes",
            "type": "Restaurant bistronomique",
            "description": "Site vitrine élégant avec système de réservation en ligne pour ce restaurant gastronomique d'Embrun.",
            "objectives": "Augmenter les réservations de 40% et améliorer la visibilité locale",
            "features": [
                "Galerie photos des plats",
                "Réservation en ligne",
                "Menu interactif",
                "Avis clients",
                "Géolocalisation"
            ],
            "colors": ["#2C3E50", "#E74C3C", "#F39C12"],
            "typography": "Playfair Display + Open Sans",
            "image": "https://images.unsplash.com/photo-1481487196290-c152efe083f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwbW9ja3VwfGVufDB8fHx8MTc1NzQ2MDQzNnww&ixlib=rb-4.1.0&q=85",
            "results": "+45% de réservations, +60% de visibilité locale"
        },
        {
            "id": 2,
            "name": "Brasserie du Centre",
            "type": "Bar & Brasserie",
            "description": "Plateforme dynamique pour promouvoir les événements, le plat du jour et l'ambiance conviviale de cette brasserie emblématique.",
            "objectives": "Dynamiser la communication événementielle et fidéliser la clientèle",
            "features": [
                "Plat du jour automatisé",
                "Calendrier événements",
                "Carte des boissons",
                "Réservation groupes",
                "Newsletter"
            ],
            "colors": ["#8B4513", "#DAA520", "#228B22"],
            "typography": "Montserrat + Lato",
            "image": "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHx3ZWJzaXRlJTIwbW9ja3VwfGVufDB8fHx8MTc1NzQ2MDQzNnww&ixlib=rb-4.1.0&q=85",
            "results": "+30% de participation aux événements"
        },
        {
            "id": 3,
            "name": "Saveurs & Événements",
            "type": "Traiteur événementiel",
            "description": "Solution complète avec catalogue interactif et système de devis automatisé pour ce traiteur spécialisé dans les événements d'entreprise.",
            "objectives": "Automatiser les devis et présenter l'offre de manière attractive",
            "features": [
                "Catalogue produits",
                "Devis en ligne",
                "Galerie événements",
                "Formulaire contact",
                "Témoignages clients"
            ],
            "colors": ["#E91E63", "#FF9800", "#4CAF50"],
            "typography": "Roboto + Georgia",
            "image": "https://images.unsplash.com/photo-1659354217586-c5931b31e4c6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxjYXRlcmluZyUyMHdlYnNpdGV8ZW58MHx8fHwxNzU3NDYwNDQxfDA&ixlib=rb-4.1.0&q=85",
            "results": "+50% de demandes de devis qualifiées"
        },
        {
            "id": 4,
            "name": "Artisan Bois Alpin",
            "type": "Menuiserie artisanale",
            "description": "Showcase professionnel mettant en valeur le savoir-faire artisanal avec galerie avant/après et système de devis rapide.",
            "objectives": "Valoriser l'expertise artisanale et générer des leads qualifiés",
            "features": [
                "Portfolio avant/après",
                "Devis express",
                "Savoir-faire détaillé",
                "Zone d'intervention",
                "Certifications"
            ],
            "colors": ["#8D6E63", "#4CAF50", "#FF5722"],
            "typography": "Source Sans Pro + Crimson Text",
            "image": "https://images.unsplash.com/photo-1660796334938-cf0b03be7e6d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxjcmFmdHNtYW4lMjBidXNpbmVzc3xlbnwwfHx8fDE3NTc0NjA0NDd8MA&ixlib=rb-4.1.0&q=85",
            "results": "+70% de demandes de devis, +35% de chiffre d'affaires"
        }
    ],
    
    "pricing": {
        "packages": [
            {
                "name": "Starter",
                "price": "890",
                "description": "Parfait pour démarrer votre présence en ligne",
                "features": [
                    "Site vitrine 5 pages",
                    "Design responsive",
                    "Optimisation SEO de base",
                    "Formulaire de contact",
                    "1 mois de support",
                    "Hébergement 1 an inclus"
                ],
                "popular": False,
                "color": "#3B82F6"
            },
            {
                "name": "Business",
                "price": "2490",
                "description": "Solution complète pour développer votre activité",
                "features": [
                    "Site jusqu'à 15 pages",
                    "Système de réservation/devis",
                    "Galerie photos avancée",
                    "SEO local optimisé",
                    "Analytics & suivi",
                    "3 mois de support",
                    "Formation incluse",
                    "Hébergement 1 an inclus"
                ],
                "popular": True,
                "color": "#8B5CF6"
            },
            {
                "name": "Premium",
                "price": "4990",
                "description": "Plateforme sur mesure avec fonctionnalités avancées",
                "features": [
                    "Site illimité + blog",
                    "E-commerce intégré",
                    "Système de gestion client",
                    "Multi-langues",
                    "Intégrations API",
                    "SEO avancé + suivi",
                    "6 mois de support",
                    "Formation approfondie",
                    "Hébergement 2 ans inclus"
                ],
                "popular": False,
                "color": "#10B981"
            }
        ]
    },
    
    "testimonials": [
        {
            "name": "Sophie Martin",
            "business": "Restaurant Le Petit Gourmand",
            "text": "Marvin a transformé notre visibilité en ligne ! Le site est magnifique et nos réservations ont augmenté de 50% en 2 mois grâce à ses outils informatiques performants.",
            "rating": 5,
            "image": "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
        },
        {
            "name": "Pierre Dubois",
            "business": "Artisan Bois & Fer",
            "text": "Un travail professionnel et rapide. Le système de devis en ligne nous fait gagner un temps précieux !",
            "rating": 5,
            "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        },
        {
            "name": "Marie Rousseau",
            "business": "Traiteur Alpes Saveurs",
            "text": "Exactement ce dont nous avions besoin. Site élégant, facile à utiliser et qui nous apporte de nouveaux clients régulièrement.",
            "rating": 5,
            "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
        }
    ]
}

async def init_database():
    """Initialize database with portfolio data"""
    try:
        print("🔄 Initializing database...")
        
        # Clear existing data
        await db.personal_info.delete_many({})
        await db.services.delete_many({})
        await db.projects.delete_many({})
        await db.pricing.delete_many({})
        await db.testimonials.delete_many({})
        
        print("🗑️  Cleared existing data")
        
        # Insert new data
        await db.personal_info.insert_one(PORTFOLIO_DATA["personal"])
        await db.services.insert_one(PORTFOLIO_DATA["services"])
        await db.projects.insert_many(PORTFOLIO_DATA["projects"])
        await db.pricing.insert_one(PORTFOLIO_DATA["pricing"])
        await db.testimonials.insert_many(PORTFOLIO_DATA["testimonials"])
        
        print("✅ Database initialized successfully!")
        print(f"   - Personal info: 1 document")
        print(f"   - Services: 1 document")
        print(f"   - Projects: {len(PORTFOLIO_DATA['projects'])} documents")
        print(f"   - Pricing: 1 document")
        print(f"   - Testimonials: {len(PORTFOLIO_DATA['testimonials'])} documents")
        
    except Exception as e:
        print(f"❌ Error initializing database: {e}")
    finally:
        client.close()

if __name__ == "__main__":
    asyncio.run(init_database())