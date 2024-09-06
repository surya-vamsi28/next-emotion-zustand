import ClientComponent from "../../components/clientComponent";
import styles from "../page.module.css";
import { getInitialData } from "../../utils/initalData";

export default async function Test() {
  const initialData = await getInitialData();
  console.log('!@# initial launch Data', initialData)
  return (
    <main className={styles.main}>
      <ClientComponent text={"Test Route"} />
    </main>
  );
}
