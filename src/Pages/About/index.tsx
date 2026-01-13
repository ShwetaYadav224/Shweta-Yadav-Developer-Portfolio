function About() {
  return (
    <section className="w-full bg-white dark:bg-[#0d161b]">
      <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] dark:hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gray-900 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gray-800 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-gray-700 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 w-full">
     
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#152228] rounded-full mb-4 sm:mb-6 border border-[#0d161b] dark:border-white/30 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium text-[#0d161b] dark:text-gray-300">My Story</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0d161b] dark:text-white mb-4 sm:mb-6 leading-tight">
            About Me
          </h1>

          <div className="max-w-3xl">
            <p className="text-base sm:text-lg md:text-xl text-[#0d161b]/80 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              I'm a passionate Full Stack Developer with a love for creating beautiful and functional web applications. I specialize in modern technologies and always strive to deliver high-quality solutions.
            </p>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-12">
              <div className="p-3 sm:p-6 bg-gray-50 dark:bg-white/5 rounded-lg sm:rounded-2xl border border-[#0d161b]/20 dark:border-white/50 hover:border-[#0d161b]/40 dark:hover:border-white transition-colors">
                <p className="text-2xl sm:text-4xl font-bold text-[#0d161b] dark:text-white">1+</p>
                <p className="text-xs sm:text-base text-[#0d161b]/70 dark:text-gray-400 mt-1 sm:mt-2">Years Experience</p>
              </div>
              <div className="p-3 sm:p-6 bg-gray-50 dark:bg-white/5 rounded-lg sm:rounded-2xl border border-[#0d161b]/20 dark:border-white/50 hover:border-[#0d161b]/40 dark:hover:border-white transition-colors">
                <p className="text-2xl sm:text-4xl font-bold text-[#0d161b] dark:text-white">5+</p>
                <p className="text-xs sm:text-base text-[#0d161b]/70 dark:text-gray-400 mt-1 sm:mt-2">Projects Completed</p>
              </div>
              <div className="p-3 sm:p-6 bg-gray-50 dark:bg-white/5 rounded-lg sm:rounded-2xl border border-[#0d161b]/20 dark:border-white/50 hover:border-[#0d161b]/40 dark:hover:border-white transition-colors">
                <p className="text-2xl sm:text-4xl font-bold text-[#0d161b] dark:text-white">2+</p>
                <p className="text-xs sm:text-base text-[#0d161b]/70 dark:text-gray-400 mt-1 sm:mt-2">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
      <div className="p-3 sm:p-6 bg-gray-50 dark:bg-[#0d161b] transition-colors">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-2xl font-bold text-[#0d161b] dark:text-white">Education</h2>
          <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-sm sm:rounded-2xl border border-[#0d161b]/20 dark:border-white/50 hover:border-[#0d161b]/40 dark:hover:border-white transition-colors">

          </div>

        </div>
      </div>
    </section>
    
  )
}

export default About
