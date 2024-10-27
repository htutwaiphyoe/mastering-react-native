export type UserState = {
  isOnBoarded: boolean;
  setIsOnBoarded: (isOnBoarded: boolean) => void;
};

export type Plant = {
  id: string;
  name: string;
  imageUri?: string;
  lastWatered?: number;
  wateringFrequencyDays: number;
};

export type PlantsState = {
  plants: Plant[];
  waterPlant: (id: string) => void;
  removePlant: (id: string) => void;
  addPlant: ({
    name,
    imageUri,
    wateringFrequencyDays,
  }: {
    name: string;
    imageUri?: string;
    wateringFrequencyDays: number;
  }) => Promise<void>;
};
