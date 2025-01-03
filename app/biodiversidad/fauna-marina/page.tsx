import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from 'lucide-react'

const especiesFaunaMarina = [
  {
    nombre: "Ballena Azul",
    nombreCientifico: "Balaenoptera musculus",
    descripcion: "La ballena azul es el animal más grande que ha existido en la Tierra. Chile es un importante lugar de alimentación y crianza para esta especie.",
    imagen: "/placeholder.svg?height=300&width=400&text=Ballena+Azul",
    habitat: "Océano Pacífico, especialmente en las aguas del sur de Chile."
  },
  {
    nombre: "Pingüino de Humboldt",
    nombreCientifico: "Spheniscus humboldti",
    descripcion: "Esta especie de pingüino es endémica de las costas de Chile y Perú. Está en peligro de extinción debido a la sobrepesca y la contaminación.",
    imagen: "/placeholder.svg?height=300&width=400&text=Pingüino+de+Humboldt",
    habitat: "Costas rocosas e islas del norte y centro de Chile."
  },
  {
    nombre: "Lobo Marino Sudamericano",
    nombreCientifico: "Otaria flavescens",
    descripcion: "También conocido como lobo marino de un pelo, es una especie común en las costas chilenas y juega un papel importante en el ecosistema marino.",
    imagen: "/placeholder.svg?height=300&width=400&text=Lobo+Marino+Sudamericano",
    habitat: "Costas e islas a lo largo de todo Chile."
  },
]

export default function FaunaMarina() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <Link href="/biodiversidad" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Volver a Biodiversidad
        </Link>
        <h1 className="text-4xl font-bold text-green-800 mb-8">Fauna Marina de Chile</h1>
        <p className="text-xl text-green-700 mb-8">
          Las aguas chilenas, que se extienden a lo largo de más de 4,000 km de costa, albergan una extraordinaria diversidad de vida marina. Desde las aguas frías del sur hasta las más templadas del norte, la fauna marina de Chile incluye una amplia variedad de especies, desde pequeños crustáceos hasta grandes mamíferos marinos.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {especiesFaunaMarina.map((especie, index) => (
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

