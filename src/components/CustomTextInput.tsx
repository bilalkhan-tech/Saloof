import { useTheme } from '@/hooks';
import { sWidth } from '@/utils/ScreenDimentions';
import i18next from 'i18next';
import React, { useState } from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  KeyboardTypeOptions,
  Platform,
} from 'react-native';
import { StyleProps } from 'react-native-reanimated';
import { StylePropsWithArrayTransform } from 'react-native-reanimated/lib/typescript/reanimated2/layoutReanimation/animationBuilder/commonTypes';

interface propTypes {
  placeholder?: string;
  value?: any;
  onChangeText?: any;
  isPasswordSecure?: boolean;
  secureTextEntry?: boolean;
  placeholderTextColor?: string;
  editable?: boolean;
  isMultiline?: boolean;
  inputStyle?: StylePropsWithArrayTransform;
  marginTop?: number;
  containerStyles?: StylePropsWithArrayTransform;
  keyboardType?: KeyboardTypeOptions | undefined;
  numberOfLines?: number;
}

const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  isPasswordSecure,
  placeholderTextColor,
  editable,
  secureTextEntry,
  isMultiline,
  inputStyle,
  containerStyles,
  keyboardType,
  numberOfLines = 1,
}: propTypes) => {
  const { Layout, Gutters, Fonts, Colors, Images } = useTheme();
  const [showPassword, setShowPassword] = useState(true);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View
      style={[
        Layout.alignItemsCenter,
        Layout.justifyContentBetween,
        Layout.row,
        Gutters.xLittleBMargin,
        // Gutters.smallVPadding,
        {
          height: 60,
          backgroundColor: Colors.inputGray,
          borderRadius: 8,
        },
        containerStyles,
      ]}
    >
      <TextInput
        style={[
          Layout.fill,
          Gutters.xLittleHMargin,
          Fonts.fontReg16,

          {
            marginTop: Platform.OS == 'ios' ? -5 : 0,
            paddingVertical: 5,
            color: Colors.black111819,
            // backgroundColor: 'red',
          },
          inputStyle,
        ]}
        numberOfLines={numberOfLines}
        keyboardType={keyboardType}
        editable={editable}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPasswordSecure ? showPassword : secureTextEntry}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : Colors.gray1
        }
        multiline={isMultiline}
      />
      {isPasswordSecure ? (
        <TouchableOpacity
          style={[
            i18next.language === 'en'
              ? {
                right: 10,
              }
              : {
                left: 10,
              },
          ]}
          onPress={toggleShowPassword}
        >
          {/* You can use a custom eye icon or text here */}
          {showPassword ? <Images.svgs.CloseEye /> : <Images.svgs.OpenEye />}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default CustomTextInput;
