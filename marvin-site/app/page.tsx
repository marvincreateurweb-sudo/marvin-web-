import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, 
  Clock, 
  Users, 
  Star, 
  Check, 
  Zap, 
  Shield,
  Award,
  ChevronRight
} from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-gray-50 section-padding pt-32">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="flex items-center bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 mr-1 fill-current" />
                <span>+50 projets livrés</span>
              </div>
              <div className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                <Users className="w-4 h-4 mr-1" />
                <span>100% clients satisfaits</span>
              </div>
              <div className="flex items-center bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                <Award className="w-4 h-4 mr-1" />
                <span>Embrun & en ligne</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Votre site livré en{' '}
              <span className="text-gradient">4 jours</span>,<br />
              maquette en{' '}
              <span className="text-gradient">24h</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Plus de temps perdu avec des agences qui traînent. 
              Votre site web professionnel prêt cette semaine. 
              <strong>Spécialisé PME locales</strong> - restaurants, artisans, commerces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center">
                Commander maintenant
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a 
                href="tel:0770061075" 
                className="btn-secondary text-lg px-8 py-4 inline-flex items-center"
              >
                Réserver un appel
                <Clock className="ml-2 w-5 h-5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div className="flex items-center justify-center">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                <span>Maquette garantie 24h</span>
              </div>
              <div className="flex items-center justify-center">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                <span>Livraison en 4 jours max</span>
              </div>
              <div className="flex items-center justify-center">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                <span>Révisions illimitées</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="section-container">
          <div className="text-center">
            <p className="text-gray-500 mb-6">Ils nous font confiance :</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="text-lg font-semibold text-gray-400">Le Bistro des Alpes</div>
              <div className="text-lg font-semibold text-gray-400">Brasserie du Centre</div>
              <div className="text-lg font-semibold text-gray-400">Artisan Bois Alpin</div>
              <div className="text-lg font-semibold text-gray-400">Saveurs & Événements</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600">
              Un processus simple et transparent. Pas de surprise, que des résultats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Vous commandez</h3>
              <p className="text-gray-600">
                Remplissez le brief en 5 minutes. Décrivez votre entreprise, vos besoins, vos goûts. 
                On s'occupe du reste.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Vous recevez 3 concepts</h3>
              <p className="text-gray-600">
                <strong>En 24h maximum</strong>, vous recevez 3 maquettes différentes. 
                Vous choisissez celle qui vous plaît le plus.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Vous recevez votre site</h3>
              <p className="text-gray-600">
                Révisions illimitées jusqu'à satisfaction complète. 
                <strong>Livraison en 4 jours max</strong> avec formation incluse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pourquoi choisir Marvin Créateur Web ?
            </h2>
            <p className="text-xl text-gray-600">
              Parce que votre temps est précieux et que vous méritez un service à la hauteur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 card-hover">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Livraison ultra-rapide</h3>
              <p className="text-gray-600">
                Maquette en 24h, site complet en 4 jours. 
                Fini les projets qui s'éternisent pendant des mois.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 card-hover">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Garantie satisfaction</h3>
              <p className="text-gray-600">
                Révisions illimitées jusqu'à ce que vous soyez 100% satisfait. 
                Votre succès est notre priorité.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 card-hover">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Spécialiste PME locales</h3>
              <p className="text-gray-600">
                Je connais les besoins des restaurants, artisans, commerces. 
                Votre site sera adapté à votre clientèle.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 card-hover">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Expertise locale</h3>
              <p className="text-gray-600">
                Basé à Embrun, je comprends le marché local. 
                SEO optimisé pour les Hautes-Alpes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 card-hover">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Qualité premium</h3>
              <p className="text-gray-600">
                Sites modernes, rapides, sécurisés. 
                Même qualité qu'une grande agence, sans les délais.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 card-hover">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Service complet</h3>
              <p className="text-gray-600">
                Hébergement, maintenance, formation, support. 
                Tout inclus pour votre tranquillité d'esprit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à lancer votre site cette semaine ?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Rejoignez les +50 entreprises locales qui font confiance à Marvin Créateur Web. 
            Votre concurrent a peut-être déjà commencé...
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center transition-all duration-200 hover:scale-105">
              Commander maintenant
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/offres" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center transition-all duration-200">
              Voir les offres
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}