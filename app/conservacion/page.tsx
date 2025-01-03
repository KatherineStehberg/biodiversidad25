import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChevronRight, Leaf, Shield, TreesIcon as Tree } from 'lucide-react'

export default function Conservacion() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Conservación</h1>
        
        <section className="mb-12">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">Nuestro Compromiso con la Conservación</h2>
              <p className="text-lg text-gray-700 mb-6">
                En Biodiversidad.cl, nos dedicamos a proteger y preservar la rica biodiversidad de Chile. Nuestros esfuerzos se centran en la conservación de especies en peligro y la protección de ecosistemas críticos.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Leaf className="w-5 h-5 mr-2" />
                      Especies Protegidas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Trabajamos en la protección de especies emblemáticas y en peligro de extinción, como el huemul, la chinchilla de cola larga y el pingüino de Humboldt.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Tree className="w-5 h-5 mr-2" />
                      Restauración de Hábitats
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Implementamos proyectos de restauración ecológica en áreas degradadas, recuperando bosques nativos y humedales.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="w-5 h-5 mr-2" />
                      Áreas Protegidas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Colaboramos en la creación y gestión de áreas protegidas para salvaguardar ecosistemas críticos y su biodiversidad.
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Proyectos Destacados</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <Image
                src="/placeholder.svg"
                alt="Proyecto de Conservación del Huemul"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>Conservación del Huemul</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Programa de monitoreo y protección del huemul en la Patagonia chilena, incluyendo estudios de población y mejora de hábitat.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/placeholder.svg"
                alt="Restauración de Bosques Nativos"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>Restauración de Bosques Nativos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Iniciativa de reforestación con especies nativas en áreas degradadas de la Cordillera de la Costa, promoviendo la regeneración del ecosistema.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-green-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Únete a Nuestros Esfuerzos de Conservación</h2>
          <p className="mb-6 text-lg">
            Tu apoyo es crucial para proteger la biodiversidad de Chile. Descubre cómo puedes contribuir a nuestros proyectos de conservación.
          </p>
          <Link href="/proyectos-conservacion">
            <Button variant="secondary" size="lg">
              Participar en Proyectos
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </section>
      </main>
    </div>
  )
}

