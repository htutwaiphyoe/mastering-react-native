import {styles} from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ScreenNavigationProps, RecipeScreenRouteParam} from '@/types';
import {ScrollView, Text} from 'react-native-gesture-handler';
import {Image, View} from 'react-native';
import {IconButton} from '@/components/IconButton';

export function RecipeScreen() {
  const {params} = useRoute<RecipeScreenRouteParam>();
  const {popTo} = useNavigation<ScreenNavigationProps>();

  return (
    <View style={styles.screen}>
      <IconButton
        icon="left"
        style={styles.backButton}
        onPress={() => popTo('Home')}
      />
      <IconButton
        icon="hearto"
        style={styles.favoriteButton}
        onPress={() => popTo('Home')}
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
