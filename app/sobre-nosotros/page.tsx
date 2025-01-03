import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Leaf, Users, BookOpen, Target } from 'lucide-react'

export default function SobreNosotros() {
  const valores = [
    { titulo: "Conservación", descripcion: "Protegemos y preservamos la biodiversidad chilena.", icon: Leaf },
    { titulo: "Educación", descripcion: "Fomentamos el aprendizaje y la conciencia ecológica.", icon: BookOpen },
    { titulo: "Comunidad", descripcion: "Construimos una red activa de entusiastas de la naturaleza.", icon: Users },
    { titulo: "Innovación", descripcion: "Buscamos soluciones creativas para los desafíos ambientales.", icon: Target },
  ]

  const equipo = [
    { nombre: "María González", cargo: "Directora Ejecutiva", imagen: "/placeholder.svg" },
    { nombre: "Carlos Rodríguez", cargo: "Jefe de Investigación", imagen: "/placeholder.svg" },
    { nombre: "Ana Martínez", cargo: "Coordinadora de Proyectos", imagen: "/placeholder.svg" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Sobre Nosotros</h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Nuestra Misión</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-lg text-green-600 italic">
                "Nuestra misión es promover la conservación de la biodiversidad chilena a través de la educación, 
                la investigación y la participación comunitaria, proporcionando una plataforma integral de información 
                y recursos que inspire y empodere a las personas para proteger y valorar nuestros ecosistemas únicos."
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Nuestra Visión</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-lg text-green-600 italic">
                "Aspiramos a ser el referente líder en información sobre biodiversidad en Chile, catalizando un 
                movimiento nacional de conciencia ecológica y acción conservacionista. Visualizamos un futuro donde 
                cada ciudadano chileno comprenda, aprecie y participe activamente en la preservación de nuestro 
                patrimonio natural, asegurando un legado de biodiversidad para las generaciones futuras."
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Nuestros Valores</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {valores.map((valor, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <valor.icon className="w-6 h-6 mr-2 text-green-600" />
                    {valor.titulo}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{valor.descripcion}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Nuestro Equipo</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {equipo.map((miembro, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <Image
                    src={miembro.imagen}
                    alt={miembro.nombre}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4"
                  />
                  <CardTitle className="mb-2">{miembro.nombre}</CardTitle>
                  <CardDescription>{miembro.cargo}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

