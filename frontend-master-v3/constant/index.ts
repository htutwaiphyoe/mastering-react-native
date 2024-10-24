import type { TShoppingListItem } from "types";
import { getUniqueId } from "utils";

export const initialShoppingList: TShoppingListItem[] = [
  { id: getUniqueId(), name: "MacBook Pro 14", isCompleted: true },
  { id: getUniqueId(), name: "Air Force 1", isCompleted: true },
  { id: getUniqueId(), name: "AirPod 4", isCompleted: true },
  { id: getUniqueId(), name: "Iphone 16", isCompleted: false },
];
