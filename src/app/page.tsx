import styles from "./page.module.css";
import ClientComponent from "../components/clientComponent";
import { getInitialData } from "../utils/initalData";

export default async function Home() {
  const initialData = await getInitialData();
  console.log('!@# initial launch Data', initialData)
  return (
    <main className={styles.main}>
      <ClientComponent text={"Home Route"} />
    </main>
  );
}
