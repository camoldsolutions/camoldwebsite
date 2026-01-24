import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Spores = ({ count = 100, color = '#4ade80' }) => {
    const mesh = useRef();
    const light = useRef();
    const { viewport, mouse } = useThree();

    // Generate random particles
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            const zFactor = -50 + Math.random() * 100;
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
        }
        return temp;
    }, [count]);

    // Dummy object for efficient instanced updates
    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state, delta) => {
        if (!mesh.current) return;

        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle;

            // Update time
            t = particle.t += speed / 2;
            const a = Math.cos(t) + Math.sin(t * 1) / 10;
            const b = Math.sin(t) + Math.cos(t * 2) / 10;
            const s = Math.cos(t);

            // Update position
            dummy.position.set(
                (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            );

            // Scale particles slightly based on time for "breathing" look
            const scale = (Math.cos(t) / 2) * 0.5 + 0.5; // Randomize scale a bit
            dummy.scale.set(scale, scale, scale);

            // Interaction: Gently push away from mouse
            const mouseX = (mouse.x * viewport.width) / 2;
            const mouseY = (mouse.y * viewport.height) / 2;
            // Only if needed (omitted for pure performance)

            dummy.rotation.set(s * 5, s * 5, s * 5);
            dummy.updateMatrix();

            mesh.current.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <>
            <instancedMesh ref={mesh} args={[null, null, count]}>
                <dodecahedronGeometry args={[0.05, 0]} /> {/* Small geometric spores */}
                <meshPhongMaterial color={color} transparent opacity={0.6} />
            </instancedMesh>
        </>
    );
};

export default Spores;
