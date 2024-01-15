import { View, Text } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';

const OrLine = () => {
  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme();

  return (
    <View
      style={[
        Layout.row,
        Layout.alignItemsCenter,
        Layout.justifyContentCenter,
        Gutters.littleVMargin,
      ]}
    >
      <View
        style={[
          Layout.fill,
          {
            height: 1,
            backgroundColor: Colors.borderGray,
          },
        ]}
      />
      <Text
        style={[
          Fonts.fontReg12,
          Gutters.smallHMargin,
          {
            color: Colors.gray2,
          },
        ]}
      >
        OR
      </Text>
      <View
        style={[
          Layout.fill,
          {
            height: 1,
            backgroundColor: Colors.borderGray,
          },
        ]}
      />
    </View>
  );
};

export default OrLine;
