import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type ScreenNavigationParams = {
  Recent: undefined;
  History: undefined;
  Manage: undefined;
};

export type ScreenNavigationProps = NativeStackNavigationProp<
  ScreenNavigationParams,
  'Recent' | 'Manage' | 'History'
>;
