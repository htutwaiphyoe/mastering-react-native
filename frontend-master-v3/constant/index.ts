import type { TShoppingListItem } from "types";
import { getUniqueId } from "utils";

export const initialShoppingList: TShoppingListItem[] = [
  {
    id: getUniqueId(),
    name: "MacBook Pro 14",
    updatedAt: Date.now(),
    completedAt: Date.now(),
  },
  {
    id: getUniqueId(),
    name: "Air Force 1",
    completedAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: getUniqueId(),
    name: "AirPod 4",
    completedAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: getUniqueId(),
    name: "Iphone 16",
    completedAt: null,
    updatedAt: Date.now(),
  },
];
