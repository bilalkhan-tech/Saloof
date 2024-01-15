import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useTheme } from '@/hooks';
// import GradientView from '../GradientView';
import { sHight, sWidth } from '@/utils/ScreenDimentions';

type props = {
  title: string;
  checkedIndex?: number;
  onPress?: () => void;
};

const CustomButtonWithText = forwardRef(
  ({ title, checkedIndex = 0, onPress }: props, ref) => {
    const {
      Common,
      Colors,
      Fonts,
      Gutters,
      Layout,
      Images,
      darkMode: isDark,
    } = useTheme();

    return (
      <View
        style={[
          {
            alignSelf: 'center',
            marginVertical: sHight(1.5),
            backgroundColor: 'green',
          },
        ]}
      >
        <TouchableOpacity
          style={[styles.rowBG]}
          onPress={onPress ? onPress : () => {}}
        >
          {/* <GradientView */}
          <View
            opacity={0.1}
            styles={[
              Layout.row,
              Layout.alignItemsCenter,
              {
                paddingVertical: 4,
                paddingHorizontal: 6,
                backgroundColor: 'green',
              },
            ]}
          ></View>
        </TouchableOpacity>
      </View>
    );
  },
);

export default CustomButtonWithText;

const styles = StyleSheet.create({
  rowBG: {
    height: sHight(6.8),
    width: sWidth(80),
    alignSelf: 'center',
    borderRadius: sHight(1.8),
    overflow: 'hidden',
    backgroundColor: 'red',
  },
  btn: {
    borderRadius: sHight(1.8),
    flex: 1,
    overflow: 'hidden',
    width: 50,
    backgroundColor: 'green',
  },
});
