import AsyncStorage from "@react-native-async-storage/async-storage";

export const SHOPPING_STORAGE_KEY = "shopping-list";

export const getStorage = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (e: unknown) {
    return null;
  }
};

export const setStorage = async (key: string, value: object) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e: unknown) {
    console.error("Error setting data to storage", e);
  }
};

export const clearStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e: unknown) {
    console.error("Error clearing data from storage", e);
  }
};
