const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Flutter", level: 75 },
  { name: "Firebase", level: 85 },
  { name: "Python", level: 70 },
];

const technologies = [
  "React", "TypeScript", "JavaScript", "Node.js", "Flutter", "Dart",
  "Firebase", "MongoDB", "PostgreSQL", "Tailwind CSS", "Git", "Docker"
];

function Skills() {
  return (
    <section className="w-full bg-white dark:bg-[#0d161b]">
      {/* Hero Section - Full Screen (Only Heading) */}
      <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Subtle Background Pattern - Hidden in dark mode */}
        <div className="absolute inset-0 opacity-[0.03] dark:hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gray-900 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gray-800 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-gray-700 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#152228] rounded-full mb-4 sm:mb-6 border border-[#0d161b] dark:border-white/30 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium text-[#151f34] dark:text-gray-300">My Expertise</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#151f34] dark:text-white mb-4 sm:mb-6 leading-tight">
            Skills & Technologies
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#151f34]/80 dark:text-gray-300 max-w-2xl leading-relaxed">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>
      </div>

      {/* Skills Content - After Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 lg:py-24">
        {/* Skills Progress */}
        <div className="mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#151f34] dark:text-white mb-6 sm:mb-10 text-center">
            Core Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="p-4 sm:p-6 bg-gray-50 dark:bg-white/5 rounded-xl sm:rounded-2xl border border-[#151f34]/20 dark:border-white/50 hover:border-[#151f34]/40 dark:hover:border-white transition-all">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-sm sm:text-base text-[#151f34] dark:text-white">{skill.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-[#151f34]/10 dark:bg-white/10 rounded-full h-3">
                  <div 
                    className="h-3 rounded-full bg-[#151f34] dark:bg-white transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Tags */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#151f34] dark:text-white mb-6 sm:mb-10 text-center">
            Technologies I Use
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 sm:px-6 py-2 sm:py-3 bg-gray-50 dark:bg-white/5 border border-[#151f34]/20 dark:border-white/50 rounded-full text-[#151f34] dark:text-gray-200 text-xs sm:text-sm font-medium hover:border-[#151f34]/40 dark:hover:border-white hover:shadow-md transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills