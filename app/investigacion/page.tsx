import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { ChevronRight, BookOpen, FileText, Database, BarChartIcon as ChartBar } from 'lucide-react'

export default function Investigacion() {
  const recursos = [
    { titulo: "Publicaciones Científicas", descripcion: "Accede a nuestras últimas publicaciones sobre biodiversidad.", icon: BookOpen },
    { titulo: "Informes Técnicos", descripcion: "Descarga informes detallados sobre nuestros proyectos de investigación.", icon: FileText },
    { titulo: "Base de Datos de Especies", descripcion: "Explora nuestra extensa base de datos de especies chilenas.", icon: Database },
    { titulo: "Estadísticas y Gráficos", descripcion: "Visualiza datos importantes sobre la biodiversidad en Chile.", icon: ChartBar },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Investigación</h1>
        <p className="text-xl text-green-700 mb-8">
          Explora nuestros recursos de investigación y contribuye al conocimiento sobre la biodiversidad chilena.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {recursos.map((recurso, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <recurso.icon className="w-6 h-6 mr-2 text-green-600" />
                  {recurso.titulo}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{recurso.descripcion}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Acceder
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Investigaciones Destacadas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item}>
                <Image
                  src={`/placeholder.svg`}
                  alt={`Investigación Destacada ${item}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>Investigación Destacada {item}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Breve resumen de la investigación y sus principales hallazgos sobre la biodiversidad chilena.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Leer más <ChevronRight className="ml-2 h-4 w-4" />
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

