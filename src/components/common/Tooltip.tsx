interface TooltipProps {
    label: string;
    isVisible: boolean;
}

const Tooltip = ({ label, isVisible }: TooltipProps) => {
    return (
        <div
            className={`
      hidden md:block absolute left-full top-1/2 -translate-y-1/2 ml-4 px-4 py-2 
      bg-navy-light border border-white/20 text-white text-sm font-semibold 
      rounded-lg whitespace-nowrap z-[100] shadow-2xl
      opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 
      group-hover:delay-100 transition-all duration-300 pointer-events-none title-font
      ${isVisible ? "" : "md:hidden"}
    `}
        >
            {label}
            <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-navy-light border-l border-b border-white/20 rotate-45" />
        </div>
    );
};

export default Tooltip;
