import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NoteScreen } from './screen/NoteScreen';

function App() {
  return (
    <SafeAreaProvider>
      <NoteScreen />
    </SafeAreaProvider>
  );
}

export default App;
