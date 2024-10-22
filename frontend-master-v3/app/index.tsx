import { StyleSheet, View } from "react-native";
import ShoppingListItem from "components/ShoppingListItem";
import { theme } from "theme";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Link
        href="/counter"
        style={{ textAlign: "center", marginBottom: 20, fontSize: 24 }}
      >
        Go to /counter screen
      </Link>
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
