import { Alert } from "react-native";

export const useDelete = () => {
  const handleItemDelete = (name: string) => {
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
          style: "destructive",
          onPress: () => console.log("Deleted"),
        },
      ]
    );
  };
  return {
    handleItemDelete,
  };
};
