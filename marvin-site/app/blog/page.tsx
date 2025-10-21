import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Tag, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - Conseils création de site web et marketing digital',
  description: 'Conseils pratiques pour créer un site web efficace, optimiser son référencement local et développer son activité en ligne. Par Marvin Créateur Web.',
  alternates: {
    canonical: 'https://marvin.createurweb.com/blog'
  }
}

const articles = [
  {
    id: 1,
    title: "Combien coûte vraiment un site web professionnel en 2025 ?",
    excerpt: "Guide complet des tarifs de création de site web : de 500€ à 10 000€, découvrez ce qui justifie ces écarts de prix et comment faire le bon choix pour votre entreprise.",
    slug: "prix-creation-site-web-2025",
    category: "Tarifs & Budget",
    readTime: "8 min",
    publishDate: "2025-01-09",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy",
    featured: true
  },
  {
    id: 2,
    title: "7 erreurs qui tuent la conversion de votre site web",
    excerpt: "Ces erreurs de design et d'UX font fuir vos visiteurs. Découvrez comment les corriger pour transformer plus de visiteurs en clients.",
    slug: "erreurs-conversion-site-web",
    category: "Optimisation",
    readTime: "6 min",
    publishDate: "2025-01-05",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=entropy",
    featured: false
  },
  {
    id: 3,
    title: "SEO local : comment dominer Google dans votre ville",
    excerpt: "Guide pratique pour apparaître en premier sur Google quand vos clients cherchent vos services à Embrun, Gap ou dans les Hautes-Alpes.",
    slug: "seo-local-hautes-alpes",
    category: "SEO Local",
    readTime: "10 min", 
    publishDate: "2025-01-02",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&h=400&fit=crop&crop=entropy",
    featured: false
  },
  {
    id: 4,
    title: "Site mobile-first : pourquoi c'est crucial en 2025",
    excerpt: "Plus de 70% de vos clients naviguent sur mobile. Découvrez pourquoi votre site DOIT être pensé mobile d'abord, et comment l'optimiser.",
    slug: "site-mobile-first-2025",
    category: "Design Web",
    readTime: "5 min",
    publishDate: "2024-12-28",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=entropy",
    featured: false
  },
  {
    id: 5,
    title: "Restaurant : 5 fonctionnalités indispensables sur votre site",
    excerpt: "Menu en ligne, réservation, avis clients... Découvrez les fonctionnalités qui transforment votre site en machine à réservations.",
    slug: "site-web-restaurant-fonctionnalites",
    category: "Secteur Resto",
    readTime: "7 min",
    publishDate: "2024-12-22",
    image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=600&h=400&fit=crop&crop=entropy",
    featured: false
  },
  {
    id: 6,
    title: "Artisan : showcasez vos réalisations comme un pro",
    excerpt: "Photos avant/après, descriptions détaillées, témoignages... Comment présenter vos travaux pour convaincre avant même le devis.",
    slug: "site-web-artisan-portfolio",
    category: "Secteur Artisan",
    readTime: "6 min",
    publishDate: "2024-12-18",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=entropy",
    featured: false
  }
]

const categories = [
  "Tous les articles",
  "Tarifs & Budget", 
  "SEO Local",
  "Design Web",
  "Optimisation",
  "Secteur Resto",
  "Secteur Artisan"
]

export default function BlogPage() {
  const featuredArticle = articles.find(article => article.featured)
  const regularArticles = articles.filter(article => !article.featured)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-gray-50 section-padding pt-32">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog création de site web
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Conseils pratiques, guides détaillés et astuces d'expert pour créer un site web 
            qui convertit et développer votre activité en ligne. Par Marvin, créateur web à Embrun.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <User className="w-4 h-4 text-primary-500 mr-2" />
              <span>Par un expert local</span>
            </div>
            <div className="flex items-center">
              <Tag className="w-4 h-4 text-green-500 mr-2" />
              <span>Conseils pratiques</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 text-orange-500 mr-2" />
              <span>Lecture rapide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                  Article vedette
                </span>
              </div>
              
              <Link href={`/blog/${featuredArticle.slug}`} className="block group">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                          {featuredArticle.category}
                        </span>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{new Date(featuredArticle.publishDate).toLocaleDateString('fr-FR', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{featuredArticle.readTime}</span>
                        </div>
                      </div>
                      
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {featuredArticle.title}
                      </h2>
                      
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {featuredArticle.excerpt}
                      </p>
                      
                      <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
                        <span>Lire l'article complet</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <img 
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="w-full h-64 lg:h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  index === 0 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`} className="block group">
                <article className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                      {article.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{new Date(article.publishDate).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'short'
                        })}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center text-primary-600 text-sm font-medium group-hover:text-primary-700 transition-colors">
                      <span>Lire la suite</span>
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ne ratez aucun conseil
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Recevez mes meilleurs conseils pour développer votre présence en ligne. 
              Un email par semaine, désabonnement en 1 clic.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email professionnel"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 whitespace-nowrap"
              >
                S'inscrire
              </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-4">
              Vos données sont protégées. Pas de spam, promis.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d'aide pour votre site ?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Vous avez lu nos conseils, maintenant passons à l'action ! 
            Je créé votre site web professionnel en 4 jours maximum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center transition-all duration-200 hover:scale-105">
              Créer mon site
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href="tel:0770061075"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center transition-all duration-200"
            >
              Discuter du projet
            </a>
          </div>
        </div>
      </section>
    </>
  )
}