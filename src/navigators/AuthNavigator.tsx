import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '@/screens/Auth/LoginScreen';
import SignupScreen from '@/screens/Auth/SignupScreen';
import { AuthStackParamList } from 'types/navigation';
import Subscription from '@/screens/More/Subscription/SubscriptionList';
import ForgotPasswordScreen from '@/screens/Auth/ForgotPasswordScreen';
import ForgotOtpScreen from '@/screens/Auth/ForgotOtpScreen';
import CreateNewPasswordScreen from '@/screens/Auth/CreateNewPasswordScreen';
import SignupProcessScreen from '@/screens/Auth/SignupProcessScreen';
import HomeLandingPage from './DrawerNavigator';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LandingPage" component={HomeLandingPage} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name="ForgotOtpScreen" component={ForgotOtpScreen} />
      <Stack.Screen
        name="CreateNewPasswordScreen"
        component={CreateNewPasswordScreen}
      />
      <Stack.Screen
        name="SignupProcessScreen"
        component={SignupProcessScreen}
      />
      <Stack.Screen name="Subscription" component={Subscription} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
