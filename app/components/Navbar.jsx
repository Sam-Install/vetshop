'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoIosMenu, IoIosClose } from 'react-icons/io'
import { LuDog } from "react-icons/lu"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">

        
        <div className='flex gap-2 items-center'>
          <LuDog className='text-2xl text-green-500' />
          <h1 className="text-2xl font-bold text-green-400">
            PetPaws<span className="text-black">Diani</span>
          </h1>
        </div>

    
        <ul className="hidden sm:flex gap-6 text-sm font-bold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`
                  ${pathname === link.path ? 'text-green-500' : 'text-gray-700'} 
                  hover:text-green-500 transition-colors duration-300
                `}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

      
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/254757854308"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-sm bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600 transition"
          >
            Call A Vet
          </a>

          <button
            className="sm:hidden text-2xl text-green-500"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <IoIosClose /> : <IoIosMenu />}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="sm:hidden border-t border-gray-200 bg-white shadow-md">
          <ul className="flex flex-col gap-3 px-4 py-4 font-bold">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`
                    ${pathname === link.path ? 'text-green-500' : 'text-gray-700'} 
                    hover:text-green-500 transition-colors duration-300
                  `}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li className="mt-4">
              <a
                href="https://wa.me/254757854308"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center text-white bg-green-500 rounded-md px-4 py-2 hover:bg-green-600 transition"
              >
                Call A Vet
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
