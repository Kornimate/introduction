import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';

const jobs = [
  { title: 'Research Assistant', company: 'Aarhus University', year: '2025', color: '#22c55e' },
  { title: 'Junior Software Developer', company: 'RushFiles A/S', year: '2024', color: '#4f46e5' },
  { title: 'Web Developer', company: 'LEAR Corporation', year: '2023', color: '#0ea5e9' },
  { title: 'Course Instructor', company: 'Eötvös Loránd University', year: '2023', color: '#eab308' },
];

function JobNode({ job, index, total }) {
  const ref = useRef();

  // Center timeline
  const spacing = 2.2;
  const centerOffset = ((total - 1) * spacing) / 2;
  const z = -(index * spacing - centerOffset);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.position.y = Math.sin(t * 0.7 + index) * 0.12;
    }
  });

  return (
    <group ref={ref} position={[0, 0, z]}>
      <mesh>
        <sphereGeometry args={[0.28, 32, 32]} />
        <meshStandardMaterial
          color={job.color}
          emissive={job.color}
          emissiveIntensity={0.9}
          metalness={0.7}
        />
      </mesh>
      <Html center distanceFactor={7}>
        <div className="px-3 py-2 rounded-xl bg-slate-950/90 border border-slate-700/80 text-[11px] text-slate-100 w-52">
          <div className="flex justify-between mb-0.5">
            <span className="font-semibold">{job.title}</span>
            <span className="text-slate-400">{job.year}</span>
          </div>
          <p className="text-slate-400">{job.company}</p>
        </div>
      </Html>
    </group>
  );
}

function TimelineScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 6, 4]} intensity={1.4} />

      {/* Timeline line */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry
          args={[0.02, 0.02, jobs.length * 2.2, 32]}
        />
        <meshStandardMaterial color="#64748b" metalness={0.4} roughness={0.8} />
      </mesh>

      {jobs.map((job, i) => (
        <JobNode key={job.title} job={job} index={i} total={jobs.length} />
      ))}

      <OrbitControls
        enablePan={true}
        enableZoom={true}
        zoomSpeed={0.6}
        panSpeed={0.6}
        rotateSpeed={0.9}
      />
    </>
  );
}

export default function ExperienceTimeline() {
  return (
    <Canvas
      camera={{ position: [5, 3, 10], fov: 45 }}
      className="w-full h-full"
    >
      <TimelineScene />
    </Canvas>
  );
}
