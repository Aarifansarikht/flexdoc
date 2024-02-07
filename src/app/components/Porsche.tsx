import React, { useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export function Porsche({ props, selectedColorIndex, palette }: any) {
  const [loading, setLoading] = useState(true);
  const [model, setModel] = useState<any>(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/free_porsche_911_carrera_4s.glb",
      (gltf: any) => {
        setModel(gltf.scene);
        setLoading(false);
      },
      undefined,
      (error: any) => {
        console.error("Error loading GLTF:", error);
      }
    );
  }, []);

  useEffect(() => {
    if (model) {
      const plane = model.getObjectByName("Plane002_0");
      if (plane) {
        // Apply the selected color to the object
        plane.material.color.set(palette[selectedColorIndex]);
      }
    }
  }, [selectedColorIndex, model]);

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          <primitive object={model} {...props} />
        </>
      )}
    </>
  );
}

function LoadingIndicator() {
  return (
    <Html style={{ height: "100vh" }}>
      <div
        style={{
          position: "absolute",
          top: "10rem",
          left: "100%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          height: "100vh",
          width: "100vw",
          backgroundColor: "#000",
          color: "#fff",
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Loading...</h1>
      </div>
    </Html>
  );
}
