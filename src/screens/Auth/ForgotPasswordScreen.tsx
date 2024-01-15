import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Background from '@/components/Background';
import { useTheme } from '@/hooks';
import CustomHeader from '@/components/CustomHeader';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import { AuthScreenProps } from 'types/navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomTextInput from '@/components/CustomTextInput';
import CustomButton from '@/components/CustomButton';
import CustomSimpleButton from '@/components/CustomSimpleButton';

const ForgotPasswordScreen = ({ navigation, route }: AuthScreenProps) => {
  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme();
  const [email, setEmail] = useState('');
  return (
    <Background paddingHorizontal={sWidth(5)}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <CustomHeader
          marginTop={15}
          backPress={() => navigation.goBack()}
          back
          headerTitle="Forgot Password"
        />

        <Text
          style={[
            Fonts.fontReg16,
            Gutters.regularTMargin,
            { color: Colors.gray2 },
          ]}
        >
          Enter the email address associated with your account
        </Text>

        <CustomTextInput
          containerStyles={{ marginTop: 10 }}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <View style={{ height: 20 }} />
        <CustomSimpleButton
          title="Next"
          onPress={() => navigation.navigate('ForgotOtpScreen')}
        />
        <View style={{ height: 50 }} />
      </KeyboardAwareScrollView>
    </Background>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({});
