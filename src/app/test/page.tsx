import { cookies } from "next/headers";
import ClientComponent from "../../components/clientComponent";
import { getData } from "../../utils/apiMock";
import SimpleStore from "../../utils/SimpleStore";
import styles from "../page.module.css";

export default async function Test() {
  const user = SimpleStore.get("launchData");
  const cookiesStore = cookies();
  const userType = cookiesStore.get("user-type");
  let data;
  if (!user) {
    data = await getData(userType?.value as string);
    SimpleStore.set('launchData', data)
  }
  console.log("test route data from store", user);
  console.log("test route data from api", data);

  return (
    <main className={styles.main}>
      <ClientComponent text={"Test Route"} />
    </main>
  );
}
