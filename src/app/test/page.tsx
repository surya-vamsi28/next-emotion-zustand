import ClientComponent from "../../components/clientComponent";
import { useStore } from "../../store/store";
import { getData } from "../../utils/apiMock";
import SimpleStore from "../../utils/SimpleStore";
import styles from "../page.module.css";

export default async function Test() {
  const { user } = useStore.getState();
  let data;
  if (!user) {
    data = await getData();
    SimpleStore.set("launchData", data);
  }

  console.log("test route", user, data);

  return (
    <main className={styles.main}>
      <ClientComponent text={"Test Route"} />
    </main>
  );
}
