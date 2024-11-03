import { Button } from "@/components/Button";
import { PlantlyImage } from "@/components/PlantlyImage";
import { usePlantStore } from "@/store/plantStore";
import { theme } from "@/theme";
import { getFullDateFormat } from "@/utils";
import { differenceInCalendarDays, format } from "date-fns";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

export default function PlantDetails() {
  const router = useRouter();
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const { removePlant, waterPlant, plants } = usePlantStore();
  const plantId = params.plantId;
  const plant = plants.find((plant) => plant.id === plantId);

  const handleWaterPlant = () => {
    if (typeof plantId === "string") waterPlant(plantId);
  };

  const handleDeletePlant = () => {
    if (!plant?.id) return;

    Alert.alert(
      `Are you sure you want to delete ${plant?.name}?`,
      "It will be gone for good",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Yes, delete",
          style: "destructive",
          onPress: () => {
            removePlant(plant.id);
            router.navigate("/");
          },
        },
      ]
    );
  };

  if (!plant) {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>No plant found</Text>
      </View>
    );
  }
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.center}>
        <PlantlyImage imageUri={plant.imageUri} />
        <Text style={styles.key}>Water me every</Text>
        <Text style={styles.value}>{plant.wateringFrequencyDays} days</Text>
        <Text style={styles.key}>Last watered at</Text>
        <Text style={styles.value}>
          {plant.lastWatered
            ? `${getFullDateFormat(plant.lastWatered)}`
            : "Never 😟"}
        </Text>
        <Text style={styles.key}>Days since last watered</Text>
        <Text style={styles.value}>
          {plant.lastWatered
            ? differenceInCalendarDays(Date.now(), plant.lastWatered)
            : "N/A"}
        </Text>
      </View>
      <Button title="Water me!" onPress={handleWaterPlant} />
      <Pressable style={styles.deleteButton} onPress={handleDeletePlant}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  notFoundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.color.white,
  },
  notFoundText: {
    fontSize: 18,
  },
  detailsContainer: {
    flex: 1,
    gap: 16,
    padding: 12,
    justifyContent: "center",
    backgroundColor: theme.color.white,
  },
  center: {
    gap: 16,
    alignItems: "center",
  },
  key: {
    fontSize: 16,
    textAlign: "center",
    color: theme.color.black,
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: theme.color.green,
  },
  deleteButton: {
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButtonText: {
    fontWeight: "bold",
    color: theme.color.grey,
  },
  spacer: {
    height: 18,
  },
});
