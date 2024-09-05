import Image from "next/image";
import styles from "./page.module.css";
import ClientComponent from "../components/clientComponent";
import { useStore } from "../store/store";
import { getData } from "../utils/apiMock";
import SimpleStore from "../utils/SimpleStore";

export default async function Home() {
  const {user} = useStore.getState();
  let data
  if (!user) {
    data = await getData();
    SimpleStore.set('launchData', data)
  }
  
  console.log('!@# server component store', user, data)
  return (
    <main className={styles.main}>
      
      <ClientComponent text={'Home Route'}/>
    </main>
  );
}
