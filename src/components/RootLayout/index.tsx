import { useState } from "react";
import Sidebar from "../Sidebar";
import { SiBackendless } from "react-icons/si";
import { navItems } from "../../config/navigation";

const RootLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-[#080e11] font-sans antialiased animate-fade-in">
      <Sidebar
        collapsed={collapsed}
        onCollapseChange={setCollapsed}
        isMobileOpen={isMobileMenuOpen}
        onMobileClose={() => setIsMobileMenuOpen(false)}
      />

      <main className="flex-1 flex flex-col min-w-0 bg-white dark:bg-navy shadow-2xl relative z-10 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden fixed top-4 left-4 z-50 p-3 bg-navy-light text-white rounded-xl shadow-lg hover:bg-navy transition-all active:scale-95 border border-white/10"
          aria-label="Open Menu"
        >
          <SiBackendless className="text-2xl" />
        </button>

        <div className="flex-1 overflow-y-auto scroll-smooth custom-scrollbar">
          {navItems.map((item, index) => (
            <section
              key={item.id}
              id={item.id}
              className={`
                relative w-full flex flex-col
                ${index === 0 ? "pt-8 pb-12 md:pt-8 md:pb-20" : "py-12 md:py-20"}
                ${index % 2 !== 0 ? "bg-slate-50/50" : ""}
              `}
            >
              <div className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-12 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
                {item.component}
              </div>
            </section>
          ))}

          <footer className="py-6 border-t border-gray-100 dark:border-white/5 text-center px-6">
            <p className="text-sm text-gray-400 dark:text-white/20">
              © {new Date().getFullYear()} Shweta Yadav. Built with Passion.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
