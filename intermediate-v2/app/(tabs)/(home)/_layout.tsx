import { theme } from "@/theme";
import { Entypo } from "@expo/vector-icons";
import { Stack, Link } from "expo-router";
import { Pressable } from "react-native";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => (
            <Link href="/new" asChild>
              <Pressable hitSlop={80} style={{ marginRight: 24 }}>
                <Entypo
                  size={24}
                  name="add-to-list"
                  color={theme.color.green}
                />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="plants/[plantId]"
        options={{
          title: "",
          headerBackTitleVisible: false,
          headerTintColor: theme.color.black,
        }}
      />
    </Stack>
  );
}
