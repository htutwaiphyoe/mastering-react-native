import { StyleSheet, View } from "react-native";
import ShoppingListItem from "components/ShoppingListItem";
import { theme } from "theme";

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingListItem name="MacBook Pro 14" isCompleted />
      <ShoppingListItem name="Air Force 1" isCompleted />
      <ShoppingListItem name="AirPod 4" />
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
