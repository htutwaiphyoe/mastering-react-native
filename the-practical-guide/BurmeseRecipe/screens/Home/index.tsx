import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import {colors} from '@/theme';
import recipes from '@/assets/data/recipes.json';
import users from '@/assets/data/users.json';
import {useState} from 'react';

const userType = users.reduce((acc, curr) => {
  acc[curr.UserCode] = curr.UserEngType;
  return acc;
}, {} as Record<string, string>);

const categories = ['All', ...users.map(el => el.UserEngType)];

export function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Burmese Recipes</Text>
        <View style={styles.inputContainer}>
          <Icon name="search" size={20} color={colors.white} />
          <TextInput
            value={search}
            style={styles.input}
            placeholder="Search recipe"
            placeholderTextColor={colors.white}
            onChangeText={setSearch}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 16,
          alignItems: 'center',
          marginBottom: 16,
        }}>
        {categories.map((el, i) => (
          <Pressable
            key={el}
            onPress={() => setSelectedCategory(el)}
            style={[
              {
                backgroundColor: colors.gray,
                paddingVertical: 8,
                paddingHorizontal: 16,
                borderRadius: 8,
              },
              selectedCategory === el && {
                backgroundColor: colors.primary,
              },
            ]}>
            <Text style={{color: 'white', fontSize: 14}}>{el}</Text>
          </Pressable>
        ))}
      </View>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.masonry}>
          {Array.from(Array(2), (_, num) => {
            return (
              <View
                key={`masonry-column-${num}`}
                style={[
                  {
                    flex: 1 / 2,
                    gap: 16,
                    alignSelf: 'flex-start',
                  },
                ]}>
                {recipes
                  .filter(
                    recipe =>
                      (selectedCategory === 'All' ||
                        userType[recipe.UserType] === selectedCategory) &&
                      recipe.Name.includes(search),
                  )
                  .map((el, i) => {
                    if (i % 2 === num) {
                      return (
                        <View
                          key={`masonry-item-${el.Guid}-${i}`}
                          style={styles.masonryItem}>
                          <Image
                            style={styles.image}
                            source={{uri: el.Image}}
                          />
                          <View style={styles.recipeContent}>
                            <Text style={styles.recipeName}>{el.Name}</Text>
                            <Text
                              style={styles.recipeIngredient}
                              numberOfLines={1}
                              ellipsizeMode="tail">
                              {el.Ingredients}
                            </Text>
                            <Text style={styles.recipeUserType}>
                              {userType[el.UserType]}
                            </Text>
                          </View>
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
