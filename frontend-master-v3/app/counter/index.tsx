import Button from "components/Button";
import { Alert, StyleSheet, Text, View } from "react-native";
import { theme } from "theme";
import { registerPushNotifications } from "utils/notification";
import * as Notifications from "expo-notifications";

export default function Counter() {
  const scheduleNotifications = async () => {
    const result = await registerPushNotifications();
    if (result === "granted") {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Hello, React Native!",
        },
        trigger: {
          seconds: 3,
        },
      });
    } else {
      Alert.alert(
        "Unable to schedule notification",
        "Enable the notifications permission for Expo Go in settings"
      );
    }
  };
  return (
    <View style={styles.container}>
      <Button style={styles.button} onPress={scheduleNotifications}>
        <Text style={styles.buttonText}>Schedule Notifications</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colorWhite,
  },
  button: {
    padding: 12,
    borderRadius: 6,
    backgroundColor: theme.colorBlack,
  },
  buttonText: {
    color: "#fff",
    letterSpacing: 1,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
