import React, { useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export function Porsche({ props }: any) {
  const [loading, setLoading] = useState(true);
  const [model, setModel] = useState<any>(null);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

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

  const palette = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#69D2E7",
    "#A7DBD8",
    "#E0E4CC",
    "#F38630",
    "#FA6900",
    "#655643",
    "#80BCA3",
    "#F6F7BD",
    "#E6AC27",
    "#BF4D28",
  ];

  const changeColor = () => {
    // Cycle through colors
    setSelectedColorIndex((prevIndex) => (prevIndex + 1) % palette.length);
  };

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          <primitive object={model} {...props} />
          <Html>
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                zIndex: 10,
                padding: "20px 40px",
              }}
            >
              <button
                onClick={changeColor}
                style={{
                  padding: "10px 40px",
                }}
              >
                Change Color
              </button>
            </div>
          </Html>
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
