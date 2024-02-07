"use client";

import ThreeScene from "./components/ThreeScene";
import Overlay from "./components/Overlay";
import { useState } from "react";

export default function Home() {
  const [changelight, setChangeLight] = useState(false);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const togglelight = () => {
    setChangeLight(!changelight);
  };

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
    setSelectedColorIndex((prevIndex) => (prevIndex + 1) % palette.length);
  };
  return (
    <main
      style={{
        height: "100vh",
        backgroundImage: `url(./back.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <ThreeScene
        changelight={changelight}
        changeColor={changeColor}
        palette={palette}
        selectedColorIndex={selectedColorIndex}
      />
      <Overlay
        togglelight={togglelight}
        palette={palette}
        selectedColorIndex={selectedColorIndex}
        changeColor={changeColor}
      />
    </main>
  );
}
