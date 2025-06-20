import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture, Html } from "@react-three/drei";
import * as THREE from "three";

type SkillPlanetProps = {
  url: string;
  name: string;
  orbitRadius: number;
  orbitSpeed: number;
  phaseOffset: number; // New prop for starting angle
};

export function SkillPlanet({
  url,
  name,
  orbitRadius,
  orbitSpeed,
  phaseOffset,
}: SkillPlanetProps) {
  const planetRef = useRef<THREE.Mesh>(null!);
  const texture = useTexture(url);
  const [isHovered, setIsHovered] = useState(false);

  // Animate the planet's orbit with the phase offset
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const angle = elapsedTime * orbitSpeed + phaseOffset; // Apply offset here
    const x = orbitRadius * Math.cos(angle);
    const z = orbitRadius * Math.sin(angle);
    if (planetRef.current) {
      planetRef.current.position.set(x, 0, z);
      planetRef.current.rotation.y += 0.005; // Self-rotation
    }
  });

  return (
    <mesh
      ref={planetRef}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshStandardMaterial
        map={texture}
        roughness={0.8}
        metalness={0.2}
        emissive="white"
        emissiveIntensity={isHovered ? 1 : 0.5}
        emissiveMap={texture}
      />
      {/* Label is now always visible */}
      <Html distanceFactor={10}>
        <div className="px-1.5 py-0.5 text-[10px] font-bold text-white bg-black/60 rounded-full whitespace-nowrap">
          {name}
        </div>
      </Html>
    </mesh>
  );
}
