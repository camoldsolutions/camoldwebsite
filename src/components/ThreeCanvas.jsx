import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';

const ThreeCanvas = ({ children, className }) => {
    return (
        <div className={`absolute inset-0 z-0 pointer-events-none ${className}`}>
            <Canvas
                dpr={[1, 2]} // Optimization: Adapt DPR
                gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
                camera={{ position: [0, 0, 5], fov: 75 }}
            >
                <Suspense fallback={null}>
                    {children}
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default ThreeCanvas;
