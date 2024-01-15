import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import CustomHeader from '@/components/CustomHeader';
import Background from '@/components/Background';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import CustomSimpleButton from '@/components/CustomSimpleButton';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import OrLine from '@/components/OrLine';
import SocialButtons from '@/components/SocialButton';
import { AuthScreenProps } from 'types/navigation';
import { useDispatch } from 'react-redux';
import { setToken, setUserType } from '@/store/auth';
import CustomTextInput from '@/components/CustomTextInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = ({ navigation, route }: AuthScreenProps) => {
  const [loginDetail, setLoginDetail] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const { t } = useTranslation(['common']);

  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme();

  const SignInFunc = () => {
    dispatch(setUserType('seller'));
    dispatch(setToken('ggidkag99823adlas98fa'));
  };

  const socialSignup = () => {
    console.log('::: social login :::');
  };

  return (
    <Background paddingHorizontal={sWidth(5)}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={[]}>
          <CustomHeader headerTitle="Sign In" />
        </View>

        <View style={[Layout.row, Gutters.smallTMargin]}>
          <Text
            style={[
              Fonts.fontBold24,
              Gutters.littleBMargin,
              {
                color: Colors.purple,
              },
            ]}
          >
            Hi There!
          </Text>
          <Images.svgs.HandWave width={20} height={20} />
        </View>
        <Text
          style={[
            Fonts.fontReg18,
            Gutters.regularBMargin,
            { color: Colors.gray2 },
          ]}
        >
          Welcome back, Sign in to your account
        </Text>

        <CustomTextInput
          placeholder={t('common:email')}
          value={loginDetail.email}
          onChangeText={(t: any) =>
            setLoginDetail({ ...loginDetail, email: t })
          }
          placeholderTextColor={Colors.gray1}
        />
        <CustomTextInput
          placeholder={t('common:password')}
          value={loginDetail.password}
          onChangeText={(t: any) =>
            setLoginDetail({
              ...loginDetail,
              password: t,
            })
          }
          secureTextEntry={false}
          placeholderTextColor={Colors.gray1}
          isPasswordSecure={true}
        />

        <TouchableOpacity
          style={[Gutters.littleTMargin]}
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
        >
          <Text
            style={[
              Fonts.fontReg16,
              {
                fontWeight: '700',
                color: Colors.purple,
              },
            ]}
          >
            Forgot Password?{' '}
          </Text>
        </TouchableOpacity>

        <View
          style={[
            Layout.justifyContentCenter,
            Gutters.xLittleVMargin,
            {
              // flex: 1,
            },
          ]}
        >
          <CustomSimpleButton title={'Sign In'} onPress={SignInFunc} />
        </View>
        <View
          style={
            {
              // flex: 2.5,
              // backgroundColor: 'lightgreen',
            }
          }
        >
          <OrLine />
          <View style={[Layout.row, Layout.fullWidth, Layout.center]}>
            <SocialButtons title="facebook" onPress={socialSignup} />
            <SocialButtons title="google" onPress={socialSignup} />
            {Platform.OS === 'ios' && (
              <SocialButtons title="apple" onPress={socialSignup} />
            )}
          </View>
          <View style={[Layout.center, Gutters.tinyVMargin]}>
            <Text style={[Fonts.fontReg16, { color: Colors.gray2 }]}>
              Don’t have an account?
            </Text>
          </View>
          <View>
            <CustomSimpleButton
              title="Sign Up"
              containerStyle={[
                {
                  backgroundColor: Colors.white,
                  borderColor: Colors.purple,
                  borderWidth: 1,
                },
              ]}
              titleStyle={[
                {
                  color: Colors.purple,
                },
              ]}
              onPress={() => navigation.navigate('SignupScreen')}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Background>
  );
};

export default LoginScreen;
