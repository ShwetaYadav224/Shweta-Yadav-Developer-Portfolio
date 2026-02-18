interface SectionTitleProps {
    title: string;
    subtitle?: string
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
    return (
        <div className={`mb-12`}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-navy`}>
                {title}
                <span className="block w-12 h-1 bg-royal-blue mt-2"></span>
            </h2>
            {subtitle && (
                <p className={`text-lg max-w-2xl text-gray-600`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}
