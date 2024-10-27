import {
  Text,
  Platform,
  Pressable,
  StyleSheet,
  PressableProps,
  GestureResponderEvent,
} from "react-native";
import { theme } from "@/theme";
import * as Haptics from "expo-haptics";
import { useCallback } from "react";

type ButtonProps = PressableProps & {
  title: string;
};

export function Button({ title, onPress, ...props }: ButtonProps) {
  const handleOnPress = useCallback(
    (event: GestureResponderEvent) => {
      if (Platform.OS !== "web") {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      }
      onPress?.(event);
    },
    [onPress]
  );

  return (
    <Pressable
      {...props}
      onPress={handleOnPress}
      style={(state) =>
        state.pressed ? [styles.button, styles.buttonPressed] : styles.button
      }
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: theme.color.green,
  },
  buttonPressed: {
    backgroundColor: theme.color.colorLeafyGreen,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.color.white,
  },
});
