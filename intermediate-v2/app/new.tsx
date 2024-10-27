import { theme } from "@/theme";
import { Button } from "@/components/Button";
import { Alert, StyleSheet, View } from "react-native";
import { Input } from "@/components/Input/Input";
import { PlantlyImage } from "@/components/PlantlyImage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";

export default function NewScreen() {
  const [name, setName] = useState<string>("");
  const [days, setDays] = useState<string>("");

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

    Alert.alert("Success", "Plant added successfully");
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
    paddingBottom: 100,
    paddingHorizontal: 24,
  },
  image: {
    alignItems: "center",
  },
});
