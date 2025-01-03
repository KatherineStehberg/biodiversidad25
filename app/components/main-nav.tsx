'use server'

import Link from 'next/link'
import Image from 'next/image'
import { Home, Leaf, Briefcase, BookOpen, Users, Mail, Info } from 'lucide-react'
import { ClientNav } from './client-nav'

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
          <ClientNav />
        </div>
      </div>
    </header>
  )
}









