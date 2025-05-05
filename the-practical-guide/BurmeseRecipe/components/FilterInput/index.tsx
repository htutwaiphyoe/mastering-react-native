import {colors} from '@/theme';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {TextInput, TextInputProps, View} from 'react-native';

type FilterInputProps = TextInputProps;

export function FilterInput({placeholder, ...props}: FilterInputProps) {
  return (
    <View style={styles.inputContainer}>
      <Icon name="search1" size={20} color={colors.white} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.white}
        {...props}
      />
    </View>
  );
}
