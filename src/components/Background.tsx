import { View } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { sWidth } from '@/utils/ScreenDimentions';

interface propTypes {
  backgroundColor?: string;
  children: any;
  paddingHorizontal?: number;
}

const Background = ({
  children,
  backgroundColor,
  paddingHorizontal = sWidth(5),
}: propTypes) => {
  const { Colors, Layout } = useTheme();
  return (
    <View
      style={[
        Layout.fill,
        {
          paddingHorizontal: paddingHorizontal,
          backgroundColor: backgroundColor ? backgroundColor : Colors.white,
        },
      ]}
    >
      {children}
    </View>
  );
};

export default Background;
