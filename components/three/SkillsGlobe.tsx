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
  Mobile: "#f472b6",
  Tools: "#fb7185",
  Others: "#f59e0b",
};

type SkillNodeData = {
  skill: string;
  category: string;
  position: [number, number, number];
  color: string;
};

const EXTRA_SKILLS = [
  { skill: "System Design", category: "Backend" },
  { skill: "API Security", category: "Backend" },
  { skill: "Distributed Systems", category: "Backend" },
  { skill: "Prompt Engineering", category: "AI / ML" },
  { skill: "Model Evaluation", category: "AI / ML" },
  { skill: "Vector Databases", category: "AI / ML" },
  { skill: "Unit Testing", category: "Languages" },
  { skill: "Problem Solving", category: "Languages" },
  { skill: "Performance Tuning", category: "Frontend" },
  { skill: "Accessibility", category: "Frontend" },
  { skill: "Database Indexing", category: "Databases" },
  { skill: "CI/CD Pipelines", category: "Tools" },
  { skill: "Docker", category: "Tools" },
] as const;

function distributeNodes(): SkillNodeData[] {
  const nodes: SkillNodeData[] = [];
  const merged = [
    ...skillCategories.flatMap((category) =>
      category.items.map((skill) => ({ skill, category: category.title })),
    ),
    ...EXTRA_SKILLS,
  ];
  const total = merged.length;
  let index = 0;

  merged.forEach(({ skill, category }, catIndex) => {
    const t = (index + 0.5) / total;
    const phi = Math.acos(1 - 2 * t);
    const theta = Math.PI * (1 + Math.sqrt(5)) * index + (catIndex * Math.PI) / 3;
    const radius = 2.35;

    nodes.push({
      skill,
      category,
      position: [
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta),
      ],
      color: categoryColors[category] ?? "#22d3ee",
    });
    index += 1;
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

      {(hovered || index % 6 === 0) && (
        <Html
          center
          distanceFactor={5}
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
      )}
    </group>
  );
}

function GlobeScene() {
  const groupRef = useRef<Group>(null);
  const nodes = useMemo(() => distributeNodes(), []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.085;
    }
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[4, 4, 4]} intensity={1.4} color="#a5f3fc" />
      <pointLight position={[-4, -2, 2]} intensity={1.05} color="#c4b5fd" />

      <group ref={groupRef}>
        <mesh>
          <sphereGeometry args={[2.15, 56, 56]} />
          <meshStandardMaterial
            color="#16243a"
            transparent
            opacity={0.95}
            roughness={0.32}
            metalness={0.42}
            emissive="#0ea5e9"
            emissiveIntensity={0.2}
            wireframe={false}
          />
        </mesh>

        <mesh>
          <sphereGeometry args={[2.05, 32, 32]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.08} />
        </mesh>

        <mesh>
          <sphereGeometry args={[2.16, 42, 42]} />
          <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.3} />
        </mesh>

        <mesh>
          <sphereGeometry args={[0.08, 18, 18]} />
          <meshBasicMaterial color="#67e8f9" />
        </mesh>

        <ConnectionLines nodes={nodes} />

        {nodes.map((node, index) => (
          <SkillNode key={`${node.skill}-${index}`} {...node} index={index} />
        ))}
      </group>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.35}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.55}
        maxPolarAngle={Math.PI * 0.85}
        minPolarAngle={Math.PI * 0.15}
      />
    </>
  );
}

export function SkillsGlobe() {
  return (
    <div className="relative h-[min(66vh,620px)] w-full min-h-[380px] sm:h-[min(70vh,680px)] lg:h-[min(78vh,760px)]">
      <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm" />
      <Canvas
        className="relative rounded-2xl"
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.4], fov: 44 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <GlobeScene />
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(9,9,11,0.35)_100%)]" />
    </div>
  );
}
