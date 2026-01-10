import backgroundImage from '../../assets/IMG_5609.PNG';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="w-full relative">
      {/* Hero Section - Full Screen */}
      <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover object-top sm:object-center"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 dark:bg-black/75 dark:bg-none"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 w-full">
          <div className="flex flex-col items-center justify-center">
            {/* Text Container */}
            <div className="flex flex-col gap-4 sm:gap-6 items-center text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-xs sm:text-sm font-medium text-white">Available for work</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Hi, I'm{" "}
                <span className="text-white">
                  Shweta Yadav
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-white font-light">
                Full Stack Developer
              </p>

              <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-lg font-light">
                Passionate about creating beautiful, functional, and user-friendly applications.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center pt-4">
                <Link 
                  to="/contact" 
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 font-medium text-sm sm:text-base rounded-lg hover:bg-white/90 hover:shadow-lg transition-all duration-300"
                >
                  Get In Touch
                </Link>
                <Link 
                  to="/projects" 
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-medium text-sm sm:text-base rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
