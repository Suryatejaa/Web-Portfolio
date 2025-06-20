import React from "react";
import * as THREE from "three";

type OrbitLineProps = {
  radius: number;
};

export function OrbitLine({ radius }: OrbitLineProps) {
  return (
    <mesh rotation-x={Math.PI / 2}>
      <ringGeometry args={[radius - 0.01, radius + 0.01, 128]} />
      <meshBasicMaterial
        color="#ffffff"
        side={THREE.DoubleSide}
        transparent
        opacity={0.25}
      />
    </mesh>
  );
}
