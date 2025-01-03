import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from 'lucide-react'

const especiesFlora = [
  {
    nombre: "Araucaria",
    nombreCientifico: "Araucaria araucana",
    descripcion: "Árbol nativo de Chile y Argentina, conocido como 'pehuén'. Puede vivir más de 1000 años y es considerado sagrado por el pueblo Mapuche.",
    imagen: "/placeholder.svg?height=300&width=400&text=Araucaria",
    habitat: "Cordillera de los Andes y Cordillera de la Costa, entre 900 y 1800 m de altitud."
  },
  {
    nombre: "Copihue",
    nombreCientifico: "Lapageria rosea",
    descripcion: "Flor nacional de Chile. Es una enredadera con hermosas flores en forma de campana, generalmente de color rojo intenso.",
    imagen: "/placeholder.svg?height=300&width=400&text=Copihue",
    habitat: "Bosques templados del sur de Chile, desde la Región del Maule hasta la Región de Los Lagos."
  },
  {
    nombre: "Alerce",
    nombreCientifico: "Fitzroya cupressoides",
    descripcion: "Una de las especies de árboles más longevas del mundo, puede vivir más de 3600 años. Está en peligro de extinción debido a la tala excesiva.",
    imagen: "/placeholder.svg?height=300&width=400&text=Alerce",
    habitat: "Cordillera de la Costa y Cordillera de los Andes, desde la Región de Los Ríos hasta la Región de Los Lagos."
  },
]

export default function Flora() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <Link href="/biodiversidad" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Volver a Biodiversidad
        </Link>
        <h1 className="text-4xl font-bold text-green-800 mb-8">Flora de Chile</h1>
        <p className="text-xl text-green-700 mb-8">
          La flora chilena es excepcionalmente diversa y única, con un alto grado de endemismo. Desde las plantas adaptadas al desierto más árido del mundo hasta las especies que prosperan en los bosques lluviosos del sur, la flora de Chile es un tesoro de biodiversidad.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {especiesFlora.map((especie, index) => (
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

