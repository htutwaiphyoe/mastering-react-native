import {styles} from './styles';
import {categories} from '@/constants';
import {Pressable, Text, View} from 'react-native';

type TabsProps = {
  tab: string;
  onChangeTab: (tab: string) => void;
};

export function Tabs({tab, onChangeTab}: TabsProps) {
  return (
    <View style={styles.container}>
      {categories.map(el => (
        <Pressable
          key={el}
          onPress={() => onChangeTab(el)}
          style={[styles.tab, tab === el && styles.activeTab]}>
          <Text style={styles.tabText}>{el}</Text>
        </Pressable>
      ))}
    </View>
  );
}
