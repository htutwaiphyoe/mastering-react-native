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

Screen name for navigation, pass option object for custom screen

[screen options](https://reactnavigation.org/docs/native-stack-navigator#api-definition)

screen option apply on one screen

default screen option for all screens => screenOptions in Stack.Navigator

options can be function with route and navigation param object for dynamic header text

screen option can be set in screen component with navigation.setOptions(options) in useLayoutEffect

header can add left and right icon buttons using options.headerLeft or navigation.setOptions

[Drawer Navigation](https://reactnavigation.org/docs/drawer-navigator)

[Bottom Tab Navigation](https://reactnavigation.org/docs/bottom-tab-navigator)

If the gap is caused by SafeAreaView, adjust the padding using edges:

```tsx
<SafeAreaView style={styles.screen} edges={['left', 'right']}>
```

[headerRight issue](https://github.com/react-navigation/react-navigation/issues/12274)

use TouchableOpacity in headerLeft, headerRight icon

## Global State Management

[redux-persist-with-react-native-using-redux-toolkit](https://medium.com/@sisongqolosi/redux-persist-with-react-native-using-redux-toolkit-2908cbb9c870)

[@react-native/babel-preset instead of module:metro-react-native-babel-preset](https://github.com/facebook/react-native/issues/50683)

[path-aliases](https://reactnative.dev/docs/typescript#using-custom-path-aliases-with-typescript)

```ts
screenOptions={({ navigation }) => ({
  ...,
  headerRight: ({ tintColor }) => (...),
})}
```

presentation: "modal" => Screen

## Form Handling

textarea input => multiple TextInput

[datetimepicker](https://github.com/react-native-datetimepicker/datetimepicker)

[react-native-date-picker](https://github.com/henninghall/react-native-date-picker)

[react-native-with-react-hook-form-and-zod](https://medium.com/@rutikpanchal121/building-a-robust-form-in-react-native-with-react-hook-form-and-zod-for-validation-7583678970c3)

`autoCorrect` and `autoCapitalize` props in TextInput, disable for email input

use `textAlignVertical: "top"` for `multiline` input

flex: 1 can break multiline input layout

## API Integration

[activityindicator](https://reactnative.dev/docs/activityindicator)

[rnfirebase](http://rnfirebase.io/)

## Authentication

`navigation.replace` for replacing current screen, no back button

conditional rendering different screen or navigation when authenticated

`node.json` => firebase url

firebase protected API rules => read => auth.uid != null => url?auth=token

use AsyncStorage for storing token in device storage

[async-storage](https://github.com/react-native-async-storage/async-storage)

permission for device access

camera config such as edit, aspect ration, quality

iOS need to manage manually for camera access

check permission status for different status handling

only open camera if user is granted

iOS simulator cannot provide camera module

use uri of image object from camera module

set style for image to render correctly

geo-location need user permission for device location

location module returns coordinate object

google map needs credit card for billing account

use map static api

MapView for rendering map

stack screens are created on top of each others, components are not removed and will not rendered, use useIsFocused hook to check it is current screen or not

Expo => development (Expo Go) => production (EAS)

Expo => Expo Management Workflow => Expo Bare Workflow

Expo eject => Expo Management Workflow to Expo Bare Workflow

CLI => no expo package

Expo Cloud Service

Permission, App name and identifier, env variable, icons and splash screen

EAS => Expo Application Services

App version & build version

apk => installable file on android

aab => google play store

app => installable file on iOS

ipa => apple play store
