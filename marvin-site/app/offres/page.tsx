import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, Star, ArrowRight, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nos offres de création de site web - Tarifs transparents',
  description: 'Découvrez nos 3 formules de création de site web : Starter (1490€), Business (2990€), Premium (5490€). Livraison en 4 jours, maquette en 24h.',
  alternates: {
    canonical: 'https://marvin.createurweb.com/offres'
  }
}

const packages = [
  {
    name: "Starter",
    price: "1490",
    originalPrice: "1990",
    description: "Parfait pour se lancer rapidement",
    popular: false,
    features: [
      "Site vitrine 5 pages",
      "Design moderne et responsive", 
      "Optimisation SEO de base",
      "Formulaire de contact",
      "Galerie photos (20 photos max)",
      "Google Maps intégré",
      "Certificat SSL inclus",
      "Hébergement 1 an offert",
      "1 mois de maintenance offerte",
      "Formation utilisation (1h)",
      "Livraison en 4 jours max"
    ],
    deliverables: [
      "Maquette en 24h",
      "3 concepts au choix",
      "Révisions illimitées",
      "Fichiers sources inclus",
      "Guide d'utilisation"
    ]
  },
  {
    name: "Business", 
    price: "2990",
    originalPrice: "3990",
    description: "Le plus choisi - Solution complète",
    popular: true,
    features: [
      "Site jusqu'à 15 pages",
      "Système de réservation en ligne",
      "Galerie photos illimitée",
      "Blog intégré",
      "SEO local optimisé", 
      "Google Business Profile",
      "Formulaires avancés",
      "Analytics & statistiques",
      "Certificat SSL premium",
      "Hébergement 1 an offert",
      "3 mois de maintenance offerte",
      "Formation approfondie (2h)",
      "Support prioritaire",
      "Livraison en 4 jours max"
    ],
    deliverables: [
      "Maquette en 24h",
      "3 concepts au choix", 
      "Révisions illimitées",
      "Logo personnalisé inclus",
      "Cartes de visite design",
      "Kit réseaux sociaux",
      "Fichiers sources inclus"
    ]
  },
  {
    name: "Premium",
    price: "5490", 
    originalPrice: "6990",
    description: "Solution sur mesure haut de gamme",
    popular: false,
    features: [
      "Site illimité + blog professionnel",
      "E-commerce intégré (50 produits)",
      "Système de gestion client (CRM)",
      "Réservation + paiement en ligne",
      "Multi-langues (FR/EN)",
      "SEO avancé + audit concurrence",
      "Intégrations API personnalisées",
      "Espace client sécurisé",
      "Newsletter automatisée", 
      "Certificat SSL premium",
      "Hébergement 2 ans offert",
      "6 mois de maintenance offerte",
      "Formation complète (4h)",
      "Support VIP 24/7",
      "Livraison en 4 jours max"
    ],
    deliverables: [
      "Maquette en 24h",
      "5 concepts au choix",
      "Révisions illimitées",
      "Identité visuelle complète",
      "Charte graphique",
      "Kit marketing complet",
      "Photos pro retouchées (10)",
      "Stratégie digitale incluse"
    ]
  }
]

export default function OffresPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-gray-50 section-padding pt-32">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos offres de création de site web
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Trois formules adaptées à tous les budgets. 
            <strong>Livraison garantie en 4 jours</strong> avec maquette en 24h. 
            Choisissez celle qui correspond à vos besoins.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>Maquette en 24h garantie</span>
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>Révisions illimitées</span>
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>Satisfaction garantie</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={pkg.name}
                className={`relative bg-white rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  pkg.popular 
                    ? 'border-primary-500 shadow-xl scale-105' 
                    : 'border-gray-200 hover:border-primary-300'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      Le plus choisi
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-900">{pkg.price}€</span>
                      <span className="text-gray-500 ml-2">/site</span>
                    </div>
                    <div className="flex items-center justify-center mt-1">
                      <span className="text-gray-400 line-through text-lg">{pkg.originalPrice}€</span>
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-semibold ml-2">
                        -{Math.round(((parseInt(pkg.originalPrice) - parseInt(pkg.price)) / parseInt(pkg.originalPrice)) * 100)}%
                      </span>
                    </div>
                  </div>

                  <Link 
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      pkg.popular
                        ? 'bg-primary-600 hover:bg-primary-700 text-white hover:scale-105'
                        : 'bg-gray-900 hover:bg-gray-800 text-white hover:scale-105'
                    }`}
                  >
                    Commander maintenant
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-primary-500" />
                      Inclus dans cette offre
                    </h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-3">Livrables garantis</h4>
                    <ul className="space-y-2">
                      {pkg.deliverables.map((deliverable, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <Check className="w-4 h-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
            <p className="text-lg text-gray-600">Tout ce que vous devez savoir avant de commander</p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Vraiment livré en 4 jours ?
              </h3>
              <p className="text-gray-600">
                Oui, c'est notre engagement. Maquette en 24h, puis développement et livraison en maximum 4 jours ouvrés. 
                Si on dépasse, vous recevez 200€ de remise.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Combien de révisions sont incluses ?
              </h3>
              <p className="text-gray-600">
                Révisions illimitées jusqu'à votre satisfaction complète. 
                L'objectif est que vous soyez 100% satisfait de votre site avant la livraison finale.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Qui possède le site et les fichiers ?
              </h3>
              <p className="text-gray-600">
                Vous êtes propriétaire à 100% de votre site web et de tous les fichiers sources. 
                Aucune dépendance, vous pouvez partir quand vous voulez.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Comment se passe le paiement ?
              </h3>
              <p className="text-gray-600">
                50% à la commande pour lancer le projet, 50% à la livraison. 
                Paiement sécurisé par virement ou CB. Aucun frais caché.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Que se passe-t-il après la maintenance offerte ?
              </h3>
              <p className="text-gray-600">
                Vous pouvez continuer avec notre service de maintenance (99€/mois) ou gérer vous-même. 
                Formation complète incluse pour votre autonomie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à commander votre site ?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Rejoignez les +50 entreprises qui font confiance à Marvin Créateur Web. 
            Premier rendez-vous gratuit pour définir vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center transition-all duration-200 hover:scale-105">
              Commander maintenant
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href="tel:0770061075"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center transition-all duration-200"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </>
  )
}