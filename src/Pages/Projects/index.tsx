import { useFetchProjects } from "../../hooks/dashboard-hooks/useFetchProjects";

function Projects() {
  const { projects, loading, error } = useFetchProjects();

  return (
    <section className="w-full bg-white dark:bg-gray-950">
      {/* Hero Header - Full Screen */}
      <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Subtle Background Pattern - Hidden in dark mode */}
        <div className="absolute inset-0 opacity-[0.03] dark:hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gray-900 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gray-800 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-gray-700 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 w-full">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-full mb-4 sm:mb-6 border border-gray-100 dark:border-gray-800 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">Portfolio Showcase</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
            Featured Projects
          </h1>

          <div className="max-w-3xl">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Explore my latest work. Each project represents a unique challenge solved with creativity and cutting-edge technology.
            </p>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-12">
              {/* Stat Cards - Matching About Section */}
              <div className="p-3 sm:p-6 bg-gray-50 dark:bg-white/5 rounded-lg sm:rounded-2xl border border-gray-200 dark:border-white/50 hover:border-gray-300 dark:hover:border-white transition-colors">
                <p className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white">{projects.length}</p>
                <p className="text-xs sm:text-base text-gray-600 dark:text-gray-400 mt-1 sm:mt-2">Total Projects</p>
              </div>
              <div className="p-3 sm:p-6 bg-gray-50 dark:bg-white/5 rounded-lg sm:rounded-2xl border border-gray-200 dark:border-white/50 hover:border-gray-300 dark:hover:border-white transition-colors">
                <p className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white">5+</p>
                <p className="text-xs sm:text-base text-gray-600 dark:text-gray-400 mt-1 sm:mt-2">Technologies</p>
              </div>
              <div className="p-3 sm:p-6 bg-gray-50 dark:bg-white/5 rounded-lg sm:rounded-2xl border border-gray-200 dark:border-white/50 hover:border-gray-300 dark:hover:border-white transition-colors">
                <p className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white">100%</p>
                <p className="text-xs sm:text-base text-gray-600 dark:text-gray-400 mt-1 sm:mt-2">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 pb-16 sm:pb-24">
        {/* Loading State */}
        {loading && (
          <div className="text-center py-32">
            <div className="relative inline-block">
              <div className="w-16 h-16 border-4 border-gray-300 dark:border-white/20 rounded-full"></div>
              <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-gray-800 dark:border-t-white rounded-full animate-spin"></div>
            </div>
            <p className="mt-6 text-gray-500 dark:text-gray-400 text-lg">Loading amazing projects...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-32">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <p className="text-red-500 text-lg">{error}</p>
          </div>
        )}

        {/* No Projects State */}
        {!loading && !error && projects.length === 0 && (
          <div className="text-center py-32">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <p className="text-xl text-gray-500 dark:text-gray-400">No projects available yet.</p>
            <p className="mt-2 text-gray-400 dark:text-gray-500">Check back soon for exciting new work!</p>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && projects.length > 0 && (
          <div className="space-y-16 sm:space-y-24 lg:space-y-32">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center`}>
                  {/* Project Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-2xl shadow-xl">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6 w-full">
                          <div className="flex gap-3">
                            {project.demoUrl && (
                              <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                              >
                                Live Demo
                              </a>
                            )}
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                              >
                                Code
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Number Badge */}
                    <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-16 sm:h-16 bg-gray-900 dark:bg-white rounded-lg sm:rounded-xl shadow-lg flex items-center justify-center">
                      <span className="text-lg sm:text-2xl font-bold text-white dark:text-gray-900">{project.number}</span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {/* Technologies */}
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-white/50"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-3 py-1 text-xs font-medium text-gray-400 dark:text-gray-500">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {project.title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="mb-8">
                        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                          Key Features
                        </h3>
                        <ul className="space-y-3">
                          {project.highlights.slice(0, 3).map((highlight, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-800 dark:bg-white"></div>
                              <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base shadow-lg hover:shadow-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300"
                        >
                          <span>View Project</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg sm:rounded-xl font-medium text-sm sm:text-base hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;