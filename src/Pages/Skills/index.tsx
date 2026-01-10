const skills = [
  { name: "React", level: 90, color: "from-blue-500 to-cyan-500" },
  { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-400" },
  { name: "Node.js", level: 80, color: "from-green-500 to-emerald-500" },
  { name: "Flutter", level: 75, color: "from-cyan-500 to-blue-500" },
  { name: "Firebase", level: 85, color: "from-yellow-500 to-orange-500" },
  { name: "Python", level: 70, color: "from-yellow-400 to-green-500" },
];

const technologies = [
  "React", "TypeScript", "JavaScript", "Node.js", "Flutter", "Dart",
  "Firebase", "MongoDB", "PostgreSQL", "Tailwind CSS", "Git", "Docker"
];

function Skills() {
  return (
    <section className="w-full bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section - Full Screen (Only Heading) */}
      <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-pink-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute top-60 left-1/3 w-64 h-64 bg-red-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 dark:bg-orange-500/20 rounded-full mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-orange-600 dark:text-orange-400">My Expertise</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
              Technologies
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>
      </div>

      {/* Skills Content - After Hero */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24">
        {/* Skills Progress */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                  <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Tags */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            Technologies I <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Use</span>
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-orange-500 dark:hover:border-orange-500 hover:shadow-lg transition-all cursor-default"
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