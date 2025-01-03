import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Users, Target, Award, Leaf, Globe, Shield } from 'lucide-react'

const equipo = [
  {
    nombre: "Dra. María González",
    cargo: "Directora Ejecutiva",
    bio: "Con más de 20 años de experiencia en conservación, María lidera nuestra organización con pasión y visión estratégica.",
    imagen: "/placeholder.svg"
  },
  {
    nombre: "Dr. Carlos Rodríguez",
    cargo: "Director de Investigación",
    bio: "Carlos coordina nuestros proyectos de investigación, enfocándose en la aplicación de tecnologías avanzadas para la conservación.",
    imagen: "/placeholder.svg"
  },
  {
    nombre: "Ing. Ana Martínez",
    cargo: "Jefa de Tecnología",
    bio: "Ana está a cargo de nuestras plataformas digitales y el desarrollo de herramientas innovadoras para el estudio de la biodiversidad.",
    imagen: "/placeholder.svg"
  },
  {
    nombre: "Lic. Pedro Soto",
    cargo: "Coordinador de Educación",
    bio: "Pedro diseña y supervisa nuestros programas educativos, acercando la ciencia de la biodiversidad a estudiantes de todas las edades.",
    imagen: "/placeholder.svg"
  }
]

const logros = [
  {
    año: "2023",
    descripcion: "Lanzamiento de la app de realidad aumentada para identificación de especies nativas."
  },
  {
    año: "2024",
    descripcion: "Implementación del primer censo nacional de biodiversidad utilizando ciencia ciudadana y IA."
  },
  {
    año: "2025",
    descripcion: "Establecimiento de la red nacional de monitoreo de ecosistemas en tiempo real."
  }
]

export default function SobreNosotros() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Sobre Nosotros</h1>
        
        <section className="mb-12">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">Nuestra Misión</h2>
              <p className="text-lg text-gray-700 mb-6">
                En Biodiversidad.cl, nos dedicamos a la conservación, estudio y promoción de la rica biodiversidad de Chile. 
                Trabajamos incansablemente para crear conciencia, fomentar la investigación y desarrollar soluciones 
                innovadoras que protejan nuestros ecosistemas únicos para las generaciones futuras.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Leaf className="w-5 h-5 mr-2" />
                      Conservación
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Implementamos proyectos de conservación basados en evidencia científica y colaboración comunitaria.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Globe className="w-5 h-5 mr-2" />
                      Educación
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Desarrollamos programas educativos innovadores para inspirar la próxima generación de conservacionistas.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="w-5 h-5 mr-2" />
                      Investigación
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Llevamos a cabo investigaciones de vanguardia para comprender mejor y proteger nuestra biodiversidad.
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Nuestro Equipo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <CardDescription className="mb-4">{miembro.cargo}</CardDescription>
                  <p className="text-sm text-gray-600">{miembro.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Nuestra Historia y Logros</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="historia">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="historia">Nuestra Historia</TabsTrigger>
                  <TabsTrigger value="logros">Logros Recientes</TabsTrigger>
                </TabsList>
                <TabsContent value="historia">
                  <p className="mb-4">
                    Fundada en 2020, Biodiversidad.cl nació de la pasión compartida de un grupo de científicos, 
                    conservacionistas y tecnólogos chilenos. Nuestra visión era crear una plataforma integral que 
                    combinara la ciencia de vanguardia con la participación ciudadana para proteger la extraordinaria 
                    biodiversidad de Chile.
                  </p>
                  <p>
                    A lo largo de los años, hemos crecido hasta convertirnos en un referente nacional en la 
                    investigación y conservación de la biodiversidad, colaborando con instituciones académicas, 
                    organizaciones gubernamentales y comunidades locales en todo el país.
                  </p>
                </TabsContent>
                <TabsContent value="logros">
                  <ul className="space-y-4">
                    {logros.map((logro, index) => (
                      <li key={index} className="flex items-start">
                        <span className="font-bold mr-2">{logro.año}:</span>
                        <span>{logro.descripcion}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Nuestros Valores</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Colaboración
                </CardTitle>
              </CardHeader>
              <CardContent>
                Creemos en el poder de la colaboración entre científicos, comunidades locales y ciudadanos para lograr nuestros objetivos de conservación.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Innovación
                </CardTitle>
              </CardHeader>
              <CardContent>
                Buscamos constantemente nuevas tecnologías y enfoques para mejorar nuestro entendimiento y protección de la biodiversidad.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Excelencia
                </CardTitle>
              </CardHeader>
              <CardContent>
                Nos esforzamos por mantener los más altos estándares en nuestra investigación, educación y proyectos de conservación.
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-green-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Únete a Nuestra Misión</h2>
          <p className="mb-6 text-lg">
            Ya sea como voluntario, investigador o patrocinador, hay muchas maneras de contribuir a la conservación de la biodiversidad chilena.
          </p>
          <Button variant="secondary" size="lg">
            Descubre cómo participar
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </section>
      </main>
    </div>
  )
}


