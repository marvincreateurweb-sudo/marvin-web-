import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  CheckCircle, 
  Clock, 
  MessageCircle, 
  Palette, 
  Code, 
  Rocket,
  ArrowRight,
  Star
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Notre processus de création - Comment nous travaillons',
  description: 'Découvrez notre processus en 3 étapes : brief rapide, 3 concepts en 24h, livraison en 4 jours max. Transparent, rapide, efficace.',
  alternates: {
    canonical: 'https://marvin.createurweb.com/processus'
  }
}

const steps = [
  {
    number: "01",
    title: "Vous commandez & briefez",
    duration: "5 minutes",
    description: "Remplissez notre brief détaillé en ligne. Décrivez votre entreprise, vos goûts, vos objectifs.",
    details: [
      "Formulaire de brief complet",
      "Analyse de vos besoins",
      "Définition des objectifs", 
      "Choix du package adapté",
      "Planning de livraison confirmé"
    ],
    icon: MessageCircle,
    color: "bg-blue-500"
  },
  {
    number: "02", 
    title: "Vous recevez 3 concepts",
    duration: "24h maximum",
    description: "Notre équipe créative vous propose 3 directions artistiques différentes. Vous choisissez celle qui vous plaît.",
    details: [
      "3 maquettes complètes différentes",
      "Présentation détaillée de chaque concept",
      "Explications des choix créatifs",
      "Vous choisissez votre préférée",
      "Révisions illimitées incluses"
    ],
    icon: Palette,
    color: "bg-purple-500"
  },
  {
    number: "03",
    title: "Vous recevez votre site",
    duration: "4 jours maximum", 
    description: "Développement, révisions illimitées jusqu'à satisfaction complète, puis livraison avec formation.",
    details: [
      "Développement du site complet",
      "Tests sur tous les appareils", 
      "Révisions jusqu'à satisfaction",
      "Formation utilisation (1-2h)",
      "Livraison avec fichiers sources"
    ],
    icon: Rocket,
    color: "bg-green-500"
  }
]

const guarantees = [
  {
    icon: Clock,
    title: "Délais garantis",
    description: "Maquette en 24h, site livré en 4 jours maximum ou 200€ de remise."
  },
  {
    icon: Star,
    title: "Révisions illimitées", 
    description: "Nous travaillons jusqu'à votre satisfaction complète, sans limite."
  },
  {
    icon: CheckCircle,
    title: "Satisfaction garantie",
    description: "Si vous n'êtes pas satisfait, nous remboursons intégralement."
  }
]

export default function ProcessusPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-gray-50 section-padding pt-32">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Notre processus de création
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Un processus rodé en 3 étapes simples. Transparent, rapide et efficace. 
            <strong>Votre site livré cette semaine</strong>, sans surprise ni retard.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              <span>Process éprouvé +50 fois</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 text-blue-500 mr-2" />
              <span>Délais toujours respectés</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-orange-500 mr-2" />
              <span>100% clients satisfaits</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-32 bg-gray-200 hidden md:block"></div>
                )}
                
                <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
                  {/* Step Icon & Number */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 ${step.color} text-white rounded-full flex items-center justify-center mb-4`}>
                      <step.icon className="w-8 h-8" />
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-300">{step.number}</div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {step.duration}
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">Ce qui est inclus :</h4>
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start text-gray-600">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos garanties
            </h2>
            <p className="text-lg text-gray-600">
              Votre tranquillité d'esprit est notre priorité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <guarantee.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {guarantee.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {guarantee.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Planning type d'un projet
            </h2>
            <p className="text-lg text-gray-600">
              Exemple concret avec un restaurant (formule Business)
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-primary-50 to-purple-50 p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Lundi 9h00</h4>
                    <p className="text-gray-600">Commande & brief reçu</p>
                  </div>
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    Jour J
                  </div>
                </div>

                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Mardi 14h00</h4>
                    <p className="text-gray-600">3 maquettes envoyées (22h après)</p>
                  </div>
                  <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                    J+1
                  </div>
                </div>

                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Mercredi 10h00</h4>
                    <p className="text-gray-600">Choix validé + développement</p>
                  </div>
                  <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                    J+2
                  </div>
                </div>

                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Jeudi 16h00</h4>
                    <p className="text-gray-600">1ère version + révisions</p>
                  </div>
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                    J+3
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">Vendredi 11h00</h4>
                    <p className="text-gray-600">Livraison + formation (3j 2h après)</p>
                  </div>
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                    Livré !
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                <strong>Résultat :</strong> Site livré en 3 jours et 2 heures (au lieu des 4 jours maximum promis)
              </p>
              <div className="flex items-center justify-center text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>Délai respecté • Client satisfait • Objectif atteint</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions fréquentes sur notre processus</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Que se passe-t-il si je n'aime aucun des 3 concepts ?
              </h3>
              <p className="text-gray-600">
                C'est très rare, mais ça peut arriver ! Dans ce cas, on reprend le brief ensemble 
                pour mieux comprendre vos attentes, et on vous propose 3 nouveaux concepts sans frais supplémentaires.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Combien de révisions puis-je demander ?
              </h3>
              <p className="text-gray-600">
                Autant que nécessaire ! Notre objectif est votre satisfaction à 100%. 
                Nous n'avons jamais eu de client qui abuse de cette garantie.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Puis-je voir des exemples de maquettes avant de commander ?
              </h3>
              <p className="text-gray-600">
                Consultez notre portfolio dans la section "Projets réalisés". 
                Chaque projet montre notre processus et nos résultats concrets.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Que se passe-t-il si vous dépassez les 4 jours ?
              </h3>
              <p className="text-gray-600">
                Si c'est de notre faute (pas de révisions client), vous recevez automatiquement 
                200€ de remise. Cela nous est arrivé 2 fois en 50 projets.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Comment se passe la formation à la livraison ?
              </h3>
              <p className="text-gray-600">
                Séance de 1-2h en visioconférence où je vous montre comment modifier vos contenus, 
                ajouter des photos, gérer vos réservations, etc. + guide écrit fourni.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Convaincu par notre processus ?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Plus de 50 entrepreneurs ont fait confiance à notre méthode éprouvée. 
            À votre tour de rejoindre nos clients satisfaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center transition-all duration-200 hover:scale-105">
              Démarrer mon projet
              <ArrowRight className="ml-2 w-5 h-5" />
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