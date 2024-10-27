import { theme } from "@/theme";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

type InputProps = TextInputProps & {
  label?: string;
};

export function Input({ label, ...props }: InputProps) {
  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput style={styles.input} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    padding: 12,
    fontSize: 18,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: theme.color.lightGrey,
  },
});
