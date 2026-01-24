"use client";

import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}) => {
    const containerRef = React.useRef(null);
    const scrollerRef = React.useRef(null);

    useEffect(() => {
        addAnimation();
    }, []);

    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty("--animation-direction", "forwards");
            } else {
                containerRef.current.style.setProperty("--animation-direction", "reverse");
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="w-[260px] sm:w-[280px] md:w-[300px] max-w-full relative rounded-2xl border border-green-100 flex-shrink-0 bg-white px-5 py-4 md:px-6 md:py-5 shadow-sm flex items-center gap-3 md:gap-4"
                        key={item.title + idx}
                    >
                        <div className="bg-green-50 p-2 md:p-3 rounded-full shrink-0">
                            {React.cloneElement(item.icon, { className: "w-5 h-5 md:w-7 md:h-7 text-green-600" })}
                        </div>
                        <div className="min-w-0 flex-1">
                            <span className="block text-sm md:text-base font-bold text-gray-900 leading-tight">
                                {item.title}
                            </span>
                            <span className="block text-xs md:text-sm text-gray-500 mt-0.5 font-normal leading-snug">
                                {item.desc}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
