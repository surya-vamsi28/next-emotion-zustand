import Image from "next/image";
import styles from "./page.module.css";
import ClientComponent from "../components/clientComponent";
import { useStore } from "../store/store";

export default function Home() {
  const data = useStore.getState();
  return (
    <main className={styles.main}>
      <ClientComponent />
    </main>
  );
}
