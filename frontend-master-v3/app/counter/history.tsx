import { theme } from "theme";
import { format } from "date-fns";
import { getStorage } from "utils/storage";
import { useEffect, useState } from "react";
import { TPersistCountdownState } from "types";
import { Text, StyleSheet, FlatList, View } from "react-native";
import { COUNTDOWN_STORAGE_KEY, fullDateFormat } from "constant";

export default function History() {
  const { countDown } = useContainer();

  return (
    <FlatList
      style={styles.container}
      data={countDown?.completedAt}
      contentContainerStyle={styles.contentContainer}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <Text style={styles.listItemText}>
            {format(item, fullDateFormat)}
          </Text>
        </View>
      )}
      ListEmptyComponent={
        <View style={styles.listEmptyContainer}>
          <Text style={styles.listItemText}>Countdown list is empty</Text>
        </View>
      }
    />
  );
}

const useContainer = () => {
  const [countDown, setCountDown] = useState<TPersistCountdownState>();

  useEffect(() => {
    const initCountdown = async () => {
      const data = await getStorage(COUNTDOWN_STORAGE_KEY);
      setCountDown(data);
    };
    initCountdown();
  }, []);

  return {
    countDown,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    marginTop: 8,
  },
  listEmptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 18,
  },
  listItem: {
    marginHorizontal: 8,
    marginBottom: 8,
    alignItems: "center",
    backgroundColor: theme.colorLightGrey,
    padding: 12,
    borderRadius: 6,
  },
  listItemText: {
    fontSize: 18,
  },
});
