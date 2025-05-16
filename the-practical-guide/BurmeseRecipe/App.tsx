import {RecipeScreen, HomeScreen, FavoriteScreen} from '@/screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ScreenNavigationParams} from './types';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {colors} from './theme';
import {Provider} from 'react-redux';
import {persistor, store} from '@/store';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator<ScreenNavigationParams>();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView>
          <SafeAreaProvider>
            <NavigationContainer>
              <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                  headerStyle: {
                    backgroundColor: colors.background,
                  },
                }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Favorite" component={FavoriteScreen} />
                <Stack.Screen
                  name="Recipe"
                  component={RecipeScreen}
                  options={{headerShown: false}}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}

export default App;
