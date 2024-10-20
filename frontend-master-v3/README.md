# React Native, v3

Course website: <https://kadikraman.github.io/react-native-v3-course/docs/intro/>

Course Repository: <https://github.com/kadikraman/react-native-v3-course-app>

npx create-expo-app --help

Expo is React Native Framework

npx expo lint

yarn add -D prettier eslint-config-prettier eslint-plugin-prettier

module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};

yarn lint --fix

div => View

text must be wrapped by Text => render native UI element

better to use ternary for safety

css like styling but different property names

all styles in React Native is flex box

PixelRatio => 3x3 square

Display Point => 1

1 Display Point === 3x3 PixelRatio

global theme file

NativeWind for React Native Tailwind version

button for Button, Pressable, TouchableOpacity

never use Button due to un-customizable

confirmation box => Alert

StyleSheet.absoluteFill

StyleSheet.absoluteFillObject

style={[styles.one, styles.two]}
