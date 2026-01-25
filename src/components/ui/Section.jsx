import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const Section = ({
    children,
    className,
    id,
    variant = 'white', // white, light, dark, brand
    container = true
}) => {
    const variants = {
        white: "bg-white",
        light: "bg-brand-light", // Slate 50
        dark: "bg-brand-dark text-white",
        brand: "bg-brand-primary text-white"
    };

    return (
        <section
            id={id}
            className={cn(
                "py-16 md:py-24 relative overflow-hidden",
                variants[variant],
                className
            )}
        >
            {container ? (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {children}
                </div>
            ) : children}
        </section>
    );
};

export default Section;
