import { theme } from "@/theme";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input/Input";
import { usePlantStore } from "@/store/plantStore";
import { Alert, StyleSheet, View } from "react-native";
import { PlantlyImage } from "@/components/PlantlyImage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function NewScreen() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [days, setDays] = useState<string>("");
  const addPlant = usePlantStore((state) => state.addPlant);

  const onSubmit = () => {
    if (!name) {
      return Alert.alert("Input Error", "Give your plant a name");
    }
    if (!days) {
      return Alert.alert(
        "Input Error",
        `How often does ${name} need to be watered?`
      );
    }

    if (isNaN(Number(days))) {
      return Alert.alert(
        "Validation Error",
        "Watering frequency must be a number"
      );
    }

    addPlant(name, Number(days));
    router.navigate("/");
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.content}
    >
      <View style={styles.image}>
        <PlantlyImage />
      </View>
      <Input
        label="Name"
        value={name}
        autoCapitalize="words"
        onChangeText={setName}
        placeholder="E.g. Casper the Cactus"
      />
      <Input
        value={days}
        placeholder="E.g. 6"
        onChangeText={setDays}
        keyboardType="number-pad"
        label="Watering Frequency (every x days)"
      />
      <Button title="Add plant" onPress={onSubmit} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.white,
  },
  content: {
    rowGap: 20,
    paddingTop: 24,
    paddingBottom: 50,
    paddingHorizontal: 24,
  },
  image: {
    alignItems: "center",
  },
});
