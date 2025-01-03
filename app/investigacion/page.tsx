import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Calendar, ChevronRight, Download, ExternalLink, Database, Dna, Globe } from 'lucide-react'

const publicaciones = [
  {
    titulo: "Impacto de la inteligencia artificial en la predicción de cambios en la biodiversidad chilena",
    autores: "Rodríguez, L., Chen, Y., Thompson, K.",
    fecha: "2025-06-20",
    revista: "Nature Ecology & Evolution",
    imagen: "/placeholder.svg"
  },
  {
    titulo: "Aplicación de tecnología blockchain para el seguimiento y conservación de especies en peligro en Chile",
    autores: "Martínez, C., Johnson, S., López, P.",
    fecha: "2025-04-15",
    revista: "Conservation Biology",
    imagen: "/placeholder.svg"
  },
  {
    titulo: "Análisis genómico de la adaptación de especies endémicas chilenas al cambio climático",
    autores: "González, M., Pérez, J., Smith, A.",
    fecha: "2025-02-03",
    revista: "Molecular Ecology",
    imagen: "/placeholder.svg"
  }
]

const proyectosActuales = [
  {
    titulo: "Monitoreo de biodiversidad con drones autónomos y IA",
    descripcion: "Implementación de una red de drones autónomos equipados con IA para el monitoreo continuo y en tiempo real de la biodiversidad en áreas remotas de Chile.",
    investigadorPrincipal: "Dra. Carolina Vargas",
    estado: "En curso"
  },
  {
    titulo: "Restauración de ecosistemas con biotecnología avanzada",
    descripcion: "Desarrollo y aplicación de técnicas de edición genética CRISPR para la restauración de especies vegetales nativas en ecosistemas degradados.",
    investigadorPrincipal: "Dr. Felipe Sánchez",
    estado: "Reclutando voluntarios"
  },
  {
    titulo: "Modelado predictivo del impacto del cambio climático en la biodiversidad andina",
    descripcion: "Utilización de supercomputación cuántica para modelar escenarios futuros y desarrollar estrategias de conservación adaptativas.",
    investigadorPrincipal: "Dra. Ana Muñoz",
    estado: "Analizando datos"
  }
]

export default function Investigacion() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Investigación</h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Publicaciones Recientes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {publicaciones.map((pub, index) => (
              <Card key={index} className="flex flex-col">
                <Image
                  src={`/placeholder.svg?height=200&width=400&text=Publicación+${index + 1}`}
                  alt={pub.titulo}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle className="text-xl">{pub.titulo}</CardTitle>
                  <CardDescription>{pub.autores}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-600">{pub.revista}</p>
                  <p className="text-sm text-gray-600">{new Date(pub.fecha).toLocaleDateString()}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Descargar PDF
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/publicaciones">
              <Button>
                Ver todas las publicaciones
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Proyectos de Investigación Actuales</h2>
          <div className="space-y-6">
            {proyectosActuales.map((proyecto, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-2xl">{proyecto.titulo}</CardTitle>
                  <Badge variant={proyecto.estado === "En curso" ? "default" : "secondary"}>
                    {proyecto.estado}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{proyecto.descripcion}</p>
                  <p className="text-sm text-gray-600">
                    <strong>Investigador Principal:</strong> {proyecto.investigadorPrincipal}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button>
                    Más información
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Tecnologías Emergentes en Investigación</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="w-5 h-5 mr-2" />
                  Big Data y IA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Utilizamos algoritmos de aprendizaje profundo y análisis de big data para procesar vastas cantidades de información sobre biodiversidad.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Dna className="w-5 h-5 mr-2" />
                  Genómica Avanzada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Aplicamos técnicas de secuenciación de última generación y edición genética para comprender y preservar la diversidad genética.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Sensores Remotos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Empleamos una red de sensores satelitales y terrestres para monitorear en tiempo real los cambios en los ecosistemas chilenos.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Oportunidades de Colaboración</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Para Investigadores
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Acceso a nuestra plataforma de colaboración virtual en 3D</li>
                    <li>Participación en proyectos de ciencia ciudadana aumentada</li>
                    <li>Uso de nuestros laboratorios de biotecnología avanzada</li>
                  </ul>
                  <Button className="mt-4">
                    Área de investigadores
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Para Estudiantes
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Programas de pasantías en realidad virtual</li>
                    <li>Becas para investigación en inteligencia artificial aplicada a la conservación</li>
                    <li>Cursos online de bioinformática y modelado ecológico</li>
                  </ul>
                  <Button className="mt-4">
                    Oportunidades para estudiantes
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="bg-green-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">¿Tienes una propuesta de investigación innovadora?</h2>
          <p className="mb-6 text-lg">
            Buscamos ideas revolucionarias que combinen tecnología de punta con la conservación de la biodiversidad chilena.
          </p>
          <Button variant="secondary" size="lg">
            Enviar propuesta
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </section>
      </main>
    </div>
  )
}


