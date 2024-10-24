import { Duration } from "date-fns";

export type TShoppingListItem = {
  id: string;
  name: string;
  updatedAt: number;
  completedAt: number | null;
};

export type TCountdownStatus = {
  isOverdue: boolean;
  distance: Duration;
};

export type TPersistCountdownState = {
  currentNotificationId: string | undefined;
  completedAt: number[];
};
