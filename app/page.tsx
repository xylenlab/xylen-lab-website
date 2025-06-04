"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Monitor, Video, Camera, Edit, Palette, Mail, Menu, X } from "lucide-react"

const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title: "Elevate Your Brand with",
      company: "Xylen Lab",
      subtitle: "Professional Marketing Solutions",
      description:
        "We specialize in social media management, web development, and audiovisual production to help your business stand out in the digital landscape.",
      cta: "Get Started",
      learnMore: "Learn More",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive marketing solutions tailored to your needs",
      social: {
        title: "Social Media Management",
        description: "Strategic content creation, community management, and brand engagement across all platforms.",
      },
      web: {
        title: "Web Development & Management",
        description: "Custom websites, maintenance, optimization, and digital presence management.",
      },
      audiovisual: {
        title: "Audiovisual Production",
        description: "Professional video editing, presentation design, and multimedia content creation.",
      },
    },
    about: {
      title: "Why Choose Xylen Lab?",
      subtitle: "We combine creativity with strategy to deliver exceptional results",
      experience: "Expert Team",
      experienceDesc: "Skilled professionals with years of industry experience",
      quality: "Premium Quality",
      qualityDesc: "High-standard deliverables that exceed expectations",
      support: "Dedicated Support",
      supportDesc: "Personalized attention and ongoing project support",
    },
    contact: {
      title: "Ready to Transform Your Brand?",
      subtitle: "Let's discuss how we can help elevate your business",
      email: "Contact us at:",
      cta: "Send Email",
    },
    footer: {
      rights: "All rights reserved.",
      services: "Services",
      company: "Company",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
    },
    hero: {
      title: "Eleva Tu Marca con",
      company: "Xylen Lab",
      subtitle: "Soluciones de Marketing Profesional",
      description:
        "Nos especializamos en gestión de redes sociales, desarrollo web y producción audiovisual para ayudar a tu negocio a destacar en el panorama digital.",
      cta: "Comenzar",
      learnMore: "Saber Más",
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Soluciones de marketing integrales adaptadas a tus necesidades",
      social: {
        title: "Gestión de Redes Sociales",
        description:
          "Creación estratégica de contenido, gestión de comunidades y engagement de marca en todas las plataformas.",
      },
      web: {
        title: "Desarrollo y Gestión Web",
        description: "Sitios web personalizados, mantenimiento, optimización y gestión de presencia digital.",
      },
      audiovisual: {
        title: "Producción Audiovisual",
        description: "Edición profesional de video, diseño de presentaciones y creación de contenido multimedia.",
      },
    },
    about: {
      title: "¿Por Qué Elegir Xylen Lab?",
      subtitle: "Combinamos creatividad con estrategia para entregar resultados excepcionales",
      experience: "Equipo Experto",
      experienceDesc: "Profesionales capacitados con años de experiencia en la industria",
      quality: "Calidad Premium",
      qualityDesc: "Entregables de alto estándar que superan las expectativas",
      support: "Soporte Dedicado",
      supportDesc: "Atención personalizada y apoyo continuo en proyectos",
    },
    contact: {
      title: "¿Listo para Transformar Tu Marca?",
      subtitle: "Hablemos sobre cómo podemos ayudar a elevar tu negocio",
      email: "Contáctanos en:",
      cta: "Enviar Email",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      services: "Servicios",
      company: "Empresa",
    },
  },
}

export default function XylenLabWebsite() {
  const [language, setLanguage] = useState<"en" | "es">("en")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = translations[language]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">Xylen Lab</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {t.nav.home}
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {t.nav.services}
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {t.nav.about}
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {t.nav.contact}
                </button>
              </div>
            </div>

            {/* Language Switcher & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Button
                  variant={language === "en" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLanguage("en")}
                  className="text-xs"
                >
                  EN
                </Button>
                <Button
                  variant={language === "es" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLanguage("es")}
                  className="text-xs"
                >
                  ES
                </Button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left"
              >
                {t.nav.contact}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">{t.hero.title}</h1>
            <div className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              {t.hero.company}
            </div>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">{t.hero.subtitle}</p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">{t.hero.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection("contact")} className="bg-blue-600 hover:bg-blue-700">
                {t.hero.cta}
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("services")}>
                {t.hero.learnMore}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.services.title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{t.services.social.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{t.services.social.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Content Creation</Badge>
                  <Badge variant="secondary">Community Management</Badge>
                  <Badge variant="secondary">Brand Strategy</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Monitor className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">{t.services.web.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{t.services.web.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Web Design</Badge>
                  <Badge variant="secondary">Development</Badge>
                  <Badge variant="secondary">Maintenance</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">{t.services.audiovisual.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{t.services.audiovisual.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Video Editing</Badge>
                  <Badge variant="secondary">Presentations</Badge>
                  <Badge variant="secondary">Multimedia</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.about.title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.about.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.about.experience}</h3>
              <p className="text-gray-600">{t.about.experienceDesc}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.about.quality}</h3>
              <p className="text-gray-600">{t.about.qualityDesc}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Edit className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.about.support}</h3>
              <p className="text-gray-600">{t.about.supportDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.contact.title}</h2>
          <p className="text-lg text-gray-600 mb-8">{t.contact.subtitle}</p>

          <Card className="max-w-md mx-auto">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-gray-600 mb-4">{t.contact.email}</p>
              <a
                href="mailto:info@xylenlab.com"
                className="text-2xl font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                info@xylenlab.com
              </a>
              <div className="mt-6">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <a href="mailto:info@xylenlab.com">{t.contact.cta}</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Xylen Lab</h3>
              <p className="text-gray-400">
                {language === "en"
                  ? "Professional marketing solutions for the digital age."
                  : "Soluciones de marketing profesional para la era digital."}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t.footer.services}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{t.services.social.title}</li>
                <li>{t.services.web.title}</li>
                <li>{t.services.audiovisual.title}</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t.footer.company}</h4>
              <div className="text-gray-400">
                <p>info@xylenlab.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Xylen Lab. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
