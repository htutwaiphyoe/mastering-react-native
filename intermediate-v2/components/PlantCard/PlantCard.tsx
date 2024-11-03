import { theme } from "@/theme";
import { Plant } from "@/types";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { PlantlyImage } from "@/components/PlantlyImage";
import { Link } from "expo-router";

type PlantCardProps = {
  plant: Plant;
};

export function PlantCard({ plant }: PlantCardProps) {
  return (
    <Link href={`/plants/${plant.id}`} asChild>
      <Pressable style={styles.card}>
        <PlantlyImage size={100} imageUri={plant.imageUri} />
        <View style={styles.content}>
          <Text style={styles.title}>{plant.name}</Text>
          <Text style={styles.subtitle}>
            Water every {plant.wateringFrequencyDays} Days
          </Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    elevation: 1,
    columnGap: 10,
    borderRadius: 12,
    flexDirection: "row",
    shadowColor: theme.color.black,
    backgroundColor: theme.color.white,
  },
  content: {
    rowGap: 8,
    padding: 14,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 14,
    color: theme.color.grey,
  },
});
