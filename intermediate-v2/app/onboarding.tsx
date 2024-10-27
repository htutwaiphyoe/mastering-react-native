import { theme } from "@/theme";
import { useOnboarding } from "@/hooks";
import { StyleSheet } from "react-native";
import { Button } from "@/components/Button";
import { LinearGradient } from "expo-linear-gradient";

export default function OnboardingScreen() {
  const { finishOnboarding } = useOnboarding();

  return (
    <LinearGradient
      end={{ x: 1, y: 1 }}
      start={{ x: 0, y: 0 }}
      style={styles.container}
      colors={[
        theme.color.green,
        theme.color.limeGreen,
        theme.color.appleGreen,
      ]}
    >
      <Button onPress={finishOnboarding} title="Let's get started!" />
    </LinearGradient>
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
