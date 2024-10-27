import { theme } from "@/theme";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input/Input";
import { usePlantStore } from "@/store/plantStore";
import { Alert, Platform, StyleSheet, TouchableOpacity } from "react-native";
import { PlantlyImage } from "@/components/PlantlyImage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from "expo-image-picker";

export default function NewScreen() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [days, setDays] = useState<string>("");
  const [imageUri, setImageUri] = useState<string>("");
  const addPlant = usePlantStore((state) => state.addPlant);

  const onImageChange = async () => {
    if (Platform.OS === "web") return;

    const result = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      aspect: [1, 1],
      allowsEditing: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled) setImageUri(result.assets[0].uri);
  };

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

    addPlant({
      name,
      imageUri,
      wateringFrequencyDays: Number(days),
    });
    router.navigate("/");
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.content}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.image}
        onPress={onImageChange}
      >
        <PlantlyImage imageUri={imageUri} />
      </TouchableOpacity>
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
