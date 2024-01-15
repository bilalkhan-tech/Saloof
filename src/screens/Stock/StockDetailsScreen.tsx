import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { CustomBottomSheet } from '@/components';

import { useTheme } from '@/hooks';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import CustomSimpleButton from '@/components/CustomSimpleButton';
import CustomHeader from '@/components/CustomHeader';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import CustomTextInput from '@/components/CustomTextInput';

interface IBottomSheetBody {
  setBottomSheet: CallableFunction;
}

const StockDetailsScreen = ({ navigation }) => {
  const { t } = useTranslation(['common']);

  const [showBottomSheet, setshowBottomSheet] = useState<boolean>(false);
  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme();

  const [selectedStock, setSelectedStock] = useState({
    value: 'iPhone 13 pro max',
    stock: 3,
    sar: '45.00',
    isNew: true,
    cat: 'Electronic items',
    subCat: 'Phones',
    unitPrice: '4.00',
    city: 'Riyadh',
    sku: '123456789900',
  });

  const backPressFunc = () => {
    navigation.pop();
  };
  const BottomSheetBodyUpdateStock = ({ setBottomSheet }: IBottomSheetBody) => {
    const [stockIn, setStockIn] = useState<Boolean>(true);
    const { Layout, Images, Fonts, Gutters, Colors } = useTheme();
    return (
      <View
        style={[
          Layout.fullWidth,
          Layout.justifyContentBetween,
          {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            flexDirection: 'column',
            backgroundColor: Colors.white,
          },
        ]}
      >
        <View>
          {/* <View
            style={[i18next.language == 'en' ? Layout.row : Layout.rowReverse]}
          >
            <CustomSimpleButton
              title={t('common:stockIn')}
              parentContainerStyle={{ width: sWidth(25) }}
              containerStyle={[
                Gutters.xLittleBMargin,
                // Gutters.smallRMargin,
                {
                  backgroundColor: stockIn ? Colors.purple : Colors.GrayF2F2F2,
                  width: sWidth(25),
                  paddingVertical: 5,
                  borderRadius: 30,
                  // height: 40,
                },
              ]}
              titleStyle={[
                Fonts.fontBold12,
                {
                  color: stockIn ? Colors.white : Colors.Gray9CA3AF,
                  margVertical: 0,
                },
              ]}
              onPress={() => setStockIn(true)}
            />
            <View style={{}}>
              <CustomSimpleButton
                title={t('common:stockOut')}
                parentContainerStyle={{ width: sWidth(25) }}
                containerStyle={[
                  Gutters.xLittleBMargin,
                  i18next.language == 'en'
                    ? Gutters.smallLMargin
                    : Gutters.smallRMargin,
                  {
                    backgroundColor: stockIn
                      ? Colors.GrayF2F2F2
                      : Colors.purple,
                    width: sWidth(25),
                    paddingVertical: 5,
                    borderRadius: 30,
                    // height: 40,
                  },
                ]}
                titleStyle={[
                  Fonts.fontBold12,
                  {
                    color: stockIn ? Colors.Gray9CA3AF : Colors.white,
                    margVertical: 0,
                  },
                ]}
                onPress={() => setStockIn(false)}
              />
            </View>
          </View> */}

          <View style={[Gutters.smallTMargin]}>
            <CustomTextInput placeholder={t('common:quantity')} />
          </View>
        </View>
        <View>
          <CustomSimpleButton
            title={t('common:updateStock')}
            containerStyle={[
              Gutters.xLittleBMargin,
              {
                backgroundColor: Colors.purple,
              },
            ]}
            titleStyle={[
              Fonts.fontMed16,
              {
                color: Colors.white,
              },
            ]}
            onPress={() => setBottomSheet(false)}
          />
        </View>
      </View>
    );
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
              headerTitle={t('common:stockDetails')}
            />
          </View>
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
                  Fonts.fontBold14,
                  {
                    color: Colors.Purple8F53C0,
                  },
                ]}
              >
                {t('common:totalItems')}
              </Text>
              <Text
                style={[
                  Fonts.fontReg14,
                  {
                    color: Colors.black,
                  },
                ]}
              >
                5
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
                {t('common:worth')}
              </Text>
              <Text
                style={[
                  Fonts.fontReg14,
                  {
                    color: Colors.black,
                  },
                ]}
              >
                55,053 {t('common:SAR')}
              </Text>
            </View>
          </View>
          <View
            style={[
              Gutters.smallHMargin,
              Gutters.smallPadding,

              Gutters.smallTMargin,
              {
                backgroundColor: Colors.GrayF9F8F8,
                borderRadius: 10,
              },
            ]}
          >
            <View style={{}}>
              <Text
                style={[
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
                  Gutters.tinyTMargin,
                  Fonts.fontReg12,
                  {
                    color: Colors.black,
                  },
                ]}
              >
                {selectedStock.value}
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
              <Text
                style={[
                  Fonts.fontReg12,
                  {
                    color: Colors.black,
                  },
                ]}
              >
                {selectedStock.sku}
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
                {t('common:storeAddress')}
              </Text>
              <Text
                style={[
                  Fonts.fontReg12,
                  {
                    color: Colors.black,
                  },
                ]}
              >
                {selectedStock.city}
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
                {t('common:availableStock')}
              </Text>
              <Text
                style={[
                  Fonts.fontReg12,
                  {
                    color: Colors.black,
                  },
                ]}
              >
                {selectedStock.stock}
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
                {t('common:unitPrice')}
              </Text>
              <Text
                style={[
                  Fonts.fontReg12,
                  {
                    color: Colors.black,
                  },
                ]}
              >
                {selectedStock.sar} {t('common:SAR')}
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
                {t('common:category')}
              </Text>
              <Text
                style={[
                  Fonts.fontReg12,
                  {
                    color: Colors.black,
                  },
                ]}
              >
                {selectedStock.cat}
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
                {t('common:subCategory')}
              </Text>
              <Text
                style={[
                  Fonts.fontReg12,
                  {
                    color: Colors.black,
                  },
                ]}
              >
                {selectedStock.subCat}
              </Text>
            </View>
          </View>
        </View>

        <View style={[Gutters.smallHMargin, Gutters.tinyBMargin]}>
          <CustomSimpleButton
            title={t('common:updateStock')}
            containerStyle={[
              {
                // backgroundColor: Colors.white,
                // borderColor: Colors.purple,
                // borderWidth: 1,
                // width: '35%',
                // height: 50,
              },
            ]}
            // titleStyle={[

            // ]}
            onPress={() => {
              setshowBottomSheet(true);
            }}
          />
        </View>
        {showBottomSheet && (
          <CustomBottomSheet
            title={t('common:updateStock')}
            setShowBottomSheet={setshowBottomSheet}
            showBottomSheet={showBottomSheet}
          >
            <BottomSheetBodyUpdateStock setBottomSheet={setshowBottomSheet} />
          </CustomBottomSheet>
        )}
      </View>
    </SafeAreaView>
  );
};

export default StockDetailsScreen;

const styles = StyleSheet.create({});
