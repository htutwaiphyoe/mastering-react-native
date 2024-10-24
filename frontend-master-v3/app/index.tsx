import { useState } from "react";
import { theme } from "theme";
import { getUniqueId } from "utils";
import { initialShoppingList } from "constant";
import { StyleSheet, TextInput, ScrollView, View, Text } from "react-native";
import ShoppingListItem from "components/ShoppingListItem";
import type { TShoppingListItem } from "types";
import { useDelete } from "hooks";

export default function App() {
  const [shoppingList, setShoppingList] =
    useState<TShoppingListItem[]>(initialShoppingList);
  const [item, setItem] = useState<string>("");
  const { onItemDelete } = useDelete();

  const onSubmit = () => {
    if (item) {
      setShoppingList((shoppingList) => [
        { id: getUniqueId(), name: item, isCompleted: false },
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

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
    >
      <View style={styles.textInputContainer}>
        <TextInput
          value={item}
          returnKeyType="done"
          onChangeText={setItem}
          style={styles.textInput}
          onSubmitEditing={onSubmit}
          placeholder="Eg. Lamborghini"
        />
      </View>
      <View>
        {shoppingList.length > 0 ? (
          shoppingList.map((shoppingListItem) => (
            <ShoppingListItem
              onDelete={onDelete}
              item={shoppingListItem}
              key={shoppingListItem.id}
            />
          ))
        ) : (
          <Text style={styles.emptyText}>No item in the shopping list.</Text>
        )}
      </View>
    </ScrollView>
  );
}

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
