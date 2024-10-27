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
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 28,
    backgroundColor: theme.color.green,
  },
  buttonPressed: {
    backgroundColor: theme.color.leafyGreen,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: theme.color.white,
  },
});
