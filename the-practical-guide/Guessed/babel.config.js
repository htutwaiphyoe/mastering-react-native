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
          '@/components': './components',
          '@/screens': './screens',
          '@/providers': './providers',
          '@/styles': './styles',
          '@/assets': './assets',
          '@/hooks': './hooks',
          '@/utils': './utils',
          '@/navigation': './navigation',
          '@/theme': './theme',
          '@/types': './types',
        },
      },
    ],
  ],
};
