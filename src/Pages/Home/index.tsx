import myPhoto from '../../assets/RLUQE6159.JPG';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section - Full Screen */}
      <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-400 rounded-full blur-3xl"></div>
          <div className="absolute top-60 left-1/3 w-64 h-64 bg-pink-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
            {/* Image Container */}
            <div className="relative flex-shrink-0 group">
              {/* Decorative ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500"></div>
              <img
                src={myPhoto}
                alt="Shweta Yadav"
                className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full shadow-2xl border-4 border-white dark:border-gray-800"
              />
            </div>

            {/* Text Container */}
            <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 dark:bg-blue-500/20 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Available for work</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500">
                  Shweta Yadav
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
                Full Stack Developer
              </p>

              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-lg">
                Passionate about creating beautiful, functional, and user-friendly applications.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Get In Touch
                </Link>
                <Link 
                  to="/projects" 
                  className="px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-medium rounded-xl hover:border-blue-500 dark:hover:border-blue-500 hover:-translate-y-0.5 transition-all duration-300"
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
