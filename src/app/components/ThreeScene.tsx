"use client";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  ContactShadows,
  OrbitControls,
} from "@react-three/drei";

import { Porsche } from "./Porsche";
import { useEffect, useState } from "react";

export default function ThreeScene({
  changelight,
  changeColor,
  palette,
  selectedColorIndex,
}: any) {
  return (
    <Canvas
      gl={{ logarithmicDepthBuffer: true, antialias: false }}
      dpr={[1, 1.5]}
      camera={{
        position: [2, 1, 6],
        fov: 25,
      }}
      style={{ paddingTop: "20rem", height: "100vh" }}
    >
      {/* <color attach="background" args={["#222222"]} /> */}
      <Porsche
        rotation={[0, Math.PI / 1.5, 0]}
        scale={0.5}
        changeColor={changeColor}
        selectedColorIndex={selectedColorIndex}
        palette={palette}
      />
      <hemisphereLight intensity={0.5} />
      <ContactShadows
        resolution={512}
        frames={1}
        position={[0, -1.16, 0]}
        scale={15}
        blur={0.5}
        opacity={1}
        far={0}
      />

      <Environment resolution={512}>
        {/* Ceiling */}
        <Lightformer
          intensity={changelight ? 10 : 2}
          rotation-x={Math.PI / 2}
          position={[0, 4, -9]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={changelight ? 10 : 2}
          rotation-x={Math.PI / 2}
          position={[0, 4, -6]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={changelight ? 10 : 2}
          rotation-x={Math.PI / 2}
          position={[0, 4, -3]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={changelight ? 10 : 2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 0]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={changelight ? 10 : 2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 3]}
          scale={[changelight ? 10 : 12, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 6]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 9]}
          scale={[10, 1, 1]}
        />
        {/* Sides */}
        <Lightformer
          intensity={2}
          rotation-y={Math.PI / 2}
          position={[-50, 2, 0]}
          scale={[100, 2, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-y={-Math.PI / 2}
          position={[50, 2, 0]}
          scale={[100, 2, 1]}
        />
        {/* Key */}
        <Lightformer
          form="ring"
          color="red"
          intensity={10}
          scale={2}
          position={[10, 5, 10]}
          onUpdate={(self) => self.lookAt(0, 0, 0)}
        />
      </Environment>

      <OrbitControls
        // enablePan={false}
        // enableZoom={false}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
