export type UserState = {
  isOnBoarded: boolean;
  setIsOnBoarded: (isOnBoarded: boolean) => void;
};

export type Plant = {
  id: string;
  name: string;
  lastWatered?: number;
  wateringFrequencyDays: number;
};

export type PlantsState = {
  plants: Plant[];
  waterPlant: (id: string) => void;
  removePlant: (id: string) => void;
  addPlant: (name: string, wateringFrequencyDays: number) => void;
};
