# React Native - The Practical Guide

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
