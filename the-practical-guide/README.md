# React Native - The Practical Guide

Course by Maximilian Schwarzmüller

[Github](https://github.com/academind/react-native-practical-guide-code)

## Getting Started

React + ReactNative => Mobile Development (iOS + Android)

React + ReactDOM => Web Development

React is a standalone library which create virtual DOM

ReactNative is alternative to ReactDOm

ReactNative provides

1. a collection of special React component that are compiled to native UI elements of iOS and Android.
2. Native platform APIs exposed to JS

ReactNative => Compiled view components to respective platform equivalents native components

other logic code such as functions are run on JS thread of React Native in native app that is built

Expo CLI => Open-Source Third-Party Services => Framework for Better DX => can switch to React Native CLI

React Native CLI => React Native Team => Bare-bone boilerplate => can integrate with native code

npx @react-native-community/cli@latest init AwesomeProject

npx create-expo-app@latest

## Core components

cannot use html element like h1,h2 in react native, need to use React Native Component

react native is all about using core components

for div => View
for text => Text
for css => StyleSheet

text must be wrapped with Text component

view for layout

different components for different roles

[react-native-safe-area-context](https://appandflow.github.io/react-native-safe-area-context/)

SafeAreaView for extra padding or margin not to overlaps with any system elements (status bar, notches, etc.)

no css support in React Native

inline styles or stylesheet object => js object with css like style support but only a subset

style props cannot support in all elements

px => auto adjust to device pixel density

stylesheet for separation of concerns and reusability

use array for multiple styles and the later styles in the array have higher priority.

react native uses flex box for layouts, similar to css

View is flex by default, can use flex properties the right away

flex box => one direction, default column

default size of child follows content of the child and default stretch of cross axis

main axis depends on flex direction

flex values related to each other

Button does not have style prop

[button](https://reactnative.dev/docs/button)

[useref-with-textinput](https://medium.com/@rutikpanchal121/how-useref-is-useful-with-textinput-in-react-native-a54a916e3374)

[react-native-autogrow-textinput](https://github.com/wix-incubator/react-native-autogrow-textinput)

[react-native-masonry-list](https://github.com/hyochan/react-native-masonry-list)

same as web event handling and state management due to React core features, difference is ReactNative instead of ReactDOM

`onChangeText` for input change event

`onPress` for onClick event

iOS text native does not support rounded corner

styling difference in iOS and Android

style don't cascade in React Native

View cannot auto scrollable by default like web

use ScrollView for scrollable container

[ScrollView](https://reactnative.dev/docs/scrollview)

ScrollView scrollable area depends on parent container, wrap with normal View and set height in parent

gap property doesn't work directly on a ScrollView. This is a common issue because gap properties work on flex containers but ScrollView handles its children differently. use `contentContainerStyle` for gap

The issue is that ScrollView doesn't have enough height to properly scroll to the bottom. This is a common problem with ScrollView inside flex containers. flex: 1 to container

ScrollView is good for scrolling content and static list, not for dynamic list because ScrollView render everything inside it even some items are not on the screen.

If list has thousand of items, ScrollView has performance issue, use `FlatList` for that

FlatList for scrollable list and render only visible items and use lazy loading for invisible items. It has a small threshold to load items right before they are visible.

[flatlist](https://reactnative.dev/docs/flatlist)

data and renderItem props to pass in FlatList

If item has key property, it is used by default in FlatList. If key is different property, use `keyExtractor`

Pressable is modern approach to create button in React Native

RippleEffect for press state in Pressable

Android => android_ripple
iOS => style={(pressed) => style}

[Modal](https://reactnative.dev/docs/modal)

[Alert](https://reactnative.dev/docs/alert)

[Image](https://reactnative.dev/docs/image)

## Debugging

- error message and stack in terminal
- console.log
- devtools
- documentation

[debugging](https://reactnative.dev/docs/debugging)

## Guessed Game

shadow

web => box-shadow
android => elevation: 0,1,2
iOS => shadowColor, shadowOffset, shadowRadius, shadowOpacity

maxLength for maximum number of character in TextInput

keyboardType for keyboard type

[TextInput](https://reactnative.dev/docs/textinput)

[expo-linear-gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)

[react-linear-gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient)

[ImageBackground](https://reactnative.dev/docs/imagebackground)

[react-native-svg](https://github.com/software-mansion/react-native-svg)

[react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

[react-native-vector-icons setup](https://www.youtube.com/watch?v=VKDkYe7gEMo&t=494s)

Text components can be nested and styles are inherited by Parent Text. View style are not inherited

[custom-fonts-in-react-native](https://dev.to/iammtander/custom-fonts-in-react-native-pro-tip-4693)

## Adaptive and Responsive UI

Make sure app screen is responsive to any different device screens and different screen mode (landscape and portrait)

use max or min and relative units such as %

[height-and-width](https://reactnative.dev/docs/height-and-width)

[Dimension API](https://reactnative.dev/docs/dimensions)

Dimension API for building different sizes in different screen sizes

screen => including status bar
window => excluding status bar

Percentage is not good for every place

Orientation of screen can be locked in app.json `"orientation": "portrait"`

Dimension APIs is only executed once, if users switch different orientation, it will not updated.

use useWindowDimensions for that

KeyboardAvoidView for not to overlapping entire screen with keyboard in iOS

KeyboardAvoidView + ScrollView

Adjust Layout structure depend on screen sizes

Error: a FlatList nested inside a ScrollView => scrollEnabled={false} in flat list

```json
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/screens/*": ["./screens/*"],
      "@/providers/*": ["./providers/*"],
      "@/components/*": ["./components/*"]
    }
  }
```

`metro.config.js`

```js
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const config = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    resolver: {
      sourceExts,
      assetExts,
      extraNodeModules: {
        '@': __dirname,
        '@components': __dirname + '/components',
        '@screens': __dirname + '/screens',
        '@providers': __dirname + '/providers',
        '@styles': __dirname + '/styles',
      },
    },
  };
})();

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
```

`npm install --save-dev babel-plugin-module-resolver metro-react-native-babel-preset`

`babel.config.js`

```js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './',
          '@/screens': './screens',
          '@/providers': './providers',
          '@/components': './components',
        },
      },
    ],
  ],
};
```

[Platform API](https://reactnative.dev/docs/platform)

[platform-specific-code](https://reactnative.dev/docs/platform-specific-code)

file.ios.extension, file.android.extension for platform specific fi les

[StatusBar](https://reactnative.dev/docs/statusbar)

## React Native Navigation

[reactnavigation](https://reactnavigation.org/docs/getting-started)

Core => @react-navigation/native

Peers => react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated

Navigators => @react-navigation/native-stack

Stack.Screen passes `navigation` and `route` object to Screen Component

navigation.navigate()

native-stack uses native components for animation and screens

stack emulates native behaviors

[useNavigation](https://reactnavigation.org/docs/use-navigation)

[useRoute](https://reactnavigation.org/docs/use-route)

[react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/installation)

Wrap app with `<GestureHandlerRootView>`

```ts
useNavigation<NativeStackNavigationProp>()

useRoute<RouteProp>()
```

uri => url, react native auto detect width and height of local image
