import { create } from "zustand";

type UserState = {
  isOnBoarded: boolean;
  setIsOnBoarded: (isOnBoarded: boolean) => void;
};

export const useUserStore = create<UserState>((set) => ({
  isOnBoarded: false,
  setIsOnBoarded: (isOnBoarded: boolean) =>
    set((state) => ({ ...state, isOnBoarded })),
}));
