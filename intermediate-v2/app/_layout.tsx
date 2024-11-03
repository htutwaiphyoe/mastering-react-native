import { Stack } from "expo-router";
import { useEffect } from "react";
import * as QuickActions from "expo-quick-actions";
import { Platform } from "react-native";
import { useQuickActionRouting } from "expo-quick-actions/router";

export default function Layout() {
  useQuickActionRouting();

  useEffect(() => {
    QuickActions.setItems([
      {
        id: "0",
        title: "New Plant",
        params: { href: "/new" },
        icon: Platform.OS === "ios" ? "symbol:leaf" : "leaf",
      },
    ]);
  }, []);

  return (
    <Stack>
      <Stack.Screen
        name="onboarding"
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          presentation: "modal",
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="new"
        options={{
          title: "New Plant",
          presentation: "modal",
          animation: "fade_from_bottom",
        }}
      />
    </Stack>
  );
}
