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

SVG is not great way to use in native app, expensive to render

preferred small PNGs

npx expo install command ensures installing an SDK-compatible version of the library

yarn install or npm install, which by default would install the latest version of that package

[expo router](https://docs.expo.dev/router/introduction/)

[reactnavigation](https://reactnavigation.org/docs/getting-started)

```bash
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

the screens and layouts have a default export

Displaying screens in a Stack is the default way to navigate. It means that when you navigate to a new screen, it is rendered on top of the current screen, so you can goBack() to the previous screen to go back.

There are 3 main ways to navigate between screens:

1. Using the Link component
2. Programmatically with the useRouter hook
3. Using the built-in header and bottom tabs button
