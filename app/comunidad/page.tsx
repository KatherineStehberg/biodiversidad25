import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Users, Camera, ChevronRight, Award, Leaf, MessageSquare } from 'lucide-react'

const eventos = [
  {
    titulo: "Expedición Fotográfica: Bosque Valdiviano",
    fecha: "2025-07-15",
    ubicacion: "Parque Nacional Alerce Costero",
    imagen: "/placeholder.svg",
    descripcion: "Únete a nuestra expedición fotográfica para capturar la belleza del bosque valdiviano y sus especies únicas."
  },
  {
    titulo: "Taller de Ciencia Ciudadana: Monitoreo de Aves",
    fecha: "2025-08-02",
    ubicacion: "Reserva Nacional El Yali",
    imagen: "/placeholder.svg",
    descripcion: "Aprende técnicas de observación y registro de aves mientras contribuyes a nuestro proyecto de monitoreo a largo plazo."
  },
  {
    titulo: "Hackathon por la Biodiversidad",
    fecha: "2025-09-10",
    ubicacion: "Santiago, Chile (y virtual)",
    imagen: "/placeholder.svg",
    descripcion: "Desarrolla soluciones tecnológicas innovadoras para los desafíos de conservación en Chile."
  }
]

const proyectosCiudadanos = [
  {
    titulo: "Mapa Colaborativo de Especies Invasoras",
    participantes: 1250,
    imagen: "/placeholder.svg",
    descripcion: "Ayuda a identificar y mapear especies invasoras en tu área local utilizando nuestra app de RA."
  },
  {
    titulo: "Monitoreo de Calidad del Agua",
    participantes: 890,
    imagen: "/placeholder.svg",
    descripcion: "Contribuye a la recolección de datos sobre la calidad del agua en ríos y lagos de Chile."
  },
  {
    titulo: "Censo Virtual de Polinizadores",
    participantes: 2100,
    imagen: "/placeholder.svg",
    descripcion: "Observa y registra polinizadores en tu jardín o parque local para ayudar en su conservación."
  }
]

const miembrosDestacados = [
  {
    nombre: "Dra. Ana Morales",
    rol: "Bióloga Marina",
    avatar: "/placeholder.svg",
    contribucion: "Lideró el proyecto de conservación de la ballena azul en la Patagonia."
  },
  {
    nombre: "Carlos Fuentes",
    rol: "Fotógrafo de Naturaleza",
    avatar: "/placeholder.svg",
    contribucion: "Sus fotografías han ayudado a crear conciencia sobre especies en peligro."
  },
  {
    nombre: "Valentina Rojas",
    rol: "Estudiante de Ecología",
    avatar: "/placeholder.svg",
    contribucion: "Desarrolló una app para identificar plantas nativas chilenas."
  }
]

export default function Comunidad() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Comunidad</h1>
        
        <section className="mb-12">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">Únete a nuestra comunidad de entusiastas de la biodiversidad</h2>
              <p className="text-lg text-gray-700 mb-6">
                Conecta con otros apasionados por la naturaleza, participa en proyectos de ciencia ciudadana y contribuye a la conservación de la biodiversidad chilena.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Networking
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Conecta con expertos, investigadores y entusiastas de la biodiversidad de todo Chile.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Leaf className="w-5 h-5 mr-2" />
                      Proyectos de Conservación
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Participa en iniciativas locales y nacionales para proteger nuestros ecosistemas.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="w-5 h-5 mr-2" />
                      Reconocimientos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Gana insignias y reconocimientos por tus contribuciones a la ciencia ciudadana.
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Explora y Participa</h2>
          <Tabs defaultValue="eventos">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="eventos">Eventos</TabsTrigger>
              <TabsTrigger value="proyectos">Proyectos Ciudadanos</TabsTrigger>
            </TabsList>
            <TabsContent value="eventos">
              <div className="grid md:grid-cols-3 gap-6">
                {eventos.map((evento, index) => (
                  <Card key={index} className="flex flex-col">
                    <Image
                      src={evento.imagen}
                      alt={evento.titulo}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardHeader>
                      <CardTitle className="text-xl">{evento.titulo}</CardTitle>
                      <CardDescription>
                        <div className="flex items-center mt-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(evento.fecha).toLocaleDateString()}
                        </div>
                        <div className="flex items-center mt-1">
                          <MapPin className="w-4 h-4 mr-2" />
                          {evento.ubicacion}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{evento.descripcion}</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        Inscribirse
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="proyectos">
              <div className="grid md:grid-cols-3 gap-6">
                {proyectosCiudadanos.map((proyecto, index) => (
                  <Card key={index} className="flex flex-col">
                    <Image
                      src={proyecto.imagen}
                      alt={proyecto.titulo}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardHeader>
                      <CardTitle className="text-xl">{proyecto.titulo}</CardTitle>
                      <Badge className="mt-2">
                        <Users className="w-4 h-4 mr-1" />
                        {proyecto.participantes} participantes
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{proyecto.descripcion}</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        Unirse al proyecto
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Miembros Destacados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {miembrosDestacados.map((miembro, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={miembro.avatar} alt={miembro.nombre} />
                      <AvatarFallback>{miembro.nombre.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{miembro.nombre}</CardTitle>
                      <CardDescription>{miembro.rol}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{miembro.contribucion}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Ver perfil
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-green-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">¿Listo para unirte a nuestra comunidad?</h2>
          <p className="mb-6 text-lg">
            Crea tu perfil hoy y comienza a conectar con otros entusiastas de la biodiversidad, participa en proyectos emocionantes y contribuye a la conservación de la naturaleza chilena.
          </p>
          <Button variant="secondary" size="lg">
            Crear cuenta
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </section>
      </main>
    </div>
  )
}

