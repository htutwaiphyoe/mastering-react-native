import { platformIOS } from '@rock-js/platform-ios';
import { platformAndroid } from '@rock-js/platform-android';
import { pluginBrownfieldIos } from '@rock-js/plugin-brownfield-ios';
import { pluginBrownfieldAndroid } from '@rock-js/plugin-brownfield-android';
import { pluginRepack } from '@rock-js/plugin-repack';

export default {
  plugins: [
    pluginBrownfieldIos(),
    pluginBrownfieldAndroid(),
  ],
  bundler: pluginRepack(),
  platforms: {
    ios: platformIOS(),
    android: platformAndroid(),
  },
};
