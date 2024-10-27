import { theme } from "@/theme";
import { useOnboarding } from "@/hooks";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  const { backToOnboarding } = useOnboarding();

  return (
    <View style={styles.container}>
      <Pressable onPress={backToOnboarding}>
        <Text style={styles.text}>Back to onboarding</Text>
      </Pressable>
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
  text: {
    fontSize: 24,
  },
});
