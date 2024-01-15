import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import CustomHeader from '@/components/CustomHeader';
import Background from '@/components/Background';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import CustomTextInput from '@/components/CustomTextInput';
import { sHight } from '@/utils/ScreenDimentions';
import { Colors } from '@/theme/Variables';
import CustomSimpleButton from '@/components/CustomSimpleButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  ImageSelectFromCamera,
  ImageSelectFromGallery,
} from '@/utils/ImageSelection';
import DocumentPicker, {
  DocumentPickerResponse,
  types,
} from 'react-native-document-picker';
import { CustomBottomSheet } from '@/components';

const ProfileSettingsContainer = ({ navigation, route }: any) => {
  const { user_type } = useSelector((state: any) => state.auth);
  const user_Type = user_type;

  const { t } = useTranslation(['common']);
  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme();
  const [showBottomSheet, setshowBottomSheet] = useState<boolean>(false);
  const [imgSelectSheet, setImgSelectSheet] = useState<boolean>(false);
  const [IDCard, setIDCard] = useState<DocumentPickerResponse[] | null>(null);
  const [registrationDoc, setRegistrationDoc] = useState<
    DocumentPickerResponse[] | null
  >(null);
  const [logo, setLogo] = useState<DocumentPickerResponse[] | null>(null);
  console.log('logo', logo);
  console.log('id', IDCard);
  console.log('reg', registrationDoc);
  const [personalDetailValues, setPersonalDetailValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    idCard: false,
    password: '',
    confirmPassword: '',
  });
  const [storeDetailValues, setStoreDetailValues] = useState({
    storeName: '',
    storeLogo: false,
    commercialRegistration: false,
    city: '',
    areaSector: '',
    address: '',
  });
  const [companyDetailValues, setCompanyDetailValues] = useState({
    companyName: '',
    companyLogo: false,
    commercialRegistration: false,
    city: '',
    areaSector: '',
    address: '',
  });

  const [firstStepStatus, setFirstStepStatus] = useState('notComplete');
  const [userImg, setUserImg] = useState(null);

  // Function to handle profile picture upload
  const handleUploadPicture = (type: string) => {
    // setImgSelectSheet(false);
    console.log('type', type);
    if (type == 'gallery') {
      ImageSelectFromGallery().then(res => {
        setImgSelectSheet(false);
        if (res) {
          setUserImg({
            mime: res.mime,
            name: res.name,
            path: res.path,
          });
        }
      });
    } else {
      ImageSelectFromCamera().then(res => {
        setImgSelectSheet(false);
        if (res) {
          setUserImg({
            mime: res.mime,
            name: res.name,
            path: res.path,
          });
        }
      });
    }
    // Implement your logic for uploading profile picture here
    // You might want to use a library like react-native-image-picker
  };

  // Function to save changes
  const saveChanges = () => {
    // Implement your logic for saving changes here
    if (
      (firstStepStatus === 'notComplete' && user_Type === 'seller') ||
      (firstStepStatus === 'notComplete' && user_Type === 'buyer') ||
      (firstStepStatus === 'notComplete' && user_Type === 'driver')
    ) {
      setFirstStepStatus('complete');
    } else {
      setFirstStepStatus('notComplete');
    }
    // Alert.alert('Save Profile changes');
  };

  const backPressFunc = () => {
    if (
      (firstStepStatus === 'notComplete' && user_Type === 'seller') ||
      (firstStepStatus === 'notComplete' && user_Type === 'buyer') ||
      (firstStepStatus === 'notComplete' && user_Type === 'driver')
    ) {
      navigation.goBack();
    } else {
      setFirstStepStatus('notComplete');
    }
  };

  type docType = 'ID' | 'registration' | 'logo';
  const uploadDocument = async (type: docType) => {
    try {
      const response = await DocumentPicker.pick({
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

  const personalDetailFunc = () => {
    return (
      <View style={[Layout.fill]}>
        <Text
          style={[Fonts.fontReg18, { color: Colors.purple, fontWeight: '700' }]}
        >
          {t('common:personaldetails')}
        </Text>
        <View
          // onPress={() => modalRef.current?.show()}
          style={[
            styles.imgBG,
            { borderWidth: userImg ? 0 : 1 },
            Layout.justifyContentCenter,
            Layout.alignItemsCenter,
          ]}
        >
          {userImg?.path ? (
            <View style={styles.imgBorder}>
              <Image style={styles.img} source={{ uri: userImg?.path }} />
            </View>
          ) : (
            <Images.svgs.avatar />
          )}
          <TouchableOpacity
            onPress={() => setImgSelectSheet(true)}
            style={[Layout.absolute, styles.cameraBG]}
          >
            <Images.svgs.camera />
          </TouchableOpacity>
        </View>

        <View>
          <CustomTextInput
            placeholder={t('common:firstname')}
            value={personalDetailValues.firstName}
            onChangeText={(t: any) =>
              setPersonalDetailValues({ ...personalDetailValues, firstName: t })
            }
            placeholderTextColor={Colors.gray1}
          />
          <CustomTextInput
            placeholder={t('common:lastname')}
            value={personalDetailValues.lastName}
            onChangeText={(t: any) =>
              setPersonalDetailValues({ ...personalDetailValues, lastName: t })
            }
            placeholderTextColor={Colors.gray1}
          />
          <CustomTextInput
            placeholder={t('common:emailaddress')}
            value={personalDetailValues.email}
            onChangeText={(t: any) =>
              setPersonalDetailValues({ ...personalDetailValues, email: t })
            }
            placeholderTextColor={Colors.gray1}
          />
          <CustomTextInput
            placeholder={t('common:phonenumber')}
            value={personalDetailValues.phoneNumber}
            onChangeText={(t: any) =>
              setPersonalDetailValues({
                ...personalDetailValues,
                phoneNumber: t,
              })
            }
            placeholderTextColor={Colors.gray1}
          />

          <CustomSimpleButton
            title={IDCard ? IDCard.name : t('common:idcardPicture')}
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
              Fonts.fontReg14,
              {
                color: IDCard?.name ? Colors.black111819 : Colors.gray1,
                fontWeight: '100',
              },
            ]}
            onPress={() => uploadDocument('ID')}
          />

          <CustomTextInput
            placeholder={t('common:password')}
            value={personalDetailValues.password}
            onChangeText={(t: any) =>
              setPersonalDetailValues({
                ...personalDetailValues,
                password: t,
              })
            }
            secureTextEntry={false}
            placeholderTextColor={Colors.gray1}
            isPasswordSecure={true}
          />
          <CustomTextInput
            placeholder={t('common:confirmpassword')}
            value={personalDetailValues.confirmPassword}
            onChangeText={(t: any) =>
              setPersonalDetailValues({
                ...personalDetailValues,
                confirmPassword: t,
              })
            }
            secureTextEntry={false}
            isPasswordSecure={true}
            placeholderTextColor={Colors.gray1}
          />
        </View>
        {imgSelectSheet && (
          <CustomBottomSheet
            title="Upload ID"
            setShowBottomSheet={setImgSelectSheet}
            showBottomSheet={imgSelectSheet}
          >
            <View
              style={{
                height: sHight(20),
              }}
            >
              <TouchableOpacity
                onPress={() => handleUploadPicture('gallery')}
                style={[
                  Layout.row,
                  // Gutters.xSmallHPadding,
                  Gutters.smallVPadding,
                  {
                    borderBottomWidth: 1,
                    borderColor: Colors.GrayE5E5E5,
                  },
                ]}
              >
                <Images.svgs.GalleryIcon />
                <Text
                  style={[
                    Fonts.fontReg14,
                    Gutters.xLittleHMargin,
                    { color: Colors.black },
                  ]}
                >
                  Choose from Gallery
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleUploadPicture('camera')}
                style={[
                  Layout.row,
                  // Gutters.xSmallHPadding,
                  Gutters.smallVPadding,
                ]}
              >
                <Images.svgs.CameraIcon />
                <Text
                  style={[
                    Fonts.fontReg14,
                    Gutters.xLittleHMargin,
                    { color: Colors.black },
                  ]}
                >
                  Open Camera
                </Text>
              </TouchableOpacity>
            </View>
          </CustomBottomSheet>
        )}
      </View>
    );
  };

  const storeDetailFunc = () => {
    return (
      <View style={[Layout.fill]}>
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
            Fonts.fontReg14,
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
            Fonts.fontReg14,
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
      </View>
    );
  };

  const companyInformationFunc = () => {
    return (
      <View style={[Layout.fill]}>
        <Text
          style={[
            Fonts.fontReg18,
            Gutters.xLittleBMargin,
            { color: Colors.purple, fontWeight: '700' },
          ]}
        >
          {t('common:companyinformation')}
        </Text>
        <CustomTextInput
          placeholder={t('common:companyname')}
          value={companyDetailValues.companyName}
          onChangeText={(t: any) =>
            setCompanyDetailValues({ ...companyDetailValues, companyName: t })
          }
          placeholderTextColor={Colors.gray1}
        />

        <CustomSimpleButton
          title={t('common:companylogo')}
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
            Fonts.fontReg14,
            {
              color: Colors.gray1,
              fontWeight: '100',
            },
          ]}
          onPress={() => uploadDocument()}
        />

        <CustomSimpleButton
          title={t('common:commercialregistration')}
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
            Fonts.fontReg14,
            {
              color: Colors.gray1,
              fontWeight: '100',
            },
          ]}
          onPress={() => uploadDocument()}
        />

        <CustomTextInput
          placeholder={t('common:city')}
          value={companyDetailValues.city}
          onChangeText={(t: any) =>
            setCompanyDetailValues({ ...companyDetailValues, city: t })
          }
          placeholderTextColor={Colors.gray1}
        />
        <CustomTextInput
          placeholder={t('common:areasector')}
          value={companyDetailValues.areaSector}
          onChangeText={(t: any) =>
            setCompanyDetailValues({ ...companyDetailValues, areaSector: t })
          }
          placeholderTextColor={Colors.gray1}
        />
        <CustomTextInput
          placeholder={t('common:address')}
          value={companyDetailValues.address}
          onChangeText={(t: any) =>
            setCompanyDetailValues({ ...companyDetailValues, address: t })
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
      </View>
    );
  };

  return (
    <Background>
      <View style={[Gutters.littleVMargin]}>
        <CustomHeader
          back
          backPress={backPressFunc}
          headerTitle={
            route.params.headerTitle === 'Profile Settings' ||
              route.params.headerTitle === 'پروفائل کی ترتیبات' ||
              route.params.headerTitle === 'إعدادات الملف الشخصي'
              ? t('common:profile')
              : route.params.headerTitle
          }
        />
      </View>

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {firstStepStatus === 'notComplete'
          ? personalDetailFunc()
          : user_Type === 'seller'
            ? storeDetailFunc()
            : user_Type === 'buyer'
              ? storeDetailFunc()
              : user_Type === 'driver'
                ? companyInformationFunc()
                : null}

        <CustomSimpleButton
          title={
            (firstStepStatus === 'notComplete' && user_Type === 'seller') ||
              (firstStepStatus === 'notComplete' && user_Type === 'buyer') ||
              (firstStepStatus === 'notComplete' && user_Type === 'driver')
              ? t('common:next')
              : t('common:save')
          }
          containerStyle={[Gutters.smallBMargin, Gutters.extraLargeTMargin]}
          onPress={() => saveChanges()}
        />
      </KeyboardAwareScrollView>
    </Background>
  );
};

// Styles
const styles = StyleSheet.create({
  imgBG: {
    height: sHight(12),
    width: sHight(12),
    backgroundColor: Colors.white,
    // overflow: 'hidden',
    borderRadius: sHight(11),
    borderColor: Colors.purple,
    alignSelf: 'center',
    marginTop: sHight(1),
    marginBottom: sHight(3),
    padding: 8,
    borderWidth: 2,
  },
  img: {
    width: sHight(12),
    height: sHight(12),
    borderRadius: sHight(6),
    resizeMode: 'contain',
  },
  imgBorder: {
    borderColor: Colors.purple,
    borderWidth: 2,
    padding: 8,
    borderRadius: sHight(12),
  },

  cameraBG: {
    backgroundColor: Colors.purple,
    padding: sHight(1),
    borderRadius: 50,
    bottom: -10,
    right: 0,
    zIndex: 1,
  },
});

export default ProfileSettingsContainer;
