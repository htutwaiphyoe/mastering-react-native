import { PlantsState } from "@/types";
import { getUniqueId } from "@/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const usePlantStore = create(
  persist<PlantsState>(
    (set) => ({
      plants: [],
      addPlant: (name: string, wateringFrequencyDays: number) =>
        set((state) => ({
          ...state,
          plants: [
            { id: getUniqueId(), name, wateringFrequencyDays },
            ...state.plants,
          ],
        })),
      removePlant: (id: string) =>
        set((state) => ({
          ...state,
          plants: state.plants.filter((plant) => plant.id !== id),
        })),
      waterPlant: (id: string) =>
        set((state) => ({
          ...state,
          plants: state.plants.map((plant) =>
            plant.id === id ? { ...plant, lastWatered: Date.now() } : plant
          ),
        })),
    }),
    {
      name: "plants-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
