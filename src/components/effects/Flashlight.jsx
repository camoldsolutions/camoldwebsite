import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Flashlight = ({ color = '#ffffff', intensity = 2 }) => {
    const light = useRef();
    const { viewport, mouse } = useThree();

    useFrame((state) => {
        if (!light.current) return;

        // Convert normalized mouse coordinates (-1 to 1) to world coordinates
        const x = (mouse.x * viewport.width) / 2;
        const y = (mouse.y * viewport.height) / 2;

        // Smoothly interpolate light position for lag-free feel
        light.current.position.x = THREE.MathUtils.lerp(light.current.position.x, x, 0.1);
        light.current.position.y = THREE.MathUtils.lerp(light.current.position.y, y, 0.1);
        light.current.position.z = 2; // Fixed depth
    });

    return (
        <pointLight
            ref={light}
            distance={5}
            decay={2}
            color={color}
            intensity={intensity}
        />
    );
};

export default Flashlight;
