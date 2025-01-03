import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { ChevronRight, Users, Calendar, MessageSquare, Camera } from 'lucide-react'

export default function Comunidad() {
  const secciones = [
    { titulo: "Foro de Discusión", descripcion: "Participa en conversaciones sobre biodiversidad y conservación.", icon: MessageSquare },
    { titulo: "Eventos", descripcion: "Descubre y únete a eventos relacionados con la naturaleza.", icon: Calendar },
    { titulo: "Grupos Locales", descripcion: "Conecta con grupos de conservación en tu área.", icon: Users },
    { titulo: "Galería de Fotos", descripcion: "Comparte y explora fotos de la biodiversidad chilena.", icon: Camera },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Comunidad</h1>
        <p className="text-xl text-green-700 mb-8">
          Únete a nuestra comunidad de entusiastas de la naturaleza y contribuye a la conservación de la biodiversidad chilena.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {secciones.map((seccion, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <seccion.icon className="w-6 h-6 mr-2 text-green-600" />
                  {seccion.titulo}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{seccion.descripcion}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Explorar
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Miembros Destacados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item}>
                <CardHeader>
                  <Image
                    src={`/placeholder.svg`}
                    alt={`Miembro Destacado ${item}`}
                    width={100}
                    height={100}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <CardTitle className="text-center">Miembro Destacado {item}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Breve descripción de las contribuciones del miembro a la comunidad y la conservación.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Ver perfil <ChevronRight className="ml-2 h-4 w-4" />
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

