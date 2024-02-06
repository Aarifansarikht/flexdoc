import Image from "next/image";
import styles from "./page.module.css";
import ThreeScene from "./components/ThreeScene";
import Overlay from "./components/Overlay";

export default function Home() {
  return (
    <main style={{ height: "100vh" }}>
      <ThreeScene />
      <Overlay />
    </main>
  );
}
