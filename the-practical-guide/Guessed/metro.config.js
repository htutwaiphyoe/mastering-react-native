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
        '@/components': __dirname + '/components',
        '@/screens': __dirname + '/screens',
        '@/providers': __dirname + '/providers',
        '@/styles': __dirname + '/styles',
        '@/assets': __dirname + '/assets',
        '@/hooks': __dirname + '/hooks',
        '@/utils': __dirname + '/utils',
        '@/navigation': __dirname + '/navigation',
        '@/theme': __dirname + '/theme',
        '@/types': __dirname + '/types',
      },
    },
  };
})();

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
