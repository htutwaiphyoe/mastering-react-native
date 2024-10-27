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
