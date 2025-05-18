import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HistoryScreen, ManageScreen, RecentScreen} from '@/screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function RecentTabIcon(props: {color: string; size: number}) {
  return <Icon name="time-outline" {...props} />;
}

function HistoryTabIcon(props: {color: string; size: number}) {
  return <Icon name="bar-chart-outline" {...props} />;
}

function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Recent"
        component={RecentScreen}
        options={{
          tabBarLabel: 'Recent',
          tabBarIcon: RecentTabIcon,
          tabBarLabelStyle: {
            fontSize: 14,
          },
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: HistoryTabIcon,
          tabBarLabelStyle: {
            fontSize: 14,
          },
        }}
      />
    </Tab.Navigator>
  );
}

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Manage"
        component={ManageScreen}
        options={{
          presentation: 'fullScreenModal',
        }}
      />
    </Stack.Navigator>
  );
}

export function Navigation() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
