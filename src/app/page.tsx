import styles from "./page.module.css";
import ClientComponent from "../components/clientComponent";
import { getData } from "../utils/apiMock";
import SimpleStore from "../utils/SimpleStore";
import { cookies } from "next/headers";

export default async function Home() {
  const user = SimpleStore.get("launchData");
  const cookiesStore = cookies();
  const userType = cookiesStore.get("user-type");
  let data;
  if (!user) {
    data = await getData(userType?.value as string);
    SimpleStore.set('launchData', data)
  }
  console.log("home route data from store", user);
  console.log("home route data from api", data);
  return (
    <main className={styles.main}>
      <ClientComponent text={"Home Route"} />
    </main>
  );
}
