import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const Card = ({
    children,
    className,
    hover = true,
    glass = false,
    border = true
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl p-8 transition-all duration-300",
                glass
                    ? "bg-white/80 backdrop-blur-md border border-white/20 shadow-xl"
                    : "bg-white shadow-lg",
                border && !glass && "border border-gray-100",
                hover && "hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-primary/10",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Card;
