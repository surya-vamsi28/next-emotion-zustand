import { cookies } from "next/headers";
import { getData } from "./apiMock";

export const getInitialData = async () => {
  "use server";
  const cookiesStore = cookies();
  const userType = cookiesStore.get("user-type");
  const data = await getData(userType?.value as string);
  return data;
};
