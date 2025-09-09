import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  Menu, 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Star,
  Zap,
  Palette,
  Search,
  Smartphone,
  Check,
  ArrowRight
} from 'lucide-react';
import portfolioData from '../data/mock';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const iconMap = {
    Zap: Zap,
    Palette: Palette, 
    Search: Search,
    Smartphone: Smartphone
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-gray-900">
            {portfolioData.personal.name}
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors">
              À propos
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-600 hover:text-blue-600 transition-colors">
              Projets
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-blue-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-blue-600 transition-colors">
              Tarifs
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </button>
          </nav>

          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-2 px-6">
              <button onClick={() => scrollToSection('about')} className="text-left py-2 text-gray-600 hover:text-blue-600">
                À propos
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left py-2 text-gray-600 hover:text-blue-600">
                Projets
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left py-2 text-gray-600 hover:text-blue-600">
                Services
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-left py-2 text-gray-600 hover:text-blue-600">
                Tarifs
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-gray-600 hover:text-blue-600">
                Contact
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
            {portfolioData.personal.tagline}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {portfolioData.personal.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              onClick={() => scrollToSection('portfolio')}
            >
              Voir mes projets
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 hover:bg-gray-50 px-8"
              onClick={() => scrollToSection('contact')}
            >
              Me contacter
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              {portfolioData.services.headline}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Je combine l'efficacité des outils informatiques modernes avec une approche personnalisée 
              pour créer des sites web qui convertissent vraiment vos visiteurs en clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioData.services.benefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon];
              return (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg font-medium text-gray-900">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Projets réalisés
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez comment j'ai aidé des entreprises locales à développer leur présence en ligne 
              et augmenter leur chiffre d'affaires.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.projects.map((project) => (
              <Card key={project.id} className="overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-medium text-gray-900">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Fonctionnalités clés :</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {project.features.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.features.length - 3} autres
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Résultats :</h4>
                      <p className="text-sm text-green-600 font-medium">
                        {project.results}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Mes offres & tarifs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à tous les budgets, avec un accompagnement personnalisé 
              pour développer votre activité en ligne.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioData.pricing.packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  pkg.popular 
                    ? 'border-purple-500 shadow-lg' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-purple-600 text-white px-4 py-1">
                      Populaire
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-medium text-gray-900">
                    {pkg.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-light text-gray-900">
                      {pkg.price}€
                    </span>
                  </div>
                  <CardDescription className="mt-2">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full mt-6 ${
                      pkg.popular 
                        ? 'bg-purple-600 hover:bg-purple-700' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                    onClick={() => scrollToSection('contact')}
                  >
                    Choisir cette offre
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Ce que disent mes clients
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioData.testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.business}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Transformons votre vision en succès digital
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Prêt à propulser votre entreprise en ligne ? Contactez-moi dès aujourd'hui 
            pour un devis personnalisé et gratuit.
          </p>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Téléphone</p>
                  <p className="text-gray-600">{portfolioData.personal.phone}</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">{portfolioData.personal.email}</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-green-100 rounded-full">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Localisation</p>
                  <p className="text-gray-600">{portfolioData.personal.location}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              onClick={() => window.location.href = `mailto:${portfolioData.personal.email}`}
            >
              Demander un devis gratuit
              <Mail className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 hover:bg-gray-50 px-8"
              onClick={() => window.location.href = `tel:${portfolioData.personal.phone}`}
            >
              Appeler maintenant
              <Phone className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-lg font-medium mb-4">
            {portfolioData.personal.name}
          </p>
          <p className="text-gray-400 mb-6">
            {portfolioData.personal.title} • {portfolioData.personal.location}
          </p>
          <Separator className="bg-gray-700 mb-6" />
          <p className="text-sm text-gray-400">
            © 2025 {portfolioData.personal.name}. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;