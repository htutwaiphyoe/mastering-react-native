import {useState} from 'react';
import {styles} from './styles';
import {userType} from '@/constants';
import {Tabs} from '@/components/Tabs';
import {View} from 'react-native';
import {Masonry} from '@/components/Masonry';
import recipes from '@/assets/data/recipes.json';
import {FilterInput} from '@/components/FilterInput';
import {Recipe, RecipeProps} from '@/components/Recipe';
import {SafeAreaView} from 'react-native-safe-area-context';

export function HomeScreen() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

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
