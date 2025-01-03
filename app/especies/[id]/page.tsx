import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, MapPin, AlertTriangle, Camera, ExternalLink } from 'lucide-react'

// Esta es una función mock para simular la obtención de datos de una especie
// En una implementación real, esto se conectaría a una base de datos o API
function getEspecie(id: string) {
  return {
    id: id,
    nombre: "Araucaria",
    nombreCientifico: "Araucaria araucana",
    tipo: "Flora",
    imagen: "/placeholder.svg",
    estado: "En peligro",
    descripcion: "La Araucaria araucana, conocida comúnmente como araucaria o pehuén, es una especie arbórea siempreverde originaria del centro-sur de Chile y del sudoeste de Argentina. Es considerada un fósil viviente y está protegida por ley en ambos países.",
    habitat: "Se encuentra en la Cordillera de los Andes y en la Cordillera de la Costa, entre los 900 y 1.800 metros sobre el nivel del mar.",
    distribucion: "Centro-sur de Chile y sudoeste de Argentina",
    amenazas: [
      "Tala ilegal",
      "Incendios forestales",
      "Cambio climático",
      "Sobrepastoreo"
    ],
    esfuerzosConservacion: "Existen varios programas de conservación in situ y ex situ, incluyendo la creación de áreas protegidas y la propagación en jardines botánicos.",
    datosInteresantes: [
      "Puede vivir más de 1000 años",
      "Sus semillas, conocidas como piñones, son comestibles y han sido parte importante de la dieta de los pueblos originarios",
      "Es el árbol nacional de Chile"
    ]
  }
}

export default function EspeciePage({ params }: { params: { id: string } }) {
  const especie = getEspecie(params.id)

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <Link href="/base-datos" className="text-green-600 hover:underline mb-4 inline-block">
          &larr; Volver a la base de datos
        </Link>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Image
              src={especie.imagen}
              alt={especie.nombre}
              width={400}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
            <div className="mt-4 space-y-2">
              <Badge variant={especie.tipo === 'Flora' ? 'default' : 'secondary'} className="w-full justify-center text-lg py-1">
                {especie.tipo === 'Flora' ? <Leaf className="w-5 h-5 mr-2" /> : null}
                {especie.tipo}
              </Badge>
              <Badge variant="destructive" className="w-full justify-center text-lg py-1">
                <AlertTriangle className="w-5 h-5 mr-2" />
                {especie.estado}
              </Badge>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-green-800">{especie.nombre}</h1>
              <p className="text-xl italic text-green-600">{especie.nombreCientifico}</p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Hábitat y Distribución
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{especie.habitat}</p>
                <p className="mt-2"><strong>Distribución:</strong> {especie.distribucion}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Amenazas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  {especie.amenazas.map((amenaza, index) => (
                    <li key={index}>{amenaza}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Esfuerzos de Conservación</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{especie.esfuerzosConservacion}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Camera className="w-5 h-5 mr-2" />
                  Datos Interesantes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  {especie.datosInteresantes.map((dato, index) => (
                    <li key={index}>{dato}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <div className="flex justify-between items-center">
              <Button variant="outline">
                <Camera className="w-4 h-4 mr-2" />
                Galería de imágenes
              </Button>
              <Button>
                <ExternalLink className="w-4 h-4 mr-2" />
                Más información
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

