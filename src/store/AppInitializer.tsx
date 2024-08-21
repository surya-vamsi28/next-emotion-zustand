"use client";

import { useStore } from "./store";

export default function AppInitializer({
  user,
  children,
}: {
  user: any;
  children: any;
}) {
  const setUser = useStore((store) => store.setUser);
  setUser(user);

  return children;
}
