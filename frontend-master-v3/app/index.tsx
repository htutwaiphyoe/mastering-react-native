import { useEffect, useState } from "react";
import { theme } from "theme";
import { getUniqueId, orderShoppingList } from "utils";
import { StyleSheet, TextInput, Text, FlatList } from "react-native";
import ShoppingListItem from "components/ShoppingListItem";
import type { TShoppingListItem } from "types";
import { useDelete } from "hooks";
import { getStorage, setStorage, SHOPPING_STORAGE_KEY } from "utils/storage";

export default function App() {
  const { item, onToggleComplete, onDelete, onSubmit, setItem, shoppingList } =
    useContainer();

  return (
    <FlatList<TShoppingListItem>
      style={styles.container}
      stickyHeaderIndices={[0]}
      data={orderShoppingList(shoppingList)}
      contentContainerStyle={styles.contentContainer}
      ListHeaderComponentStyle={styles.textInputContainer}
      renderItem={({ item }) => (
        <ShoppingListItem
          item={item}
          onDelete={onDelete}
          onComplete={onToggleComplete}
        />
      )}
      ListEmptyComponent={
        <Text style={styles.emptyText}>
          You have no item in the shopping list.
        </Text>
      }
      ListHeaderComponent={
        <TextInput
          value={item}
          returnKeyType="done"
          onChangeText={setItem}
          style={styles.textInput}
          onSubmitEditing={onSubmit}
          placeholder="Eg. Lamborghini"
        />
      }
    />
  );
}

const useContainer = () => {
  const { onItemDelete } = useDelete();
  const [item, setItem] = useState<string>("");
  const [shoppingList, setShoppingList] = useState<TShoppingListItem[]>([]);

  const getShoppingList = async () => {
    const data = await getStorage(SHOPPING_STORAGE_KEY);
    setShoppingList(data ?? []);
  };

  useEffect(() => {
    getShoppingList();
  }, []);

  const onSubmit = () => {
    if (item) {
      setShoppingList((shoppingList) => {
        const newShoppingList = [
          {
            name: item,
            id: getUniqueId(),
            completedAt: null,
            updatedAt: Date.now(),
          },
          ...shoppingList,
        ];
        setStorage(SHOPPING_STORAGE_KEY, newShoppingList);
        return newShoppingList;
      });
      setItem("");
    }
  };

  const onDelete = (item: TShoppingListItem) => {
    onItemDelete({
      name: item.name,
      onDelete: () =>
        setShoppingList((shoppingList) => {
          const newShoppingList = shoppingList.filter(
            (shoppingListItem) => shoppingListItem.id !== item.id
          );
          setStorage(SHOPPING_STORAGE_KEY, newShoppingList);
          return newShoppingList;
        }),
    });
  };

  const onToggleComplete = (item: TShoppingListItem) => {
    setShoppingList((shoppingList) => {
      const newShoppingList = shoppingList.map((shoppingListItem) =>
        shoppingListItem.id === item.id
          ? {
              ...shoppingListItem,
              updatedAt: Date.now(),
              completedAt: shoppingListItem.completedAt ? null : Date.now(),
            }
          : shoppingListItem
      );
      setStorage(SHOPPING_STORAGE_KEY, newShoppingList);
      return newShoppingList;
    });
  };

  return {
    item,
    setItem,
    onSubmit,
    onDelete,
    shoppingList,
    onToggleComplete,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  emptyText: {
    fontSize: 18,
    padding: 20,
    textAlign: "center",
  },
  textInputContainer: {
    paddingVertical: 18,
    backgroundColor: theme.colorWhite,
  },
  textInput: {
    fontSize: 18,
    borderWidth: 2,
    borderRadius: 30,
    paddingVertical: 12,
    marginHorizontal: 12,
    paddingHorizontal: 20,
    borderColor: theme.colorLightGrey,
  },
});
