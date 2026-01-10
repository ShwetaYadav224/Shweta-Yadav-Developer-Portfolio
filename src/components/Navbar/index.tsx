import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from '../../routes/paths'
import ThemeToggle from '../ThemeToggle'

const navLinks = [
  { name: 'Home', path: ROUTES.Home },
  { name: 'About', path: ROUTES.About },
  { name: 'Skills', path: ROUTES.Skills },
  { name: 'Projects', path: ROUTES.Projects },
  { name: 'Contact', path: ROUTES.Contact },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Logo & Theme - Floating Top Right (No Navbar Bar) */}
      <div className="fixed top-4 right-6 z-50 flex items-center gap-3">
        <Link to="/" className="text-lg font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
          Shweta Yadav
        </Link>
        <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center">
          <ThemeToggle />
        </div>
      </div>

      {/* Floating Menu – BOTTOM RIGHT */}
      <div className="fixed bottom-6 right-6 z-50 overflow-visible">
        <div className="relative overflow-visible" style={{ width: '56px', height: '56px' }}>
          {/* Menu Items */}
          {navLinks.map((link, index) => {
            const total = navLinks.length

            // Quarter circle: 180° (left) → 270° (up) - expands up and left from bottom-right
            const startAngle = 180
            const endAngle = 270
            const angle =
              (index / (total - 1)) * (endAngle - startAngle) + startAngle

            const radius = isOpen ? 140 : 0

            const x = Math.cos((angle * Math.PI) / 180) * radius
            const y = Math.sin((angle * Math.PI) / 180) * radius

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={{
                  transform: `translate(${x}px, ${y}px) scale(${isOpen ? 1 : 0.6})`,
                  opacity: isOpen ? 1 : 0,
                  pointerEvents: isOpen ? 'auto' : 'none',
                  transitionDelay: `${index * 80}ms`,
                }}
                className={`absolute top-1 left-1
                  transition-all duration-300 ease-out
                  w-12 h-12 rounded-full shadow-lg text-xs font-medium
                  flex items-center justify-center text-center
                  ${
                    isActive(link.path)
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                {link.name}
              </Link>
            )
          })}

          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300
              ${isOpen ? 'bg-gray-700 dark:bg-gray-600 rotate-45' : 'bg-gray-900 dark:bg-white'}
            `}
            aria-label="Toggle menu"
          >
            <div className="grid grid-cols-2 gap-1.5">
              <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-white' : 'bg-white dark:bg-gray-900'}`} />
              <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-white' : 'bg-white dark:bg-gray-900'}`} />
              <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-white' : 'bg-white dark:bg-gray-900'}`} />
              <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-white' : 'bg-white dark:bg-gray-900'}`} />
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
