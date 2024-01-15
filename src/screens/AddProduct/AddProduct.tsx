import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Platform,
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
import CustomDropDown from '@/components/CustomDropDown';
import { sHight } from '@/utils/ScreenDimentions';
import { ImageSelectFromGallery } from '@/utils/ImageSelection';

const AddProductScreen = ({ navigation }) => {
  const { t } = useTranslation(['common']);

  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme();
  const [cartItemNum, setCartItemNum] = useState(1);
  const [productImgs, setProductImgs] = useState<any>([]);
  console.log('productssss', productImgs);
  const [textInputs, setTextInputs] = useState([
    { value: 'Name*' },
    { value: 'Name*' },
    { value: 'Name*' },
    { value: 'Name*' },
    { value: 'Name*' },
    { value: 'Name*' },
    { value: 'Name*' },
    { value: 'Name*' },
    { value: 'Name*' },
    { value: 'Name*' },
    { value: 'Name*' },
    { value: 'Name*' },
  ]);
  const [AddInputs, setAddInputs] = useState([
    { value: 'Name*', title: 'Add Attributes' },
    { value: 'Name*', title: 'Add' },
    { value: 'Name*', title: 'Add' },
    { value: 'Name*', title: 'Add' },
  ]);
  const [selectedDropdown, setSelectedDropdown] = useState({
    label: '',
    value: '',
  });
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
  ];

  const uploadFile = () => {
    ImageSelectFromGallery().then(res => {
      if (res) {
        setProductImgs([
          ...productImgs, //filename
          {
            mime: res.mime,
            name: res?.path?.substring(res.path.lastIndexOf('/') + 1),
            path: res.path,
          },
        ]);
      }
    });
  };

  const renderTextInputs = text => {
    return (
      <View style={{}}>
        <CustomTextInput
          placeholder={text}
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
    );
  };

  const renderAddInputs = (title, text) => {
    return (
      <View style={[]}>
        <TouchableOpacity
          style={[
            Layout.justifyContentEnd,
            i18next.language == 'en' ? Layout.row : Layout.rowReverse,
            Gutters.littleBMargin,
          ]}
        >
          <Text
            style={[
              Layout.alignItemsEnd,
              {
                textDecorationLine: 'underline',
              },
            ]}
          >
            {title}
          </Text>
        </TouchableOpacity>
        <CustomTextInput
          placeholder={text}
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
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <View style={[Gutters.smallVMargin, Gutters.smallHMargin]}>
          <CustomHeader
            back
            backPress={() => navigation.goBack()}
            headerTitle={t('common:addProduct')}
          />
        </View>
        <View
          style={[
            Gutters.smallHMargin,
            i18next.language == 'en' ? Layout.row : Layout.rowReverse,
            Layout.justifyContentEnd,
          ]}
        >
          <CustomSimpleButton
            title={t('common:cancel')}
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
                borderRadius: 4,
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
              navigation.goBack();
            }}
          />
        </View>
        <ScrollView>
          <View style={{ flex: 1, backgroundColor: Colors.white }}>
            {/* <View style={{ flex: 1, backgroundColor: '', marginTop: 15 }}>
              <FlatList data={textInputs} renderItem={renderTextInputs} />
            </View> */}

            <View style={[Gutters.smallHMargin, {}]}>
              {renderTextInputs(t('common:name') + `*`)}
              <CustomDropDown
                style={[Gutters.smallBMargin]}
                placeholder={t('common:discountType')}
                disable={false}
                value={selectedDropdown}
                setValue={setSelectedDropdown}
                data={data}
              />
              {renderTextInputs(t('common:discountAmount') + `*`)}
              <CustomDropDown
                style={[Gutters.smallBMargin]}
                placeholder={t('common:manufacturer') + `*`}
                disable={false}
                value={selectedDropdown}
                setValue={setSelectedDropdown}
                data={data}
              />
              {renderTextInputs(t('common:SKU'))}
              <CustomDropDown
                style={[Gutters.smallBMargin]}
                placeholder={t('common:category') + `*`}
                disable={false}
                value={selectedDropdown}
                setValue={setSelectedDropdown}
                data={data}
              />
              <CustomDropDown
                style={[Gutters.smallBMargin]}
                placeholder={t('common:subCategory') + `*`}
                disable={false}
                value={selectedDropdown}
                setValue={setSelectedDropdown}
                data={data}
              />
              {/* <CustomDropDown
                style={[Gutters.smallBMargin]}
                placeholder={t('common:productType') + `*`}
                disable={false}
                value={selectedDropdown}
                setValue={setSelectedDropdown}
                data={data}
              /> */}
              {renderTextInputs(t('common:unitPrice'))}
              {renderTextInputs(t('common:weightKG'))}
              {renderTextInputs(t('common:lengthCM'))}
              {renderTextInputs(t('common:widthCM'))}
              {renderTextInputs(t('common:heightCM'))}
              {/* <CustomDropDown
                style={[Gutters.smallBMargin]}
                placeholder={t('common:supplier')}
                disable={false}
                value={selectedDropdown}
                setValue={setSelectedDropdown}
                data={data}
              /> */}
              {renderTextInputs(t('common:reOrderLevel'))}
              {renderTextInputs(t('common:description'))}

              {renderAddInputs(
                t('common:addAttributes'),
                t('common:attributes'),
              )}
              {renderAddInputs(t('common:add'), t('common:SEOTagsArabic'))}
              {renderAddInputs(t('common:add'), t('common:SEOTagsEnglish'))}
              {renderAddInputs(t('common:add'), t('common:SEOTagsUrdu'))}
            </View>

            {/* <View style={{ flex: 1, backgroundColor: '', marginTop: 15 }}>
              <FlatList data={AddInputs} renderItem={renderAddInputs} />
            </View> */}
          </View>
          <Text
            style={[
              Gutters.smallHMargin,
              Fonts.fontBold12,
              { color: Colors.black },
            ]}
          >
            {t('common:productImages')}
          </Text>
          <TouchableOpacity
            onPress={() => uploadFile()}
            style={[
              Gutters.smallHMargin,
              Layout.justifyContentCenter,
              Layout.alignItemsCenter,
              styles.uploadBtn,
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
          </TouchableOpacity>

          {productImgs?.map((val: any, key: number) => {
            return (
              <View
                key={key}
                style={[
                  i18next.language == 'en' ? Layout.row : Layout.rowReverse,
                  Layout.justifyContentBetween,
                  Gutters.smallHMargin,
                  Layout.alignItemsCenter,
                  Layout.fill,
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
                    Layout.fill,
                    { color: Colors.black },
                    { marginHorizontal: 10 },
                  ]}
                  numberOfLines={1}
                >
                  {val?.name}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    let arr = productImgs?.filter((img, ind) => ind !== key);
                    setProductImgs(arr);
                  }}
                >
                  <CustomSvgImage
                    source={Images.svgs.DeleteIcon}
                    style={{
                      height: 50,
                      width: 50,
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          })}

          <CustomSimpleButton
            title={true ? t('common:addProductNow') : t('common:saveChanges')}
            parentContainerStyle={[
              // Gutters.smallTMargin,
              Gutters.smallHPadding,
              Gutters.xLittleVPadding,
            ]}
            onPress={() => navigation.navigate('ProductDetailScreen')}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AddProductScreen;

const styles = StyleSheet.create({
  uploadBtn: {
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 10,
    height: sHight(20),
    marginTop: 10,
    borderStyle: 'dashed',
  },
});
