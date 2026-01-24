import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const Button = ({
    children,
    className,
    variant = 'primary',
    size = 'md',
    onClick,
    ...props
}) => {
    const variants = {
        primary: "bg-brand-primary text-white hover:bg-emerald-700 shadow-lg hover:shadow-brand-primary/30",
        secondary: "bg-white text-brand-dark border border-gray-200 hover:bg-gray-50 hover:border-brand-primary/50 shadow-sm",
        outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
        ghost: "text-brand-dark hover:bg-slate-100 hover:text-brand-primary",
        dark: "bg-brand-dark text-white hover:bg-slate-800 shadow-lg"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
        xl: "px-10 py-5 text-xl"
    };

    return (
        <button
            onClick={onClick}
            className={cn(
                "rounded-lg font-bold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
