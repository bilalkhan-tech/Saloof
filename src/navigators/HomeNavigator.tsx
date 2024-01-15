import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '@/screens/Home/DashboardScreen';
import { HomeScreenProps, HomeStackParamList } from 'types/navigation';

const Stack = createStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
