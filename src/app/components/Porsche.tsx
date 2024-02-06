import * as THREE from "three";
import { useMemo } from "react";
import { applyProps } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import Loader from "./Loader";

export function Porsche({ props }: any) {
  const { scene, nodes, materials, loading }: any = useGLTF(
    "/free_porsche_911_carrera_4s.glb"
  );

  return <primitive object={scene} {...props} />;
}
