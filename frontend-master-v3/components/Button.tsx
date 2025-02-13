import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { theme } from "theme";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<TouchableOpacityProps>;

export default function Button({ onPress, style, children, ...props }: Props) {
  return (
    <TouchableOpacity
      {...props}
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.button, style]}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: theme.colorRed,
  },
  buttonText: {
    fontWeight: "700",
    color: theme.colorWhite,
  },
});
