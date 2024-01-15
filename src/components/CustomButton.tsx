import { useTheme } from '@/hooks';
import { sHight } from '@/utils/ScreenDimentions';
import i18next from 'i18next';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StyleProps } from 'react-native-reanimated';
import { useSelector } from 'react-redux';

interface propTypes {
  buttonHeight?: number;
  onButtonPress?: any;
  activeButton?: any;
  data: {
    title: string;
    value: string;
  }[];
  style?: StyleProps;
}

const CustomButton = ({
  data,
  buttonHeight,
  onButtonPress,
  activeButton,
  style,
}: propTypes) => {
  const { Layout, Gutters, Fonts, Colors, Images } = useTheme();
  const { user_type } = useSelector((state: any) => state.auth);
  const user_Type = user_type;
  return (
    <View
      style={[
        i18next.language == 'en' ? Layout.row : Layout.rowReverse,
        // Layout.fullWidth,
        user_Type === 'buyer'
          ? Layout.justifyContentCenter
          : Layout.justifyContentBetween,
        {
          width: '100%',
        },
      ]}
    >
      {data?.map((val, index) => (
        <TouchableOpacity
          disabled={user_Type === 'buyer' ? true : false}
          onPress={() => {
            onButtonPress(val.value);
          }}
          key={index}
          style={[
            Layout.center,
            {
              height: sHight(4.4),
              // width: `40%`,
              width: `${90 / data.length}%`,
              borderRadius: 8,
              backgroundColor:
                activeButton === val.value ? Colors.purple : Colors.transparent,
            },
            style,
          ]}
        >
          <View style={[Layout.justifyContentCenter, Layout.alignItemsCenter]}>
            <Text
              style={[
                Fonts.fontReg14,
                {
                  color:
                    activeButton === val.value
                      ? Colors.white
                      : Colors.activeButtonBlack,
                  fontWeight: activeButton === val.value ? '700' : '300',
                  textAlign: 'center',
                },
              ]}
            >
              {val.title}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
