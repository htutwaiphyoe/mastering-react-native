import { theme } from "theme";
import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorCerulean }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Shopping  List",
          tabBarIcon: (props) => <Feather name="list" {...props} />,
        }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
          headerShown: false,
          tabBarIcon: (props) => <AntDesign name="clockcircleo" {...props} />,
        }}
      />
    </Tabs>
  );
}
