import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { ChevronRight, Leaf, Briefcase, BookOpen, Users, Camera, Globe, Database } from 'lucide-react'

export default function GuiaIntroductoria() {
  const secciones = [
    {
      titulo: "Biodiversidad Chilena",
      descripcion: "Explora la rica diversidad de especies nativas de Chile.",
      icon: Leaf,
      link: "/biodiversidad",
      subsecciones: ["Flora", "Fauna", "Ecosistemas"]
    },
    {
      titulo: "Recursos Educativos",
      descripcion: "Accede a materiales didácticos y guías de aprendizaje.",
      icon: BookOpen,
      link: "/recursos-educativos",
      subsecciones: ["Guías de Campo", "Material Didáctico", "Cursos Online"]
    },
    {
      titulo: "Proyectos de Conservación",
      descripcion: "Conoce y participa en iniciativas de conservación activas.",
      icon: Briefcase,
      link: "/proyectos-conservacion",
      subsecciones: ["Proyectos Activos", "Voluntariado", "Impacto"]
    },
    {
      titulo: "Base de Datos",
      descripcion: "Accede a nuestra base de datos científica de especies.",
      icon: Database,
      link: "/base-datos",
      subsecciones: ["Búsqueda", "Estadísticas", "Contribuir"]
    }
  ]

  const recursosDestacados = [
    {
      titulo: "Mapa Interactivo",
      descripcion: "Explora la distribución de especies en Chile",
      imagen: "/placeholder.svg"
    },
    {
      titulo: "Guía de Identificación",
      descripcion: "Aprende a identificar especies nativas",
      imagen: "/placeholder.svg"
    },
    {
      titulo: "Galería Fotográfica",
      descripcion: "Biblioteca visual de nuestra biodiversidad",
      imagen: "/placeholder.svg"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-6">Guía Introductoria</h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Bienvenido a tu viaje por la biodiversidad chilena. Esta guía te ayudará a explorar 
            y comprender mejor nuestros recursos y cómo puedes contribuir a la conservación.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-green-700 mb-8">Explora Nuestras Secciones</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {secciones.map((seccion, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <seccion.icon className="w-6 h-6 mr-2 text-green-600" />
                    {seccion.titulo}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {seccion.descripcion}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {seccion.subsecciones.map((subseccion, idx) => (
                      <li key={idx} className="flex items-center text-green-700">
                        <ChevronRight className="w-4 h-4 mr-2" />
                        {subseccion}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link 
                    href={seccion.link}
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                  >
                    Explorar sección
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-green-700 mb-8">Recursos Destacados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recursosDestacados.map((recurso, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <Image
                  src={recurso.imagen}
                  alt={recurso.titulo}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{recurso.titulo}</CardTitle>
                  <CardDescription>{recurso.descripcion}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link 
                    href="#"
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                  >
                    Acceder
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center bg-green-800 text-white rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">¿Necesitas ayuda personalizada?</h2>
          <p className="mb-6">
            Nuestro equipo está disponible para guiarte y responder tus preguntas.
          </p>
          <Link 
            href="/contacto"
            className="inline-flex items-center bg-white text-green-800 px-6 py-3 rounded-lg font-medium hover:bg-green-100 transition-colors"
          >
            Contáctanos
            <ChevronRight className="ml-2 w-4 h-4" />
          </Link>
        </section>
      </main>
    </div>
  )
}

