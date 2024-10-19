import { StyleSheet, Text, View } from "react-native";
import { theme } from "./theme";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.text}>Coffee</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme.colorWhite,
  },
  item: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
  },
  text: {
    fontSize: 18,
    fontWeight: "200",
  },
});
