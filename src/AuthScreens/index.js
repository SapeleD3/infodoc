import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';

const AuthStack = createBottomTabNavigator();
export const AuthenticationNavigator = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="Home" component={Home} />
      <AuthStack.Screen name="Trend" component={Home} />
      <AuthStack.Screen name="Notification" component={Home} />
      <AuthStack.Screen name="Message" component={Home} />
    </AuthStack.Navigator>
  );
};
