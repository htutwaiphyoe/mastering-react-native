import { theme } from "@/theme";
import { useOnboarding } from "@/hooks";
import { Redirect, Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";

export default function Layout() {
  const { isOnBoarded } = useOnboarding();

  if (!isOnBoarded) {
    return <Redirect href="onboarding" />;
  }

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.color.green }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: (props) => <Entypo name="leaf" {...props} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: (props) => <Feather name="user" {...props} />,
        }}
      />
    </Tabs>
  );
}
