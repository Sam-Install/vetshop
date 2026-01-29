'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoIosMenu, IoIosClose } from 'react-icons/io'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-green-400">
          Diani<span className="text-black">Vet</span>
        </h1>


        <ul className="hidden sm:flex gap-6 text-sm font-bold text-blue-600">
          <Link href="/" className={pathname === '/' ? 'text-green-500' : 'text-blue-600'}>
            Home
          </Link>
          <Link href="/about" className={pathname === '/about' ? 'text-green-500' : 'text-blue-600'}>
            About
          </Link>
          <Link href="/services" className={pathname === '/services' ? 'text-green-500' : 'text-blue-600'}>
            Services
          </Link>
          <Link href="/contact" className={pathname === '/contact' ? 'text-green-500' : 'text-blue-600'}>
            Contact
          </Link>
        </ul>

        
        <div className="flex items-center gap-4">
        
          <a
            href="https://wa.me/254757854308"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-sm bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600"
          >
            Call A Vet
          </a>

          
          <button
            className="sm:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoIosClose /> : <IoIosMenu />}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col gap-4 px-4 py-4 text-blue-600 font-bold">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>

            
            <a
              href="https://wa.me/254757854308"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-green-500 text-white rounded-md px-4 py-2 text-center"
            >
              Call A Vet
            </a>
          </ul>
        </div>
      )}
    </nav>
  )
}
