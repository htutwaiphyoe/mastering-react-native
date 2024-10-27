import { theme } from "@/theme";
import { useOnboarding } from "@/hooks";
import { Button } from "@/components/Button";
import { StyleSheet, View } from "react-native";

export default function ProfileScreen() {
  const { backToOnboarding } = useOnboarding();

  return (
    <View style={styles.container}>
      <Button onPress={backToOnboarding} title="Back to onboarding" />
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
