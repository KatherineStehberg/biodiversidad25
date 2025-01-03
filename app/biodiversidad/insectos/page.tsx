import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from 'lucide-react'

const especiesInsectos = [
  {
    nombre: "Ciervo Volante",
    nombreCientifico: "Chiasognathus grantii",
    descripcion: "Este escarabajo es conocido por sus enormes mandíbulas que recuerdan a los cuernos de un ciervo. Es una especie emblemática de los bosques del sur de Chile.",
    imagen: "/placeholder.svg?height=300&width=400&text=Ciervo+Volante",
    habitat: "Bosques templados del sur de Chile, especialmente en la Región de Los Ríos y Los Lagos."
  },
  {
    nombre: "Mariposa del Chagual",
    nombreCientifico: "Castnia eudesmia",
    descripcion: "Esta mariposa es endémica de Chile y está asociada a la planta del chagual. Es una de las mariposas más grandes del país.",
    imagen: "/placeholder.svg?height=300&width=400&text=Mariposa+del+Chagual",
    habitat: "Zonas costeras y valles centrales de Chile, desde la Región de Coquimbo hasta la Región del Maule."
  },
  {
    nombre: "Abejorro Chileno",
    nombreCientifico: "Bombus dahlbomii",
    descripcion: "Es el abejorro más grande del mundo y un importante polinizador en los ecosistemas del sur de Chile. Lamentablemente, está en peligro de extinción.",
    imagen: "/placeholder.svg?height=300&width=400&text=Abejorro+Chileno",
    habitat: "Bosques templados y subantárticos del sur de Chile y Argentina."
  },
]

export default function Insectos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <Link href="/biodiversidad" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Volver a Biodiversidad
        </Link>
        <h1 className="text-4xl font-bold text-green-800 mb-8">Insectos de Chile</h1>
        <p className="text-xl text-green-700 mb-8">
          Los insectos de Chile son una parte fundamental de la biodiversidad del país, desempeñando roles cruciales en los ecosistemas como polinizadores, descomponedores y fuente de alimento para otras especies. La diversidad de insectos en Chile refleja la variedad de hábitats del país, desde el desierto hasta los bosques templados y la Patagonia.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {especiesInsectos.map((especie, index) => (
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

