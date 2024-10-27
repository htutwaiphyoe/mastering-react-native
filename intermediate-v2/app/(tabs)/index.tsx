import { theme } from "@/theme";
import { PlantCard } from "@/components/PlantCard";
import { usePlantStore } from "@/store/plantStore";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const plants = usePlantStore((state) => state.plants);

  return (
    <FlatList
      data={plants}
      style={styles.container}
      contentContainerStyle={styles.content}
      renderItem={({ item }) => <PlantCard plant={item} />}
      ListEmptyComponent={
        <View style={styles.empty}>
          <FontAwesome6 name="meh" size={36} color="black" />
          <Text style={styles.emptyText}>You have no plants yet.</Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.lightGrey,
  },
  content: {
    padding: 20,
  },
  empty: {
    flex: 1,
    rowGap: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 18,
  },
});
