module.exports = {
  presets: ['module:@react-native/babel-preset'],
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
          '@/styles': './styles',
          '@/theme': './theme',
          '@/types': './types',
          '@/hooks': './hooks',
          '@/utils': './utils',
          '@/assets': './assets',
        },
      },
    ],
  ],
};
