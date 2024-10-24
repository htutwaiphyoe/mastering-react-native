import { Alert } from "react-native";

export const useDelete = () => {
  const onItemDelete = ({
    name,
    onDelete,
  }: {
    name: string;
    onDelete: () => void;
  }) => {
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
