import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '@/screens/Cart/Cart';
import CheckoutScreen from '@/screens/Cart/Checkout';

const Stack = createStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
