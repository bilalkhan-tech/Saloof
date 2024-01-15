import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '@/screens/Home/DashboardScreen';
import { HomeScreenProps, HomeStackParamList } from 'types/navigation';
import DeliveriesContainer from '@/screens/More/Deliveries/DeliveriesContainer';
import DeliveryDetailContainer from '@/screens/More/DeliveryDetail/DeliveryDetailContainer';

const Stack = createStackNavigator();

const DeliveriesNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="DeliveriesContainer"
        component={DeliveriesContainer}
      />
      <Stack.Screen
        name="DeliveryDetailContainer"
        component={DeliveryDetailContainer}
      />
    </Stack.Navigator>
  );
};

export default DeliveriesNavigator;
