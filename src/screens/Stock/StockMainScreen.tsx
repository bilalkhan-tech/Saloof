import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import CustomSvgImage from '@/components/CustomSvgImage';

import { useTheme } from '@/hooks';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import CustomSimpleButton from '@/components/CustomSimpleButton';
import CustomDropDown from '@/components/CustomDropDown';
import { CustomBottomSheet } from '@/components';
import CustomTextInput from '@/components/CustomTextInput';

const StockMainScreen = ({ navigation }) => {
  const { t } = useTranslation(['common']);

  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme();

  const [newStocksData, setNewStocksData] = useState([
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
      count: 0,
      sar: '45.00',
      isNew: false,
      cat: 'Electronic items',
      subCat: 'Phones',
      unitPrice: '4.00',
      city: 'Jeddah',
    },
    {
      value: 'iPhone 13 pro max',
      count: 3,
      sar: '45.00',
      isNew: false,
      cat: 'Electronic items',
      subCat: 'Phones',
      unitPrice: '4.00',
      city: 'Riyadh',
    },
  ]);

  const [selectedDropdown, setSelectedDropdown] = useState({
    label: '',
    value: '',
  });
  const [showBottomSheet, setshowBottomSheet] = useState<boolean>(false);
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
  ];
  const renderBottomSheetFilter = () => {
    return (
      <View style={{}}>
        <View style={[Gutters.smallTMargin]}>
          <CustomTextInput placeholder={t('common:searchProductsBySKU')} />
        </View>
        <CustomDropDown
          style={[Gutters.smallBMargin]}
          placeholder={t('common:category')}
          disable={false}
          value={selectedDropdown}
          setValue={setSelectedDropdown}
          data={data}
        />
        <CustomDropDown
          position="top"
          style={[Gutters.smallBMargin]}
          placeholder={t('common:subCategory')}
          disable={false}
          value={selectedDropdown}
          setValue={setSelectedDropdown}
          data={data}
        />
        <CustomDropDown
          position="top"
          style={[Gutters.smallBMargin]}
          placeholder={t('common:storeAddress')}
          disable={false}
          value={selectedDropdown}
          setValue={setSelectedDropdown}
          data={data}
        />
        <CustomSimpleButton
          title={t('common:apply')}
          containerStyle={[
            Gutters.xLittleVMargin,
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
          onPress={() => setshowBottomSheet(false)}
        />
      </View>
    );
  };
  const renderNewStocks = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('StockDetailsScreen')}
        style={[
          Gutters.smallTMargin,
          Gutters.smallHPadding,
          Gutters.smallHMargin,
          Gutters.xLittleVPadding,
          {
            backgroundColor: item.isNew
              ? Colors.Purple8F53C0
              : Colors.GrayF9F8F8,
            borderRadius: 10,
          },
        ]}
      >
        <View
          style={[
            i18next.language == 'en' ? Layout.row : Layout.rowReverse,
            Layout.justifyContentBetween,
            Layout.alignItemsCenter,
          ]}
        >
          <Text
            style={[
              Fonts.fontMed16,
              {
                color: item.isNew ? Colors.white : Colors.Purple8F53C0,
              },
            ]}
          >
            {item.value}
          </Text>
          <Text
            style={[
              Fonts.fontMed12,
              {
                color: item.isNew ? Colors.white : Colors.Purple8F53C0,
              },
            ]}
          >
            {`${item.sar} ${t('common:SAR')}`}
          </Text>
        </View>
        <View
          style={[
            i18next.language == 'en' ? Layout.row : Layout.rowReverse,
            Layout.justifyContentBetween,
            Layout.alignItemsCenter,
            Gutters.tinyTMargin,
          ]}
        >
          <Text
            style={[
              Fonts.fontReg10,
              {
                color: item.isNew ? Colors.white : Colors.Gray9CA3AF,
              },
            ]}
          >
            {item.count}{' '}
            {item.count === 1 ? t('common:item') : t('common:items')}
          </Text>
          <View
            style={[
              i18next.language == 'en' ? Layout.row : Layout.rowReverse,
              Layout.justifyContentBetween,
              Layout.alignItemsCenter,
            ]}
          >
            <Text
              style={[
                Fonts.fontMed12,
                {
                  color: item.isNew ? Colors.white : Colors.Gray9CA3AF,
                },
              ]}
            >
              {t('common:unitPrice')}:
            </Text>
            <Text
              style={[
                Fonts.fontMed12,
                {
                  color: item.isNew ? Colors.white : Colors.Purple8F53C0,
                },
              ]}
            >
              {` ${item.unitPrice} ${t('common:SAR')}`}
            </Text>
          </View>
        </View>
        <View
          style={[
            i18next.language == 'en' ? Layout.row : Layout.rowReverse,
            Layout.justifyContentBetween,
            Layout.alignItemsCenter,
          ]}
        >
          <View
            style={[
              i18next.language == 'en' ? Layout.row : Layout.rowReverse,
              Layout.justifyContentBetween,
              Layout.alignItemsCenter,
            ]}
          >
            <Text
              style={[
                Fonts.fontMed16,
                {
                  color: item.isNew ? Colors.white : Colors.black,
                },
              ]}
            >
              {i18next.language == 'en' ? '' : ' <- '}
              {item.cat}
              {i18next.language == 'en' ? ' -> ' : ''}
            </Text>
            <Text
              style={[
                Fonts.fontReg16,
                {
                  color: item.isNew ? Colors.white : Colors.black,
                },
              ]}
            >
              {item.subCat}
            </Text>
          </View>

          <Text
            style={[
              Fonts.fontBold12,
              {
                color: item.isNew ? Colors.white : Colors.black,
              },
            ]}
          >
            {item.city}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <View
          style={[
            i18next.language == 'en' ? Layout.row : Layout.rowReverse,
            Layout.justifyContentBetween,
            Layout.alignItemsCenter,
            Gutters.littleTMargin,
            Gutters.smallHPadding,
          ]}
        >
          <View style={{ width: 30 }}></View>
          <Text
            style={[
              Layout.textAlignCenter,
              Fonts.fontMed18,
              Gutters.smallVMargin,
              {
                color: Colors.Purple8F53C0,
              },
            ]}
          >
            {t('common:stocks')}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AddStockScreen")
            }}
            style={{ paddingVertical: 10, paddingStart: 20, }}
          >
            <CustomSvgImage
              source={Images.svgs.AddStockIcon}
              style={{
                width: 32,
                height: 32,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[
            i18next.language == 'en' ? Layout.row : Layout.rowReverse,
            Layout.justifyContentBetween,
            Layout.alignItemsCenter,
            Gutters.smallTMargin,
            Gutters.smallHPadding,
          ]}
        >
          <View style={{}}>
            <Text
              style={[
                Fonts.fontMed14,
                {
                  color: Colors.Purple8F53C0,
                },
              ]}
            >
              {t('common:totalStock')}
            </Text>
            <Text
              style={[
                Fonts.fontMed14,
                {
                  color: Colors.black,
                },
              ]}
            >
              4500
            </Text>
          </View>

          <View style={{}}>
            <Text
              style={[
                Fonts.fontMed14,
                {
                  color: Colors.Purple8F53C0,
                },
              ]}
            >
              {t('common:stockWorth')}
            </Text>
            <Text
              style={[
                Fonts.fontMed14,
                {
                  color: Colors.black,
                },
              ]}
            >
              55,053 SAR
            </Text>
          </View>
        </View>

        <FlatList data={newStocksData} renderItem={renderNewStocks} />
        <CustomSimpleButton
          title={`${false ? t('common:filter') : t('common:filters')} (${'3'})`}
          containerStyle={[
            {
              backgroundColor: Colors.white,
              borderColor: Colors.purple,
              borderWidth: 1,
              borderRadius: 4,
              width: '35%',
              height: 50,
            },
          ]}
          titleStyle={[
            Fonts.fontReg14,
            {
              color: Colors.purple,
              marginVertical: 0,
            },
          ]}
          onPress={() => {
            setshowBottomSheet(true);
          }}
        />
        {showBottomSheet && (
          <CustomBottomSheet
            title={t('common:filters')}
            setShowBottomSheet={setshowBottomSheet}
            showBottomSheet={showBottomSheet}
          >
            {renderBottomSheetFilter()}
          </CustomBottomSheet>
        )}
      </View>
    </SafeAreaView>
  );
};

export default StockMainScreen;

const styles = StyleSheet.create({});
