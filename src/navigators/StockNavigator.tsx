import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StockMainScreen from '@/screens/Stock/StockMainScreen';
import StockDetailsScreen from '@/screens/Stock/StockDetailsScreen';
import AddStockScreen from '@/screens/Stock/AddStock';
import CartScreen from '@/screens/Cart/Cart';
import CheckoutScreen from '@/screens/Cart/Checkout';
import AddProductScreen from '@/screens/AddProduct/AddProduct';
import ProductDetailScreen from '@/screens/AddProduct/ProductDetail';
import ProductsContainer from '@/screens/AddProduct/ProductsContainer';

const Stack = createStackNavigator();

const StockNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StockMainScreen" component={StockMainScreen} />
      <Stack.Screen name="StockDetailsScreen" component={StockDetailsScreen} />
      <Stack.Screen name="AddStockScreen" component={AddStockScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
      <Stack.Screen name="AddProductScreen" component={AddProductScreen} />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
      <Stack.Screen name="ProductsContainer" component={ProductsContainer} />
    </Stack.Navigator>
  );
};

export default StockNavigator;
