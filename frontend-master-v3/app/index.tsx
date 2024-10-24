import { useState } from "react";
import { theme } from "theme";
import { getUniqueId } from "utils";
import { initialShoppingList } from "constant";
import { StyleSheet, TextInput, View } from "react-native";
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
        ...shoppingList,
        { id: getUniqueId(), name: item, isCompleted: false },
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
    <View style={styles.container}>
      <TextInput
        value={item}
        returnKeyType="done"
        onChangeText={setItem}
        style={styles.textInput}
        onSubmitEditing={onSubmit}
        placeholder="Eg. Lamborghini"
      />
      {shoppingList.map((shoppingListItem) => (
        <ShoppingListItem
          onDelete={onDelete}
          item={shoppingListItem}
          key={shoppingListItem.id}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    backgroundColor: theme.colorWhite,
  },
  textInput: {
    fontSize: 18,
    borderWidth: 2,
    borderRadius: 30,
    marginBottom: 12,
    paddingVertical: 12,
    marginHorizontal: 12,
    paddingHorizontal: 20,
    borderColor: theme.colorLightGrey,
  },
});
