import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@/hooks';
import CustomHeader from '@/components/CustomHeader';
import CustomSimpleButton from '@/components/CustomSimpleButton';
import CustomMap from '../DeliveryDetail/CustomMap';
import { CustomBottomSheet } from '@/components';
import CustomTextInput from '@/components/CustomTextInput';

import DocumentPicker, {
    DocumentPickerResponse,
    types,
  } from 'react-native-document-picker';
import { useSelector } from 'react-redux';
import { sHight } from '@/utils/ScreenDimentions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type Props = {
  navigation: any;
};

const AddShippingDetail = ({ navigation }: Props) => {
  const { Layout, Images, Fonts, Gutters, Colors } = useTheme();
  const {auth:{user_Type}}:any = useSelector(state=>state)
  const [logo, setLogo] = useState<DocumentPickerResponse[] | null>(null);
  const [registrationDoc, setRegistrationDoc] = useState<
    DocumentPickerResponse[] | null
  >(null);
  const [showBottomSheet, setshowBottomSheet] = useState<boolean>(false);
  const [storeDetailValues, setStoreDetailValues] = useState({
    storeName: '',
    storeLogo: false,
    commercialRegistration: false,
    city: '',
    areaSector: '',
    address: '',
  });
  const [IDCard, setIDCard] = useState<DocumentPickerResponse[] | null>(null);

  const uploadDocument = async (type: docType) => {
    try {
      const response = await <DocumentPicker></DocumentPicker>.pick({
        presentationStyle: 'fullScreen',
        type: [types.pdf, types.images],
      });
      let docObj = {
        name: response[0]?.name,
        type: response[0]?.type,
        uri: response[0]?.uri,
      };
      if (type == 'ID') setIDCard(docObj);
      else if (type == 'logo') setLogo(docObj);
      else if (type == 'registration') setRegistrationDoc(docObj);
      //
    } catch (err) {
      console.log('errr', err);
    }
  };

  const getMapValues = (getValuesFromMap: any) => {
    console.log('getValuesFromMap ::::: ', getValuesFromMap);
    setStoreDetailValues({
      ...storeDetailValues,
      city: getValuesFromMap.city,
      areaSector: getValuesFromMap.sectorArea,
      address: getValuesFromMap.address,
    });
  };
  const Openmap = () => {
    setshowBottomSheet(true);
  };
  return (
    <View
      style={[
        Layout.fill,
        Gutters.smallHPadding,
        { backgroundColor: Colors.white },
      ]}
    >
      <CustomHeader
        back={true}
        backPress={() => navigation.goBack()}
        headerTitle={t('common:shipping_detail:title')}
      />

      <KeyboardAwareScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>
        <Text
          style={[
            Fonts.fontReg18,
            Gutters.xLittleBMargin,
            { color: Colors.purple, fontWeight: '700' },
          ]}
        >
          {t('common:storedetails')}
        </Text>
        <CustomTextInput
          placeholder={t('common:storename')}
          value={storeDetailValues.storeName}
          onChangeText={(t: any) =>
            setStoreDetailValues({ ...storeDetailValues, storeName: t })
          }
          placeholderTextColor={Colors.gray1}
        />

        <CustomSimpleButton
          title={logo?.name ? logo?.name : t('common:storelogo')}
          containerStyle={[
            Gutters.xLittleBMargin,
            {
              backgroundColor: Colors.inputGray,
              borderStyle: 'dashed',
              borderWidth: 1,
              borderColor: Colors.purple,
              marginTop: 0,
            },
          ]}
          titleStyle={[
            Fonts.fontReg16,
            {
              color: logo?.name ? Colors.black111819 : Colors.gray1,
              fontWeight: '100',
            },
          ]}
          onPress={() => uploadDocument('logo')}
        />

        <CustomSimpleButton
          title={
            registrationDoc?.name
              ? registrationDoc?.name
              : t('common:commercialregistration')
          }
          containerStyle={[
            Gutters.xLittleBMargin,
            {
              backgroundColor: Colors.inputGray,
              borderStyle: 'dashed',
              borderWidth: 1,
              borderColor: Colors.purple,
              marginTop: 0,
            },
          ]}
          titleStyle={[
            Fonts.fontReg16,
            {
              color: registrationDoc?.name ? Colors.black111819 : Colors.gray1,
              fontWeight: '100',
            },
          ]}
          onPress={() => uploadDocument('registration')}
        />

        <CustomTextInput
          placeholder={t('common:city')}
          value={storeDetailValues.city}
          onChangeText={(t: any) =>
            setStoreDetailValues({ ...storeDetailValues, city: t })
          }
          placeholderTextColor={Colors.gray1}
        />
        <CustomTextInput
          placeholder={t('common:areasector')}
          value={storeDetailValues.areaSector}
          onChangeText={(t: any) =>
            setStoreDetailValues({ ...storeDetailValues, areaSector: t })
          }
          placeholderTextColor={Colors.gray1}
        />
        <CustomTextInput
          placeholder={t('common:address')}
          value={storeDetailValues.address}
          onChangeText={(t: any) =>
            setStoreDetailValues({ ...storeDetailValues, address: t })
          }
          placeholderTextColor={Colors.gray1}
          isMultiline={true}
          containerStyles={{
            height: 130,
          }}
          inputStyle={{
            marginTop: 0,
          }}
        />
        <View style={[Layout.alignItemsEnd]}>
          <TouchableOpacity onPress={Openmap}>
            <Text
              style={[
                Fonts.fontReg16,
                {
                  color: Colors.black,
                  textDecorationLine: 'underline',
                },
              ]}
            >
              Open Map
            </Text>
          </TouchableOpacity>
        </View>

       

        {showBottomSheet && (
          <CustomBottomSheet
            title="Map Location"
            setShowBottomSheet={setshowBottomSheet}
            showBottomSheet={showBottomSheet}
          >
            <View style={[]}>
              <View
                style={[
                  {
                    height: sHight(50),
                  },
                ]}
              >
                <CustomMap
                  setShowBottomSheet={setshowBottomSheet}
                  showBottomSheet={showBottomSheet}
                  getMapValues={getMapValues}
                />
              </View>
            </View>
          </CustomBottomSheet>
        )}
      </KeyboardAwareScrollView>

   
        <CustomSimpleButton
          title={t('common:save')}
          containerStyle={[
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
          onPress={() => navigation.navigate('AddShippingDetail')}
        />
      </View>
   
  );
};

export default AddShippingDetail;

const styles = StyleSheet.create({});
