import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  CheckCircle, 
  AlertTriangle,
  TrendingUp,
  DollarSign,
  Users,
  Zap
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Combien coûte un site web professionnel en 2025 ? Guide complet des tarifs',
  description: 'Guide détaillé des prix de création de site web en 2025 : de 500€ à 10 000€. Découvrez ce qui justifie ces écarts et comment choisir la bonne offre pour votre entreprise.',
  keywords: [
    'prix site web 2025',
    'tarif création site internet',
    'coût site web professionnel',
    'budget site internet',
    'prix développeur web',
    'tarif site vitrine',
    'coût site e-commerce'
  ],
  alternates: {
    canonical: 'https://marvin.createurweb.com/blog/prix-creation-site-web-2025'
  }
}

export default function ArticlePrixSiteWeb() {
  return (
    <>
      {/* Article Header */}
      <article className="bg-gradient-to-br from-primary-50 via-white to-gray-50 section-padding pt-32">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>9 janvier 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>8 min de lecture</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                <span>Par Marvin Lacroix</span>
              </div>
              <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                Tarifs & Budget
              </span>
            </div>

            {/* Title & Intro */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Combien coûte vraiment un site web professionnel en 2025 ?
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Entre 500€ et 10 000€, les tarifs de création de site web varient énormément. 
              Dans ce guide complet, je vous explique <strong>ce qui justifie ces écarts de prix</strong> et 
              comment choisir l'offre qui correspond vraiment à vos besoins et votre budget.
            </p>

            {/* Key Points */}
            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mb-12 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-3">📖 Ce que vous allez apprendre :</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Les 4 fourchettes de prix et ce qu'elles incluent</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Les pièges à éviter dans les offres "trop belles"</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Le calcul ROI pour justifier votre investissement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Ma grille tarifaire transparente (avec bonus)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
            {/* Section 1 */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              🎯 Les 4 fourchettes de prix en 2025
            </h2>
            
            <p className="text-gray-600 mb-8">
              Après avoir analysé plus de 200 devis de mes confrères et livré +50 projets, 
              voici la répartition claire des tarifs selon la qualité et les fonctionnalités :
            </p>

            {/* Price Ranges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 not-prose">
              <div className="border border-red-200 bg-red-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
                  <h3 className="text-xl font-bold text-red-700">300€ - 800€</h3>
                </div>
                <p className="text-red-600 font-medium mb-3">⚠️ Attention danger</p>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Templates WordPress basiques</li>
                  <li>• Pas de personnalisation</li>
                  <li>• Support inexistant</li>
                  <li>• Souvent des arnaques</li>
                </ul>
              </div>

              <div className="border border-yellow-200 bg-yellow-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-6 h-6 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-bold text-yellow-700">800€ - 1 500€</h3>
                </div>
                <p className="text-yellow-600 font-medium mb-3">🟡 Entrée de gamme</p>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Site vitrine basique</li>
                  <li>• Quelques personnalisations</li>
                  <li>• Freelances débutants</li>
                  <li>• Qualité variable</li>
                </ul>
              </div>

              <div className="border border-green-200 bg-green-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold text-green-700">1 500€ - 4 000€</h3>
                </div>
                <p className="text-green-600 font-medium mb-3">✅ Sweet spot qualité/prix</p>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Design sur mesure</li>
                  <li>• Fonctionnalités métier</li>
                  <li>• SEO optimisé</li>
                  <li>• Support inclus</li>
                </ul>
              </div>

              <div className="border border-blue-200 bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-blue-700">4 000€ - 15 000€+</h3>
                </div>
                <p className="text-blue-600 font-medium mb-3">🚀 Haut de gamme/Agences</p>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Projets complexes</li>
                  <li>• Développements spécifiques</li>
                  <li>• Grandes agences</li>
                  <li>• Délais plus longs</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl mb-8 not-prose">
              <h4 className="font-bold text-blue-900 mb-2">💡 Mon conseil d'expert :</h4>
              <p className="text-blue-800">
                Pour 90% des PME locales (restaurants, artisans, commerces), la fourchette 
                <strong> 1 500€ - 4 000€ </strong> offre le meilleur rapport qualité/prix/délai. 
                C'est là que se situe notre expertise.
              </p>
            </div>

            {/* Section 2 */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              🕵️ Ce qui se cache derrière les prix
            </h2>

            <p className="mb-6">
              Vous vous demandez pourquoi un site peut coûter 800€ chez certains et 3 000€ chez d'autres ? 
              Voici les facteurs qui influencent <strong>réellement</strong> le prix :
            </p>

            <div className="space-y-8 mb-12 not-prose">
              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Le temps de conception</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="font-medium text-red-700 mb-2">❌ Offre low-cost (2-5h)</p>
                    <ul className="text-red-600 space-y-1">
                      <li>• Template WordPress standard</li>
                      <li>• Aucune personnalisation</li>
                      <li>• Contenu générique</li>
                      <li>• Zéro réflexion UX</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-medium text-green-700 mb-2">✅ Offre qualité (20-40h)</p>
                    <ul className="text-green-600 space-y-1">
                      <li>• Analyse de vos besoins</li>
                      <li>• Design sur mesure</li>
                      <li>• Contenu optimisé</li>
                      <li>• Parcours utilisateur étudié</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Les fonctionnalités incluses</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-3 text-left font-medium text-gray-700">Fonctionnalité</th>
                        <th className="p-3 text-center font-medium text-gray-700">Low-cost</th>
                        <th className="p-3 text-center font-medium text-gray-700">Standard</th>
                        <th className="p-3 text-center font-medium text-gray-700">Premium</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3">Design responsive</td>
                        <td className="p-3 text-center text-red-500">❌</td>
                        <td className="p-3 text-center text-green-500">✅</td>
                        <td className="p-3 text-center text-green-500">✅</td>
                      </tr>
                      <tr>
                        <td className="p-3">SEO optimisé</td>
                        <td className="p-3 text-center text-red-500">❌</td>
                        <td className="p-3 text-center text-yellow-500">⚠️</td>
                        <td className="p-3 text-center text-green-500">✅</td>
                      </tr>
                      <tr>
                        <td className="p-3">Formulaire de contact</td>
                        <td className="p-3 text-center text-yellow-500">⚠️</td>
                        <td className="p-3 text-center text-green-500">✅</td>
                        <td className="p-3 text-center text-green-500">✅</td>
                      </tr>
                      <tr>
                        <td className="p-3">Réservation en ligne</td>
                        <td className="p-3 text-center text-red-500">❌</td>
                        <td className="p-3 text-center text-red-500">❌</td>
                        <td className="p-3 text-center text-green-500">✅</td>
                      </tr>
                      <tr>
                        <td className="p-3">Formation incluse</td>
                        <td className="p-3 text-center text-red-500">❌</td>
                        <td className="p-3 text-center text-yellow-500">⚠️</td>
                        <td className="p-3 text-center text-green-500">✅</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Le support et la maintenance</h3>
                <p className="text-gray-600 mb-4">
                  C'est souvent le point oublié qui coûte cher plus tard :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-red-50 p-4 rounded-lg text-center">
                    <p className="font-bold text-red-700 mb-2">Pas de support</p>
                    <p className="text-red-600">Site livré, débrouille-toi</p>
                    <p className="font-medium text-red-700 mt-2">= 0€ puis 💸💸💸</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg text-center">
                    <p className="font-bold text-yellow-700 mb-2">Support payant</p>
                    <p className="text-yellow-600">80-150€/h d'intervention</p>
                    <p className="font-medium text-yellow-700 mt-2">= 500-2000€/an</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <p className="font-bold text-green-700 mb-2">Support inclus</p>
                    <p className="text-green-600">Forfait tout compris</p>
                    <p className="font-medium text-green-700 mt-2">= 99-199€/mois</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              🧮 Calculer le ROI de votre site web
            </h2>

            <p className="mb-6">
              Un site web n'est pas une dépense, c'est un <strong>investissement</strong>. 
              Voici comment calculer si le prix demandé est justifié :
            </p>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl mb-8 not-prose">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Exemple concret : Restaurant à Embrun
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">💰 Investissement site web :</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Site + réservation : <strong>2 990€</strong></li>
                    <li>• Maintenance annuelle : <strong>1 200€</strong></li>
                    <li>• <strong>Total 1ère année : 4 190€</strong></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">📈 Retour sur investissement :</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• +3 réservations/semaine = <strong>+156/an</strong></li>
                    <li>• Panier moyen : <strong>45€</strong></li>
                    <li>• <strong>Chiffre d'affaires additionnel : +7 020€/an</strong></li>
                    <li>• <strong>ROI : 168% dès la 1ère année ! 🚀</strong></li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-green-500">
                <p className="font-bold text-green-700">
                  💡 Résultat : Le site est rentabilisé en 6 mois et génère 
                  <span className="text-2xl"> +2 830€ de bénéfice net</span> dès la première année !
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              ⚠️ Les pièges à éviter absolument
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-red-50 border border-red-200 p-6 rounded-xl not-prose">
                <h3 className="font-bold text-red-700 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Piège #1 : "Site web à 299€ clé en main"
                </h3>
                <p className="text-red-600 mb-3">
                  <strong>Ce que ça cache :</strong> Template générique + frais cachés + aucun support
                </p>
                <ul className="text-sm text-red-600 space-y-1">
                  <li>• Hébergement : +20€/mois "surprise"</li>
                  <li>• Nom de domaine : +50€/an</li>
                  <li>• Moindre modification : +100€</li>
                  <li>• Au final : +1 000€ la première année</li>
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl not-prose">
                <h3 className="font-bold text-orange-700 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Piège #2 : "Paiement en 36 mensualités de 99€"
                </h3>
                <p className="text-orange-600 mb-3">
                  <strong>Calcul :</strong> 99€ × 36 mois = 3 564€ pour un site à 1 500€ maximum
                </p>
                <p className="text-sm text-orange-600">
                  Soit +137% de majoration ! Vous payez plus du double...
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl not-prose">
                <h3 className="font-bold text-yellow-700 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Piège #3 : "Délai de 3-6 mois pour la qualité"
                </h3>
                <p className="text-yellow-600 mb-3">
                  <strong>Réalité :</strong> Soit incompétence, soit mauvaise organisation
                </p>
                <p className="text-sm text-yellow-600">
                  Un site vitrine bien fait se livre en 1-2 semaines maximum.
                </p>
              </div>
            </div>

            {/* Section 5 - Mes tarifs */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              💎 Mes tarifs transparents (mise à jour 2025)
            </h2>

            <p className="mb-8">
              Après +50 projets livrés, voici ma grille tarifaire optimisée pour les PME locales. 
              <strong>Prix fixes, pas de surprise, délais garantis.</strong>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 not-prose">
              {/* Starter */}
              <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-1">1 490€</div>
                  <div className="text-sm text-gray-500 line-through">Prix marché : 2 500€</div>
                  <div className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-semibold mt-1">
                    -40% jusqu'au 31/01
                  </div>
                </div>
                
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Site vitrine 5 pages</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Design moderne responsive</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>SEO de base + Google Business</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Hébergement 1 an offert</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Formation 1h + support 1 mois</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Livraison 3-4 jours</span>
                  </li>
                </ul>
                
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-3">Parfait pour : Artisans, services</p>
                  <Link href="/contact" className="block bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                    Commander
                  </Link>
                </div>
              </div>

              {/* Business */}
              <div className="border-2 border-primary-500 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    ⭐ Le plus choisi
                  </span>
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Business</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-1">2 990€</div>
                  <div className="text-sm text-gray-500 line-through">Prix marché : 4 500€</div>
                  <div className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-semibold mt-1">
                    -34% jusqu'au 31/01
                  </div>
                </div>
                
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Site jusqu'à 15 pages + blog</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Réservation en ligne</strong></span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>SEO local optimisé + audit</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Galerie photos illimitée</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Formation 2h + support 3 mois</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Livraison 4 jours max</span>
                  </li>
                </ul>
                
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-3">Parfait pour : Restaurants, commerces</p>
                  <Link href="/contact" className="block bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                    Commander
                  </Link>
                </div>
              </div>

              {/* Premium */}
              <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Premium</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-1">5 490€</div>
                  <div className="text-sm text-gray-500 line-through">Prix marché : 8 000€</div>
                  <div className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-semibold mt-1">
                    -31% jusqu'au 31/01
                  </div>
                </div>
                
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Site illimité + e-commerce</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>CRM client intégré</strong></span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Multi-langues + SEO avancé</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Intégrations API sur mesure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Formation 4h + support 6 mois</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Livraison 5-7 jours</span>
                  </li>
                </ul>
                
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-3">Parfait pour : E-commerce, complexe</p>
                  <Link href="/contact" className="block bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                    Commander
                  </Link>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-8 rounded-2xl mb-8 not-prose">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 En résumé</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Budget 800-1500€ :</strong> Entrée de gamme, attention à la qualité</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Budget 1500-4000€ :</strong> Sweet spot pour 90% des PME locales</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Budget 4000€+ :</strong> Projets complexes ou grandes agences</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>ROI :</strong> Un bon site se rentabilise en 3-12 mois maximum</span>
                </li>
              </ul>
            </div>

            <p className="text-lg font-medium text-gray-900 mb-4">
              Questions sur les tarifs ou besoin d'un devis personnalisé ?
            </p>
            <p className="text-gray-600 mb-8">
              Je réponds à toutes vos questions par téléphone ou email. 
              Premier échange gratuit et sans engagement pour définir précisément vos besoins.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à investir dans votre site web ?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Devis gratuit en 24h. Je vous aide à choisir l'offre qui correspond 
            exactement à vos besoins et votre budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center transition-all duration-200 hover:scale-105">
              Demander un devis gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href="tel:0770061075"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center transition-all duration-200"
            >
              Discuter de mon projet
            </a>
          </div>
        </div>
      </section>
    </>
  )
}