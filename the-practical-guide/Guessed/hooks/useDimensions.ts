import {useWindowDimensions} from 'react-native';

export const useDimensions = () => {
  const {width, height} = useWindowDimensions();

  return {
    isSmallScreen: width < 380,
    isLandscape: height > width,
  };
};
