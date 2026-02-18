export default function Card({
    children,
    className = ""
}: {
    children: React.ReactNode,
    className?: string
}) {
    return (
        <div className={`bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${className}`}>
            {children}
        </div>
    );
}
