function About() {
  return (
    <section className="w-full bg-white dark:bg-gray-950">
      {/* Hero Section - Full Screen */}
      <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gray-900 dark:bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gray-800 dark:bg-gray-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-gray-700 dark:bg-gray-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-white/10 rounded-full mb-6 border border-gray-200 dark:border-white/20">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">My Story</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            About Me
          </h1>

          <div className="max-w-3xl">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I'm a passionate Full Stack Developer with a love for creating beautiful and functional web applications. I specialize in modern technologies and always strive to deliver high-quality solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {/* Stat Cards */}
              <div className="p-6 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-colors">
                <p className="text-4xl font-bold text-gray-900 dark:text-white">3+</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Years Experience</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-colors">
                <p className="text-4xl font-bold text-gray-900 dark:text-white">20+</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Projects Completed</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-colors">
                <p className="text-4xl font-bold text-gray-900 dark:text-white">10+</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About