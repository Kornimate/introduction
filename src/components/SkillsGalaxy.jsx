// src/components/three/SkillsGalaxy.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';

const clusters = [
  {
    name: 'Core',
    color: '#4f46e5',
    radius: 2.5,
    speed: 0.25,
    skills: ['Python', 'C# / .NET', 'TypeScript', 'JavaScript', 'Java'],
  },
  {
    name: 'Web',
    color: '#22c55e',
    radius: 3.3,
    speed: 0.18,
    skills: ['React', 'ASP.NET', 'Blazor', 'WinUI 3'],
  },
  {
    name: 'Data & AI',
    color: '#eab308',
    radius: 4.1,
    speed: 0.13,
    skills: ['ML', 'DL', 'NLP', 'SQL'],
  },
  {
    name: 'Tools',
    color: '#f97316',
    radius: 4.8,
    speed: 0.1,
    skills: ['Git', 'Docker', 'CI/CD'],
  },
];

function OrbitCluster({ cluster }) {
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = t * cluster.speed;
    }
  });

  return (
    <group ref={group}>
      {/* orbit ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[cluster.radius - 0.02, cluster.radius + 0.02, 64]} />
        <meshBasicMaterial color={cluster.color} transparent opacity={0.35} />
      </mesh>

      {cluster.skills.map((skill, i) => {
        const angle = (i / cluster.skills.length) * Math.PI * 2;
        const x = Math.cos(angle) * cluster.radius;
        const z = Math.sin(angle) * cluster.radius;

        return (
          <group key={skill} position={[x, 0, z]}>
            <mesh>
              <sphereGeometry args={[0.18, 32, 32]} />
              <meshStandardMaterial color={cluster.color} emissive={cluster.color} emissiveIntensity={0.7} />
            </mesh>
            <Html distanceFactor={8}>
              <div className="px-2 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-[10px] text-slate-100 whitespace-nowrap">
                {skill}
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

function GalaxyScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 6, 4]} intensity={1.4} />
      <pointLight position={[-4, -3, -2]} intensity={0.8} color="#4f46e5" />

      {/* Center core */}
      <mesh>
        <sphereGeometry args={[0.7, 48, 48]} />
        <meshStandardMaterial
          color="#0ea5e9"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {clusters.map((c) => (
        <OrbitCluster key={c.name} cluster={c} />
      ))}

      <OrbitControls enablePan={false} minDistance={5} maxDistance={9} />
    </>
  );
}

export default function SkillsGalaxy() {
  return (
    <Canvas
      camera={{ position: [0, 4, 9], fov: 45 }}
      className="w-full h-full"
    >
      <GalaxyScene />
    </Canvas>
  );
}
