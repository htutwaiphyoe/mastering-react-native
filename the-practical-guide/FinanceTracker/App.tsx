import {store} from '@/store';
import {Provider} from 'react-redux';
import {Navigation} from '@/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;
