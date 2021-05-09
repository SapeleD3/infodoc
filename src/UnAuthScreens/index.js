import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from './welcome';
import Login from './Login';
import Register from './Register';

const AuthStack = createStackNavigator();
export const UnAuthenticationNavigator = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
};
