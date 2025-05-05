import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';
import {Image, ScrollView, Text, TextInput, View} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import {colors} from '@/theme';
import recipes from '@/assets/data/recipes.json';

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
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.masonry}>
          {Array.from(Array(2), (_, num) => {
            return (
              <View
                key={`masonry-column-${num}`}
                style={[{flex: 1 / 2, gap: 16}]}>
                {recipes.map((el, i) => {
                  if (i % 2 === num) {
                    return (
                      <View
                        key={`masonry-item-${el.Guid}-${i}`}
                        style={styles.masonryItem}>
                        <Image
                          style={{width: '100%', height: 200, borderRadius: 8}}
                          source={require(`../../assets/images/${el.Name}.jpg`)}
                        />
                        <Text style={{color: 'white'}}>{el.Name}</Text>
                      </View>
                    );
                  }
                  return null;
                })}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
