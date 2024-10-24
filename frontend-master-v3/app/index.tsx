import { useState } from "react";
import { theme } from "theme";
import { getUniqueId } from "utils";
import { initialShoppingList } from "constant";
import { StyleSheet, TextInput, Text, FlatList } from "react-native";
import ShoppingListItem from "components/ShoppingListItem";
import type { TShoppingListItem } from "types";
import { useDelete } from "hooks";

export default function App() {
  const { item, onToggleComplete, onDelete, onSubmit, setItem, shoppingList } =
    useContainer();

  return (
    <FlatList<TShoppingListItem>
      data={shoppingList}
      style={styles.container}
      stickyHeaderIndices={[0]}
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
        <Text style={styles.emptyText}>No item in the shopping list.</Text>
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
  const [shoppingList, setShoppingList] =
    useState<TShoppingListItem[]>(initialShoppingList);
  const [item, setItem] = useState<string>("");
  const { onItemDelete } = useDelete();

  const onSubmit = () => {
    if (item) {
      setShoppingList((shoppingList) => [
        { id: getUniqueId(), name: item, completedAt: null },
        ...shoppingList,
      ]);
      setItem("");
    }
  };

  const onDelete = (item: TShoppingListItem) => {
    onItemDelete({
      name: item.name,
      onDelete: () =>
        setShoppingList((shoppingList) =>
          shoppingList.filter(
            (shoppingListItem) => shoppingListItem.id !== item.id
          )
        ),
    });
  };

  const onToggleComplete = (item: TShoppingListItem) => {
    setShoppingList((shoppingList) =>
      shoppingList.map((shoppingListItem) =>
        shoppingListItem.id === item.id
          ? {
              ...shoppingListItem,
              completedAt: shoppingListItem.completedAt ? null : Date.now(),
            }
          : shoppingListItem
      )
    );
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
