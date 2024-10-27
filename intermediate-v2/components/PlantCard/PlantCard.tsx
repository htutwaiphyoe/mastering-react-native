import { theme } from "@/theme";
import { Plant } from "@/types";
import { StyleSheet, Text, View } from "react-native";
import { PlantlyImage } from "@/components/PlantlyImage";
import { Button } from "../Button";

type PlantCardProps = {
  plant: Plant;
};

export function PlantCard({ plant }: PlantCardProps) {
  return (
    <View style={styles.card}>
      <PlantlyImage size={100} />
      <View style={styles.content}>
        <Text style={styles.title}>{plant.name}</Text>
        <Text style={styles.subtitle}>
          Water every {plant.wateringFrequencyDays} Days
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    elevation: 1,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    shadowColor: theme.color.black,
    backgroundColor: theme.color.white,
  },
  content: {
    rowGap: 4,
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
