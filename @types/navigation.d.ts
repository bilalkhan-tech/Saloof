import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

//////// Home //////
export type HomeStackParamList = {
  DashboardScreen: NavigatorScreenParams<HomeParamsList>;
};
export type HomeScreenProps = StackScreenProps<HomeStackParamList>;

//////// Alert //////
export type AlertStackParamList = {
  DashboardScreen: NavigatorScreenParams<AlertParamsList>;
};
export type AlertScreenProps = StackScreenProps<AlertStackParamList>;

//////// More //////
export type MoreStackParamList = {
  PaymentDetailsContainer: NavigatorScreenParams<MoreParamsList>;
};
export type MoreScreenProps = StackScreenProps<MoreStackParamList>;

/////// Auth //////
export type AuthStackParamList = {
  LoginScreen: undefined;
  SignupScreen: undefined;
  ForgotPasswordScreen: undefined;
  ForgotOtpScreen: undefined;
  CreateNewPasswordScreen: undefined
  SignupProcessScreen: undefined;
};
export type AuthScreenProps = StackScreenProps<AuthStackParamList>;
