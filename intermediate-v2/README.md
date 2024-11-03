# Intermediate React Native v2

[Website](https://kadikraman.github.io/intermediate-react-native-v2-course/)

[Github](https://github.com/kadikraman/intermediate-react-native-v2-course-app)

use yarn v1

yarn create expo-app plantly -t

npx expo lint

yarn add -D prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-native

```js
module.exports = { 
  extends: ["expo", "prettier"],
  plugins: ["prettier", "react-native"],
  rules: {
    "prettier/prettier": "error",
    "react-native/no-unused-styles": "error",
  },
};
```

yarn lint --fix

A scheme is similar to a url. The reason this is required is because expo router comes with deep linking built in. be unique

```bash
npx expo install @expo/vector-icons
```

[expo icon](https://icons.expo.fyi/Index)

tabBarIcon, tabBarLabel, tabBarShowLabel, focused for tabBar active

path alias

```bash
"baseUrl": ".",
"paths": {
  "@/*": ["./*"]
}
```

Layout groups (), don't show up as part of the route.

screen animation

npx expo install @react-native-async-storage/async-storage

zustand + async storage

```ts
export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      isOnBoarded: false,
      setIsOnBoarded: (isOnBoarded: boolean) =>
        set((state) => ({ ...state, isOnBoarded })),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
```

haptic feedback - a little vibration - when pressed

```bash
npx expo install expo-haptics
```

style onPress

```ts
style={(state) => {
      if (state.pressed) {
        return [styles.button, styles.buttonPressed];
      }
      return styles.button;
    }}
```

A linear gradient is an image consisting of a progressive transition between two or more colors along a straight line.

```bash
npx expo install expo-linear-gradient
```

expo-status-bar

Add paths: ['./src'] to "import/resolver" inside  .eslintrc.js

built-in Image component and For advanced usage, use Expo Image or Fast Image.

For local images in React Native, the image uri is passed in via require. This ensures the image files are bundled after.

React Native app consists of two parts:

- the JavaScript bundle (which you build with npx expo start)
- the native app bundle (so far, Expo Go)

npx expo install expo-dev-client

npx expo prebuild --platform ios
npx expo prebuild --platform android

npx expo run:ios
npx expo run:android

The splash screen is a 1284 × 2778 png. It will be displayed when your app first launches while the app is loading. The image is passed in the app.json expo -> splash.

The iOS app icon is a 1024 x 1024 png. No transparency. The image is passed in the app.json at expo -> icon.

The Android app icon also a 1024 × 1024 png, but it is expected to have either transparency or a solid background. The image is passed in the app.json at expo -> android -> adaptiveIcon -> foregroundImage.

For the web, we have a 48 x 48 png. Passed in the app.json at expo -> web -> favicon.

npx expo prebuild --platform ios --clean
npx expo prebuild --platform android --clean

the default system font for each platform: that is, San Francisco on iOS and Roboto on Android. In order to use a custom font we need to bundle the font files with our application.

There's two ways of including custom fonts with Expo:

load the font at runtime with the useFonts hook - this exists to make custom fonts possible in Expo Go and loads the font in asynchronously at runtime
using the expo-font config plugin - available only with development builds, bundles the font files in the native bundle so they're always available
As we're on team Development Build now, we'll go with option number two! Format-wise, you can use either OTF and TTF formats. If the font you're using has both, choose OTF as the .otf files are smaller than .ttf files.

npx expo install expo-font @expo-google-fonts/caveat

A quick action is an item in the list that appears when you press and hold the app icon. It can be handy for launching actions directly from the app home screen. Or prompting users to give you feedback before deleting the app.

npx expo install expo-quick-actions
