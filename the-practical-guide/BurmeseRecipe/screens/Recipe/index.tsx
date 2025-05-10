import {styles} from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ScreenNavigationProps, RecipeScreenRouteParam} from '@/types';
import {ScrollView, Text} from 'react-native-gesture-handler';
import {Image, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '@/theme';

export function RecipeScreen() {
  const {params} = useRoute<RecipeScreenRouteParam>();
  const {popTo} = useNavigation<ScreenNavigationProps>();

  return (
    <View style={styles.screen}>
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
      <Pressable
        style={({pressed}) => [
          styles.backButton,
          pressed && styles.backButtonPressed,
        ]}
        onPress={() => popTo('Home')}>
        <Icon name="left" size={20} color={colors.white} />
      </Pressable>
    </View>
  );
}
