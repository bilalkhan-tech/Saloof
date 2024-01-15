import AddProductScreen from '@/screens/AddProduct/AddProduct';
import ProductDetailScreen from '@/screens/AddProduct/ProductDetail';
import ProductsContainer from '@/screens/AddProduct/ProductsContainer';
import CommissionContainer from '@/screens/More/CommissionContainer';
import LanguageContainer from '@/screens/More/LanguageContainer';
import MoreMainScreen from '@/screens/More/MoreMainScreen';
import NewSupportTicketScreen from '@/screens/More/NewSupportTicketScreen';
import PaymanetDetailsContainer from '@/screens/More/PaymanetDetailsContainer';
import ProfileSettingsContainer from '@/screens/More/ProfileSettingsContainer';
import ReportContainer from '@/screens/More/ReportContainer';
import ShippingDetailContainer from '@/screens/More/ShippingDetailContainer/ShippingDetailContainer';
import SubscriptionPackageContainer from '@/screens/More/Subscription/SubscriptionPackageContainer';
import SupportTicketContainer from '@/screens/More/SupportTicketContainer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import FavoritesContainer from '@/screens/More/Favourites/FavoritesContainer';
import BuyerProducts from '@/screens/More/ProductsBuyer/BuyerProductContainer';
import ProductDetailContainer from '@/screens/ProductDetail/ProductDetailContainer';
import AddShippingDetail from '@/screens/More/ShippingDetailContainer/AddShippingDetail';
const Stack = createStackNavigator();

const MoreNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MoreMainScreen" component={MoreMainScreen} />

      <Stack.Screen name="ProductsContainer" component={ProductsContainer} />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
      <Stack.Screen name="AddProductScreen" component={AddProductScreen} />
      <Stack.Screen
        name="PaymanetDetailsContainer"
        component={PaymanetDetailsContainer}
      />
      <Stack.Screen
        name="CommissionContainer"
        component={CommissionContainer}
      />
      <Stack.Screen name="LanguageContainer" component={LanguageContainer} />
      <Stack.Screen
        name="ProfileSettingsContainer"
        component={ProfileSettingsContainer}
      />

      <Stack.Screen
        name="SubscriptionPackageContainer"
        component={SubscriptionPackageContainer}
      />
      <Stack.Screen
        name="ShippingDetailContainer"
        component={ShippingDetailContainer}
      />
      <Stack.Screen name="AddShippingDetail" component={AddShippingDetail} />
      <Stack.Screen name="ReportContainer" component={ReportContainer} />
      <Stack.Screen
        name="SupportTicketContainer"
        component={SupportTicketContainer}
      />
      <Stack.Screen
        name="NewSupportTicketScreen"
        component={NewSupportTicketScreen}
      />
      <Stack.Screen name="FavouritesContainer" component={FavoritesContainer} />
      <Stack.Screen name="BuyerProducts" component={BuyerProducts} />
      <Stack.Screen name="ProductDetail" component={ProductDetailContainer} />
    </Stack.Navigator>
  );
};

export default MoreNavigator;
