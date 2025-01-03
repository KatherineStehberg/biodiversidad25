import Link from 'next/link'
import Image from 'next/image'
import { Home, Leaf, Briefcase, BookOpen, Users, Mail, Info } from 'lucide-react'

const navItems = [
  { name: 'Inicio', href: '/', icon: Home },
  { name: 'Biodiversidad', href: '/biodiversidad', icon: Leaf },
  { name: 'Proyectos', href: '/proyectos', icon: Briefcase },
  { name: 'Investigación', href: '/investigacion', icon: BookOpen },
  { name: 'Recursos Educativos', href: '/recursos-educativos', icon: BookOpen },
  { name: 'Comunidad', href: '/comunidad', icon: Users },
  { name: 'Sobre Nosotros', href: '/sobre-nosotros', icon: Info },
  { name: 'Contacto', href: '/contacto', icon: Mail },
]

export function MainNav() {
  return (
    <>
      <Link href="/">
        <Image src="/placeholder.svg" alt="Biodiversidad.cl Logo" width={180} height={40} />
      </Link>
      <nav className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center text-green-800 hover:text-green-600 transition-colors"
          >
            <item.icon className="w-5 h-5 mr-2" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </>
  )
}




