'use client'

import { useState } from 'react'
import Link from 'next/link'
import { User, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"

const navItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Biodiversidad', href: '/biodiversidad' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Investigación', href: '/investigacion' },
  { name: 'Recursos', href: '/recursos-educativos' },
  { name: 'Comunidad', href: '/comunidad' },
  { name: 'Nosotros', href: '/sobre-nosotros' },
  { name: 'Contacto', href: '/contacto' },
]

export function ClientNav() {
  const { data: session } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
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
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-green-800 hover:bg-green-100 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
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
    </>
  )
}

