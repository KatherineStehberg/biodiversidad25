import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, FileText, Video, Download, Search, ChevronRight } from 'lucide-react'

const recursos = [
  {
    titulo: "Guías de Campo",
    descripcion: "Descarga guías para identificar especies en tu próxima salida a la naturaleza.",
    icon: BookOpen,
    items: [
      { nombre: "Flora Nativa de Chile", tipo: "PDF" },
      { nombre: "Aves de la Cordillera", tipo: "PDF" },
      { nombre: "Mamíferos Marinos", tipo: "PDF" },
    ]
  },
  {
    titulo: "Material Didáctico",
    descripcion: "Accede a recursos educativos para aprender sobre la biodiversidad chilena.",
    icon: FileText,
    items: [
      { nombre: "Ecosistemas de Chile", tipo: "Presentación" },
      { nombre: "Ciclo del Agua", tipo: "Infografía" },
      { nombre: "Cadenas Alimenticias", tipo: "Actividad" },
    ]
  },
  {
    titulo: "Cursos Online",
    descripcion: "Participa en nuestros cursos virtuales sobre conservación y biodiversidad.",
    icon: Video,
    items: [
      { nombre: "Introducción a la Ecología", tipo: "Curso" },
      { nombre: "Conservación de Especies Amenazadas", tipo: "Curso" },
      { nombre: "Técnicas de Observación de Aves", tipo: "Taller" },
    ]
  },
]

export default function RecursosEducativos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Recursos Educativos</h1>
        
        <section className="mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Buscar Recursos</h2>
            <div className="flex gap-4">
              <Input placeholder="Buscar por palabra clave..." className="flex-grow" />
              <Button>
                <Search className="w-4 h-4 mr-2" />
                Buscar
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Categorías de Recursos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recursos.map((categoria, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <categoria.icon className="w-6 h-6 mr-2 text-green-600" />
                    {categoria.titulo}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{categoria.descripcion}</CardDescription>
                  <ul className="space-y-2">
                    {categoria.items.map((item, idx) => (
                      <li key={idx} className="flex justify-between items-center">
                        <span>{item.nombre}</span>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          {item.tipo}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Ver todos los {categoria.titulo.toLowerCase()}
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Recursos Destacados</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="flex flex-col md:flex-row overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Guía de Identificación de Aves"
                width={300}
                height={200}
                className="w-full md:w-1/3 object-cover"
              />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <CardTitle className="mb-2">Guía de Identificación de Aves</CardTitle>
                  <CardDescription>
                    Una completa guía ilustrada para identificar las aves más comunes de Chile.
                  </CardDescription>
                </div>
                <Button className="mt-4">
                  Descargar Guía
                  <Download className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
            <Card className="flex flex-col md:flex-row overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Curso de Conservación Marina"
                width={300}
                height={200}
                className="w-full md:w-1/3 object-cover"
              />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <CardTitle className="mb-2">Curso de Conservación Marina</CardTitle>
                  <CardDescription>
                    Aprende sobre los ecosistemas marinos de Chile y cómo protegerlos.
                  </CardDescription>
                </div>
                <Button className="mt-4">
                  Inscribirse al Curso
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
          </div>
        </section>

        <section className="bg-green-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">¿Quieres contribuir con recursos educativos?</h2>
          <p className="mb-6 text-lg">
            Si eres educador o experto en biodiversidad, nos encantaría contar con tu aporte.
          </p>
          <Link href="/contacto">
            <Button variant="secondary" size="lg">
              Contacta con nosotros
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </section>
      </main>
    </div>
  )
}

