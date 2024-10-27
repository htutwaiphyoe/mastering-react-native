import { Stack } from "expo-router";

export default function Layout() {
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
