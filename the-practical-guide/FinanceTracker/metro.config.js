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
        '@/': __dirname,
        '@/types': __dirname + '/types',
        '@/theme': __dirname + '/theme',
        '@/store': __dirname + '/store',
        '@/screens': __dirname + '/screens',
        '@/components': __dirname + '/components',
        '@/navigation': __dirname + '/navigation',
      },
    },
  };
})();

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
