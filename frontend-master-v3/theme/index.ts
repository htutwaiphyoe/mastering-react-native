import { StyleSheet } from "react-native";

export const theme = {
  colorGrey: "grey",
  colorWhite: "#fff",
  colorBlack: "#000",
  colorRed: "#ee6055",
  colorLightGrey: "#eee",
  colorCerulean: "#1a759f",
};

export const globalStyles = StyleSheet.create({
  row: {
    flex: 1,
    gap: 10,
    alignItems: "center",
    flexDirection: "row",
  },
});
