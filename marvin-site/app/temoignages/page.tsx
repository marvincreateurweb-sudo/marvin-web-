import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, Quote, ArrowRight, TrendingUp, Users, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Témoignages clients - Avis sur nos créations de sites web',
  description: 'Découvrez les témoignages de nos clients satisfaits : restaurants, artisans, commerces qui ont fait confiance à Marvin Créateur Web pour leur site internet.',
  alternates: {
    canonical: 'https://marvin.createurweb.com/temoignages'
  }
}

const testimonials = [
  {
    id: 1,
    name: "Sophie Martin",
    business: "Restaurant Le Petit Gourmand",
    location: "Embrun",
    rating: 5,
    text: "Marvin a complètement transformé notre visibilité ! Le site est magnifique, les réservations en ligne fonctionnent parfaitement. Nos réservations ont augmenté de 50% en seulement 2 mois. Je recommande les yeux fermés !",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    project: "Site vitrine + réservation en ligne",
    package: "Business",
    results: ["+50% de réservations", "+30% de nouveaux clients", "Planning complet 3 semaines à l'avance"],
    date: "Décembre 2024"
  },
  {
    id: 2,
    name: "Pierre Dubois", 
    business: "Artisan Bois & Fer",
    location: "Gap",
    rating: 5,
    text: "Un travail professionnel et rapide ! Le système de devis en ligne nous fait gagner un temps précieux. Mes clients voient directement mes réalisations et la qualité de mon travail. Le ROI a été immédiat.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", 
    project: "Portfolio + devis express",
    package: "Business",
    results: ["+70% de demandes de devis", "+35% de CA en 6 mois", "Carnet de commandes plein"],
    date: "Novembre 2024"
  },
  {
    id: 3,
    name: "Marie Rousseau",
    business: "Traiteur Alpes Saveurs", 
    location: "Briançon",
    rating: 5,
    text: "Exactement ce dont nous avions besoin ! Site élégant, facile à utiliser et qui nous apporte de nouveaux clients régulièrement. Le système de devis automatique est un game-changer pour notre activité.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    project: "Site + devis automatisé",
    package: "Premium", 
    results: ["+50% de demandes qualifiées", "Temps de réponse divisé par 5", "+40% de taux de conversion"],
    date: "Octobre 2024"
  },
  {
    id: 4,
    name: "Michel Blanc",
    business: "Garage Alpine Motors",
    location: "Gap", 
    rating: 5,
    text: "On est passé de garage de quartier à spécialiste reconnu des véhicules 4x4 ! Le site met parfaitement en valeur notre expertise montagne. Marvin a compris nos besoins dès le premier échange.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    project: "Site spécialisé + prise de RDV",
    package: "Business",
    results: ["+40% de nouveaux clients", "#1 sur 'garage 4x4 Gap'", "RDV complets 3 semaines à l'avance"],
    date: "Septembre 2024"
  },
  {
    id: 5,
    name: "Sylvie Moreau", 
    business: "Salon Élégance",
    location: "Embrun",
    rating: 5,
    text: "Mes clientes adorent réserver en ligne ! Plus d'oublis de RDV grâce aux rappels automatiques. Le site présente parfaitement mes créations et attire une nouvelle clientèle. Merci Marvin !",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    project: "Site + réservation 24h/24",
    package: "Business", 
    results: ["+60% RDV en ligne", "95% de taux de présence", "+30% nouveaux clients/mois"],
    date: "Août 2024"
  },
  {
    id: 6,
    name: "Jean-Claude Bernardi",
    business: "Menuiserie Alpine",
    location: "Embrun",
    rating: 5,
    text: "Mes créations sont enfin mises en valeur comme elles le méritent ! Les photos avant/après parlent d'elles-mêmes. Les clients voient directement mon niveau de qualité. Carnet de commandes plein !",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    project: "Portfolio avant/après premium",
    package: "Business",
    results: ["+70% de demandes de devis", "Planning complet 2 mois à l'avance", "65% de conversion prospect → client"],
    date: "Juillet 2024"
  },
  {
    id: 7,
    name: "Laurent Fabre",
    business: "Brasserie du Centre",
    location: "Gap",
    rating: 5, 
    text: "Nos événements affichent complet maintenant ! Le calendrier en ligne est génial, nos clients ne ratent plus aucune soirée. L'ambiance du bar est parfaitement retranscrite sur le site.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    project: "Site + calendrier événements",
    package: "Business",
    results: ["+30% de participation événements", "500+ abonnés newsletter", "Agenda complet 3 semaines à l'avance"],
    date: "Juin 2024"
  },
  {
    id: 8,
    name: "Amélie Chardon",
    business: "Chambre d'hôtes Les Alpilles",
    location: "Embrun",
    rating: 5,
    text: "Réservations directes en hausse de 80% ! Plus besoin de payer les commissions des plateformes. Le site transmet parfaitement l'ambiance chaleureuse de notre maison d'hôtes.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face", 
    project: "Site + réservation directe",
    package: "Premium",
    results: ["+80% réservations directes", "-70% commissions plateformes", "Taux d'occupation 95% en saison"],
    date: "Mai 2024"
  }
]

const stats = [
  {
    number: "100%",
    label: "Clients satisfaits",
    description: "Aucun client mécontent depuis 2 ans"
  },
  {
    number: "+45%", 
    label: "CA moyen",
    description: "Augmentation moyenne du chiffre d'affaires"
  },
  {
    number: "3.8j",
    label: "Délai moyen",
    description: "Temps de livraison réel de nos projets"
  },
  {
    number: "50+",
    label: "Projets livrés",
    description: "Sites web créés en 2024"
  }
]

export default function TemoignagesPage() {
  const averageRating = testimonials.reduce((acc, testimonial) => acc + testimonial.rating, 0) / testimonials.length

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-gray-50 section-padding pt-32">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Témoignages clients
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Découvrez pourquoi +50 entreprises locales font confiance à Marvin Créateur Web 
            pour développer leur présence en ligne et booster leur activité.
          </p>
          
          {/* Rating Summary */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}/5</span>
            </div>
            <div className="text-gray-600">
              Basé sur {testimonials.length} avis clients vérifiés
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Users className="w-4 h-4 text-green-500 mr-2" />
              <span>100% clients satisfaits</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 text-blue-500 mr-2" />
              <span>+45% CA moyen après 6 mois</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 text-orange-500 mr-2" />
              <span>Embrun & Hautes-Alpes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Quote Icon */}
                <div className="flex items-start justify-between mb-6">
                  <Quote className="w-8 h-8 text-primary-200 flex-shrink-0" />
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    Résultats obtenus
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {testimonial.results.map((result, i) => (
                      <div key={i} className="flex items-center text-sm text-green-700 bg-green-50 px-3 py-2 rounded-lg">
                        <TrendingUp className="w-3 h-3 mr-2 text-green-600" />
                        <span className="font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.business}</div>
                      <div className="text-xs text-gray-500 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {testimonial.location} • {testimonial.date}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-xs text-gray-500 mb-1">Formule</div>
                    <div className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium">
                      {testimonial.package}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Testimonials */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ce que nos clients disent de notre processus
            </h2>
            <p className="text-lg text-gray-600">
              Rapidité, qualité, accompagnement : les 3 piliers de notre méthode
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Quote className="w-8 h-8" />
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "Maquette reçue en 18h comme promis ! J'ai pu choisir parmi 3 concepts tous plus beaux les uns que les autres."
              </blockquote>
              <cite className="text-sm text-gray-600">— Sophie M., Restaurant</cite>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Quote className="w-8 h-8" />
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "Site livré en 3 jours pile ! Marvin a tenu tous ses engagements. Révisions comprises, aucun stress."
              </blockquote>
              <cite className="text-sm text-gray-600">— Pierre D., Artisan</cite>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Quote className="w-8 h-8" />
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "Formation super claire, je gère maintenant mon site en autonomie. Support réactif quand j'ai des questions."
              </blockquote>
              <cite className="text-sm text-gray-600">— Marie R., Traiteur</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Témoignages vidéo
            </h2>
            <p className="text-lg text-gray-600">
              Nos clients témoignent en vidéo de leur expérience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sophie Martin", business: "Restaurant Le Petit Gourmand", duration: "2:15" },
              { name: "Pierre Dubois", business: "Artisan Bois & Fer", duration: "1:45" },
              { name: "Michel Blanc", business: "Garage Alpine Motors", duration: "2:30" }
            ].map((video, index) => (
              <div key={index} className="relative bg-gray-200 rounded-xl overflow-hidden aspect-video hover:shadow-lg transition-shadow cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-0 h-0 border-l-[20px] border-r-0 border-t-[12px] border-b-[12px] border-l-primary-600 border-t-transparent border-b-transparent ml-1"></div>
                    </div>
                    <div className="font-semibold text-gray-700">{video.name}</div>
                    <div className="text-sm text-gray-600">{video.business}</div>
                    <div className="text-xs text-gray-500 mt-1">{video.duration}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              📹 Vidéos bientôt disponibles ! En attendant, 
              <a href="tel:0770061075" className="text-primary-600 hover:text-primary-700 font-medium ml-1">
                contactez nos clients directement
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ from Clients */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions fréquentes de nos clients
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                "Marvin travaille-t-il vraiment seul ou a-t-il une équipe ?"
              </h3>
              <p className="text-gray-600">
                Je travaille en solo pour garantir la qualité et la cohérence. 
                Vous avez affaire directement au créateur, pas à un commercial ou un sous-traitant. 
                C'est ce qui explique ma réactivité et ma compréhension fine de vos besoins.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                "Comment faites-vous pour livrer si rapidement ?"
              </h3>
              <p className="text-gray-600">
                2 ans d'expérience + processus optimisé + templates de base personnalisables. 
                Je ne pars jamais de zéro, j'adapte des structures éprouvées à vos besoins spécifiques. 
                Résultat : qualité pro en 4 jours au lieu de 4 semaines.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                "Et si je ne suis pas satisfait du résultat ?"
              </h3>
              <p className="text-gray-600">
                Révisions illimitées jusqu'à satisfaction complète. En 2 ans, j'ai eu 2 clients difficiles 
                sur 50+ projets. Dans les 2 cas, on a trouvé une solution ensemble. 
                Votre satisfaction = ma réputation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez nos clients satisfaits
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            +50 entreprises locales ont déjà fait le choix de l'efficacité. 
            À votre tour de booster votre activité avec un site web qui convertit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center transition-all duration-200 hover:scale-105">
              Démarrer mon projet
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/projets" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center transition-all duration-200">
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}