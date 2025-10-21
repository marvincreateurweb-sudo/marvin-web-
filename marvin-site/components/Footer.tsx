import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">Marvin Créateur Web</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Création de sites web professionnels pour PME locales. 
              Livraison rapide, maquette en 24h garantie. Basé à Embrun, je sers toutes les Hautes-Alpes.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary-400" />
                <span className="text-gray-300">Embrun, Hautes-Alpes (05)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-400" />
                <a href="tel:0770061075" className="text-gray-300 hover:text-white transition-colors">
                  07 70 06 10 75
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-400" />
                <a href="mailto:marvin.createurweb@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  marvin.createurweb@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link href="/offres" className="text-gray-300 hover:text-white transition-colors">Nos offres</Link></li>
              <li><Link href="/processus" className="text-gray-300 hover:text-white transition-colors">Notre processus</Link></li>
              <li><Link href="/projets" className="text-gray-300 hover:text-white transition-colors">Projets réalisés</Link></li>
              <li><Link href="/temoignages" className="text-gray-300 hover:text-white transition-colors">Témoignages</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Sites vitrines</span></li>
              <li><span className="text-gray-300">Sites e-commerce</span></li>
              <li><span className="text-gray-300">Réservation en ligne</span></li>
              <li><span className="text-gray-300">SEO local</span></li>
              <li><span className="text-gray-300">Maintenance</span></li>
              <li><span className="text-gray-300">Formation</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-white text-sm transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/conditions-generales" className="text-gray-400 hover:text-white text-sm transition-colors">
                Conditions générales
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.linkedin.com/in/marvin-lacroix" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn de Marvin Lacroix"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <p className="text-gray-400 text-sm">
                © 2025 Marvin Créateur Web. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}