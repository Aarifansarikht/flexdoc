"use client";

import ThreeScene from "./components/ThreeScene";
import Overlay from "./components/Overlay";
import { useState } from "react";

export default function Home() {
  const [changelight, setChangeLight] = useState(false);

  const togglelight = () => {
    setChangeLight(!changelight);
  };
  return (
    <main style={{ height: "100vh", backgroundImage: `url(./back.jpeg)` }}>
      <ThreeScene changelight={changelight} />
      <Overlay togglelight={togglelight} />
    </main>
  );
}
