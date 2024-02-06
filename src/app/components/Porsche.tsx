import * as THREE from "three";
import { useMemo } from "react";
import { applyProps } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export function Porsche({ props }: any) {
  const { scene, nodes, materials }: any = useGLTF(
    "/free_porsche_911_carrera_4s.glb"
  );

  return <primitive object={scene} {...props} />;
}
