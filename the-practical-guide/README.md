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
