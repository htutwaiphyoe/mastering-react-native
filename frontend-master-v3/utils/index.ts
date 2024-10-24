import { TShoppingListItem } from "types";

export const getUniqueId = () =>
  Date.now() + Math.random().toString(36).substr(2, 9);

export const orderShoppingList = (shoppingList: TShoppingListItem[]) => {
  return shoppingList.sort((a, b) => {
    if (a.completedAt && b.completedAt) {
      return b.completedAt - a.completedAt;
    }
    if (a.completedAt && !b.completedAt) {
      return 1;
    }
    if (!a.completedAt && b.completedAt) {
      return -1;
    }
    if (!a.completedAt && !b.completedAt) {
      return b.updatedAt - a.updatedAt;
    }
    return 0;
  });
};
