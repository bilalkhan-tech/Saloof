import { View, Text } from 'react-native';
import React from 'react';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import { useTheme } from '@/hooks';

interface propTypes {
  title?: string;
}

const TabsHeading = ({ title }: propTypes) => {
  const { Colors, Layout, Fonts } = useTheme();
  return (
    <View
      style={[
        Layout.center,
        {
          height: sHight(8),
        },
      ]}
    >
      <Text
        style={[
          Fonts.fontReg18,
          {
            color: Colors.purple,
            fontWeight: '700',
          },
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

export default TabsHeading;
