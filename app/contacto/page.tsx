import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contacto() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Contacto</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-xl text-green-700 mb-6">
              Estamos aquí para responder tus preguntas y escuchar tus sugerencias. No dudes en contactarnos.
            </p>
            <form className="space-y-4">
              <Input type="text" placeholder="Nombre" />
              <Input type="email" placeholder="Correo electrónico" />
              <Input type="text" placeholder="Asunto" />
              <Textarea placeholder="Mensaje" rows={4} />
              <Button type="submit" className="w-full">Enviar mensaje</Button>
            </form>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Información de contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-green-600" />
                  <span>info@biodiversidad.cl</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-green-600" />
                  <span>+56 2 1234 5678</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-green-600" />
                  <span>Santiago, Chile</span>
                </div>
              </CardContent>
            </Card>
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Ubicación</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Mapa aquí</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

