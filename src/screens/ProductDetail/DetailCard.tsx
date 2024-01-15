import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@/hooks';
import i18next from 'i18next';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { sWidth } from '@/utils/ScreenDimentions';

type Props = {
  title: string;
  price: string;
  detail: string;
  addToCart: CallableFunction;
};

const DetailCard = ({ title, price, detail, addToCart }: Props) => {
  const { Layout, Gutters, Images, Colors, Fonts } = useTheme();
  const [cart, setAddCart] = useState<number>(0);
  return (
    <View
      style={[
        Gutters.littlePadding,
        { backgroundColor: Colors.white, borderRadius: 10 },
      ]}
    >
      <View
        style={[
          Gutters.littlePadding,
          i18next.language === 'en' ? Layout.row : Layout.rowReverse,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
        ]}
      >
        <Text style={[Fonts.fontBold18, { color: Colors.black }]}>{title}</Text>
        <Text style={[Fonts.fontBold18, { color: Colors.purple }]}>
          {price}
        </Text>
      </View>
      <View
        style={[
          Gutters.littlePadding,
          i18next.language === 'en' ? Layout.row : Layout.rowReverse,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
        ]}
      >
        <View>
          <Text style={[Fonts.fontBold14, { color: Colors.textGray0B0A0C }]}>
            {t('common:description')}
          </Text>
          <Text
            style={[
              Fonts.fontReg12,
              Gutters.tinyTMargin,
              { color: Colors.gray2 },
            ]}
          >
            {detail}
          </Text>
        </View>
      </View>
      <View
        style={[
          i18next.language === 'en' ? Layout.row : Layout.rowReverse,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
          Gutters.littleLMargin,
          Gutters.smallTMargin,
          {
            width: sWidth(30),
          },
        ]}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            if (cart === 0) {
              return;
            }
            setAddCart(cart - 1);
          }}
          style={[
            Layout.center,
            {
              width: sWidth(9),
              borderWidth: 1,
              borderRadius: 3,
              borderColor: Colors.black,
              height: sWidth(7),
            },
          ]}
        >
          <Images.svgs.minus width={15} height={15} />
        </TouchableOpacity>
        <Text style={[Fonts.fontMed14, { color: Colors.black }]}>{cart}</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            if (cart == 99) {
              return;
            }
            setAddCart(cart + 1);
          }}
          style={[
            Layout.center,
            {
              width: sWidth(9),
              borderWidth: 1,
              borderRadius: 3,
              borderColor: Colors.black,
              height: sWidth(7),
            },
          ]}
        >
          <Images.svgs.plus width={15} height={15} />
        </TouchableOpacity>
      </View>
      <View
        style={[
          i18next.language === 'en' ? Layout.row : Layout.rowReverse,
          Layout.alignItemsEnd,
          Layout.justifyContentEnd,
          Gutters.littleLMargin,
          Gutters.smallTMargin,
        ]}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={addToCart}
          style={[
            Layout.center,
            {
              width: sWidth(25),
              height: sWidth(10),
              borderRadius: 10,
              backgroundColor: Colors.purple,
            },
          ]}
        >
          <Text style={[Fonts.fontMed14, { color: Colors.white }]}>
            {t('common:fav:add_cart')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailCard;

const styles = StyleSheet.create({});
