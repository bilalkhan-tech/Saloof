import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Colors, FontSize, allUserTypes } from '@/theme/Variables';
import fonts from '@/theme/assets/fonts';
import CustomSvgImage from '@/components/CustomSvgImage';
import { CustomBottomSheet } from '@/components';

import { useTheme } from '@/hooks';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import CustomSimpleButton from '@/components/CustomSimpleButton';
import CustomHeader from '@/components/CustomHeader';
import moment from 'moment';
import { sWidth } from '@/utils/ScreenDimentions';
import CustomDropDown from '@/components/CustomDropDown';
import { useSelector } from 'react-redux';
// import BottomSheetBodyUpdateStock from './BottomSheetBodyUpdateStock';

const OrdersDetailsScreen = ({ navigation, route }) => {
  const { t } = useTranslation(['common']);
  const { tab } = route?.params
  const [showBottomSheet, setshowBottomSheet] = useState<boolean>(false);
  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme();

  const { user_type }: any = useSelector(state => state.auth);
  const [selectedStock, setSelectedStock] = useState({
    name: "Mobile I phone 11",
    orderId: '12345',
    stock: 3,
    sar: '45.00',
    isNew: true,
    cat: 'Electronic items',
    amountStatus: t('common:pending'),
    notes: t('common:notesForAdmin'),
    sku: ['123456789900', '1234567789890', '123456789900'],
    date: new Date(),
    discount: "14.00",
    shippingType: "urgent",
    shippingFee: "5.00",
    totalProductPrice: "57.00",
    shippingAddress: "Street 1"
  });
  const [selectedDropdown, setSelectedDropdown] = useState({
    label: '',
    value: '',
  });
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
  ];
  console.log('>> navigation ', tab);

  const backPressFunc = () => {
    navigation.pop();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View
        style={[
          Layout.justifyContentBetween,
          { flex: 1, backgroundColor: Colors.white },
        ]}
      >
        <View style={{ flex: 1 }}>
          <View style={[Gutters.smallVMargin, Gutters.smallHMargin]}>
            <CustomHeader
              back
              backPress={backPressFunc}
              headerTitle={t('common:orderDetails')}
            />
          </View>
          <ScrollView
            style={[
            ]}
          >
            <View
              style={[
                i18next.language == 'en' ? Layout.row : Layout.rowReverse,
                Layout.justifyContentBetween,
                Layout.alignItemsCenter,
                Gutters.smallHPadding,
              ]}
            >
              <View style={{}}>
                <Text
                  style={[
                    Fonts.fontBold16,
                    {
                      color: Colors.Purple8F53C0,
                    },
                  ]}
                >
                  {t('common:orderID')}
                </Text>
                <Text
                  style={[
                    Fonts.fontReg14,
                    {
                      color: Colors.black,
                    },
                  ]}
                >
                  {selectedStock.orderId}
                </Text>
              </View>

              <View style={{}}>
                <Text
                  style={[
                    Fonts.fontBold14,
                    {
                      color: Colors.Purple8F53C0,
                    },
                  ]}
                >
                  {t('common:amount')}
                </Text>
                <Text
                  style={[
                    Fonts.fontReg14,
                    {
                      color: Colors.black,
                    },
                  ]}
                >
                  {selectedStock.sar} {t('common:SAR')}
                </Text>
              </View>
            </View>

            <View
              style={[
                Gutters.smallTMargin,
                Gutters.smallPadding,
                Gutters.smallHMargin,
                {
                  backgroundColor: Colors.GrayF9F8F8,
                  borderRadius: 10,
                },
              ]}
            >
              <View style={{}}>
                <Text
                  style={[
                    Fonts.fontBold16,
                    {
                      color: Colors.Purple8F53C0,
                    },
                  ]}
                >
                  {t('common:status')}
                </Text>
                <Text
                  style={[
                    Fonts.fontReg12,
                    {
                      color: Colors.Gray9CA3AF,
                    },
                  ]}
                >
                  {selectedStock.isNew ? t('common:new') : t('common:old')}
                </Text>
              </View>

              <View style={{}}>
                <Text
                  style={[
                    Gutters.tinyVMargin,
                    Fonts.fontBold12,
                    {
                      color: Colors.black,
                    },
                  ]}
                >
                  {t('common:productName')}
                </Text>
                <Text
                  style={[
                    Fonts.fontReg12,
                    {
                      color: Colors.black,
                    },
                  ]}
                >
                  {selectedStock.name}
                </Text>
              </View>
              <View style={{}}>
                <Text
                  style={[
                    Gutters.tinyVMargin,
                    Fonts.fontBold12,
                    {
                      color: Colors.black,
                    },
                  ]}
                >
                  {t('common:SKU')}
                </Text>
                {selectedStock.sku.map((item, index) => {
                  return (
                    <Text
                      style={[
                        Fonts.fontReg12,
                        {
                          color: Colors.black,
                        },
                      ]}
                    >
                      {item}
                    </Text>
                  );
                })}
              </View>
              <View style={{}}>
                <Text
                  style={[
                    Gutters.tinyVMargin,
                    Fonts.fontBold12,
                    {
                      color: Colors.black,
                    },
                  ]}
                >
                  {t('common:totalProductPrice')}
                </Text>
                <Text
                  style={[
                    Fonts.fontReg12,
                    {
                      color: Colors.black,
                    },
                  ]}
                >
                  {selectedStock.totalProductPrice} {t('common:SAR')}
                </Text>
              </View>
              <View style={{}}>
                <Text
                  style={[
                    Gutters.tinyVMargin,
                    Fonts.fontBold12,
                    {
                      color: Colors.black,
                    },
                  ]}
                >
                  {t('common:amountStatus')}
                </Text>
                <Text
                  style={[
                    Fonts.fontReg12,
                    {
                      color: Colors.black,
                    },
                  ]}
                >
                  {selectedStock.amountStatus}
                </Text>
              </View>

              <View style={{}}>
                <Text
                  style={[
                    Gutters.tinyVMargin,
                    Fonts.fontBold12,
                    {
                      color: Colors.black,
                    },
                  ]}
                >
                  {t('common:notesForAdmin')}
                </Text>
                <Text
                  style={[
                    Fonts.fontReg12,
                    {
                      color: Colors.black,
                    },
                  ]}
                >
                  {selectedStock.notes}
                </Text>
              </View>
              <View style={{}}>
                <Text
                  style={[
                    Gutters.tinyVMargin,
                    Fonts.fontBold12,
                    {
                      color: Colors.black,
                    },
                  ]}
                >
                  {t('common:discount')}
                </Text>
                <Text
                  style={[
                    Fonts.fontReg12,
                    {
                      color: Colors.black,
                    },
                  ]}
                >
                  {selectedStock.discount} {t('common:SAR')}
                </Text>
              </View>
              <View style={{}}>
                <Text
                  style={[
                    Gutters.tinyVMargin,
                    Fonts.fontBold12,
                    {
                      color: Colors.black,
                    },
                  ]}
                >
                  {t('common:shippingType')}
                </Text>
                <Text
                  style={[
                    Fonts.fontReg12,
                    {
                      color: Colors.black,
                    },
                  ]}
                >
                  {selectedStock.shippingType}
                </Text>
              </View>
              <View style={{}}>
                <Text
                  style={[
                    Gutters.tinyVMargin,
                    Fonts.fontBold12,
                    {
                      color: Colors.black,
                    },
                  ]}
                >
                  {t('common:shippingFee')}
                </Text>
                <Text
                  style={[
                    Fonts.fontReg12,
                    {
                      color: Colors.black,
                    },
                  ]}
                >
                  {selectedStock.shippingFee} {t('common:SAR')}
                </Text>
              </View>
              <View style={{}}>
                <Text
                  style={[
                    Fonts.fontBold12,

                    Gutters.tinyVMargin,
                    {
                      color: Colors.black,
                    },
                  ]}
                >
                  {t('common:date')}
                </Text>
                <Text
                  style={[
                    Fonts.fontReg12,
                    {
                      color: Colors.black,
                    },
                  ]}
                >
                  {moment(selectedStock.date).format('DD-MM-YYYY')}
                </Text>
              </View>
              {user_type === allUserTypes.Supplier ?
                null :
                <View style={{}}>
                  <Text
                    style={[
                      Fonts.fontBold12,

                      Gutters.tinyVMargin,
                      {
                        color: Colors.black,
                      },
                    ]}
                  >
                    {t('common:shippingAddress')}
                  </Text>
                  <Text
                    style={[
                      Fonts.fontReg12,
                      {
                        color: Colors.black,
                      },
                    ]}
                  >
                    {selectedStock.shippingAddress}
                  </Text>
                </View>
              }
            </View>
          </ScrollView>
        </View>
        {
          user_type === allUserTypes.Supplier && tab === t('common:pending') ?
            <View>
              <CustomDropDown
                style={[Gutters.smallVMargin,
                Gutters.smallHMargin,]}
                placeholder={t('common:storeAddress')}
                disable={false}
                value={selectedDropdown}
                setValue={setSelectedDropdown}
                data={data}
              />
              <View
                style={[
                  Gutters.smallHMargin,
                  Gutters.tinyBMargin,
                  i18next.language == 'en' ? Layout.row : Layout.rowReverse,
                ]}
              >
                <CustomSimpleButton
                  title={t('common:downloadInvoice')}
                  parentContainerStyle={{
                    width: sWidth(50) - 20,
                  }}
                  containerStyle={[
                    {
                      backgroundColor: Colors.white,
                      borderColor: Colors.purple,
                      borderWidth: 1,
                      width: sWidth(50) - 30,
                      // height: 50,
                    },
                  ]}
                  titleStyle={[
                    {
                      color: Colors.purple,
                      // marginVertical: 0,
                    },
                  ]}
                  onPress={() => { }}
                />
                <CustomSimpleButton
                  title={t('common:readyToShip')}
                  parentContainerStyle={{
                    width: sWidth(50) - 20,
                  }}
                  containerStyle={[
                    {
                      // backgroundColor: Colors.white,
                      // borderColor: Colors.purple,
                      // borderWidth: 1,
                      width: sWidth(50) - 30,
                      // height: 50,
                    },
                  ]}
                  // titleStyle={[

                  // ]}
                  onPress={() => { }}
                />
              </View>
            </View>
            :
            <CustomSimpleButton
              title={t('common:downloadInvoice')}
              parentContainerStyle={{
                // width: sWidth(50) - 20,
              }}
              containerStyle={[
                {
                  // backgroundColor: Colors.white,
                  // borderColor: Colors.purple,
                  // borderWidth: 1,
                  width: sWidth(100) - 20,
                  // height: 50,
                },
              ]}
              // titleStyle={[

              // ]}
              onPress={() => { }}
            />
        }
        {showBottomSheet && (
          <CustomBottomSheet
            setShowBottomSheet={setshowBottomSheet}
            showBottomSheet={showBottomSheet}
          >
            {/* <BottomSheetBodyUpdateStock setBottomSheet={setshowBottomSheet} /> */}
          </CustomBottomSheet>
        )}
      </View>
    </SafeAreaView >
  );
};

export default OrdersDetailsScreen;

const styles = StyleSheet.create({});
