module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@/': './',
          '@/types': './types',
          '@/store': './store',
          '@/theme': './theme',
          '@/screens': './screens',
          '@/components': './components',
          '@/navigation': './navigation',
        },
      },
    ],
  ],
};
