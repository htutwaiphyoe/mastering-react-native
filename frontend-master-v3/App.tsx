import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "./theme";

export default function App() {
  const handleDelete = () => {
    Alert.alert(
      "Are you sure you want to delete this?",
      "This will delete a item",
      [
        { text: "No", style: "cancel" },
        {
          text: "Yes",
          style: "destructive",
          onPress: () => console.log("Deleted"),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemText}>Coffee</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={handleDelete}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme.colorWhite,
  },
  item: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: theme.colorCerulean,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "200",
  },
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
