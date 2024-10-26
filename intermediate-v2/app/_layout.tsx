import { theme } from "@/theme";
import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";

export default function Layout() {
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
