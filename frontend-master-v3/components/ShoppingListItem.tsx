import { StyleSheet, Text, View } from "react-native";
import { useDelete } from "hooks";
import { globalStyles, theme } from "theme";
import Button from "./Button";
import { AntDesign } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import { TShoppingListItem } from "types";

type Props = {
  item: TShoppingListItem;
  onDelete: (item: TShoppingListItem) => void;
};

export default function ShoppingListItem({ item, onDelete }: Props) {
  return (
    <View
      style={[
        styles.listItem,
        item.isCompleted ? styles.completedListItem : undefined,
      ]}
    >
      <View style={globalStyles.row}>
        <Entypo
          size={24}
          name={item.isCompleted ? "check" : "circle"}
          color={item.isCompleted ? theme.colorGrey : theme.colorCerulean}
        />
        <Text
          style={[
            styles.listItemText,
            item.isCompleted ? styles.completedListItemText : undefined,
          ]}
        >
          {item.name}
        </Text>
      </View>
      <Button
        hitSlop={20}
        disabled={item.isCompleted}
        onPress={() => onDelete(item)}
        style={[item.isCompleted ? styles.completedButton : undefined]}
      >
        <AntDesign
          size={18}
          name="close"
          color={item.isCompleted ? theme.colorLightGrey : theme.colorWhite}
        />
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
    borderBottomColor: theme.colorGrey,
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
