import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Acerca de</h3>
            <p className="text-green-300">Biodiversidad.cl es una plataforma dedicada a la conservación y educación sobre la biodiversidad chilena.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {['Inicio', 'Biodiversidad', 'Proyectos', 'Investigación', 'Comunidad'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-green-300 hover:text-white transition-colors inline-flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <p className="text-green-300">Email: info@biodiversidad.cl</p>
            <p className="text-green-300">Teléfono: +56 2 1234 5678</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="text-green-300 hover:text-white transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center text-green-300">
          <p>&copy; 2023 Biodiversidad.cl. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

