import { StyleSheet, Text, TextStyle, View } from "react-native";

type TimeSegmentProps = {
  time: number;
  unit: string;
  textStyle?: TextStyle;
};

export function TimeSegment({ time, unit, textStyle }: TimeSegmentProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.time, textStyle]}>{time}</Text>
      <Text style={textStyle}>{unit}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  time: {
    fontSize: 24,
    fontWeight: "bold",
    fontVariant: ["tabular-nums"],
  },
});
