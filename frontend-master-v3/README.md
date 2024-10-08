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
