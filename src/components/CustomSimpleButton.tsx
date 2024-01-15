import { useTheme } from '@/hooks';
import React from 'react';

import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { StyleProps } from 'react-native-reanimated';

interface propTypes {
  title?: string;
  onPress?: any;
  containerStyle?: StyleProps;
  titleStyle?: StyleProps;
  parentContainerStyle?: StyleProps;
}

const CustomSimpleButton = ({
  title,
  onPress,
  containerStyle,
  titleStyle,
  parentContainerStyle,
}: propTypes) => {
  const { Layout, Gutters, Fonts, Colors, Images } = useTheme();

  return (
    <View
      style={[
        Layout.fullWidth,
        Layout.alignItemsCenter,
        Layout.justifyContentCenter,
        { width: '100%' },
        parentContainerStyle,
      ]}
    >
      <TouchableOpacity
        style={[
          {
            backgroundColor: Colors.purple,
            borderRadius: 10,
            // position: 'absolute',
            // top: -627,
          },
          Layout.alignItemsCenter,
          Gutters.xLittlePadding, // I have removed this line We don't need this
          // Layout.justifyContentCenter,
          // { paddingVertical: 10 },
          Gutters.littleVMargin,
          Layout.alignItemsCenter,
          Layout.fullWidth,
          containerStyle,
        ]}
        onPress={onPress}
      >
        <Text
          style={[
            { color: Colors.white, marginVertical: 3 },
            Fonts.fontBold16,
            titleStyle,
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomSimpleButton;
