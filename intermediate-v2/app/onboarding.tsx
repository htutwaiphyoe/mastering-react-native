import { theme } from "@/theme";
import { useOnboarding } from "@/hooks";
import { Button } from "@/components/Button";
import { StyleSheet, View } from "react-native";

export default function OnboardingScreen() {
  const { finishOnboarding } = useOnboarding();

  return (
    <View style={styles.container}>
      <Button onPress={finishOnboarding} title="Let's get started!" />
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
