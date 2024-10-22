import { StyleSheet, Text, View } from "react-native";
import { theme } from "theme";

export default function Counter() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colorWhite,
  },
  text: {
    fontSize: 24,
  },
});
