import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from '../Navbar'


const RootLayout = () => {
  const location = useLocation()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayLocation, setDisplayLocation] = useState(location)

  useEffect(() => {
    if (location !== displayLocation) {
      setIsTransitioning(true)
      // Wait for exit animation, then update location
      const timer = setTimeout(() => {
        setDisplayLocation(location)
        setIsTransitioning(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [location, displayLocation])

  return (
    <div className="w-full flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />
      <main className="flex-1 w-full min-h-screen flex flex-col">
        <div
          className={`flex-1 w-full flex flex-col transition-all duration-300 ease-in-out ${
            isTransitioning
              ? 'opacity-0 translate-y-8'
              : 'opacity-100 translate-y-0'
          }`}
        >
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default RootLayout
