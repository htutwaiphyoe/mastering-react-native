import { PlantsState } from "@/types";
import { getUniqueId } from "@/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import * as FileSystem from "expo-file-system";

export const usePlantStore = create(
  persist<PlantsState>(
    (set) => ({
      plants: [],
      addPlant: async ({ name, wateringFrequencyDays, imageUri }) => {
        const savedImageUri =
          FileSystem.documentDirectory +
          `${new Date().getTime()}-${imageUri?.split("/").slice(-1)[0]}`;

        if (imageUri) {
          await FileSystem.copyAsync({
            from: imageUri,
            to: savedImageUri,
          });
        }

        return set((state) => ({
          ...state,
          plants: [
            {
              id: getUniqueId(),
              name,
              wateringFrequencyDays,
              imageUri: imageUri ? savedImageUri : undefined,
            },
            ...state.plants,
          ],
        }));
      },
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
