'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Mail, Facebook, Instagram } from 'lucide-react'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })
      if (res?.error) {
        setError('Invalid email or password')
      } else if (res?.ok) {
        router.push('/dashboard')
      }
    } catch (error) {
      console.error('Login failed:', error)
      setError('An error occurred during login')
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Iniciar Sesión</CardTitle>
        <CardDescription className="text-center">Ingresa a tu cuenta o usa un proveedor social</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="w-full">Iniciar Sesión</Button>
        </form>
        <div className="mt-4 space-y-2">
          <Button 
            onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
            className="w-full flex items-center justify-center"
            variant="outline"
          >
            <Mail className="mr-2 h-4 w-4" />
            Iniciar sesión con Google
          </Button>
          <Button 
            onClick={() => signIn('facebook', { callbackUrl: '/dashboard' })}
            className="w-full flex items-center justify-center"
            variant="outline"
          >
            <Facebook className="mr-2 h-4 w-4" />
            Iniciar sesión con Facebook
          </Button>
          <Button 
            onClick={() => signIn('instagram', { callbackUrl: '/dashboard' })}
            className="w-full flex items-center justify-center"
            variant="outline"
          >
            <Instagram className="mr-2 h-4 w-4" />
            Iniciar sesión con Instagram
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

