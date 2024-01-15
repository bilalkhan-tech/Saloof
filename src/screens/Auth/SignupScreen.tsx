// import { AuthScreenProps } from 'types/navigation';

// const SignupScreen = ({ navigation, route }: AuthScreenProps) => {

import { View, Text, ScrollView, StyleSheet, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import CustomHeader from '@/components/CustomHeader';
import Background from '@/components/Background';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import UserSelection from '@/components/UserSelection';
import CustomSimpleButton from '@/components/CustomSimpleButton';
import { sHight } from '@/utils/ScreenDimentions';
import OrLine from '@/components/OrLine';
import SocialButtons from '@/components/SocialButton';
import { Colors } from '@/theme/Variables';

const SignupScreen = ({ navigation, route }: any) => {
  const [signupAs, setSignupAs] = useState({
    title: 'Supplier',
    value: 'seller',
  });
  const [selectedButton, setSelectedButton] = useState(0);
  const { t } = useTranslation(['common']);
  const buttonData: any = [
    {
      title: 'Supplier',
      value: 'seller',
    },
    {
      title: 'Buyer',
      value: 'buyer',
    },
    {
      title: 'Driver',
      value: 'driver',
    },
  ];

  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme();

  const selectUserType = (index: any) => {
    setSelectedButton(index);
    setSignupAs(buttonData[index]),
      console.log('user type selection :::', index);
  };

  const continueFunc = () => {
    console.log('::: Continue :::', buttonData[selectedButton].title);
    navigation.navigate('SignupProcessScreen', {
      selectedUser: buttonData[selectedButton].title,
      userType: signupAs,
    });
  };

  const socialSignup = () => {
    console.log('::: social login :::');
  };

  useEffect(() => {
    selectUserType(selectedButton);
  }, []);

  return (
    <Background>
      <View>
        <CustomHeader headerTitle={`${signupAs.title} - Sign Up`} />
      </View>

      <View style={[Layout.fill, Gutters.regularTMargin]}>
        <View
          style={{
            flex: 2.3,
          }}
        >
          <Text
            style={[
              Fonts.fontReg24,
              Gutters.smallBMargin,
              {
                color: Colors.purple,
                fontWeight: '700',
              },
            ]}
          >
            Sign Up as
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
            style={[
              Layout.fullWidth,
              Layout.row,
              {
                overflow: 'hidden',
              },
            ]}
          >
            {buttonData.map((button: any, index: any) => (
              <View key={index}>
                <UserSelection
                  title={button.title}
                  containerStyle={[
                    Gutters.smallPadding,
                    {
                      borderColor:
                        index === selectedButton
                          ? Colors.purple
                          : Colors.borderGray,
                    },
                  ]}
                  onPress={() => selectUserType(index)}
                />
              </View>
            ))}
          </ScrollView>
        </View>
        <View
          style={[
            Layout.justifyContentCenter,
            {
              flex: 1,
            },
          ]}
        >
          <CustomSimpleButton title={'Continue'} onPress={continueFunc} />
        </View>
        <View
          style={{
            flex: 2.5,
          }}
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
              Already have an account?
            </Text>
          </View>
          <View>
            <CustomSimpleButton
              title="Sign In"
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
              onPress={() => navigation.navigate('LoginScreen')}
            />
          </View>
        </View>
      </View>
    </Background>
  );
};

export default SignupScreen;
