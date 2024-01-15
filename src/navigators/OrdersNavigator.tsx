import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OrdersMainScreen from '@/screens/Orders/OrdersMainScreen';
import OrdersDetailsScreen from '@/screens/Orders/OrdersDetailsScreen';

const Stack = createStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OrdersMainScreen" component={OrdersMainScreen} />
      <Stack.Screen
        name="OrdersDetailsScreen"
        component={OrdersDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
