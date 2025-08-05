"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";
import { MathUtils } from "three";

export default function RobotModel() {
  const { scene } = useGLTF("/models/robot.glb");
  const robotRef = useRef<Group>(null);

  useFrame(({ mouse }) => {
    if (robotRef.current) {
      const maxY = Math.PI * 0.3; // ~54 degrees
      const minY = -Math.PI * 0.3;

      const maxX = Math.PI * 0.2; // ~36 degrees
      const minX = -Math.PI * 0.2;

      const targetY = mouse.x * Math.PI * 0.5;
      const targetX = -mouse.y * Math.PI * 0.5;

      robotRef.current.rotation.y = MathUtils.clamp(targetY, minY, maxY);
      robotRef.current.rotation.x = MathUtils.clamp(targetX, minX, maxX);
    }
  });

  return (
    <primitive object={scene} ref={robotRef} scale={3} position={[0, -1, 0]} />
  );
}
