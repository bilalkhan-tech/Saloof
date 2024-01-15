import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '@/components/CustomDrawer';
import HomeLandingPage from '@/screens/LandingPage/HomeLandingPage';
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerStatusBarAnimation: 'slide',
        swipeEnabled: false,
        keyboardDismissMode: 'none',
      }}
      initialRouteName="intro"
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="intro" component={HomeLandingPage} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
