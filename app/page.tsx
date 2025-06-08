"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Play, Monitor, Camera, Edit, Megaphone, Mail, ChevronDown } from "lucide-react"
import Image from "next/image"

const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title: "Creative Marketing & Audiovisual Production",
      subtitle:
        "Elevate your brand with professional social media management, web development, and stunning audiovisual content",
      cta: "Get Started",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive digital solutions to grow your business",
      social: {
        title: "Social Media Management",
        description:
          "Strategic content creation and community management to boost your online presence and engagement.",
      },
      web: {
        title: "Web Page Management",
        description:
          "Professional website development and maintenance to ensure your digital presence stays current and effective.",
      },
      video: {
        title: "Video Production",
        description:
          "High-quality video content creation, from concept to final edit, tailored to your brand's vision.",
      },
      presentations: {
        title: "Presentation Design",
        description: "Compelling visual presentations that communicate your message clearly and professionally.",
      },
    },
    about: {
      title: "About Xylen Lab",
      description:
        "We are a creative marketing and audiovisual production company dedicated to helping businesses tell their stories through compelling digital content. Our team combines strategic thinking with creative execution to deliver results that matter.",
      mission:
        "Our mission is to transform your ideas into powerful visual narratives that connect with your audience and drive meaningful engagement.",
    },
    contact: {
      title: "Let's Work Together",
      subtitle: "Ready to elevate your brand? Get in touch with us today.",
      email: "Email Us",
      emailAddress: "info@xylenlab.com",
    },
    footer: {
      copyright: "© 2024 Xylen Lab. All rights reserved.",
      tagline: "Creative Marketing & Audiovisual Production",
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
      title: "Marketing Creativo y Producción Audiovisual",
      subtitle:
        "Eleva tu marca con gestión profesional de redes sociales, desarrollo web y contenido audiovisual impactante",
      cta: "Comenzar",
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Soluciones digitales integrales para hacer crecer tu negocio",
      social: {
        title: "Gestión de Redes Sociales",
        description:
          "Creación estratégica de contenido y gestión de comunidades para impulsar tu presencia online y engagement.",
      },
      web: {
        title: "Gestión de Páginas Web",
        description:
          "Desarrollo y mantenimiento profesional de sitios web para asegurar que tu presencia digital se mantenga actual y efectiva.",
      },
      video: {
        title: "Producción de Video",
        description:
          "Creación de contenido de video de alta calidad, desde el concepto hasta la edición final, adaptado a la visión de tu marca.",
      },
      presentations: {
        title: "Diseño de Presentaciones",
        description: "Presentaciones visuales convincentes que comunican tu mensaje de manera clara y profesional.",
      },
    },
    about: {
      title: "Acerca de Xylen Lab",
      description:
        "Somos una empresa de marketing creativo y producción audiovisual dedicada a ayudar a las empresas a contar sus historias a través de contenido digital convincente. Nuestro equipo combina pensamiento estratégico con ejecución creativa para entregar resultados que importan.",
      mission:
        "Nuestra misión es transformar tus ideas en narrativas visuales poderosas que conecten con tu audiencia y generen engagement significativo.",
    },
    contact: {
      title: "Trabajemos Juntos",
      subtitle: "¿Listo para elevar tu marca? Ponte en contacto con nosotros hoy.",
      email: "Envíanos un Email",
      emailAddress: "info@xylenlab.com",
    },
    footer: {
      copyright: "© 2024 Xylen Lab. Todos los derechos reservados.",
      tagline: "Marketing Creativo y Producción Audiovisual",
    },
  },
}

export default function XylenLabWebsite() {
  const [language, setLanguage] = useState<"en" | "es">("en")
  const t = translations[language]

  // Fix image paths for GitHub Pages
  const getImagePath = (path: string) => {
    return path
  }

  const services = [
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: t.services.social.title,
      description: t.services.social.description,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: t.services.web.title,
      description: t.services.web.description,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: t.services.video.title,
      description: t.services.video.description,
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&h=300&fit=crop",
    },
    {
      icon: <Edit className="h-8 w-8" />,
      title: t.services.presentations.title,
      description: t.services.presentations.description,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">XL</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Xylen Lab</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">
                {t.nav.home}
              </a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">
                {t.nav.services}
              </a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">
                {t.nav.about}
              </a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
                {t.nav.contact}
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setLanguage(language === "en" ? "es" : "en")}
                  className="flex items-center space-x-2"
                >
                  <Globe className="h-4 w-4" />
                  <span>{language.toUpperCase()}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                  Creative Agency
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {t.hero.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">{t.hero.subtitle}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  {t.hero.cta}
                </Button>
                <Button variant="outline" size="lg" className="group">
                  <Play className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                  alt="Creative team working"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full blur-xl opacity-70"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-400 rounded-full blur-xl opacity-70"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.services.title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="relative mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                  alt="Team collaboration"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-400 rounded-full blur-lg opacity-70"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.about.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{t.about.description}</p>
              <p className="text-lg text-gray-600 leading-relaxed">{t.about.mission}</p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">25+</div>
                  <div className="text-sm text-gray-600">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">3+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.contact.title}</h2>
            <p className="text-xl mb-8 opacity-90">{t.contact.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-purple-600 hover:bg-gray-100"
                onClick={() => (window.location.href = "mailto:info@xylenlab.com")}
              >
                <Mail className="h-5 w-5 mr-2" />
                {t.contact.email}
              </Button>
              <div className="text-white/80">{t.contact.emailAddress}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">XL</span>
              </div>
              <div>
                <div className="text-xl font-bold">Xylen Lab</div>
                <div className="text-sm text-gray-400">{t.footer.tagline}</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">{t.footer.copyright}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
