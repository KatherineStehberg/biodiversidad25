'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Leaf, Fish, Bird, Bug } from 'lucide-react'

// Datos de ejemplo para las especies
const especiesEjemplo = [
  { id: 1, nombre: "Copihue", nombreCientifico: "Lapageria rosea", tipo: "Flora", imagen: "/placeholder.svg", estado: "Preocupación menor" },
  { id: 2, nombre: "Cóndor andino", nombreCientifico: "Vultur gryphus", tipo: "Fauna", imagen: "/placeholder.svg", estado: "Casi amenazada" },
  { id: 3, nombre: "Alerce", nombreCientifico: "Fitzroya cupressoides", tipo: "Flora", imagen: "/placeholder.svg", estado: "En peligro" },
  { id: 4, nombre: "Huemul", nombreCientifico: "Hippocamelus bisulcus", tipo: "Fauna", imagen: "/placeholder.svg", estado: "En peligro" },
  { id: 5, nombre: "Chinchilla de cola larga", nombreCientifico: "Chinchilla lanigera", tipo: "Fauna", imagen: "/placeholder.svg", estado: "En peligro crítico" },
  { id: 6, nombre: "Araucaria", nombreCientifico: "Araucaria araucana", tipo: "Flora", imagen: "/placeholder.svg", estado: "En peligro" },
]

export default function BaseDatos() {
  const [busqueda, setBusqueda] = useState('')
  const [filtroTipo, setFiltroTipo] = useState('')

  const especiesFiltradas = especiesEjemplo.filter(especie => 
    especie.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
    (filtroTipo === '' || especie.tipo === filtroTipo)
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Base de Datos de Especies</h1>
        
        <section className="mb-12">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow">
                  <Input
                    type="text"
                    placeholder="Buscar especies..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div className="w-full md:w-48">
                  <Select value={filtroTipo} onValueChange={setFiltroTipo}>
                    <SelectTrigger>
                      <SelectValue placeholder="Filtrar por tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Todos</SelectItem>
                      <SelectItem value="Flora">Flora</SelectItem>
                      <SelectItem value="Fauna">Fauna</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button>
                  <Search className="w-4 h-4 mr-2" />
                  Buscar
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {especiesFiltradas.map((especie) => (
              <Card key={especie.id} className="overflow-hidden">
                <Image
                  src={especie.imagen}
                  alt={especie.nombre}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{especie.nombre}</CardTitle>
                    <Badge variant={especie.tipo === 'Flora' ? 'default' : 'secondary'}>
                      {especie.tipo === 'Flora' ? <Leaf className="w-3 h-3 mr-1" /> : <Bird className="w-3 h-3 mr-1" />}
                      {especie.tipo}
                    </Badge>
                  </div>
                  <CardDescription className="italic">{especie.nombreCientifico}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Estado de conservación:</p>
                  <p className="font-semibold text-green-700">{especie.estado}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Ver detalles
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {especiesFiltradas.length === 0 && (
          <p className="text-center text-gray-600 mt-8">No se encontraron especies que coincidan con tu búsqueda.</p>
        )}

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">¿No encuentras la especie que buscas?</h2>
          <p className="text-gray-600 mb-6">Nuestra base de datos está en constante crecimiento. Si conoces una especie que debería estar aquí, ¡cuéntanos!</p>
          <Button>
            Sugerir una especie
          </Button>
        </section>
      </main>
    </div>
  )
}

