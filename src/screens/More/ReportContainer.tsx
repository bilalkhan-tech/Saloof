import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { Colors, FontSize } from '@/theme/Variables';
import fonts from '@/theme/assets/fonts';
import CustomSvgImage from '@/components/CustomSvgImage';

import { useTheme } from '@/hooks';
import CustomButton from '@/components/CustomButton';
import CustomSimpleButton from '@/components/CustomSimpleButton';
import i18next from 'i18next';
import { CustomBottomSheet } from '@/components';
import CustomTextInput from '@/components/CustomTextInput';
import CustomDropDown from '@/components/CustomDropDown';
import CustomHeader from '@/components/CustomHeader';
import CustomGraph from '@/components/CustomGraph';

const ReportContainer = ({ navigation }) => {
  const { Common, Fonts, Gutters, Layout, Images } = useTheme();

  const [showBottomSheetFilters, setshowBottomSheetFilters] =
    useState<boolean>(false);
  const [selectedDropdown, setSelectedDropdown] = useState({
    label: '',
    value: '',
  });
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
  ];
  const [showBottomSheetOrder, setshowBottomSheetOrder] =
    useState<boolean>(false);
  const [newReportsData, setNewReportsData] = useState([
    {
      value: 'iPhone 13 pro max',
      id: '1124215123134',
      count: 4000,
      sar: '45.00',
      by: 'by Apple',
      cat: 'in Phones',
      isNew: true,
    },
    {
      value: 'iPhone 14 pro max',
      id: '1124215123134',
      count: 1000,
      sar: '45.00',
      by: 'by Apple',
      cat: 'in Phones',
      isNew: false,
    },
    {
      value: 'iPhone 15 pro max',
      id: '1124215123134',
      count: 300,
      sar: '45.00',
      by: 'by Apple',
      cat: 'in Phones',
      isNew: false,
    },
    {
      value: 'iPhone 12 pro max',
      id: '1124215123134',
      count: 4000,
      sar: '45.00',
      by: 'by Apple',
      cat: 'in Phones',
      isNew: false,
    },
    {
      value: 'iPhone 11 pro max',
      id: '1124215123134',
      count: 5000,
      sar: '45.00',
      by: 'by Apple',
      cat: 'in Phones',
      isNew: false,
    },
  ]);

  const [activeButton, setActiveButton] = useState('button1');
  const handleButtonPress = (button: any) => {
    console.log('Button Value:', button);
    setActiveButton(button);
  };
  const backPressFunc = () => {
    navigation.pop();
  };

  const renderBottomSheetOrderOption = () => {
    return (
      <View style={{}}>
        <CustomSimpleButton
          title={t('common:markAsReady')}
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
          onPress={() => setshowBottomSheetOrder(false)}
        />
        <CustomSimpleButton
          title={t('common:downloadInvoice')}
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
          onPress={() => setshowBottomSheetOrder(false)}
        />
      </View>
    );
  };
  const renderBottomSheetFilter = () => {
    return (
      <View style={{}}>
        {/* <View style={[Gutters.smallTMargin]}>
          <CustomTextInput placeholder={t('common:searchByOrderID')} />
        </View> */}
        <CustomDropDown
          style={[Gutters.smallBMargin]}
          placeholder={t('common:category')}
          disable={false}
          value={selectedDropdown}
          setValue={setSelectedDropdown}
          data={data}
        />
        <CustomDropDown
          style={[Gutters.smallBMargin]}
          placeholder={t('common:subCategory')}
          disable={false}
          value={selectedDropdown}
          setValue={setSelectedDropdown}
          data={data}
        />
        <CustomTextInput placeholder={t('common:date')} />
        {/* <CustomTextInput placeholder={t('common:to')} /> */}

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
          onPress={() => setshowBottomSheetFilters(false)}
        />
      </View>
    );
  };
  const renderNewReports = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('OrdersDetailsScreen')}
        style={[
          Gutters.smallBMargin,
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
              Fonts.fontBold16,
              {
                color: item.isNew ? Colors.white : Colors.Purple8F53C0,
              },
            ]}
          >
            {item.value}
          </Text>
        </View>
        <View
          style={[
            i18next.language == 'en' ? Layout.row : Layout.rowReverse,
            Layout.justifyContentBetween,
            Layout.alignItemsCenter,
          ]}
        >
          <Text
            style={[
              Fonts.fontReg10,
              {
                color: item.isNew ? Colors.white : Colors.black,
              },
            ]}
          >
            {item.id}
          </Text>
          <Text
            style={[
              Fonts.fontBold12,
              {
                color: item.isNew ? Colors.white : Colors.Purple8F53C0,
              },
            ]}
          >
            {item.count}{' '}
            {item.count === 1 ? t('common:item') : t('common:items')}
          </Text>
        </View>
        <View
          style={[
            i18next.language == 'en' ? Layout.row : Layout.rowReverse,
            Layout.justifyContentBetween,
            Layout.alignItemsCenter,
          ]}
        >
          <Text
            style={[
              Fonts.fontReg12,
              {
                color: item.isNew ? Colors.white : Colors.black,
              },
            ]}
          >
            {item.cat}
          </Text>
          <Text
            style={[
              Fonts.fontBold12,
              {
                color: item.isNew ? Colors.white : Colors.black,
              },
            ]}
          >
            {item.by}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <View style={[Gutters.smallVMargin, Gutters.smallHMargin]}>
          <CustomHeader
            back
            backPress={backPressFunc}
            headerTitle={t('common:reports')}
          />
        </View>
        <View
          style={[
            i18next.language == 'en' ? Layout.row : Layout.rowReverse,
            Layout.justifyContentBetween,
            Layout.alignItemsCenter,
            Gutters.smallHMargin,
          ]}
        >
          <Text
            style={[
              Fonts.fontBold24,
              {
                color: Colors.Purple8F53C0,
                paddingTop: 10,
              },
            ]}
          >
            {t('common:sales')}
          </Text>
          <CustomSimpleButton
            title={t('common:filters')}
            parentContainerStyle={{ width: '30%' }}
            containerStyle={[
              Layout.justifyContentCenter,
              {
                backgroundColor: Colors.white,
                borderColor: Colors.purple,
                borderWidth: 1,
                borderRadius: 4,
                padding: 0,
                // width: '30%',
                height: 40,
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
              setshowBottomSheetFilters(true);
            }}
          />
        </View>
        {/* <View style={{ height: 150 }}></View> */}
        <View style={[Gutters.smallHMargin]} >
          <CustomGraph
            hideFilters={true}
          />
        </View>
        {/* <View
          style={[
            i18next.language == 'en' ? Layout.row : Layout.rowReverse,
            Layout.justifyContentBetween,
            Layout.alignItemsCenter,
            Gutters.smallHMargin,
            // { backgroundColor: 'red' },
          ]}
        >
          <Text style={[Fonts.fontBold18, { color: Colors.Purple8F53C0 }]}>
            {t('common:mostSoldProducts')}
          </Text>
          <CustomSimpleButton
            title={t('common:filters')}
            parentContainerStyle={{ width: '30%' }}
            containerStyle={[
              Layout.justifyContentCenter,
              {
                backgroundColor: Colors.white,
                borderColor: Colors.purple,
                borderWidth: 1,
                padding: 0,
                // width: '30%',
                height: 40,
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
              setshowBottomSheetFilters(true);
            }}
          />
        </View> */}
        <FlatList
          style={[Gutters.smallTMargin]}
          data={newReportsData}
          renderItem={renderNewReports}
        />

        {showBottomSheetFilters && (
          <CustomBottomSheet
            title={t('common:filters')}
            setShowBottomSheet={setshowBottomSheetFilters}
            showBottomSheet={showBottomSheetFilters}
          >
            {renderBottomSheetFilter()}
          </CustomBottomSheet>
        )}
        {showBottomSheetOrder && (
          <CustomBottomSheet
            title={t('common:orderOptions')}
            setShowBottomSheet={setshowBottomSheetOrder}
            showBottomSheet={showBottomSheetOrder}
          >
            {renderBottomSheetOrderOption()}
          </CustomBottomSheet>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ReportContainer;

const styles = StyleSheet.create({});
