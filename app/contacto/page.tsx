'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    // Resetear el formulario después del envío
    setFormData({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Contacto</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Envíanos un mensaje</CardTitle>
                <CardDescription>
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="asunto">Asunto</Label>
                    <Input
                      id="asunto"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje</Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Información de contacto</CardTitle>
                <CardDescription>
                  Puedes contactarnos directamente a través de los siguientes medios:
                </CardDescription>
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
                  <span>Av. Naturaleza 123, Santiago, Chile</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Nuestra ubicación</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Mapa aquí</span>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Nota: En una implementación real, aquí se integraría un mapa interactivo 
                  utilizando servicios como Google Maps o Mapbox.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>

        <section className="mt-12 bg-green-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">¿Prefieres hablar en persona?</h2>
          <p className="mb-6 text-lg">
            Agenda una visita a nuestras oficinas para conocer más sobre nuestro trabajo y cómo puedes involucrarte.
          </p>
          <Button variant="secondary" size="lg">
            Agendar una visita
          </Button>
        </section>
      </main>
    </div>
  )
}


