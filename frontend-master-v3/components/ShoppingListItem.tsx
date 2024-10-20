import { StyleSheet, Text, View } from "react-native";
import { useDelete } from "hooks";
import { theme } from "theme";
import Button from "./Button";

type Props = {
  name: string;
  isCompleted?: boolean;
};

export default function ShoppingListItem({ name, isCompleted }: Props) {
  const { handleItemDelete } = useDelete();

  return (
    <View
      style={[
        styles.listItem,
        isCompleted ? styles.completedListItem : undefined,
      ]}
    >
      <Text
        style={[
          styles.listItemText,
          isCompleted ? styles.completedListItemText : undefined,
        ]}
      >
        {name}
      </Text>
      <Button
        disabled={isCompleted}
        onPress={() => handleItemDelete(name)}
        style={[isCompleted ? styles.completedButton : undefined]}
      >
        Delete
      </Button>
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
  completedListItem: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
  },
  completedListItemText: {
    color: theme.colorGrey,
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorGrey,
  },
  completedButton: {
    backgroundColor: theme.colorGrey,
  },
});
