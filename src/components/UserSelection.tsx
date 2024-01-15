import { useTheme } from '@/hooks';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import React from 'react';

import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { StyleProps } from 'react-native-reanimated';

interface propTypes {
  title?: string;
  onPress?: any;
  containerStyle?: StyleProps;
  titleStyle?: StyleProps;
}

const UserSelection = ({
  title,
  onPress,
  containerStyle,
  titleStyle,
}: propTypes) => {
  const { Layout, Gutters, Fonts, Colors, Images } = useTheme();

  return (
    <View style={[Layout.fill, Gutters.xLittleRMargin, { width: sWidth(33) }]}>
      <TouchableOpacity
        style={[
          {
            height: sHight(18),
            backgroundColor: Colors.lightGray,
            borderRadius: 20,
            borderColor: Colors.borderGray,
            borderWidth: 1,
          },

          Gutters.littlePadding,
          Layout.fullWidth,
          containerStyle,
        ]}
        onPress={onPress}
      >
        <View style={[Layout.fill, Layout.justifyContentBetween]}>
          <Images.svgs.userIcon2 />
          <View style={[]}>
            <Text
              style={[
                Fonts.fontReg14,
                {
                  color: Colors.gray2,
                },
              ]}
            >
              Sign Up as
            </Text>
            <Text
              style={[
                { fontWeight: '700', color: Colors.purple, marginVertical: 3 },
                Fonts.fontReg16,
                titleStyle,
              ]}
            >
              {title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UserSelection;
