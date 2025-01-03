'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { MapPin, ChevronRight } from 'lucide-react'

// Datos de ejemplo para el gráfico
const especiesData = [
  { region: 'Norte', mamiferos: 45, aves: 120, reptiles: 30, anfibios: 5, peces: 80 },
  { region: 'Centro', mamiferos: 60, aves: 180, reptiles: 25, anfibios: 15, peces: 70 },
  { region: 'Sur', mamiferos: 55, aves: 150, reptiles: 20, anfibios: 25, peces: 90 },
  { region: 'Austral', mamiferos: 40, aves: 100, reptiles: 10, anfibios: 8, peces: 60 },
]

export default function ExploradorBiodiversidad() {
  const [selectedRegion, setSelectedRegion] = useState('Norte')

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Explorador de Biodiversidad</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Mapa Interactivo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Mapa interactivo aquí</span>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Nota: En una implementación real, aquí se integraría un mapa interactivo 
                  de Chile con datos de biodiversidad por región.
                </p>
                <div className="mt-4">
                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una región" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Norte">Región Norte</SelectItem>
                      <SelectItem value="Centro">Región Centro</SelectItem>
                      <SelectItem value="Sur">Región Sur</SelectItem>
                      <SelectItem value="Austral">Región Austral</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="mt-4">
                  <Button className="w-full">
                    <MapPin className="w-4 h-4 mr-2" />
                    Ver detalles de {selectedRegion}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Estadísticas de Biodiversidad</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="grafico">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="grafico">Gráfico</TabsTrigger>
                    <TabsTrigger value="tabla">Tabla</TabsTrigger>
                  </TabsList>
                  <TabsContent value="grafico">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={especiesData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="region" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="mamiferos" fill="#8884d8" />
                        <Bar dataKey="aves" fill="#82ca9d" />
                        <Bar dataKey="reptiles" fill="#ffc658" />
                        <Bar dataKey="anfibios" fill="#ff8042" />
                        <Bar dataKey="peces" fill="#0088FE" />
                      </BarChart>
                    </ResponsiveContainer>
                  </TabsContent>
                  <TabsContent value="tabla">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr>
                            <th className="text-left p-2">Región</th>
                            <th className="text-left p-2">Mamíferos</th>
                            <th className="text-left p-2">Aves</th>
                            <th className="text-left p-2">Reptiles</th>
                            <th className="text-left p-2">Anfibios</th>
                            <th className="text-left p-2">Peces</th>
                          </tr>
                        </thead>
                        <tbody>
                          {especiesData.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                              <td className="p-2">{item.region}</td>
                              <td className="p-2">{item.mamiferos}</td>
                              <td className="p-2">{item.aves}</td>
                              <td className="p-2">{item.reptiles}</td>
                              <td className="p-2">{item.anfibios}</td>
                              <td className="p-2">{item.peces}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>
        </div>

        <section className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl mb-2">Especies Destacadas en {selectedRegion}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Aquí se mostrarían las especies más representativas o en peligro de la región seleccionada.
              </p>
              <Button>
                Ver todas las especies de {selectedRegion}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="mt-12 bg-green-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Contribuye a la Ciencia Ciudadana</h2>
          <p className="mb-6 text-lg">
            Ayúdanos a mapear la biodiversidad de Chile. Reporta avistamientos de especies y contribuye a nuestro conocimiento colectivo.
          </p>
          <Button variant="secondary" size="lg">
            Reportar avistamiento
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </section>
      </main>
    </div>
  )
}

