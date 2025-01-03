'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Home, Leaf, Briefcase, BookOpen, Users, Mail, Info, User, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"

const navItems = [
  { name: 'Inicio', href: '/', icon: Home },
  { name: 'Biodiversidad', href: '/biodiversidad', icon: Leaf },
  { name: 'Proyectos', href: '/proyectos', icon: Briefcase },
  { name: 'Investigación', href: '/investigacion', icon: BookOpen },
  { name: 'Recursos', href: '/recursos-educativos', icon: BookOpen },
  { name: 'Comunidad', href: '/comunidad', icon: Users },
  { name: 'Nosotros', href: '/sobre-nosotros', icon: Info },
  { name: 'Contacto', href: '/contacto', icon: Mail },
]

export function MainNav() {
  const { data: session } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <Image src="/placeholder.svg" alt="Biodiversidad.cl Logo" width={180} height={40} />
          </Link>
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 hover:text-green-600 transition-colors"
              >
                <item.icon className="w-5 h-5 mr-1 inline-block" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            {!session ? (
              <Link href="/iniciar-sesion">
                <Button variant="outline" className="text-green-800 hover:text-green-600 transition-colors">
                  Iniciar Sesión
                </Button>
              </Link>
            ) : (
              <Link href="/dashboard">
                <Button variant="outline" className="flex items-center text-green-800 hover:text-green-600 transition-colors">
                  <User className="w-5 h-5 mr-2" />
                  <span>Mi Dashboard</span>
                </Button>
              </Link>
            )}
          </div>
          <button
            className="lg:hidden text-green-800 hover:text-green-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-green-800 hover:bg-green-100 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="w-5 h-5 mr-2 inline-block" />
                <span>{item.name}</span>
              </Link>
            ))}
            {!session ? (
              <Link
                href="/iniciar-sesion"
                className="block px-3 py-2 rounded-md text-base font-medium text-green-800 hover:bg-green-100 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Iniciar Sesión
              </Link>
            ) : (
              <Link
                href="/dashboard"
                className="block px-3 py-2 rounded-md text-base font-medium text-green-800 hover:bg-green-100 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Mi Dashboard
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  )
}





