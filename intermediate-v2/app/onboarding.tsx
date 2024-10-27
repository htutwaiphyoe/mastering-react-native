import { theme } from "@/theme";
import { useOnboarding } from "@/hooks";
import { StatusBar } from "expo-status-bar";
import { Button } from "@/components/Button";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import { PlantlyImage } from "@/components/PlantlyImage";

export default function OnboardingScreen() {
  const { finishOnboarding } = useOnboarding();

  return (
    <LinearGradient
      end={{ x: 1, y: 1 }}
      start={{ x: 0, y: 0 }}
      style={styles.container}
      colors={[
        theme.color.green,
        theme.color.appleGreen,
        theme.color.limeGreen,
      ]}
    >
      <StatusBar style="light" />
      <View>
        <Text style={styles.heading}>Plantly</Text>
        <Text style={styles.tagLine}>
          Keep your plants healthy and hydrated
        </Text>
      </View>
      <PlantlyImage />
      <Button onPress={finishOnboarding} title="Let's get started!" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: theme.color.white,
  },
  heading: {
    fontSize: 42,
    marginBottom: 12,
    fontWeight: "bold",
    textAlign: "center",
    color: theme.color.white,
  },
  tagLine: {
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    color: theme.color.white,
  },
});
