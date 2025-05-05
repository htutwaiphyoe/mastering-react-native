import {colors} from '@/theme';
import {StyleSheet} from 'react-native';
import {fontFamily} from '@/utils/fontFamily';

export const styles = StyleSheet.create({
  container: {
    gap: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.gray,
  },
  activeTab: {
    backgroundColor: colors.primary,
  },
  tabText: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fontFamily('500'),
  },
});
