import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Switch,
} from 'react-native';
import React, { useRef, useState } from 'react';
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
import { sHight } from '@/utils/ScreenDimentions';
import { layout } from 'types/theme';
import CustomModal, { modalTypes } from '@/components/CustomModal';

const ProductDetailScreen = ({ navigation }) => {
  const { t } = useTranslation(['common']);

  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme();
  const [cartItemNum, setCartItemNum] = useState(1);
  const deleteRef = useRef<modalTypes>(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [AddInputs, setAddInputs] = useState([
    { value: 'Product Name', title: 'iphone 13 Pro Max' },
    { value: 'Product Name', title: 'iphone 13 Pro Max' },
  ]);

  const renderAddInputs = (text, value) => {
    return (
      <View style={[Gutters.smallHMargin, Gutters.tinyTMargin]}>
        <Text style={[Fonts.fontMed12, { color: Colors.black }]}>{text}</Text>
        <Text style={[Fonts.fontReg12, { color: Colors.black }]}>{value}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <View style={[Gutters.smallVMargin, Gutters.smallHMargin]}>
          <CustomHeader
            back
            backPress={() => navigation.goBack()}
            headerTitle={t('common:productDetails')}
          />
        </View>
        <ScrollView>
          <View style={{ flex: 1, backgroundColor: Colors.white }}>
            <View
              style={[
                Layout.justifyContentEnd,
                i18next.language == 'en' ? Layout.row : Layout.rowReverse,
                Gutters.smallHMargin,
              ]}
            >
              <CustomSimpleButton
                title={t('common:deleteProduct')}
                parentContainerStyle={{ width: '40%' }}
                containerStyle={[
                  Layout.justifyContentCenter,
                  {
                    backgroundColor: Colors.white,
                    borderColor: Colors.purple,
                    borderWidth: 1,
                    padding: 0,
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
                  deleteRef.current?.show();
                }}
              />
            </View>
            <View
              style={[
                Layout.justifyContentBetween,
                i18next.language == 'en' ? Layout.row : Layout.rowReverse,
                Gutters.smallHMargin,
              ]}
            >
              <View
                style={[
                  i18next.language == 'en' ? Layout.row : Layout.rowReverse,
                ]}
              >
                <Text style={[Fonts.fontBold16, { color: Colors.black }]}>{t("common:productStatus")}</Text>
                <Text style={[Fonts.fontBold16, { color: isEnabled ? Colors.Green4CAF50 : Colors.Gray808080 }]}>{` (${isEnabled ? t("common:active") : t("common:inActive")})`}</Text>
              </View>
              <Switch
                trackColor={{ false: Colors.Gray808080, true: Colors.Green4CAF50 }}
                thumbColor={Colors.white}
                ios_backgroundColor={Colors.Gray3e3e3e}
                onValueChange={() => {
                  setIsEnabled(!isEnabled)
                }}
                value={isEnabled}
              />
            </View>
            <CustomSimpleButton
              title={true ? t('common:editDetails') : t('common:saveDetails')}
              parentContainerStyle={[
                // Gutters.smallTMargin,
                Gutters.smallHPadding,
                Gutters.xLittleVPadding,
              ]}
              onPress={() => true ? navigation.navigate('AddProductScreen') :
                () => {
                  console.log('save status api call');

                }
              }
            />

            <View
              style={[
                Gutters.smallVMargin,
                Gutters.smallHMargin,
                Gutters.smallVPadding,
                {
                  flex: 1,
                  backgroundColor: Colors.GrayF9F8F8,
                  borderRadius: 10,
                },
              ]}
            >
              {/* <FlatList data={AddInputs} renderItem={renderAddInputs} /> */}
              {renderAddInputs(t('common:productName'), 'iphone 13 Pro Max')}
              {renderAddInputs(t('common:SKU'), '567890')}
              {/* {renderAddInputs(t('common:productType'), 'Variant')} */}
              {renderAddInputs(t('common:manufacturer'), 'Apple')}
              {renderAddInputs(
                t('common:unitPrice'),
                `${'45.0'} ${t('common:SAR')}`,
              )}
              {renderAddInputs(t('common:discountType'), 'Basic')}
              {renderAddInputs(t('common:discountAmount'), `${'5.0'} ${t('common:SAR')}`)}
              {renderAddInputs(t('common:category'), 'Electronic Items')}
              {renderAddInputs(t('common:subCategory'), 'Phones')}
              {renderAddInputs(t('common:reOrderLevel'), 'One')}
              {renderAddInputs(t('common:description'), 'description')}
              {renderAddInputs(t('common:weightKG'), '24')}
              {renderAddInputs(t('common:lengthCM'), '24')}
              {renderAddInputs(t('common:widthCM'), '24')}
              {renderAddInputs(t('common:heightCM'), '24')}
              {renderAddInputs(t('common:reOrderLevel'), 'abc')}
              {renderAddInputs(t('common:attributes'), '4')}
              {renderAddInputs(t('common:SEOTagsArabic'), '34 tags')}
              {renderAddInputs(t('common:SEOTagsEnglish'), '34 tags')}
              {renderAddInputs(t('common:SEOTagsUrdu'), '34 tags')}
              {renderAddInputs(t('common:notes'), 'Notes go here')}
              <Text
                style={[
                  Gutters.smallTMargin,
                  Gutters.smallHMargin,
                  Fonts.fontBold12,
                  { color: Colors.black },
                ]}
              >
                {t('common:productImages')}
              </Text>
              <View
                style={[
                  Gutters.smallHMargin,
                  Layout.justifyContentCenter,
                  Layout.alignItemsCenter,
                  {
                    borderWidth: 1,
                    borderColor: Colors.black,
                    borderRadius: 10,
                    height: sHight(20),
                    marginTop: 10,
                    borderStyle: 'dashed',
                  },
                ]}
              >
                <Text
                  style={[
                    Gutters.smallHMargin,
                    Fonts.fontReg16,
                    { color: Colors.black },
                  ]}
                >
                  {t('common:upload')}
                </Text>
              </View>
              <View
                style={[
                  i18next.language == 'en' ? Layout.row : Layout.rowReverse,
                  Layout.justifyContentBetween,
                  Gutters.smallHMargin,
                  Layout.alignItemsCenter,
                  {
                    backgroundColor: Colors.Gray10,
                    borderRadius: 5,
                    height: 50,
                    marginTop: 30,
                  },
                ]}
              >
                <Text
                  style={[
                    Fonts.fontReg16,
                    { color: Colors.black },
                    { marginHorizontal: 10 },
                  ]}
                >
                  Uploaded Image
                </Text>
                <CustomSvgImage
                  source={Images.svgs.DeleteIcon}
                  style={{
                    height: 50,
                    width: 50,
                  }}
                />
              </View>
              <View
                style={[
                  i18next.language == 'en' ? Layout.row : Layout.rowReverse,
                  Layout.justifyContentBetween,
                  Gutters.smallHMargin,
                  Layout.alignItemsCenter,
                  {
                    backgroundColor: Colors.Gray10,
                    borderRadius: 5,
                    height: 50,
                    marginTop: 30,
                  },
                ]}
              >
                <Text
                  style={[
                    Fonts.fontReg16,
                    { color: Colors.black },
                    { marginHorizontal: 10 },
                  ]}
                >
                  Uploaded Image
                </Text>
                <CustomSvgImage
                  source={Images.svgs.DeleteIcon}
                  style={{
                    height: 50,
                    width: 50,
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <CustomModal
        buttonTypes="double"
        headerText={t('deleteProduct')}
        firstBtnName={t('cancel')}
        secondBtnName={t('delete')}
        BtnOnePress={() => {
          deleteRef.current?.hide();
        }}
        BtnTwoPress={() => {
          deleteRef.current?.hide();
        }}
        ref={deleteRef}
      >
        <Text
          style={[
            Fonts.fontMed14,
            Fonts.textCenter,
            Gutters.regularHPadding,
            Gutters.tinyBMargin,
            { color: Colors.Gray60 },
          ]}
        >
          {t('common:realyWantToDeleteProduct')}
        </Text>
      </CustomModal>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({});
