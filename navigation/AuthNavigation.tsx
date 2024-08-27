import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthNavigationParamList} from './types';
import {Signin} from '../screens/auth';

const Stack = createNativeStackNavigator<AuthNavigationParamList>();

export function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
  );
}
