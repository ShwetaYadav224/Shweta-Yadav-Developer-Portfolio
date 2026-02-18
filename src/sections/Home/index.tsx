import profile from "../../assets/profile.jpg";

function Home() {
  return (
    <div className="flex flex-col items-center justify-start py-8 px-4 md:px-6 min-h-fit transition-all duration-300">

      <div className="text-center space-y-2 mb-10 animate-fade-in w-full">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium text-navy tracking-tight title-font">
          Shweta Yadav
        </h1>
        <h2 className="text-lg md:text-xl lg:text-2xl font-light text-navy/80 title-font italic">
          Software Engineer & Full Stack Developer
        </h2>
        <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">Based in India</p>
      </div>


      <div className="w-full max-w-7xl grid grid-cols-2 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-start">


        <div className="col-span-2 lg:col-span-6 flex justify-center order-1 lg:order-2 mb-4 lg:mb-0">
          <div className="relative group">
            <div className="w-48 h-72 md:w-56 md:h-80 lg:w-64 lg:h-[28rem] rounded-full overflow-hidden border border-slate-200 p-4 bg-white transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="w-full h-full rounded-full overflow-hidden grayscale-[0] group-hover:grayscale-[0.1] transition-all duration-700 border border-slate-100">
                <img src={profile} alt="Profile" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
              </div>
            </div>

            <div className="absolute -inset-8 bg-royal-blue/5 rounded-full blur-3xl -z-10 animate-pulse" />
          </div>
        </div>


        <div className="col-span-2 lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-14 order-2 lg:order-1 text-center lg:text-left">
          <section className="space-y-3 col-span-2 lg:col-span-1">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Biography</h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium max-w-xs mx-auto lg:mx-0">
              I build scalable web applications with a focus on clean architecture and high-performance user experiences.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Contact</h3>
            <div className="text-xs md:text-sm text-slate-600 font-medium space-y-1">
              <p>Maharashtra, India</p>
              <p className="text-royal-blue truncate">shweta22y@gmail.com</p>
              <p>+91 9359189352</p>
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Services</h3>
            <ul className="text-xs md:text-sm text-slate-600 font-medium space-y-1">
              <li>Web Application Design</li>
              <li>Frontend Dev</li>
            </ul>
          </section>
        </div>

        <div className="col-span-2 lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-10 lg:gap-14 order-3 text-center lg:text-right">
          <section className="space-y-2">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Experience</h3>
            <p className="text-4xl lg:text-6xl font-light text-navy title-font italic">1+</p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Year Active</p>
          </section>

          <section className="space-y-2">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Satisfaction</h3>
            <p className="text-4xl lg:text-6xl font-light text-navy title-font italic">100%</p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Happy Clients</p>
          </section>

          <section className="space-y-2">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Projects</h3>
            <p className="text-4xl lg:text-6xl font-light text-navy title-font italic">3+</p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Completed</p>
          </section>
        </div>

      </div>
    </div>
  );
}

export default Home;
