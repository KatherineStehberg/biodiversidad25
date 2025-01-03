import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { ChevronRight, Leaf, Globe, Users, BookOpen, Briefcase } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main>
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6">
              Descubre la Biodiversidad de Chile
            </h1>
            <p className="text-xl text-green-700 mb-10 max-w-2xl mx-auto">
              <Link href="/biodiversidad" className="hover:underline inline-flex items-center">
                <Leaf className="w-5 h-5 mr-1" /> Explora
              </Link>,{' '}
              <Link href="/recursos-educativos" className="hover:underline inline-flex items-center">
                <BookOpen className="w-5 h-5 mr-1" /> aprende
              </Link> y{' '}
              <Link href="/proyectos-conservacion" className="hover:underline inline-flex items-center">
                <Briefcase className="w-5 h-5 mr-1" /> contribuye a la conservación
              </Link>{' '}
              de nuestros ecosistemas únicos.
            </p>
            <Link href="/guia-introductoria">
              <Button className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6">
                Comienza tu viaje
                <ChevronRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Nuestro Enfoque</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Leaf, title: 'Conservación', desc: 'Protegemos especies en peligro', link: '/conservacion' },
                { icon: Globe, title: 'Educación', desc: 'Compartimos conocimiento sobre biodiversidad', link: '/educacion' },
                { icon: Users, title: 'Comunidad', desc: 'Construimos una red de entusiastas', link: '/comunidad' },
              ].map((item, index) => (
                <Card key={index} className="bg-green-50 border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-green-600 mr-2" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-green-700">
                      {item.desc}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Link href={item.link}>
                      <Button variant="outline" className="text-green-600 hover:text-green-700">
                        Saber más <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-green-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Recursos Educativos</h2>
            <p className="text-xl mb-8">
              Descubre nuestra colección de materiales didácticos, guías de campo, recursos interactivos y juegos educativos para aprender sobre la biodiversidad chilena.
            </p>
            <Link href="/recursos-educativos">
              <Button variant="secondary" size="lg">
                Explorar Recursos Educativos
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-20 px-4 bg-green-800 text-white">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-4xl font-bold mb-6">Explora Nuestra Base de Datos</h2>
                <p className="text-xl mb-8">
                  Accede a información detallada sobre miles de especies nativas de Chile.
                </p>
                <Button className="bg-white text-green-800 hover:bg-green-100">
                  <BookOpen className="w-5 h-5 mr-2" /> Explorar ahora
                </Button>
              </div>
              <div className="md:w-1/2">
                <Image 
                  src="/placeholder.svg?height=400&width=600"
                  alt="Base de datos de biodiversidad" 
                  width={600} 
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-green-800 mb-12">Últimas Noticias</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <Image 
                    src={`/placeholder.svg?height=200&width=400&text=Noticia+${item}`}
                    alt={`Noticia ${item}`}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-green-800">Título de la Noticia {item}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-green-700">
                      Breve descripción de la noticia y su importancia para la biodiversidad...
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full text-green-600 hover:text-green-700">
                      <ChevronRight className="mr-2 h-4 w-4" /> Leer más
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}






