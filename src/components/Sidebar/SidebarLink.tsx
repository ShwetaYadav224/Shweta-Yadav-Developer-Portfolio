import React from "react";
import Tooltip from "../common/Tooltip";

interface SidebarLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    collapsed: boolean;
    onClick: () => void;
}

export default function SidebarLink({
    href,
    icon,
    label,
    collapsed,
    onClick,
}: SidebarLinkProps) {
    return (
        <li className="relative group">
            <a
                href={href}
                onClick={(e) => {
                    e.stopPropagation();
                    onClick();
                }}
                className={`
          relative flex items-center w-full p-3 rounded-xl transition-all duration-200
          text-white/70 hover:text-white hover:bg-white/10
          ${collapsed ? "md:justify-center" : "space-x-4"}
        `}
            >
                <span className="text-xl transition-transform duration-200 group-hover:scale-110 shrink-0">
                    {icon}
                </span>
                <span
                    className={`
          font-medium tracking-wide whitespace-nowrap overflow-hidden transition-all duration-300
          ${collapsed ? "md:w-0 md:opacity-0 md:hidden" : "w-full opacity-100 block"}
        `}
                >
                    {label}
                </span>

                <Tooltip label={label} isVisible={collapsed} />
            </a>
        </li>
    );
}
