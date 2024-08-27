import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthNavigationParamList = {
  Signin: undefined;
};

export type MainBottomTabParamList = {
  Home: undefined;
};

export type MainStackParamList = {
  Home: undefined;
};

export type AuthStackScreenProps<T extends keyof AuthNavigationParamList> =
  NativeStackScreenProps<AuthNavigationParamList, T>;

export type MainStackScreenProps<T extends keyof MainStackParamList> =
  NativeStackScreenProps<MainStackParamList, T>;
