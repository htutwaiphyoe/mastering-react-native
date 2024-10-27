import { theme } from "@/theme";
import { StyleSheet, Text, View } from "react-native";

export default function NewScreen() {
  return (
    <View style={styles.container}>
      <Text>New Plant</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.color.white,
  },
});
