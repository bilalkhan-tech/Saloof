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

const CreateNewPasswordScreen = ({ navigation }: AuthScreenProps) => {
  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme();
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
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
          headerTitle="New Password"
        />

        <Text
          style={[
            Fonts.fontReg16,
            Gutters.regularTMargin,
            { color: Colors.gray2 },
          ]}
        >
          Please enter new and confirm password
        </Text>
        <CustomTextInput
          containerStyles={{ marginTop: sHight(2) }}
          placeholder="New Password"
          value={password1}
          isPasswordSecure={true}
          onChangeText={setPassword1}
        />
        <CustomTextInput
          placeholder="Confirm Password"
          value={password2}
          isPasswordSecure={true}
          onChangeText={setPassword2}
        />
        <View style={{ height: 20 }} />
        <CustomSimpleButton
          title="Update Password"
          onPress={() => navigation.pop(3)}
        />
        <View style={{ height: 50 }} />
      </KeyboardAwareScrollView>
    </Background>
  );
};

export default CreateNewPasswordScreen;

const styles = StyleSheet.create({});
