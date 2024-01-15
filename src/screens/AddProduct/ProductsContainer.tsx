import { CustomBottomSheet } from '@/components';
import CustomDropDown from '@/components/CustomDropDown';
import CustomHeader from '@/components/CustomHeader';
import CustomSimpleButton from '@/components/CustomSimpleButton';
import CustomSvgImage from '@/components/CustomSvgImage';
import CustomTextInput from '@/components/CustomTextInput';
import { useTheme } from '@/hooks';
import { Colors } from '@/theme/Variables';
import i18next from 'i18next';
import React, { useCallback, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import DocumentPicker from 'react-native-document-picker';

const ProductsContainer = ({ navigation }: any) => {
  const { Common, Fonts, Gutters, Layout, Images } = useTheme();

  const [showBottomSheetFilters, setshowBottomSheetFilters] =
    useState<boolean>(false);
  const [fileResponse, setFileResponse] = useState([]);
  const [selectedDropdown, setSelectedDropdown] = useState({
    label: '',
    value: '',
  });
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
  ];
  const [showAddProductSheet, setshowAddProductSheet] =
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
      id: '1124215123135',
      count: 1000,
      sar: '45.00',
      by: 'by Apple',
      cat: 'in Phones',
      isNew: false,
    },
    {
      value: 'iPhone 15 pro max',
      id: '1124215123136',
      count: 300,
      sar: '45.00',
      by: 'by Apple',
      cat: 'in Phones',
      isNew: false,
    },
    {
      value: 'iPhone 12 pro max',
      id: '1124215123137',
      count: 4000,
      sar: '45.00',
      by: 'by Apple',
      cat: 'in Phones',
      isNew: false,
    },
    {
      value: 'iPhone 11 pro max',
      id: '1124215123138',
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

  const uploadCSV = async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: types.csv,
      });
      let docObj = {
        name: response[0]?.name,
        type: response[0]?.type,
        uri: response[0]?.uri,
      };
      setCSV(docObj);
      //
    } catch (err) {
      console.log('errr', err);
    }
  };

  const ItemAddProductButton = ({ title, onPress, icon }) => {
    return (
      <TouchableOpacity
        style={[
          i18next.language == 'en' ? Layout.row : Layout.rowReverse,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
          Gutters.smallBMargin,
          Gutters.smallHPadding,
          Gutters.littleVPadding,
          {
            borderStyle: 'dashed',
            borderWidth: 1,
            borderColor: Colors.Purple8F53C0,
            borderRadius: 10,
          },
        ]}
        onPress={onPress}
      >
        <Text
          style={[
            Fonts.fontReg14,
            {
              color: Colors.Purple8F53C0,
            },
          ]}
        >
          {title}
        </Text>
        <CustomSvgImage
          source={icon}
          style={{
            height: 25,
            width: 25,
          }}
        />
      </TouchableOpacity>
    );
  };

  const uploadCSVFile = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: DocumentPicker.types.csv,
        mode: 'import',
      });
      setFileResponse(response);
      console.log(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  const renderBottomSheetAddProduct = () => {
    return (
      <View style={{}}>
        <ItemAddProductButton
          title={t('common:addNewProduct')}
          onPress={() => {
            setshowAddProductSheet(false);
            navigation.navigate('AddProductScreen');
          }}
          icon={Images.svgs.AddProductIcon}
        />
        <ItemAddProductButton
          title={t('common:uploadCSVFile')}
          onPress={uploadCSVFile}
          icon={Images.svgs.UploadIcon}
        />
        <ItemAddProductButton
          title={t('common:downloadCSVFile')}
          onPress={() => { }}
          icon={Images.svgs.DownloadIcon}
        />
      </View>
    );
  };

  const renderBottomSheetFilter = () => {
    return (
      <View style={{}}>
        <View style={[Gutters.smallTMargin]}>
          <CustomTextInput placeholder={t('common:productName')} />
        </View>

        <CustomTextInput placeholder={t('common:searchProductsBySKU')} />
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
          position="top"
        />
        {/* <CustomTextInput placeholder={t('common:from')} />

        <CustomTextInput placeholder={t('common:to')} /> */}

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

  const renderNewReports = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => navigation.navigate('ProductDetailScreen')}
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
            headerTitle={t('common:products')}
          />
        </View>
        <View
          style={[
            i18next.language == 'en' ? Layout.row : Layout.rowReverse,
            Layout.justifyContentBetween,
            Layout.alignItemsCenter,
            Gutters.smallHMargin,
            // { backgroundColor: 'red' },
          ]}
        >
          <Text style={[Fonts.fontBold24, { color: Colors.Purple8F53C0 }]}>
            {t('common:products')} {`(${4})`}
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
        <FlatList
          style={[Gutters.smallTMargin]}
          keyExtractor={item => item.id}
          data={newReportsData}
          renderItem={renderNewReports}
        />

        <CustomSimpleButton
          title={t('common:addProduct')}
          parentContainerStyle={[
            Gutters.smallHPadding,
            Gutters.xLittleVPadding,
          ]}
          onPress={() => {
            // navigation.navigate('AddProductScreen')
            setshowAddProductSheet(true);
          }}
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
        {showAddProductSheet && (
          <CustomBottomSheet
            title={t('common:addProduct')}
            setShowBottomSheet={setshowAddProductSheet}
            showBottomSheet={showAddProductSheet}
          >
            {renderBottomSheetAddProduct()}
          </CustomBottomSheet>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ProductsContainer;

const styles = StyleSheet.create({});
