import {useState} from 'react';
import {styles} from './styles';
import {Alert, Image, View} from 'react-native';
import {IconButton} from '@/components/IconButton';
import {ScrollView, Text} from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ScreenNavigationProps, RecipeScreenRouteParam} from '@/types';

export function RecipeScreen() {
  const {params} = useRoute<RecipeScreenRouteParam>();
  const {popTo} = useNavigation<ScreenNavigationProps>();
  const [favorite, setFavorite] = useState(params.data.Favorite);

  const toggleFavorite = () => {
    if (!favorite) {
      return setFavorite((prev): boolean => !prev);
    }
    Alert.alert(
      'Remove from Favorite',
      'Do you want to remove this recipe from favorite?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => setFavorite((prev): boolean => !prev),
        },
      ],
    );
  };

  return (
    <View style={styles.screen}>
      <IconButton
        icon="left"
        style={styles.backButton}
        onPress={() => popTo('Home')}
      />
      <IconButton
        onPress={toggleFavorite}
        style={styles.favoriteButton}
        icon={favorite ? 'heart' : 'hearto'}
      />
      <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={{uri: params.data.Image}} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{params.data.Name}</Text>
          <View>
            <Text style={styles.subtitle}>ပါဝင်ပစ္စည်းများ</Text>
            <Text style={styles.description}>{params.data.Ingredients}</Text>
          </View>
          <View>
            <Text style={styles.subtitle}>ချက်ပြုတ်ပုံအဆင့်ဆင့်</Text>
            <Text style={styles.description}>
              {params.data.CookingInstructions}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
