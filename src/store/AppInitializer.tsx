"use client";
import Header from "../components/header";
import { useStore } from "./store";

export default function AppInitializer({
  user,
  children,
}: {
  user: any;
  children: any;
}) {
  console.log("!@# AppInitializer store", user);
  const setUser = useStore((store) => store.setUser);
  setUser(user);

  return (
    <>
      <Header />
      {children}
    </>
  );
}
