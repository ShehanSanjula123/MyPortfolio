import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation({ activeSection, setActiveSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = ['home', 'about', 'projects', 'skills', 'blog']

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-800">Your Name</div>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <button
                key={item}
                className={`capitalize ${
                  activeSection === item ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
                onClick={() => setActiveSection(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          {navItems.map((item) => (
            <button
              key={item}
              className={`block w-full text-left px-4 py-2 capitalize ${
                activeSection === item ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => {
                setActiveSection(item)
                setIsMenuOpen(false)
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}