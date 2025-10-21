'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Offres', href: '/offres' },
    { name: 'Processus', href: '/processus' },
    { name: 'Projets', href: '/projets' },
    { name: 'Témoignages', href: '/temoignages' },
    { name: 'Blog', href: '/blog' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="section-container" aria-label="Navigation principale">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Marvin Créateur Web</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:0770061075" 
              className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
              aria-label="Appeler Marvin Créateur Web"
            >
              <Phone size={16} />
              <span className="text-sm font-medium">07 70 06 10 75</span>
            </a>
            <Link href="/contact" className="btn-primary">
              Commander maintenant
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary-600 p-2"
              aria-expanded="false"
              aria-label="Ouvrir le menu principal"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-2 border-t border-gray-100">
                <a 
                  href="tel:0770061075" 
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 px-3 py-2"
                  aria-label="Appeler Marvin Créateur Web"
                >
                  <Phone size={16} />
                  <span>07 70 06 10 75</span>
                </a>
                <Link 
                  href="/contact" 
                  className="btn-primary w-full mt-2 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Commander maintenant
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}