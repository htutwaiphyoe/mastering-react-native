import { StyleSheet, View } from "react-native";
import ShoppingListItem from "components/ShoppingListItem";
import { theme } from "theme";

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingListItem name="AirPod 4" />
      <ShoppingListItem name="Air Force 1" />
      <ShoppingListItem name="MacBook Pro 14" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme.colorWhite,
  },
});
