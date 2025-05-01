import {fonts} from '../theme';

export const fontFamily = (
  weight: '100' | '300' | '400' | '700' | '900' = '400',
) => {
  switch (weight) {
    case '100':
      return fonts.thin;
    case '300':
      return fonts.light;
    case '400':
      return fonts.regular;
    case '700':
      return fonts.bold;
    case '900':
      return fonts.black;
    default:
      return fonts.regular;
  }
};
