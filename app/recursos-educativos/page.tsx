import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Video, Gamepad2, Download, ChevronRight, Globe, Laptop, Users } from 'lucide-react'

const recursos = [
  {
    categoria: "Cursos en línea",
    items: [
      { titulo: "Introducción a la Biodiversidad Chilena", nivel: "Principiante", duracion: "4 semanas", imagen: "/placeholder.svg" },
      { titulo: "Ecología de Ecosistemas Andinos", nivel: "Intermedio", duracion: "6 semanas", imagen: "/placeholder.svg" },
      { titulo: "Conservación Marina Avanzada", nivel: "Avanzado", duracion: "8 semanas", imagen: "/placeholder.svg" },
    ]
  },
  {
    categoria: "Juegos educativos",
    items: [
      { titulo: "EcoExplorador VR", descripcion: "Explora ecosistemas chilenos en realidad virtual", edad: "12+", imagen: "/placeholder.svg" },
      { titulo: "BiodiverCity", descripcion: "Construye y gestiona tu propia ciudad ecológica", edad: "10+", imagen: "/placeholder.svg" },
      { titulo: "Guardián de Especies", descripcion: "Protege especies en peligro en este juego de estrategia", edad: "14+", imagen: "/placeholder.svg" },
    ]
  },
  {
    categoria: "Material descargable",
    items: [
      { titulo: "Guía de Campo Digital", formato: "PDF interactivo", tamaño: "25 MB", imagen: "/placeholder.svg" },
      { titulo: "Pósters de Biodiversidad en RA", formato: "App + PDF", tamaño: "100 MB", imagen: "/placeholder.svg" },
      { titulo: "Kit de Ciencia Ciudadana", formato: "ZIP (documentos + app)", tamaño: "150 MB", imagen: "/placeholder.svg" },
    ]
  }
]

export default function RecursosEducativos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Recursos Educativos</h1>
        
        <section className="mb-12">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">Explora y Aprende</h2>
              <p className="text-lg text-gray-700 mb-6">
                Descubre nuestra colección de recursos educativos interactivos diseñados para inspirar y educar sobre la rica biodiversidad de Chile.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Globe className="w-5 h-5 mr-2" />
                      Aprendizaje Inmersivo
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Experiencias de realidad virtual y aumentada que te transportan a los diversos ecosistemas de Chile.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Laptop className="w-5 h-5 mr-2" />
                      Cursos Adaptativos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Programas de estudio personalizados que se ajustan a tu ritmo y estilo de aprendizaje.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Colaboración Global
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Conecta con estudiantes y expertos de todo el mundo en proyectos de conservación virtuales.
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Nuestros Recursos</h2>
          <Tabs defaultValue="cursos">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="cursos">Cursos en línea</TabsTrigger>
              <TabsTrigger value="juegos">Juegos educativos</TabsTrigger>
              <TabsTrigger value="material">Material descargable</TabsTrigger>
            </TabsList>
            {recursos.map((categoria) => (
              <TabsContent key={categoria.categoria} value={categoria.categoria.split(' ')[0].toLowerCase()}>
                <div className="grid md:grid-cols-3 gap-6">
                  {categoria.items.map((item, index) => (
                    <Card key={index} className="flex flex-col">
                      <Image
                        src={item.imagen}
                        alt={item.titulo}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <CardHeader>
                        <CardTitle className="text-xl">{item.titulo}</CardTitle>
                        {'nivel' in item && <Badge>{item.nivel}</Badge>}
                        {'edad' in item && <Badge>Edad: {item.edad}</Badge>}
                        {'formato' in item && <Badge>{item.formato}</Badge>}
                      </CardHeader>
                      <CardContent className="flex-grow">
                        {'duracion' in item && <p>Duración: {item.duracion}</p>}
                        {'descripcion' in item && <p>{item.descripcion}</p>}
                        {'tamaño' in item && <p>Tamaño: {item.tamaño}</p>}
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">
                          {categoria.categoria === "Cursos en línea" ? "Inscribirse" : 
                           categoria.categoria === "Juegos educativos" ? "Jugar ahora" : "Descargar"}
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Programa de Certificación en Biodiversidad</CardTitle>
              <CardDescription>
                Obtén una certificación reconocida internacionalmente en el estudio y conservación de la biodiversidad chilena.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Nuestro programa de certificación incluye:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Cursos especializados impartidos por expertos</li>
                <li>Proyectos prácticos de conservación</li>
                <li>Acceso a herramientas de investigación avanzadas</li>
                <li>Networking con profesionales del sector</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button>
                Explorar programa de certificación
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </CardFooter>
          </Card>
        </section>

        <section className="bg-green-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">¿Eres educador?</h2>
          <p className="mb-6 text-lg">
            Accede a nuestros recursos especiales para educadores, incluyendo planes de lección, kits de laboratorio virtual y herramientas de evaluación.
          </p>
          <Button variant="secondary" size="lg">
            Área de educadores
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </section>
      </main>
    </div>
  )
}



