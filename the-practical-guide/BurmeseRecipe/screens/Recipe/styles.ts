import {colors} from '@/theme';
import {StyleSheet} from 'react-native';
import {fontFamily} from '@/utils/fontFamily';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  imageContainer: {
    height: 400,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    backgroundColor: colors.background,
    borderRadius: 50,
    padding: 10,
    opacity: 0.7,
  },
  backButtonPressed: {
    opacity: 0.5,
  },
  content: {
    gap: 16,
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    color: colors.white,
    fontFamily: fontFamily('900'),
  },
  subtitle: {
    fontSize: 20,
    color: colors.white,
    fontFamily: fontFamily('600'),
  },
  description: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fontFamily('400'),
  },
});
