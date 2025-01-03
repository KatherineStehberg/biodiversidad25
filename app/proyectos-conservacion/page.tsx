import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TreesIcon as Tree, Droplet, Bird, Users, ChevronRight, MapPin, Calendar } from 'lucide-react'

const proyectos = [
  {
    titulo: "Reforestación Andina",
    descripcion: "Restauración de bosques nativos en la Cordillera de los Andes.",
    imagen: "/placeholder.svg?height=200&width=400",
    icon: Tree,
    ubicacion: "Cordillera de los Andes",
    fechaInicio: "Marzo 2023",
    progreso: 65,
    voluntarios: 120,
  },
  {
    titulo: "Protección de Humedales",
    descripcion: "Conservación y restauración de humedales costeros.",
    imagen: "/placeholder.svg?height=200&width=400",
    icon: Droplet,
    ubicacion: "Costa Central",
    fechaInicio: "Enero 2023",
    progreso: 40,
    voluntarios: 85,
  },
  {
    titulo: "Monitoreo de Aves Migratorias",
    descripcion: "Seguimiento y protección de rutas migratorias de aves.",
    imagen: "/placeholder.svg?height=200&width=400",
    icon: Bird,
    ubicacion: "Diversos puntos del país",
    fechaInicio: "Septiembre 2022",
    progreso: 80,
    voluntarios: 200,
  },
]

export default function ProyectosConservacion() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Proyectos de Conservación</h1>
        
        <section className="mb-12">
          <p className="text-xl text-green-700 mb-6">
            Descubre nuestros proyectos activos de conservación y cómo puedes contribuir a proteger la biodiversidad chilena.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {proyectos.map((proyecto, index) => (
              <Card key={index} className="flex flex-col">
                <Image
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <proyecto.icon className="w-6 h-6 text-green-600" />
                    <Badge variant="secondary">{proyecto.fechaInicio}</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">{proyecto.titulo}</CardTitle>
                  <CardDescription>{proyecto.descripcion}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center mb-2">
                    <MapPin className="w-4 h-4 mr-2 text-green-600" />
                    <span className="text-sm text-green-700">{proyecto.ubicacion}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Users className="w-4 h-4 mr-2 text-green-600" />
                    <span className="text-sm text-green-700">{proyecto.voluntarios} voluntarios</span>
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-green-700">Progreso</span>
                      <span className="text-sm font-medium text-green-700">{proyecto.progreso}%</span>
                    </div>
                    <Progress value={proyecto.progreso} className="w-full" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Ver detalles
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Cómo Participar</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Users className="w-6 h-6 mr-2 text-green-600" />
                  Voluntariado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Únete a nuestros equipos de voluntarios y contribuye directamente en los proyectos de conservación.
                </CardDescription>
                <ul className="list-disc list-inside text-green-700">
                  <li>Participa en jornadas de plantación</li>
                  <li>Colabora en el monitoreo de especies</li>
                  <li>Ayuda en la limpieza de ecosistemas</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Inscribirse como voluntario
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Calendar className="w-6 h-6 mr-2 text-green-600" />
                  Eventos y Talleres
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Asiste a nuestros eventos educativos y talleres prácticos para aprender más sobre conservación.
                </CardDescription>
                <ul className="list-disc list-inside text-green-700">
                  <li>Charlas sobre biodiversidad</li>
                  <li>Talleres de identificación de especies</li>
                  <li>Excursiones guiadas</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Ver calendario de eventos
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="bg-green-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">¿Tienes una idea para un proyecto de conservación?</h2>
          <p className="mb-6 text-lg">
            Estamos siempre abiertos a nuevas iniciativas. Comparte tu propuesta y trabajemos juntos por la biodiversidad.
          </p>
          <Link href="/contacto">
            <Button variant="secondary" size="lg">
              Proponer un proyecto
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </section>
      </main>
    </div>
  )
}

