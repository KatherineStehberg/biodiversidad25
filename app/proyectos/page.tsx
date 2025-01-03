import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { ChevronRight, TreesIcon as Tree, Droplet, Bird, Users } from 'lucide-react'

export default function Proyectos() {
  const proyectos = [
    { titulo: "Reforestación Andina", descripcion: "Ayuda a plantar árboles nativos en la Cordillera de los Andes.", icon: Tree },
    { titulo: "Protección de Humedales", descripcion: "Contribuye a la conservación de ecosistemas acuáticos vitales.", icon: Droplet },
    { titulo: "Monitoreo de Especies", descripcion: "Participa en el seguimiento de poblaciones de especies amenazadas.", icon: Bird },
    { titulo: "Educación Ambiental", descripcion: "Colabora en programas educativos sobre biodiversidad.", icon: Users },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Proyectos de Conservación</h1>
        <p className="text-xl text-green-700 mb-8">
          Descubre cómo puedes contribuir activamente a la conservación de la biodiversidad chilena a través de nuestros proyectos.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {proyectos.map((proyecto, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <proyecto.icon className="w-6 h-6 mr-2 text-green-600" />
                  {proyecto.titulo}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{proyecto.descripcion}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Participar
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Proyectos Destacados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item}>
                <Image
                  src={`/placeholder.svg`}
                  alt={`Proyecto Destacado ${item}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>Proyecto Destacado {item}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Descripción breve del proyecto y su impacto en la conservación de la biodiversidad.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Ver detalles <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

