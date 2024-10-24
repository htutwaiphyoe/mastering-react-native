import { Alert } from "react-native";
import * as Haptics from "expo-haptics";

export const useDelete = () => {
  const onItemDelete = ({
    name,
    onDelete,
  }: {
    name: string;
    onDelete: () => void;
  }) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    Alert.alert(
      `Are you sure you want to delete ${name}?`,
      "This will delete a item",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: onDelete,
          style: "destructive",
        },
      ]
    );
  };
  return {
    onItemDelete,
  };
};
