import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import StockNavigator from './StockNavigator';
import OrdersNavigator from './OrdersNavigator';
import AlertsNavigator from './AlertsNavigator';
import MoreNavigator from './MoreNavigator';
import { useTheme } from '@/hooks';
import PaymanetDetailsContainer from '@/screens/More/PaymanetDetailsContainer';
import { useSelector } from 'react-redux';
import DeliveryDetailContainer from '@/screens/More/DeliveryDetail/DeliveryDetailContainer';
import PaymentInvoicesContainer from '@/screens/More/PaymentInvoices/PaymentInvoicesContainer';
import DeliveriesContainer from '@/screens/More/Deliveries/DeliveriesContainer';
import DeliveriesNavigator from './DeliveriesNavigator';
import CartNavigator from './CartNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme();
  const { user_type }: any = useSelector(state => state.auth);

  const getTabBarIcon = (routeName: any, focused: any) => {
    let icon;
    switch (routeName) {
      case 'Home':
        icon = focused ? (
          <Images.svgs.homeActive width={24} height={24} />
        ) : (
          <Images.svgs.TabHomeIcon width={24} height={24} />
        );
        break;

      case user_type === 'driver' && 'Payments':
        icon = focused ? (
          <Images.svgs.paymentPurple width={24} height={24} />
        ) : (
          <Images.svgs.payments width={24} height={24} />
        );
        break;
      case user_type === 'driver' && 'Deliveries':
        icon = focused ? (
          <Images.svgs.deliveriesPurple width={24} height={24} />
        ) : (
          <Images.svgs.Deliveries width={24} height={24} />
        );
        break;

      case user_type === 'seller' && 'Stock':
      case 'Stock':
        icon = focused ? (
          <Images.svgs.stockActive width={24} height={24} />
        ) : (
          <Images.svgs.TabStockIcon width={24} height={24} />
        );
        break;
      case user_type === 'seller' && 'Orders':
      case 'Orders':
        icon = focused ? (
          <Images.svgs.orderActive width={24} height={24} />
        ) : (
          <Images.svgs.TabOrdersIcon width={24} height={24} />
        );
        break;
      case user_type === 'buyer' && 'Cart':
        icon = focused ? (
          <View>
            <Images.svgs.CartActive width={24} height={24} />
            <View
              style={[
                Layout.justifyContentCenter,
                Layout.alignItemsCenter,
                {
                  backgroundColor: Colors.Purple8F53C0,
                  height: 20,
                  width: 20,
                  borderRadius: 15,
                  position: 'absolute',
                  right: 0,
                  top: -15,
                },
              ]}
            >
              <Text style={[Fonts.fontReg12, { color: Colors.white }]}>3</Text>
            </View>
          </View>
        ) : (
          <Images.svgs.CartBlur width={24} height={24} />
        );
        break;
      case user_type === 'buyer' && 'Orders':
        icon = focused ? (
          <Images.svgs.orderActive width={24} height={24} />
        ) : (
          <Images.svgs.TabOrdersIcon width={24} height={24} />
        );
        break;

      case 'Alerts':
        icon = focused ? (
          <Images.svgs.alertActive width={24} height={24} />
        ) : (
          <Images.svgs.TabAlertIcon width={24} height={24} />
        );
        break;
      case 'More':
        icon = focused ? (
          <Images.svgs.moreActive width={24} height={24} />
        ) : (
          <Images.svgs.TabMoreIcon width={24} height={24} />
        );
        break;
      default:
        icon = <View />; // Default if needed
        break;
    }
    return icon;
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const { name } = route;
          return getTabBarIcon(name, focused);
        },
        unmountOnBlur: true,
        tabBarLabelStyle: {
          bottom: 10,
        },
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor: Colors.Purple8F53C0,
        tabBarInactiveTintColor: Colors.gray2,
        tabBarStyle: [
          {
            height: 70,
            backgroundColor: Colors.white,
          },
        ],
      })}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      {user_type === 'driver' && (
        <>
          <Tab.Screen name="Payments" component={PaymentInvoicesContainer} />
          <Tab.Screen name="Deliveries" component={DeliveriesNavigator} />
        </>
      )}
      {user_type === 'seller' && (
        <>
          <Tab.Screen name="Stock" component={StockNavigator} />
          <Tab.Screen name="Orders" component={OrdersNavigator} />
        </>
      )}
      {user_type === 'buyer' && (
        <>
          <Tab.Screen name="Orders" component={OrdersNavigator} />
          <Tab.Screen name="Cart" component={CartNavigator} />
        </>
      )}

      <Tab.Screen name="Alerts" component={AlertsNavigator} />
      <Tab.Screen name="More" component={MoreNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
