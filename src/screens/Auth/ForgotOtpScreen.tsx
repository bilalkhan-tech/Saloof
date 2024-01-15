import { Platform, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@/hooks';
import Background from '@/components/Background';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomHeader from '@/components/CustomHeader';
import { AuthScreenProps } from 'types/navigation';
import CustomSimpleButton from '@/components/CustomSimpleButton';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { Colors } from '@/theme/Variables';

const ForgotOtpScreen = ({ navigation, route }: AuthScreenProps) => {
  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme();
  const [value, setValue] = useState('');
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 4;
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });

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
          headerTitle="One Time Password"
        />
        <CodeField
          ref={ref}
          {...props}
          value={value}
          // editable={!varified}
          onChangeText={(t: string) => {
            setValue(t);
            // if (t.length == 4) {
            //   sendCode(t);
            // }
          }}
          rootStyle={{ paddingHorizontal: 20 }}
          cellCount={CELL_COUNT}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[
                Fonts.fontReg14,
                styles.cell,
                {
                  color: Colors.gray3,
                },
              ]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />

        <View style={{ height: 30 }} />
        <CustomSimpleButton
          containerStyle={{}}
          title="Next"
          onPress={() => navigation.navigate('CreateNewPasswordScreen')}
        />
        <View style={{ height: 50 }} />
      </KeyboardAwareScrollView>
    </Background>
  );
};

export default ForgotOtpScreen;

const styles = StyleSheet.create({
  cell: {
    width: 50,
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.gray1,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingTop: Platform.OS == 'ios' ? 15 : 0,
    marginTop: sHight(5),
  },
});
