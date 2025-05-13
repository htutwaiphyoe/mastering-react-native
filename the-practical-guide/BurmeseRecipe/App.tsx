import {RecipeScreen, HomeScreen} from '@/screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ScreenNavigationParams} from './types';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {colors} from './theme';
import {fontFamily} from './utils/fontFamily';

const Stack = createNativeStackNavigator<ScreenNavigationParams>();

function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: colors.background,
              },
            }}>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Burmese Recipes',
                headerTitleStyle: {
                  fontSize: 24,
                  color: colors.white,
                  fontFamily: fontFamily('900'),
                },
              }}
            />
            <Stack.Screen
              name="Recipe"
              component={RecipeScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
