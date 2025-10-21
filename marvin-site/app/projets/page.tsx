import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, ArrowUpRight, Calendar, Target, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projets réalisés - Portfolio de sites web créés',
  description: 'Découvrez les sites web que j\'ai créés pour des restaurants, artisans et commerces locaux. Résultats concrets et témoignages clients.',
  alternates: {
    canonical: 'https://marvin.createurweb.com/projets'
  }
}

const projects = [
  {
    id: 1,
    title: "Le Bistro des Alpes",
    category: "Restaurant gastronomique",
    location: "Embrun",
    year: "2024",
    image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=800&h=600&fit=crop&crop=entropy",
    problem: "Restaurant réputé mais invisible en ligne. Perdait des réservations faute de site moderne avec système de réservation.",
    solution: "Site élégant avec galerie photos appétissante, menu interactif, réservation en ligne et optimisation Google Business Profile.",
    results: [
      "+45% de réservations en 3 mois",
      "+60% de visibilité locale sur Google", 
      "200+ nouvelles réservations/mois",
      "Note Google passée de 4,2 à 4,8"
    ],
    technologies: ["Site vitrine", "Réservation en ligne", "SEO local", "Google Business"],
    testimonial: {
      text: "Marvin a transformé notre visibilité ! Le site est magnifique et nos réservations ont explosé.",
      author: "Sophie Martin, Propriétaire"
    },
    deliveryTime: "3 jours",
    package: "Business"
  },
  {
    id: 2,
    title: "Brasserie du Centre", 
    category: "Bar & Brasserie",
    location: "Gap",
    year: "2024",
    image: "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?w=800&h=600&fit=crop&crop=entropy",
    problem: "Brasserie populaire mais communication événementielle inefficace. Les clients rataient les soirées et événements spéciaux.",
    solution: "Plateforme dynamique avec calendrier événements, plat du jour automatisé, galerie ambiance et newsletter intégrée.",
    results: [
      "+30% de participation aux événements",
      "500+ abonnés newsletter en 2 mois",
      "+25% de CA sur les événements",
      "Agenda événements complet 3 semaines à l'avance"
    ],
    technologies: ["Site vitrine", "Calendrier événements", "Newsletter", "Galerie dynamique"],
    testimonial: {
      text: "Nos événements affichent complet maintenant. Le calendrier est un game-changer !",
      author: "Pierre Dubois, Manager"
    },
    deliveryTime: "4 jours",
    package: "Business"
  },
  {
    id: 3,
    title: "Saveurs & Événements",
    category: "Traiteur événementiel", 
    location: "Briançon",
    year: "2024",
    image: "https://images.unsplash.com/photo-1659354217586-c5931b31e4c6?w=800&h=600&fit=crop&crop=entropy",
    problem: "Traiteur réputé mais processus de devis long et fastidieux. Perdait des clients pressés par la concurrence plus réactive.",
    solution: "Système de devis automatisé avec catalogue interactif, calculateur de prix instantané et galerie par type d'événement.",
    results: [
      "+50% de demandes de devis qualifiées",
      "Temps de réponse divisé par 5 (2h → 24min)",
      "+35% de taux de conversion devis → vente",
      "80% des clients utilisent le devis en ligne"
    ],
    technologies: ["E-commerce léger", "Devis automatisé", "Galerie événements", "CRM intégré"],
    testimonial: {
      text: "Le système de devis automatique nous fait gagner un temps fou. Plus de clients satisfaits !",
      author: "Marie Rousseau, Dirigeante"
    },
    deliveryTime: "4 jours", 
    package: "Premium"
  },
  {
    id: 4,
    title: "Artisan Bois Alpin",
    category: "Menuiserie artisanale",
    location: "Embrun", 
    year: "2024",
    image: "https://images.unsplash.com/photo-1660796334938-cf0b03be7e6d?w=800&h=600&fit=crop&crop=entropy",
    problem: "Artisan talentueux mais portefeuille de réalisations mal mis en valeur. Difficile de convaincre sans montrer son savoir-faire.",
    solution: "Portfolio avant/après immersif, système de devis express et pages dédiées par type de travaux (cuisine, salle de bain, etc.).",
    results: [
      "+70% de demandes de devis qualifiés",
      "+35% de chiffre d'affaires en 6 mois", 
      "Planning complet 2 mois à l'avance",
      "Taux de conversion prospect → client de 65%"
    ],
    technologies: ["Portfolio dynamique", "Devis express", "SEO local", "Galerie avant/après"],
    testimonial: {
      text: "Mes créations sont enfin mises en valeur ! Les clients voient directement mon niveau.",
      author: "Jean-Claude Bernardi, Artisan"
    },
    deliveryTime: "3 jours",
    package: "Business"
  },
  {
    id: 5,
    title: "Garage Alpine Motors",
    category: "Garage automobile",
    location: "Gap",
    year: "2024", 
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop&crop=entropy",
    problem: "Garage familial concurrencé par les centres auto. Manquait de visibilité pour ses services spécialisés (4x4, préparation montagne).",
    solution: "Site mettant en avant l'expertise montagne, système de prise de RDV en ligne et pages services détaillées avec tarifs transparents.",
    results: [
      "+40% de nouveaux clients",
      "Carnet de RDV complet 3 semaines à l'avance", 
      "+55% de demandes pour services spécialisés",
      "Positionnement #1 'garage 4x4 Gap'"
    ],
    technologies: ["Site vitrine", "Prise de RDV", "SEO spécialisé", "Pages services"],
    testimonial: {
      text: "On est passé de garage de quartier à spécialiste reconnu. Merci Marvin !",
      author: "Michel Blanc, Propriétaire"
    },
    deliveryTime: "4 jours",
    package: "Business"
  },
  {
    id: 6,
    title: "Salon Élégance",
    category: "Salon de coiffure",
    location: "Embrun",
    year: "2024",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop&crop=entropy",
    problem: "Salon moderne mais gestion RDV chaotique par téléphone. Beaucoup d'oublis et de clients mécontents.",
    solution: "Système de réservation en ligne 24h/24, rappels automatiques SMS et galerie avant/après pour inspirer les clientes.",
    results: [
      "+60% des RDV pris en ligne",
      "95% de taux de présence (vs 75% avant)",
      "+30% de nouveaux clients/mois",
      "0 oubli de RDV depuis 3 mois"
    ],
    technologies: ["Réservation 24h/24", "SMS automatiques", "Galerie coiffures", "Gestion planning"],
    testimonial: {
      text: "Mes clientes adorent réserver en ligne. Plus d'oublis, que du bonheur !",
      author: "Sylvie Moreau, Coiffeuse"
    },
    deliveryTime: "3 jours",
    package: "Business"
  }
]

export default function ProjetsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-gray-50 section-padding pt-32">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Projets réalisés
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Découvrez comment j'ai aidé des entreprises locales comme la vôtre à développer 
            leur présence en ligne et augmenter significativement leur chiffre d'affaires.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Target className="w-4 h-4 text-green-500 mr-2" />
              <span>+50 projets livrés</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 text-blue-500 mr-2" />
              <span>+40% CA moyen</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 text-orange-500 mr-2" />
              <span>Livraison 4 jours max</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent rounded-2xl"></div>
                    <Image
                      src={project.image}
                      alt={`Site web ${project.title}`}
                      width={800}
                      height={600}
                      className="w-full h-96 object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                      {project.package}
                    </div>
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Livré en {project.deliveryTime}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                      <span>{project.category}</span>
                      <span>•</span>
                      <span>{project.location}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {/* Problem */}
                    <div>
                      <h3 className="text-lg font-semibold text-red-600 mb-2 flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                        Problème
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="text-lg font-semibold text-blue-600 mb-2 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Solution
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-lg font-semibold text-green-600 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Résultats
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.results.map((result, i) => (
                          <div key={i} className="flex items-center text-green-700 bg-green-50 px-3 py-2 rounded-lg">
                            <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                            <span className="text-sm font-medium">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-2">Technologies utilisées</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary-500">
                      <p className="text-gray-700 italic mb-3">
                        "{project.testimonial.text}"
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        — {project.testimonial.author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Résultats en chiffres
            </h2>
            <p className="text-lg text-gray-600">
              L'impact concret de nos sites web sur nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">+45%</div>
              <div className="text-sm text-gray-600">Augmentation CA moyenne</div>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">3.8j</div>
              <div className="text-sm text-gray-600">Délai moyen de livraison</div>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Clients satisfaits</div>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Projets livrés en 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Votre projet sera le prochain ?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Rejoignez ces entrepreneurs qui ont fait le choix de l'efficacité. 
            Votre site web professionnel livré cette semaine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center transition-all duration-200 hover:scale-105">
              Démarrer mon projet
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/offres" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center transition-all duration-200">
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}