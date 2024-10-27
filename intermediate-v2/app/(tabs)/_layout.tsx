import { theme } from "@/theme";
import { useOnboarding } from "@/hooks";
import { Pressable } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { AntDesign } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import { Link, Redirect, Tabs } from "expo-router";

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
          headerRight: () => (
            <Link href="/new" asChild>
              <Pressable hitSlop={80} style={{ marginRight: 24 }}>
                <AntDesign
                  size={24}
                  name="pluscircleo"
                  color={theme.color.green}
                />
              </Pressable>
            </Link>
          ),
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
