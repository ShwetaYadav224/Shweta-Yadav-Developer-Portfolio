import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="w-full bg-white dark:bg-gray-950 min-h-screen">
      {/* Contact Section */}
      <div className="relative w-full pt-20 sm:pt-24 lg:pt-32 pb-6 sm:pb-10 lg:pb-16 overflow-hidden">
        {/* Subtle Background Pattern - Hidden in dark mode */}
        <div className="absolute inset-0 opacity-[0.03] dark:hidden">
          <div className="absolute top-10 left-10 w-32 sm:w-48 h-32 sm:h-48 bg-gray-900 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 sm:w-64 h-40 sm:h-64 bg-gray-800 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
          {/* Desktop: Two Column Layout | Mobile: Stacked Centered */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Left Side - Info (Desktop) / Header + Cards (Mobile) */}
            <div className="lg:pr-8">
              {/* Header - Centered on mobile, left on desktop */}
              <div className="text-center lg:text-left mb-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-full mb-3 sm:mb-4 border border-gray-100 dark:border-gray-800 shadow-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">Get In Touch</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 leading-tight">
                  Let's Connect
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto lg:mx-0">
                  Have a project in mind or just want to say hello? I'd love to hear from you!
                </p>
              </div>

              {/* Contact Info Cards */}
              {/* Mobile: Side by side | Desktop: Stacked */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-4 mb-6 lg:mb-0">
                <a href="mailto:shweta2025y@gmail.com" className="flex flex-col lg:flex-row items-center lg:items-center gap-2 lg:gap-4 p-3 sm:p-4 bg-gray-50 dark:bg-white/5 rounded-lg sm:rounded-xl border border-gray-200 dark:border-white/50 hover:border-gray-300 dark:hover:border-white transition-colors text-center lg:text-left">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg bg-gray-100 dark:bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">shweta2025y@gmail.com</p>
                  </div>
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex flex-col lg:flex-row items-center lg:items-center gap-2 lg:gap-4 p-3 sm:p-4 bg-gray-50 dark:bg-white/5 rounded-lg sm:rounded-xl border border-gray-200 dark:border-white/50 hover:border-gray-300 dark:hover:border-white transition-colors text-center lg:text-left">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg bg-gray-100 dark:bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-700 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">LinkedIn</p>
                    <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">Connect with me</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-white/5 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-white/50">
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 lg:space-y-5">
                {/* Name and Email - Stack on mobile, side by side on sm+ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 lg:mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-gray-400 dark:focus:ring-white/30 focus:border-gray-400 dark:focus:border-white/30 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all outline-none text-sm"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 lg:mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-gray-400 dark:focus:ring-white/30 focus:border-gray-400 dark:focus:border-white/30 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all outline-none text-sm"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 lg:mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-gray-400 dark:focus:ring-white/30 focus:border-gray-400 dark:focus:border-white/30 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all outline-none resize-none text-sm"
                    placeholder="Your message..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 sm:py-3 lg:py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 hover:shadow-lg transition-all duration-300 text-sm lg:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact