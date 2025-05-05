import {fonts} from '@/theme';

export const fontFamily = (
  weight:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900' = '400',
) => {
  switch (weight) {
    case '100':
      return fonts.thin;
    case '200':
      return fonts.extraLight;
    case '300':
      return fonts.light;
    case '400':
      return fonts.regular;
    case '500':
      return fonts.medium;
    case '600':
      return fonts.semiBold;
    case '700':
      return fonts.bold;
    case '800':
      return fonts.extraBold;
    case '900':
      return fonts.black;
    default:
      return fonts.regular;
  }
};
