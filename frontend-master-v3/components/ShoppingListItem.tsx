import { StyleSheet, Text, View } from "react-native";
import { useDelete } from "hooks";
import { theme } from "theme";
import Button from "./Button";

type Props = {
  name: string;
};

export default function ShoppingListItem({ name }: Props) {
  const { handleItemDelete } = useDelete();

  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{name}</Text>
      <Button onPress={() => handleItemDelete(name)}>Delete</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: theme.colorCerulean,
  },
  listItemText: {
    fontSize: 18,
    fontWeight: "200",
  },
});
