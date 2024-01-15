import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
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
import CustomTextInput from '@/components/CustomTextInput';
import CustomHeader from '@/components/CustomHeader';
import { sWidth, sHight } from '@/utils/ScreenDimentions';
import CustomModalCongrats from '@/components/CustomModalCongrats';
import moment from 'moment';

const CheckoutScreen = ({ navigation }) => {
  const { t } = useTranslation(['common']);

  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme();
  const [showOrderSucessDialog, setShowOrderSucessDialog] = useState(false);
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

  const renderAmountItem = (textHeading, textValue, flagPrice, flagBold) => {
    return (
      <View
        style={[
          i18next.language == 'en' ? Layout.row : Layout.rowReverse,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
          Gutters.smallTMargin,
        ]}
      >
        <Text
          style={[
            flagBold ? Fonts.fontBold16 : Fonts.fontReg16,
            {
              color: Colors.black,
            },
          ]}
        >
          {textHeading}
        </Text>
        <Text
          style={[
            Fonts.fontBold16,
            {
              color: Colors.Purple8F53C0,
            },
          ]}
        >
          {textValue}
          {flagPrice ? ` ${t('common:SAR')}` : ''}
        </Text>
      </View>
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
        <View style={[Gutters.smallVMargin, Gutters.smallHMargin]}>
          <CustomHeader
            back
            backPress={() => navigation.goBack()}
            headerTitle={t('common:checkout')}
          />
        </View>
        <ScrollView>
          <View style={{ flex: 1, backgroundColor: Colors.white }}>
            <View
              style={[
                // Gutters.smallTMargin,
                // Gutters.smallHPadding,
                Gutters.smallHMargin,
                i18next.language == 'en' ? Layout.row : Layout.rowReverse,
                Layout.justifyContentBetween,
                Layout.alignItemsCenter,
              ]}
            >
              <Text style={[Fonts.fontReg16, { color: Colors.black }]}>
                {t('common:totalAmount')}
              </Text>
              <Text
                style={[
                  Fonts.fontBold16,
                  {
                    color: Colors.Purple8F53C0,
                  },
                ]}
              >{`${totalSar} ${t('common:SAR')}`}</Text>
            </View>
            <View
              style={[
                Gutters.smallTMargin,
                // Gutters.smallHPadding,
                Gutters.smallHMargin,
              ]}
            >
              <Text
                style={[
                  Fonts.fontBold20,
                  {
                    color: Colors.Purple8F53C0,
                  },
                ]}
              >
                {t('common:shipping')}
              </Text>
            </View>

            <View
              style={[
                Gutters.tinyTMargin,
                // Gutters.smallHPadding,
                Gutters.smallHMargin,
                i18next.language == 'en' ? Layout.row : Layout.rowReverse,
                Layout.justifyContentBetween,
                Layout.alignItemsCenter,
              ]}
            >
              <View>
                <Text
                  style={[
                    Fonts.fontMed16,
                    {
                      color: Colors.Purple8F53C0,
                    },
                  ]}
                >
                  {t('common:shippingAddress')}
                </Text>
                <Text
                  style={[
                    Fonts.fontReg14,
                    {
                      // color:  Colors.Purple8F53C0,
                    },
                  ]}
                >
                  House 123, street abc, Jeddah, Asfan, SA
                </Text>
              </View>
              <TouchableOpacity style={[Gutters.tinyPadding]}>
                <CustomSvgImage
                  source={Images.svgs.EditIcon}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </TouchableOpacity>
            </View>
            {/* <View
              style={[
                Gutters.tinyTMargin,
                // Gutters.smallHPadding,
                Gutters.smallHMargin,
                i18next.language == 'en' ? Layout.row : Layout.rowReverse,
                Layout.justifyContentBetween,
                Layout.alignItemsCenter,
              ]}
            >
              <View>
                <Text
                  style={[
                    Fonts.fontMed16,
                    {
                      color: Colors.Purple8F53C0,
                    },
                  ]}
                >
                  {t('common:billingAddress')}
                </Text>
                <Text
                  style={[
                    Fonts.fontReg14,
                    {
                      // color:  Colors.Purple8F53C0,
                    },
                  ]}
                >
                  House 123, street abc, Jeddah, Asfan, SA
                </Text>
              </View>
              <TouchableOpacity style={[Gutters.tinyPadding]}>
                <CustomSvgImage
                  source={Images.svgs.EditIcon}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </TouchableOpacity>
            </View> */}

            <View
              style={[
                Gutters.smallHMargin,
                Gutters.xLittleVPadding,
                Gutters.smallTMargin,
                Layout.justifyContentBetween,
                i18next.language == 'en' ? Layout.row : Layout.rowReverse,
              ]}
            >
              <View
                style={[
                  Layout.justifyContentBetween,
                  Layout.alignItemsCenter,
                  Gutters.xLittleVPadding,
                  {
                    borderWidth: 1,
                    height: sHight(14),
                    width: sWidth(28),
                    borderRadius: 10,
                    backgroundColor: Colors.lightGray,
                    borderColor: false
                      ? Colors.Purple8F53C0
                      : Colors.GrayECECEC,
                  },
                ]}
              >
                <CustomSvgImage
                  source={Images.svgs.ShippingIconBuyer}
                  style={{
                    width: 27,
                    height: 27,
                  }}
                />
                <Text
                  style={[
                    Fonts.fontBold14,
                    { color: Colors.Purple8F53C0, lineHeight: 15, textAlign: 'center', marginHorizontal: sWidth(5) },
                  ]}
                >
                  {t('common:freeShipping')}
                </Text>
              </View>
              <View
                style={[
                  Layout.justifyContentBetween,
                  Layout.alignItemsCenter,
                  Gutters.xLittleVPadding,
                  {
                    borderWidth: 1,
                    height: sHight(14),
                    width: sWidth(28),
                    borderRadius: 10,
                    backgroundColor: Colors.lightGray,
                    borderColor: true ? Colors.Purple8F53C0 : Colors.GrayECECEC,
                  },
                ]}
              >
                <CustomSvgImage
                  source={Images.svgs.ShippingIconBuyer}
                  style={{
                    width: 27,
                    height: 27,
                  }}
                />
                <Text
                  style={[
                    Fonts.fontBold14,
                    { color: Colors.Purple8F53C0, lineHeight: 15, textAlign: 'center' },
                  ]}
                >
                  {t('common:standardShipping')}
                </Text>
              </View>
              <View
                style={[
                  Layout.justifyContentBetween,
                  Layout.alignItemsCenter,
                  Gutters.xLittleVPadding,
                  {
                    borderWidth: 1,
                    height: sHight(14),
                    width: sWidth(28),
                    borderRadius: 10,
                    backgroundColor: Colors.lightGray,
                    borderColor: false
                      ? Colors.Purple8F53C0
                      : Colors.GrayECECEC,
                  },
                ]}
              >
                <CustomSvgImage
                  source={Images.svgs.ShippingIconBuyer}
                  style={{
                    width: 27,
                    height: 27,
                  }}
                />
                <Text
                  style={[
                    Fonts.fontBold14,
                    { color: Colors.Purple8F53C0, lineHeight: 15, textAlign: 'center' },
                  ]}
                >
                  {t('common:expressShipping')}
                </Text>
              </View>
            </View>
            <View
              style={[
                Gutters.smallHMargin,
                // {
                //     flexDirection: "row",
                //     justifyContent : "space-between",
                //   },
              ]}
            >
              <Text
                style={[
                  Fonts.fontMed20,
                  {
                    color: Colors.Purple8F53C0,
                  },
                ]}
              >
                {t('common:paymentMethod')}
              </Text>
              <View
                style={[
                  Gutters.smallTMargin,
                  Layout.justifyContentBetween,
                  i18next.language == 'en' ? Layout.row : Layout.rowReverse,
                ]}
              >
                <View
                  style={[
                    Layout.justifyContentBetween,
                    Layout.alignItemsCenter,
                    {
                      // height: sHight(9),
                      // width: sWidth(15),
                    },
                  ]}
                >
                  <CustomSvgImage
                    source={Images.svgs.StripeLogo}
                    style={{
                      width: 65,
                      height: 65,
                    }}
                  />
                  <Text
                    style={[
                      Fonts.fontReg12,
                      {
                        color: Colors.black,
                        lineHeight: 15,
                        textAlign: 'center',
                      },
                    ]}
                  >
                    {t('common:stripeCard')}
                  </Text>
                </View>
                {/* <View
                  style={[
                    Layout.justifyContentBetween,
                    Layout.alignItemsCenter,
                    {
                      height: sHight(9),
                      width: sWidth(15),
                    },
                  ]}
                >
                  <CustomSvgImage
                    source={Images.svgs.MasterCardIcon}
                    style={{
                      width: 35,
                      height: 35,
                    }}
                  />
                  <Text
                    style={[
                      Fonts.fontReg12,
                      {
                        color: Colors.black,
                        lineHeight: 15,
                        textAlign: 'center',
                      },
                    ]}
                  >
                    {t('common:mastcardVisa')}
                  </Text>
                </View>
                <View
                  style={[
                    Layout.justifyContentBetween,
                    Layout.alignItemsCenter,
                    {
                      height: sHight(9),
                      width: sWidth(15),
                    },
                  ]}
                >
                  <CustomSvgImage
                    source={Images.svgs.MadaIcon}
                    style={{
                      width: 35,
                      height: 35,
                    }}
                  />
                  <Text
                    style={[
                      Fonts.fontReg12,
                      {
                        color: Colors.black,
                        lineHeight: 15,
                        textAlign: 'center',
                      },
                    ]}
                  >
                    {t('common:madaCard')}
                  </Text>
                </View>
                <View
                  style={[
                    Layout.justifyContentBetween,
                    Layout.alignItemsCenter,
                    {
                      height: sHight(9),
                      width: sWidth(15),
                    },
                  ]}
                >
                  <CustomSvgImage
                    source={Images.svgs.PayfastIcon}
                    style={{
                      width: 35,
                      height: 35,
                    }}
                  />
                  <Text
                    style={[
                      Fonts.fontReg12,
                      {
                        color: Colors.black,
                        lineHeight: 15,
                        textAlign: 'center',
                      },
                    ]}
                  >
                    {t('common:tamaraCard')}
                  </Text>
                </View> */}
              </View>
            </View>
            <View
              style={[
                Gutters.smallTMargin,
                {
                  height: 1,
                  backgroundColor: Colors.GrayF0F0F0,
                },
              ]}
            />
            <View style={[Gutters.smallTMargin, Gutters.smallHMargin, {}]}>
              <CustomTextInput
                placeholder={t('common:nameoncard')}
                //   value={loginDetail.email}
                //   onChangeText={(t: any) =>
                //     setLoginDetail({ ...loginDetail, email: t })
                //   }
                placeholderTextColor={Colors.gray1}
              />
              <CustomTextInput
                placeholder={t('common:cardnumber')}
                //   value={loginDetail.password}
                //   onChangeText={(t: any) =>
                //     setLoginDetail({
                //       ...loginDetail,
                //       password: t,
                //     })
                //   }
                secureTextEntry={false}
                placeholderTextColor={Colors.gray1}
              />
              <CustomTextInput
                placeholder={t('common:expirydate')}
                //   value={loginDetail.email}
                //   onChangeText={(t: any) =>
                //     setLoginDetail({ ...loginDetail, email: t })
                //   }
                placeholderTextColor={Colors.gray1}
              />
              <CustomTextInput
                placeholder={t('common:cvc')}
                //   value={loginDetail.password}
                //   onChangeText={(t: any) =>
                //     setLoginDetail({
                //       ...loginDetail,
                //       password: t,
                //     })
                //   }
                secureTextEntry={false}
                placeholderTextColor={Colors.gray1}
              />
            </View>

            <Text
              style={[
                Fonts.fontMed20,
                Gutters.smallHMargin,
                Gutters.tinyVMargin,
                {
                  color: Colors.Purple8F53C0,
                },
              ]}
            >
              {t('common:amount')}
            </Text>
            <View
              style={[
                Gutters.tinyTMargin,
                Gutters.smallHMargin,
                Gutters.smallHPadding,
                Gutters.smallBPadding,
                {
                  borderWidth: 1,
                  borderColor: Colors.GrayE5E5E5,
                  borderRadius: 10,
                },
              ]}
            >
              {renderAmountItem(t('common:totalProducts'), '31')}
              {renderAmountItem(t('common:totalPrice'), '3,3120.0', true)}
              {renderAmountItem(t('common:discount'), '0', true)}
              {renderAmountItem(t('common:shippingType'), 'Express')}
              {renderAmountItem(t('common:shippingFee'), '33.0', true)}
              {renderAmountItem(t('common:shippingTime'), '1 Day')}
              <View
                style={[
                  Gutters.smallTMargin, { height: 1, backgroundColor: Colors.GrayD9D9D9 }]}
              />
              {renderAmountItem(t('common:totalAmount'), '33.0', true, true)}
            </View>
          </View>
        </ScrollView>
        <CustomSimpleButton
          title={t('common:placeOrderNow')}
          parentContainerStyle={[
            // Gutters.smallTMargin,
            Gutters.smallHPadding,
            Gutters.xLittleVPadding,
          ]}
          onPress={() => setShowOrderSucessDialog(true)}
        />
        <CustomModalCongrats
          isShow={showOrderSucessDialog}
          title={t('common:orderPlacedSuccessfully')}
          description={t('common:thankYouYourOrderHasBeenPlacedWith')}
          setIsShow={setShowOrderSucessDialog}
        >
          <View style={[
            Gutters.littleHMargin
          ]}>
            <View
              style={[
                i18next.language == 'en' ? Layout.row : Layout.rowReverse,
                Layout.justifyContentBetween,
                Layout.alignItemsCenter,
              ]}
            >
              <Text style={[Fonts.fontReg12, { color: Colors.black }]}>
                {t("common:orderID")}:
              </Text>
              <Text style={[Fonts.fontReg12, { color: Colors.black }]}>
                {"125421"}
              </Text>
            </View>
            <View
              style={[
                i18next.language == 'en' ? Layout.row : Layout.rowReverse,
                Layout.justifyContentBetween,
                Layout.alignItemsCenter,
              ]}
            >
              <Text style={[Fonts.fontReg12, { color: Colors.black }]}>
                {t("common:expectedDeliveryDate")}:
              </Text>
              <Text style={[Fonts.fontReg12, { color: Colors.black }]}>
                {moment(new Date()).format('DD-MM-YYYY')}
              </Text>
            </View>
            <View
              style={[
                i18next.language == 'en' ? Layout.row : Layout.rowReverse,
                Layout.justifyContentBetween,
                Layout.alignItemsCenter,
              ]}
            >
              <Text style={[Fonts.fontReg12, { color: Colors.black }]}>
                {t("common:customerContact")}#:
              </Text>
              <Text style={[Fonts.fontReg12, { color: Colors.black }]}>
                {"966512345678"}
              </Text>
            </View>
          </View>
        </CustomModalCongrats>
      </View>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({});
