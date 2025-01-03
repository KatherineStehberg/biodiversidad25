import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { ChevronRight, Leaf, Fish, Bird, Bug } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Biodiversidad() {
  const categorias = [
    { 
      titulo: "Flora", 
      descripcion: "Chile alberga más de 5,000 especies de plantas nativas, con un alto nivel de endemismo. Desde los resilientes cactus del desierto de Atacama hasta los majestuosos bosques de Araucarias en la Patagonia, la flora chilena es diversa y única.", 
      icon: Leaf, 
      imagen: "/placeholder.svg?height=200&width=400&text=Flora+Chilena",
      ejemplos: "Alerce, Copihue, Araucaria",
      link: "/biodiversidad/flora"
    },
    { 
      titulo: "Fauna Terrestre", 
      descripcion: "La fauna terrestre de Chile incluye una variedad de mamíferos, reptiles y anfibios adaptados a diversos hábitats. Muchas especies son endémicas, lo que significa que no se encuentran en ningún otro lugar del mundo.", 
      icon: Bird, 
      imagen: "/placeholder.svg?height=200&width=400&text=Fauna+Terrestre+Chilena",
      ejemplos: "Puma, Huemul, Zorro Culpeo",
      link: "/biodiversidad/fauna-terrestre"
    },
    { 
      titulo: "Fauna Marina", 
      descripcion: "Con más de 4,000 km de costa, Chile posee una rica biodiversidad marina. Las aguas chilenas albergan desde pequeños crustáceos hasta grandes mamíferos marinos, muchos de los cuales son cruciales para los ecosistemas oceánicos.", 
      icon: Fish, 
      imagen: "/placeholder.svg?height=200&width=400&text=Fauna+Marina+Chilena",
      ejemplos: "Ballena Azul, Pingüino de Humboldt, Lobo Marino",
      link: "/biodiversidad/fauna-marina"
    },
    { 
      titulo: "Insectos", 
      descripcion: "Los insectos de Chile son diversos y juegan roles vitales en los ecosistemas. Desde polinizadores esenciales hasta descomponedores, los insectos chilenos son fundamentales para la salud de los hábitats naturales del país.", 
      icon: Bug, 
      imagen: "/placeholder.svg?height=200&width=400&text=Insectos+Chilenos",
      ejemplos: "Ciervo Volante, Mariposa del Chagual, Abejorro Chileno",
      link: "/biodiversidad/insectos"
    },
  ]

  const especiesDestacadas = [
    { 
      nombre: "Huemul", 
      descripcion: "El huemul (Hippocamelus bisulcus) es un ciervo endémico de los Andes patagónicos y uno de los símbolos nacionales de Chile. Está en peligro de extinción, con una población estimada de menos de 2,000 individuos en la naturaleza.", 
      imagen: "/placeholder.svg?height=300&width=400&text=Huemul",
      estado: "En peligro de extinción"
    },
    { 
      nombre: "Copihue", 
      descripcion: "El copihue (Lapageria rosea) es la flor nacional de Chile. Esta planta trepadora produce hermosas flores en forma de campana, generalmente de color rojo intenso. Es endémica de los bosques templados del sur de Chile.", 
      imagen: "/placeholder.svg?height=300&width=400&text=Copihue",
      estado: "Preocupación menor"
    },
    { 
      nombre: "Cóndor Andino", 
      descripcion: "El cóndor andino (Vultur gryphus) es una de las aves voladoras más grandes del mundo, con una envergadura que puede superar los 3 metros. Es un símbolo importante en la cultura andina y juega un papel crucial en el ecosistema como carroñero.", 
      imagen: "/placeholder.svg?height=300&width=400&text=Cóndor+Andino",
      estado: "Casi amenazado"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Biodiversidad de Chile</h1>
        <p className="text-xl text-green-700 mb-8">
          Chile alberga una rica y única biodiversidad, resultado de su geografía variada y su aislamiento natural. Desde el árido desierto de Atacama en el norte hasta los glaciares de la Patagonia en el sur, el país ofrece una amplia gama de hábitats que sustentan una diversidad extraordinaria de vida.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {categorias.map((categoria, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={categoria.imagen}
                alt={categoria.titulo}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="flex items-center">
                  <categoria.icon className="w-6 h-6 mr-2 text-green-600" />
                  {categoria.titulo}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{categoria.descripcion}</CardDescription>
                <p className="mt-2 text-sm text-green-600">Ejemplos: {categoria.ejemplos}</p>
              </CardContent>
              <CardFooter>
                <Link href={categoria.link} className="w-full">
                  <Button className="w-full">
                    Explorar {categoria.titulo}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Especies Destacadas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {especiesDestacadas.map((especie, index) => (
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
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {especie.descripcion}
                  </CardDescription>
                  <p className="mt-2 text-sm font-semibold text-green-600">Estado: {especie.estado}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Leer más <ChevronRight className="ml-2 h-4 w-4" />
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


