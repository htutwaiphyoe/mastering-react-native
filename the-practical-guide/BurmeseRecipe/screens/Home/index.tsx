import {styles} from './styles';
import {TouchableOpacity, TouchableOpacityProps, View} from 'react-native';
import {userType} from '@/constants';
import {Tabs} from '@/components/Tabs';
import {Masonry} from '@/components/Masonry';
import {ScreenNavigationProps} from '@/types';
import recipes from '@/assets/data/recipes.json';
import {FilterInput} from '@/components/FilterInput';
import {useNavigation} from '@react-navigation/native';
import {Recipe, RecipeProps} from '@/components/Recipe';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useLayoutEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '@/theme';

const favoriteButton = ({onPress}: TouchableOpacityProps) => (
  <TouchableOpacity onPress={onPress} style={styles.icon}>
    <Icon name="heart" color={colors.white} size={20} />
  </TouchableOpacity>
);

export function HomeScreen() {
  const navigation = useNavigation<ScreenNavigationProps>();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Burmese Recipes',
      headerTitleStyle: styles.title,
      headerRight: () =>
        favoriteButton({onPress: () => navigation.navigate('Favorite')}),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.screen} edges={['left', 'right']}>
      <View style={styles.header}>
        <FilterInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search recipes"
        />
      </View>
      <Tabs tab={selectedCategory} onChangeTab={setSelectedCategory} />
      <Masonry<RecipeProps['data']>
        cols={2}
        renderItem={({item}) => <Recipe data={item} key={item.Guid} />}
        data={recipes.filter(
          recipe =>
            (selectedCategory === 'All' ||
              userType[recipe.UserType] === selectedCategory) &&
            recipe.Name.includes(search),
        )}
      />
    </SafeAreaView>
  );
}
