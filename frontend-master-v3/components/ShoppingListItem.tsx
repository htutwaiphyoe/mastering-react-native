import { Pressable, StyleSheet, Text, View } from "react-native";
import { globalStyles, theme } from "theme";
import Button from "./Button";
import { AntDesign } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import { TShoppingListItem } from "types";

type Props = {
  item: TShoppingListItem;
  onDelete: (item: TShoppingListItem) => void;
  onComplete: (item: TShoppingListItem) => void;
};

export default function ShoppingListItem({
  item,
  onDelete,
  onComplete,
}: Props) {
  return (
    <Pressable
      onPress={() => onComplete(item)}
      style={[
        styles.listItem,
        !!item.completedAt ? styles.completedListItem : undefined,
      ]}
    >
      <View style={globalStyles.row}>
        <Entypo
          size={24}
          name={item.completedAt ? "check" : "circle"}
          color={item.completedAt ? theme.colorGrey : theme.colorCerulean}
        />
        <Text
          numberOfLines={2}
          style={[
            styles.listItemText,
            item.completedAt ? styles.completedListItemText : undefined,
          ]}
        >
          {item.name}
        </Text>
      </View>
      <Button
        hitSlop={20}
        disabled={!!item.completedAt}
        onPress={() => onDelete(item)}
        style={[item.completedAt ? styles.completedButton : undefined]}
      >
        <AntDesign
          size={18}
          name="close"
          color={item.completedAt ? theme.colorLightGrey : theme.colorWhite}
        />
      </Button>
    </Pressable>
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
    flex: 1,
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
