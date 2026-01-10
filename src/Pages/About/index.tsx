function About() {
  return (
    <section className="w-full bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section - Full Screen */}
      <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-400 rounded-full blur-3xl"></div>
          <div className="absolute top-60 left-1/3 w-64 h-64 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 dark:bg-green-500/20 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-green-600 dark:text-green-400">My Story</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500">
              Me
            </span>
          </h1>

          <div className="max-w-3xl">
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I'm a passionate Full Stack Developer with a love for creating beautiful and functional web applications. I specialize in modern technologies and always strive to deliver high-quality solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {/* Stat Cards */}
              <div className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700">
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500">3+</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Years Experience</p>
              </div>
              <div className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700">
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">20+</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Projects Completed</p>
              </div>
              <div className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700">
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">10+</p>
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