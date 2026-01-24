"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const BackgroundBeams = ({ className }) => {
    return (
        <div
            className={cn(
                "absolute h-full w-full inset-0 bg-neutral-950 overflow-hidden",
                className
            )}
        >
            <div className="absolute h-full w-full inset-0 bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-950 to-transparent h-full w-full pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center opacity-20">
                {/* Simplified Grid Effect for High-Tech feel */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {/* Moving Beams */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-green-500/10 blur-3xl"
                />
            </div>
        </div>
    );
};
