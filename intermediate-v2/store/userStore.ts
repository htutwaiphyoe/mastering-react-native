import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type UserState = {
  isOnBoarded: boolean;
  setIsOnBoarded: (isOnBoarded: boolean) => void;
};

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      isOnBoarded: false,
      setIsOnBoarded: (isOnBoarded: boolean) =>
        set((state) => ({ ...state, isOnBoarded })),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
