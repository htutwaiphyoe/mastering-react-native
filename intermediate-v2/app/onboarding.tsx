import { theme } from "@/theme";
import { useOnboarding } from "@/hooks";
import { Pressable, StyleSheet, View, Text } from "react-native";

export default function OnboardingScreen() {
  const { finishOnboarding } = useOnboarding();

  return (
    <View style={styles.container}>
      <Pressable onPress={finishOnboarding}>
        <Text style={styles.text}>Let's get started!</Text>
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
