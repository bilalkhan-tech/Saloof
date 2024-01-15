import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AlertsMainScreen from '@/screens/Alerts/AlertsMainScreen';

const Stack = createStackNavigator();

const AlertsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AlertsMainScreen" component={AlertsMainScreen} />
    </Stack.Navigator>
  );
};

export default AlertsNavigator;
