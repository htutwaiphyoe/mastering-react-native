import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';
import {Text, TextInput, View} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import {colors} from '@/theme';

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Burmese Recipes</Text>
        <View style={styles.inputContainer}>
          <Icon name="search" size={20} color={colors.white} />
          <TextInput
            style={styles.input}
            placeholder="Search recipe"
            placeholderTextColor={colors.white}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
