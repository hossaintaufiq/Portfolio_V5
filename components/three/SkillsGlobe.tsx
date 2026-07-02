"use client";

import { skillCategories } from "@/data/skills";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { Suspense, useMemo, useRef, useState } from "react";
import type { Group } from "three";
import * as THREE from "three";

const categoryColors: Record<string, string> = {
  Backend: "#22d3ee",
  "AI / ML": "#a78bfa",
  Languages: "#34d399",
  Frontend: "#60a5fa",
  Databases: "#fbbf24",
  "Mobile & Tools": "#f472b6",
};

type SkillNodeData = {
  skill: string;
  category: string;
  position: [number, number, number];
  color: string;
};

function distributeNodes(): SkillNodeData[] {
  const nodes: SkillNodeData[] = [];
  const total = skillCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  let index = 0;

  skillCategories.forEach((category, catIndex) => {
    category.items.forEach((skill) => {
      const t = (index + 0.5) / total;
      const phi = Math.acos(1 - 2 * t);
      const theta = Math.PI * (1 + Math.sqrt(5)) * index + (catIndex * Math.PI) / 3;
      const radius = 2.35;

      nodes.push({
        skill,
        category: category.title,
        position: [
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.cos(phi),
          radius * Math.sin(phi) * Math.sin(theta),
        ],
        color: categoryColors[category.title] ?? "#22d3ee",
      });
      index += 1;
    });
  });

  return nodes;
}

function ConnectionLines({ nodes }: { nodes: SkillNodeData[] }) {
  const geometry = useMemo(() => {
    const points: number[] = [];
    nodes.forEach((node) => {
      points.push(0, 0, 0, ...node.position);
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
    return geo;
  }, [nodes]);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#22d3ee" transparent opacity={0.12} />
    </lineSegments>
  );
}

function SkillNode({
  skill,
  category,
  position,
  color,
  index,
}: SkillNodeData & { index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.08;
    meshRef.current.scale.setScalar(hovered ? pulse * 1.35 : pulse);
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "";
        }}
      >
        <sphereGeometry args={[0.055, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 1.2 : 0.65}
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>

      <Html
        center
        distanceFactor={5.5}
        className="pointer-events-none select-none"
      >
        <div
          className="whitespace-nowrap rounded-full border px-1.5 py-0.5 text-[8px] font-medium backdrop-blur-md sm:px-2 sm:py-[2px] sm:text-[9px]"
          style={{
            borderColor: `${color}55`,
            background: "rgba(9,9,11,0.78)",
            color,
            boxShadow: hovered ? `0 0 16px ${color}55` : `0 0 8px ${color}22`,
          }}
        >
          {skill}
        </div>
      </Html>
    </group>
  );
}

function GlobeScene() {
  const groupRef = useRef<Group>(null);
  const nodes = useMemo(() => distributeNodes(), []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <>
      <ambientLight intensity={0.45} />
      <pointLight position={[4, 4, 4]} intensity={1.2} color="#a5f3fc" />
      <pointLight position={[-4, -2, 2]} intensity={0.8} color="#c4b5fd" />

      <group ref={groupRef}>
        <mesh>
          <sphereGeometry args={[1.85, 48, 48]} />
          <meshStandardMaterial
            color="#0c1220"
            transparent
            opacity={0.55}
            roughness={0.4}
            metalness={0.3}
            wireframe={false}
          />
        </mesh>

        <mesh>
          <sphereGeometry args={[1.86, 32, 32]} />
          <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.14} />
        </mesh>

        <ConnectionLines nodes={nodes} />

        {nodes.map((node, index) => (
          <SkillNode key={`${node.skill}-${index}`} {...node} index={index} />
        ))}
      </group>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        maxPolarAngle={Math.PI * 0.85}
        minPolarAngle={Math.PI * 0.15}
      />
    </>
  );
}

export function SkillsGlobe() {
  return (
    <div className="relative h-[min(58vh,520px)] w-full min-h-[320px] sm:h-[min(62vh,560px)] lg:h-[min(68vh,620px)]">
      <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm" />
      <Canvas
        className="relative rounded-2xl"
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <GlobeScene />
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_50%,transparent_35%,rgba(9,9,11,0.55)_100%)]" />
    </div>
  );
}
