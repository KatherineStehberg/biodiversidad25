import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from 'lucide-react'

const especiesFaunaTerrestre = [
  {
    nombre: "Puma",
    nombreCientifico: "Puma concolor",
    descripcion: "El puma es el segundo felino más grande de América. Es un depredador ágil y poderoso que juega un papel crucial en el equilibrio de los ecosistemas.",
    imagen: "/placeholder.svg?height=300&width=400&text=Puma",
    habitat: "Desde el norte hasta el sur de Chile, adaptándose a diversos hábitats."
  },
  {
    nombre: "Huemul",
    nombreCientifico: "Hippocamelus bisulcus",
    descripcion: "El huemul es un ciervo endémico de los Andes patagónicos y uno de los símbolos nacionales de Chile. Está en peligro de extinción.",
    imagen: "/placeholder.svg?height=300&width=400&text=Huemul",
    habitat: "Bosques andino-patagónicos del sur de Chile y Argentina."
  },
  {
    nombre: "Zorro Culpeo",
    nombreCientifico: "Lycalopex culpaeus",
    descripcion: "También conocido como zorro andino, es el cánido más grande de Chile. Es un animal adaptable que se encuentra en diversos hábitats.",
    imagen: "/placeholder.svg?height=300&width=400&text=Zorro+Culpeo",
    habitat: "Desde el norte hasta el sur de Chile, desde el nivel del mar hasta la cordillera."
  },
]

export default function FaunaTerrestre() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <Link href="/biodiversidad" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Volver a Biodiversidad
        </Link>
        <h1 className="text-4xl font-bold text-green-800 mb-8">Fauna Terrestre de Chile</h1>
        <p className="text-xl text-green-700 mb-8">
          La fauna terrestre de Chile es tan diversa como sus paisajes. Desde los camélidos de los Andes hasta los felinos de los bosques templados, Chile alberga una variedad de especies únicas y fascinantes. Desde los resilientes roedores del desierto hasta los majestuosos pumas de la Patagonia, la fauna terrestre chilena refleja la adaptabilidad y la evolución en respuesta a los diversos ecosistemas del país.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {especiesFaunaTerrestre.map((especie, index) => (
            <Card key={index}>
              <Image
                src={especie.imagen}
                alt={especie.nombre}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{especie.nombre}</CardTitle>
                <CardDescription className="italic">{especie.nombreCientifico}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">{especie.descripcion}</p>
                <p className="text-sm font-semibold text-green-600">Hábitat: {especie.habitat}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Leer más
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

