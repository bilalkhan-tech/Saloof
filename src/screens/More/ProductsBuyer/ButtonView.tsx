import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import CustomSimpleButton from '@/components/CustomSimpleButton';
import i18next from 'i18next';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
interface IButtonView {
  addToCartPress: CallableFunction;
  cartIconPress: CallableFunction;
}
const ButtonView = ({ addToCartPress, cartIconPress }: IButtonView) => {
  const { Layout, Fonts, Images, Gutters, Colors } = useTheme();
  return (
    <View
      style={[
        Gutters.littleTMargin,
        i18next.language == 'en' ? Layout.row : Layout.rowReverse,
        Layout.alignItemsCenter,
        Layout.justifyContentBetween,
        Layout.overflow,
        { width: sWidth(31) },
      ]}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={addToCartPress}
        style={[
          Layout.center,

          {
            borderRadius: 5,
            width: '70%',
            padding: 3,
            backgroundColor: Colors.purple,
          },
        ]}
      >
        <Text style={[Fonts.fontBold14, { color: Colors.white }]}>
          {t('common:fav:add_cart')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={cartIconPress}
        style={[
          Layout.center,

          { borderRadius: 5, padding: 5, backgroundColor: Colors.purple },
        ]}
      >
        <Images.svgs.cart width={20} height={20} />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonView;
