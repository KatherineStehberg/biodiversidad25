import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Video, Download, ChevronRight, Globe, Laptop, Users, Gamepad2 } from 'lucide-react'

const recursos = [
  {
    categoria: "Guías de campo",
    items: [
      { titulo: "Flora Nativa de Chile", tipo: "PDF", tamaño: "15 MB", imagen: "/placeholder.svg" },
      { titulo: "Aves de la Cordillera", tipo: "PDF", tamaño: "12 MB", imagen: "/placeholder.svg" },
      { titulo: "Mamíferos Marinos", tipo: "PDF", tamaño: "18 MB", imagen: "/placeholder.svg" },
    ]
  },
  {
    categoria: "Videos educativos",
    items: [
      { titulo: "Ecosistemas de Chile", duracion: "15 min", imagen: "/placeholder.svg" },
      { titulo: "Ciclo del Agua en la Naturaleza", duracion: "10 min", imagen: "/placeholder.svg" },
      { titulo: "Biodiversidad en Peligro", duracion: "20 min", imagen: "/placeholder.svg" },
    ]
  },
  {
    categoria: "Infografías",
    items: [
      { titulo: "Cadenas Alimenticias", tipo: "JPG", tamaño: "5 MB", imagen: "/placeholder.svg" },
      { titulo: "Especies Endémicas", tipo: "PNG", tamaño: "4 MB", imagen: "/placeholder.svg" },
      { titulo: "Zonas Climáticas de Chile", tipo: "PDF", tamaño: "8 MB", imagen: "/placeholder.svg" },
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
                Descubre nuestra colección de recursos educativos diseñados para inspirar y educar sobre la rica biodiversidad de Chile.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Globe className="w-5 h-5 mr-2" />
                      Diversidad de Contenidos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Desde guías de campo hasta videos e infografías, ofrecemos una amplia gama de recursos para todos los estilos de aprendizaje.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Laptop className="w-5 h-5 mr-2" />
                      Acceso Digital
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Todos nuestros recursos están disponibles en formato digital para un fácil acceso y uso en cualquier dispositivo.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Para Todos los Niveles
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Contamos con materiales adaptados para estudiantes, educadores y entusiastas de todas las edades y niveles de conocimiento.
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Nuestros Recursos</h2>
          <Tabs defaultValue="guias">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="guias">Guías de campo</TabsTrigger>
              <TabsTrigger value="videos">Videos educativos</TabsTrigger>
              <TabsTrigger value="infografias">Infografías</TabsTrigger>
              <TabsTrigger value="juego">Juego Educativo</TabsTrigger>
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
                        {'tipo' in item && <Badge>{item.tipo}</Badge>}
                        {'duracion' in item && <Badge>{item.duracion}</Badge>}
                      </CardHeader>
                      <CardContent className="flex-grow">
                        {'tamaño' in item && <p>Tamaño: {item.tamaño}</p>}
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">
                          {categoria.categoria === "Videos educativos" ? "Ver video" : "Descargar"}
                          <Download className="w-4 h-4 ml-2" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
            <TabsContent value="juego">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Gamepad2 className="w-6 h-6 mr-2" />
                    Quiz de Biodiversidad Chilena
                  </CardTitle>
                  <CardDescription>
                    Pon a prueba tus conocimientos sobre la biodiversidad de Chile con nuestro juego educativo interactivo.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg"
                    alt="Quiz de Biodiversidad"
                    width={600}
                    height={300}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <p className="mb-4">
                    Aprende sobre especies nativas, ecosistemas y conservación mientras te diviertes con preguntas desafiantes y datos interesantes.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/recursos-educativos/juego-educativo" className="w-full">
                    <Button className="w-full">
                      Jugar ahora
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Recursos para Educadores</CardTitle>
              <CardDescription>
                Material especialmente diseñado para apoyar la enseñanza de la biodiversidad en el aula.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Planes de lección sobre biodiversidad chilena</li>
                <li>Actividades prácticas para el aula</li>
                <li>Guías para excursiones educativas</li>
                <li>Material de evaluación</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button>
                Acceder a recursos para educadores
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </CardFooter>
          </Card>
        </section>

        <section className="bg-green-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">¿Quieres contribuir con recursos educativos?</h2>
          <p className="mb-6 text-lg">
            Si eres educador, científico o entusiasta de la biodiversidad, nos encantaría contar con tu aporte para enriquecer nuestra colección de recursos.
          </p>
          <Button variant="secondary" size="lg">
            Compartir un recurso
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </section>
      </main>
    </div>
  )
}

