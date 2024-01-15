import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { Colors, FontSize } from '@/theme/Variables';
import fonts from '@/theme/assets/fonts';
import CustomSvgImage from '@/components/CustomSvgImage';

import { useTheme } from '@/hooks';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { JumpingTransition } from 'react-native-reanimated';
import CustomSimpleButton from '@/components/CustomSimpleButton';
import TabsHeading from '@/components/TabsHeading';
import { sHight } from '@/utils/ScreenDimentions';

const CartScreen = ({ navigation }) => {
  const { t } = useTranslation(['common']);

  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme();
  const [cartItemNum, setCartItemNum] = useState(1);
  const [newCartData, setNewCartData] = useState([
    {
      value: 'iPhone 13 pro max',
      count: 3,
      sar: '45.00',
      isNew: true,
      cat: 'Electronic items',
      subCat: 'Phones',
      unitPrice: '4.00',
      city: 'Riyadh',
    },
    {
      value: 'iPhone 13 pro max',
      count: 3,
      sar: '45.00',
      isNew: false,
      cat: 'Electronic items',
      subCat: 'Phones',
      unitPrice: '4.00',
      city: 'Jeddah',
    },
    {
      value: 'iPhone 13 pro max',
      count: 1,
      sar: '45.00',
      isNew: false,
      cat: 'Electronic items',
      subCat: 'Phones',
      unitPrice: '4.00',
      city: 'Riyadh',
    },
    {
      value: 'iPhone 13 pro max',
      count: 1,
      sar: '45.00',
      isNew: false,
      cat: 'Electronic items',
      subCat: 'Phones',
      unitPrice: '4.00',
      city: 'Riyadh',
    },
    {
      value: 'iPhone 13 pro max',
      count: 1,
      sar: '45.00',
      isNew: false,
      cat: 'Electronic items',
      subCat: 'Phones',
      unitPrice: '4.00',
      city: 'Riyadh',
    },
  ]);

  const renderNewCart = ({ item }) => {
    return (
      // <TouchableOpacity
      //   onPress={() => navigation.navigate('StockDetailsScreen')}
      //   style={[
      //     Gutters.smallTMargin,
      //     Gutters.smallHPadding,
      //     Gutters.smallHMargin,
      //     Gutters.xLittleVPadding,
      //     {
      //       backgroundColor: item.isNew
      //         ? Colors.Purple8F53C0
      //         : Colors.GrayF9F8F8,
      //       borderRadius: 10,
      //     },
      //   ]}
      // >
      <View
        style={[
          Gutters.smallTMargin,
          Gutters.smallHMargin,
          Gutters.xLittleVPadding,
          {
            backgroundColor: Colors.purple4,
            borderRadius: 10,
          },
        ]}
      >
        <View
          style={[Layout.alignItemsEnd]}
        >
          <TouchableOpacity
            style={[Gutters.tinyVPadding, Gutters.smallRMargin, Gutters.tinyBMargin]}
          >
            <CustomSvgImage
              style={{ height: 15, width: 15, }}
              source={Images.svgs.CloseIcon}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[
            i18next.language == 'en' ? Layout.row : Layout.rowReverse,
            Layout.justifyContentBetween,
            Layout.alignItemsCenter,

            Gutters.littleHPadding,
          ]}
        >
          <CustomSvgImage
            style={{ height: 75, width: 75, borderRadius: 10 }}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5Ig1OM8l4x3bcu_doMkA65LDDZ7NTcSDSxYeGPnY1w&s',
            }}
          />
          <View style={{ width: '60%' }}>
            <Text
              style={[
                Fonts.fontBold16,
                {
                  color: Colors.black111819,
                },
              ]}
            >
              {item.value}
            </Text>
            <Text
              style={[
                Fonts.fontBold16,
                {
                  color: Colors.Purple8F53C0,
                },
              ]}
            >{`${item.sar} ${t('common:SAR')}`}</Text>
          </View>
          <View style={[Layout.alignItemsCenter]}>
            <TouchableOpacity
              style={[Gutters.tinyPadding]}
              onPress={() => setCartItemNum(cartItemNum + 1)}
            >
              <CustomSvgImage
                source={Images.svgs.AddCartItem}
                style={{
                  width: 27,
                  height: 27,
                }}
              />
            </TouchableOpacity>
            <Text style={{}}>{cartItemNum}</Text>
            <TouchableOpacity
              style={[Gutters.tinyPadding]}
              onPress={() => setCartItemNum(cartItemNum - 1)}
            >
              <CustomSvgImage
                source={Images.svgs.RemoveCartItem}
                style={{
                  width: 27,
                  height: 27,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      // </TouchableOpacity>
    );
  };

  const totalSar = newCartData.reduce(
    (acc, item) => acc + parseFloat(item.sar),
    0,
  );
  const gstPercentage = 15;
  const totalSarWithGst = totalSar * (1 + gstPercentage / 100);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <TabsHeading title={t('common:Cart')} />

        <View
          style={[
            i18next.language == 'en' ? Layout.row : Layout.rowReverse,

            {
              // flex: 1
              height: sHight(50),
            },
          ]}
        >
          <FlatList data={newCartData} renderItem={renderNewCart} />
        </View>
        <View style={[Layout.justifyContentBetween, { flex: 1 }]}>
          <View style={{}}>
            {/* <View
              style={[
                i18next.language == 'en' ? Layout.row : Layout.rowReverse,
                Gutters.smallTMargin,
                Gutters.smallHMargin,
                Gutters.xLittleVPadding,
                Layout.justifyContentBetween,
                Layout.alignItemsCenter,
              ]}
            >
              <Text style={[Fonts.fontReg16, { color: Colors.GrayA0A3A3 }]}>
                {t('common:subTotal')}
              </Text>
              <Text
                style={[
                  Fonts.fontBold18,
                  {
                    color: Colors.Purple8F53C0,
                  },
                ]}
              >{`${totalSar} ${t('common:SAR')}`}</Text>
            </View> */}
            <View
              style={[
                i18next.language == 'en' ? Layout.row : Layout.rowReverse,
                Gutters.smallHMargin,
                Layout.justifyContentBetween,
                Gutters.smallTMargin
              ]}
            >
              <View>
                <Text style={[Fonts.fontReg16, { color: Colors.GrayA0A3A3 }]}>
                  {t('common:total')} ({`15% ${t('common:GST')} ${t('common:included')}`})
                </Text>
                <Text style={[Fonts.fontReg16, { color: Colors.black }]}>

                </Text>
              </View>

              <Text
                style={[
                  Fonts.fontBold18,
                  {
                    color: Colors.Purple8F53C0,
                  },
                ]}
              >{`${totalSarWithGst} ${t('common:SAR')}`}</Text>
            </View>
          </View>
          <CustomSimpleButton
            title={t('common:proceedToCheckout')}
            parentContainerStyle={[
              Gutters.smallTMargin,
              Gutters.smallHPadding,
              Gutters.xLittleVPadding,
            ]}
            onPress={() => navigation.navigate('CheckoutScreen')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
