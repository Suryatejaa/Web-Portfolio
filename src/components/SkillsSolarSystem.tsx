import React, { useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { SkillPlanet } from "./SkillPlanet";
import { OrbitLine } from "./OrbitLine";

// Group skills by orbit to manage spacing
const orbits = [
  {
    radius: 2.5,
    speed: 0.5,
    planets: [
      { url: "/icons/react.svg", name: "React" },
      { url: "/icons/typescript.svg", name: "TypeScript" },
    ],
  },
  {
    radius: 4,
    speed: 0.4,
    planets: [
      { url: "/icons/nodejs.svg", name: "Node.js" },
      { url: "/icons/docker.svg", name: "Docker" },
    ],
  },
  {
    radius: 5.5,
    speed: 0.3,
    planets: [
      { url: "/icons/mongodb.svg", name: "MongoDB" },
      { url: "/icons/sql.svg", name: "SQL" },
    ],
  },
  {
    radius: 7,
    speed: 0.2,
    planets: [
      { url: "/icons/tailwindcss.svg", name: "TailwindCSS" },
      { url: "/icons/express.svg", name: "Express" },
    ],
  },
  {
    radius: 8.5,
    speed: 0.15,
    planets: [
      { url: "/icons/ai.svg", name: "AI APIs" },
      { url: "/icons/microservices.svg", name: "Microservices" },
    ],
  },
];

// This component tracks camera zoom and triggers the fallback
function CameraTracker({
  setFallback,
}: {
  setFallback: (value: boolean) => void;
}) {
  const { camera } = useThree();
  // The sun's radius is 1. We'll trigger the fallback just inside it.
  const zoomThreshold = 1.8;
  useFrame(() => {
    const distance = camera.position.length();
    setFallback(distance < zoomThreshold);
  });
  return null;
}

const SkillsSolarSystem = () => {
  const [showFallback, setShowFallback] = useState(false);

  const allSkills = useMemo(
    () => orbits.flatMap((orbit) => orbit.planets.map((p) => p.name)),
    []
  );

  return (
    // This relative container is key to layering the canvas and the fallback UI
    <div className="relative w-full h-full">
      {/* The fallback UI is now an overlay */}
      <div
        className={`absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-900/80 backdrop-blur-sm transition-opacity duration-500 pointer-events-none ${
          showFallback ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="pointer-events-auto">
          <h3 className="text-2xl font-bold mb-4 text-white text-center">
            Core Technologies
          </h3>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-slate-300">
            {allSkills.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <p className="text-xs text-slate-500 mt-6 text-center">
            Zoom out to return to the solar system
          </p>
        </div>
      </div>

      {/* The Canvas is always mounted. The z-index ensures it's below the nav and fallback UI. */}
      <Canvas className="z-10" camera={{ position: [0, 8, 15], fov: 45 }}>
        <CameraTracker setFallback={setShowFallback} />
        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <pointLight color="#fca5a5" intensity={10} position={[0, 0, 0]} />

        {/* Sun */}
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial emissive="#fca5a5" emissiveIntensity={2} />
        </mesh>

        {/* Planets (Skills) and their Orbits */}
        {orbits.map((orbit) => (
          <React.Fragment key={orbit.radius}>
            <OrbitLine radius={orbit.radius} />
            {orbit.planets.map((planet, index) => {
              const phaseOffset = (2 * Math.PI * index) / orbit.planets.length;
              return (
                <SkillPlanet
                  key={planet.name}
                  url={planet.url}
                  name={planet.name}
                  orbitRadius={orbit.radius}
                  orbitSpeed={orbit.speed}
                  phaseOffset={phaseOffset}
                />
              );
            })}
          </React.Fragment>
        ))}

        {/* Environment */}
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />
        <OrbitControls enablePan={true} enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default SkillsSolarSystem;
