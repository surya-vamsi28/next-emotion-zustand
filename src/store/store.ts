import { create } from "zustand";
interface storeInterface {
  user: any;
  setUser: (user: any) => void;
}

export const useStore = create<storeInterface>((set) => ({
  user: null,
  setUser: (user: any) => set((state) => ({ ...state, user })),
}));
