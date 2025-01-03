import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChevronRight, BookOpen, Laptop, Users } from 'lucide-react'

export default function Educacion() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Educación</h1>
        
        <section className="mb-12">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">Compartiendo Conocimiento sobre Biodiversidad</h2>
              <p className="text-lg text-gray-700 mb-6">
                En Biodiversidad.cl, creemos que la educación es clave para la conservación. Nos dedicamos a compartir conocimientos sobre la rica biodiversidad de Chile a través de diversos programas y recursos educativos.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Recursos Educativos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Ofrecemos una amplia gama de materiales didácticos, guías de campo y recursos interactivos para estudiantes y educadores.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Laptop className="w-5 h-5 mr-2" />
                      Cursos en Línea
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Desarrollamos cursos virtuales sobre biodiversidad, ecología y conservación, accesibles para todos.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Programas Comunitarios
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Implementamos talleres y programas educativos en comunidades locales para fomentar la conciencia ambiental.
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Iniciativas Educativas Destacadas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <Image
                src="/placeholder.svg"
                alt="Programa Escuelas Verdes"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>Programa Escuelas Verdes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Colaboración con escuelas para integrar la educación ambiental en el currículo, incluyendo actividades prácticas de conservación.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/placeholder.svg"
                alt="Serie de Webinars sobre Biodiversidad"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>Serie de Webinars sobre Biodiversidad</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ciclo de conferencias en línea con expertos en biodiversidad, abordando temas como especies endémicas, ecosistemas únicos y desafíos de conservación.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-green-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Explora Nuestros Recursos Educativos</h2>
          <p className="mb-6 text-lg">
            Descubre una amplia gama de materiales diseñados para inspirar y educar sobre la biodiversidad chilena.
          </p>
          <Link href="/recursos-educativos">
            <Button variant="secondary" size="lg">
              Acceder a Recursos Educativos
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </section>
      </main>
    </div>
  )
}

