import React from 'react';
import { Modal, SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { useTheme } from '../hooks';
// import { useFlipper } from '@react-navigation/devtools';
import { ApplicationStackParamList } from '../../@types/navigation';
import { useSelector } from 'react-redux';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';
import { Colors } from '@/theme/Variables';
import { useTranslation } from 'react-i18next';
import Loader from '@/components/Loader';

const Stack = createStackNavigator<ApplicationStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;
  const { token } = useSelector((state: any) => state.auth);
  const { loading } = useSelector((state: any) => state.common);
  // console.log('token==>', token);
  const { t } = useTranslation();
  global.t = t;
  const navigationRef = useNavigationContainerRef();

  // useFlipper(navigationRef);

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: Colors.white }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {token ? (
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
          ) : (
            // <Stack.Screen
            //   name="AuthNavigator"
            //   component={ProductDetailContainer}
            // />
            // <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
            <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
          )}
        </Stack.Navigator>
        <Modal statusBarTranslucent visible={loading} transparent>
          <Loader />
        </Modal>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
