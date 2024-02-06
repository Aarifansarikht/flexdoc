"use client";
import Image from "next/image";
import styles from "./page.module.css";
import ThreeScene from "./components/ThreeScene";
import Overlay from "./components/Overlay";
import { useState } from "react";

export default function Home() {
  const [changelight, setChangeLight] = useState(false);
  const togglelight = () => {
    setChangeLight(!changelight);
  };
  return (
    <main style={{ height: "100vh" }}>
      <ThreeScene changelight={changelight} />
      <Overlay togglelight={togglelight} />
    </main>
  );
}
