import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import i18next from 'i18next';

const HeartView = () => {
  const { Colors, Gutters, Images, Layout } = useTheme();
  return (
    <View
      style={[
        i18next.language == 'en' ? Layout.row : Layout.rowReverse,
        {
          width: '95%',
          top: 3,
        },
        Gutters.tinyPadding,
        Layout.absolute,
        Layout.justifyContentEnd,
      ]}
    >
      <View
        style={[
          Layout.center,
          {
            width: 25,
            height: 25,
            backgroundColor: Colors.white,
            borderRadius: 20,
          },
        ]}
      >
        <View
          style={[
            Layout.center,
            {
              width: 20,
              height: 20,
              backgroundColor: Colors.purple,
              borderRadius: 18,
            },
          ]}
        >
          <Images.svgs.heart width={13} height={13} />
        </View>
      </View>
    </View>
  );
};

export default HeartView;
