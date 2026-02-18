import { navItems } from "../../config/navigation";
import { SiBackendless } from "react-icons/si";
import SidebarLink from "./SidebarLink";
import Tooltip from "../common/Tooltip";
import profile from "../../assets/profile.jpg";

interface SidebarProps {
  collapsed: boolean;
  onCollapseChange: (collapsed: boolean) => void;
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

export default function Sidebar({
  collapsed,
  onCollapseChange,
  isMobileOpen,
  onMobileClose,
}: SidebarProps) {
  return (
    <>
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity duration-300 md:hidden"
          onClick={onMobileClose}
        />
      )}

      <aside
        className={`
        flex-shrink-0 bg-navy-light z-[70] flex flex-col border-r border-white/10
        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
      
        fixed md:relative top-0 left-0 h-screen
        ${isMobileOpen ? "translate-x-0 w-72 shadow-2xl" : "-translate-x-full md:translate-x-0"}
    
        ${collapsed ? "md:w-20" : "md:w-64"}
        
        group/sidebar
      `}
      >
        <div
          className={`flex items-center p-4 mb-2 ${collapsed ? "md:justify-center px-0" : "justify-between px-4"}`}
        >
          <div
            className={`text-white font-bold text-xl tracking-tight ${collapsed ? "md:hidden" : "block"}`}
          >
            Portfolio
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative group">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (window.innerWidth < 768) {
                    onMobileClose();
                  } else {
                    onCollapseChange(!collapsed);
                  }
                }}
                className="p-2 hover:bg-white/10 rounded-lg transition-all text-white"
              >
                <SiBackendless className={`size-6 transition-transform duration-500 ${collapsed ? "rotate-180" : "rotate-0"}`} />
              </button>
              <Tooltip label={collapsed ? "Expand" : "Collapse"} isVisible={true} />
            </div>
          </div>
        </div>

        <div className={`flex flex-col items-center mb-8 px-4 transition-all duration-500 ${collapsed ? "md:opacity-0 md:h-0 md:overflow-hidden" : "opacity-100"}`}>
          <div className="size-20 md:size-24 rounded-full overflow-hidden border-2 border-white/20 p-1 bg-white/5 backdrop-blur-sm shadow-xl">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500 scale-110 hover:scale-100"
            />
          </div>
        </div>

        <nav className={`flex-1 custom-scrollbar ${collapsed ? "overflow-visible px-0" : "overflow-y-auto px-3"}`}>
          <ul className={`flex flex-col ${collapsed ? "space-y-4 items-center" : "space-y-2"}`}>
            {navItems.map((item) => (
              <SidebarLink
                key={item.id}
                href={`#${item.id}`}
                icon={item.icon}
                label={item.label}
                collapsed={collapsed}
                onClick={() => { }}
              />
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
