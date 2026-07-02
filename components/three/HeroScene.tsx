"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Icosahedron, MeshDistortMaterial, Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Group } from "three";

function FloatingCore() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.x = t * 0.15;
    group.current.rotation.y = t * 0.22;
  });

  return (
    <group ref={group}>
      <Float speed={1.8} rotationIntensity={1.1} floatIntensity={1.4}>
        <Icosahedron args={[1.25, 32]}>
          <MeshDistortMaterial
            color="#67e8f9"
            emissive="#22d3ee"
            emissiveIntensity={0.55}
            roughness={0.1}
            metalness={0.7}
            distort={0.25}
            speed={2.3}
          />
        </Icosahedron>
      </Float>
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="relative h-[360px] w-full sm:h-[420px] lg:h-[500px]">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 4.5], fov: 48 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 3, 2]} intensity={1.3} color="#a5f3fc" />
        <pointLight position={[-2, -1, 1]} intensity={1.4} color="#c4b5fd" />
        <Suspense fallback={null}>
          <FloatingCore />
          <Stars radius={60} depth={20} count={900} factor={3.5} saturation={0} fade speed={0.65} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_30%,rgba(9,9,11,0.45)_100%)]" />
    </div>
  );
}
