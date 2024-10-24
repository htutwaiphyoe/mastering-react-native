import { theme } from "theme";
import * as Device from "expo-device";
import Button from "components/Button";
import * as Haptics from "expo-haptics";
import { useEffect, useRef, useState } from "react";
import * as Notifications from "expo-notifications";
import { TimeSegment } from "components/TimeSegment";
import { getStorage, setStorage } from "utils/storage";
import { intervalToDuration, isBefore } from "date-fns";
import ConfettiCannon from "react-native-confetti-cannon";
import { COUNTDOWN_STORAGE_KEY, interval } from "constant";
import { registerPushNotifications } from "utils/notification";
import { TCountdownStatus, TPersistCountdownState } from "types";
import {
  View,
  Alert,
  Text,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

export default function Counter() {
  const { scheduleNotifications, confettiRef, status, isLoading } =
    useContainer();

  if (isLoading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View
      style={[
        styles.container,
        status.isOverdue ? styles.containerOverdue : undefined,
      ]}
    >
      {!status.isOverdue ? (
        <Text style={[styles.heading]}>Course will due in</Text>
      ) : (
        <Text style={[styles.heading, styles.whiteText]}>Overdue by</Text>
      )}
      <View style={styles.row}>
        <TimeSegment
          unit="Days"
          time={status.distance?.days ?? 0}
          textStyle={status.isOverdue ? styles.whiteText : undefined}
        />
        <TimeSegment
          unit="Hours"
          time={status.distance?.hours ?? 0}
          textStyle={status.isOverdue ? styles.whiteText : undefined}
        />
        <TimeSegment
          unit="Minutes"
          time={status.distance?.minutes ?? 0}
          textStyle={status.isOverdue ? styles.whiteText : undefined}
        />
        <TimeSegment
          unit="Seconds"
          time={status.distance?.seconds ?? 0}
          textStyle={status.isOverdue ? styles.whiteText : undefined}
        />
      </View>
      <Button style={styles.button} onPress={scheduleNotifications}>
        <Text style={styles.buttonText}>completed!</Text>
      </Button>
      <ConfettiCannon
        count={50}
        fadeOut={true}
        ref={confettiRef}
        autoStart={false}
        origin={{
          y: -30,
          x: Dimensions.get("window").width / 2,
        }}
      />
    </View>
  );
}

const useContainer = () => {
  const confettiRef = useRef<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [countDown, setCountDown] = useState<TPersistCountdownState>();
  const [status, setStatus] = useState<TCountdownStatus>({
    isOverdue: false,
    distance: {},
  });

  useEffect(() => {
    setIsLoading(true);
    const initCountdown = async () => {
      const data = await getStorage(COUNTDOWN_STORAGE_KEY);
      setCountDown(data);
    };
    initCountdown();
  }, []);

  const lastCompletedAt = countDown?.completedAt[0];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const timestamp = lastCompletedAt
        ? lastCompletedAt + interval
        : Date.now();
      const isOverdue = isBefore(timestamp, Date.now());
      const distance = intervalToDuration(
        isOverdue
          ? { start: timestamp, end: Date.now() }
          : { start: Date.now(), end: timestamp }
      );
      setStatus({ isOverdue, distance });
      setIsLoading(false);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [lastCompletedAt]);

  const scheduleNotifications = async () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    confettiRef?.current?.start();
    let pushNotificationId;
    const result = await registerPushNotifications();
    if (result === "granted") {
      pushNotificationId = await Notifications.scheduleNotificationAsync({
        content: {
          title: "Task is due!",
        },
        trigger: {
          seconds: interval / 1000,
        },
      });
    } else {
      if (Device.isDevice) {
        Alert.alert(
          "Unable to schedule notification",
          "Enable the notifications permission for Expo Go in settings"
        );
      }
    }

    if (countDown?.currentNotificationId) {
      await Notifications.cancelScheduledNotificationAsync(
        countDown.currentNotificationId
      );
    }

    const newCountDown: TPersistCountdownState = {
      currentNotificationId: pushNotificationId,
      completedAt: countDown
        ? [Date.now(), ...countDown.completedAt]
        : [Date.now()],
    };

    setCountDown(newCountDown);
    await setStorage(COUNTDOWN_STORAGE_KEY, newCountDown);
  };

  return {
    status,
    isLoading,
    confettiRef,
    scheduleNotifications,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colorWhite,
  },
  row: {
    marginBottom: 24,
    flexDirection: "row",
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
  heading: {
    fontSize: 24,
    marginBottom: 24,
    fontWeight: "bold",
    color: theme.colorBlack,
  },
  containerOverdue: {
    backgroundColor: theme.colorRed,
  },
  whiteText: {
    color: theme.colorWhite,
  },
  activityIndicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colorWhite,
  },
});
