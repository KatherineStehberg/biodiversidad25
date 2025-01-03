import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { ChevronRight, Leaf, Fish, Bird, Bug } from 'lucide-react'

export default function Biodiversidad() {
  const categorias = [
    { titulo: "Flora", descripcion: "Descubre la diversidad de plantas nativas de Chile.", icon: Leaf },
    { titulo: "Fauna Terrestre", descripcion: "Explora los animales que habitan nuestros ecosistemas terrestres.", icon: Bird },
    { titulo: "Fauna Marina", descripcion: "Conoce las especies que viven en nuestras costas y océanos.", icon: Fish },
    { titulo: "Insectos", descripcion: "Aprende sobre la variedad de insectos en nuestro país.", icon: Bug },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Biodiversidad de Chile</h1>
        <p className="text-xl text-green-700 mb-8">
          Chile alberga una rica y única biodiversidad. Explora las diferentes categorías para conocer más sobre nuestras especies nativas.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {categorias.map((categoria, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <categoria.icon className="w-6 h-6 mr-2 text-green-600" />
                  {categoria.titulo}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{categoria.descripcion}</CardDescription>
              </CardContent>
              <CardFooter>
                <button className="w-full">
                  Explorar {categoria.titulo}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Especies Destacadas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item}>
                <Image
                  src={`/placeholder.svg?height=300&width=400&text=Especie+Destacada+${item}`}
                  alt={`Especie Destacada ${item}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>Especie Destacada {item}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Breve descripción de la especie y su importancia en el ecosistema chileno.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <button variant="outline" className="w-full">
                    Leer más <ChevronRight className="ml-2 h-4 w-4" />
                  </button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

