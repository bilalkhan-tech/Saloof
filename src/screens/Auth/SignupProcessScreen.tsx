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
import React, { useState, useEffect } from 'react';

import CustomHeader from '@/components/CustomHeader';
import Background from '@/components/Background';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import CustomTextInput from '@/components/CustomTextInput';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import { Colors } from '@/theme/Variables';
import CustomSimpleButton from '@/components/CustomSimpleButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CustomBottomSheet } from '@/components';
import BottomSheetBody from '../More/ShippingDetailContainer/BottomSheetBody';
import CustomMap from '@/components/CustomMap';
import CustomRadioButton from '@/components/CustomRadioButton';
import CustomCheckbox from '@/components/CustomCheckbox';
import { useDispatch } from 'react-redux';
import { setToken, setUserType } from '@/store/auth';
import {
  ImageSelectFromCamera,
  ImageSelectFromGallery,
} from '@/utils/ImageSelection';
import DocumentPicker, {
  DocumentPickerResponse,
  types,
} from 'react-native-document-picker';

const SignupProcessScreen = ({ navigation, route }: any) => {
  const user_Type = route.params.selectedUser;
  const { userType } = route?.params;
  console.log('data===>', userType);
  const { t } = useTranslation(['common']);
  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme();
  const dispatch = useDispatch();

  const [showBottomSheet, setshowBottomSheet] = useState<boolean>(false);
  const [imgSelectSheet, setImgSelectSheet] = useState<boolean>(false);
  const [IDCard, setIDCard] = useState<DocumentPickerResponse[] | null>(null);
  const [registrationDoc, setRegistrationDoc] = useState<
    DocumentPickerResponse[] | null
  >(null);
  const [logo, setLogo] = useState<DocumentPickerResponse[] | null>(null);
  const [phoneVerificationSheet, setPhoneVerificationSheet] =
    useState<boolean>(false);
  // console.log('id card=>', IDCard);
  // console.log('registration=>', registrationDoc);
  // console.log('logo=>', logo);

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
  const [paymentDetailValues, setPaymentDetailValues] = useState({
    nameOnCard: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    subscriptionValue: '',
  });
  const [verificationCode, setVerificationCode] = useState('');
  const [signupSteps, setSignupSteps] = useState(0);
  const [userImg, setUserImg] = useState(null);
  const [selectedValue, setSelectedValue] = useState({
    label: 'Free',
    value: '50 Products',
  });

  const options = [
    { label: 'Free', value: '50 Products' },
    { label: 'Intermediate', value: '100 Products' },
    { label: 'Executive', value: '200 Products' },
  ]; // Replace this with your options

  const handleSelect = option => {
    setSelectedValue(option);
  };

  // Function to handle profile picture upload
  const handleUploadPicture = (type: string) => {
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
  };

  // Function to save changes
  const saveChanges = () => {
    // Implement your logic for saving changes here
    if (userType.value === 'seller') {
      if (signupSteps === 0) {
        setSignupSteps(1);
      } else if (signupSteps === 1) {
        setSignupSteps(2);
      } else {
        setPhoneVerificationSheet(true);
        return;
      }
    } else if (userType.value === 'buyer' || userType.value === 'driver') {
      if (signupSteps === 0) {
        setSignupSteps(1);
      } else {
        setPhoneVerificationSheet(true);
        return;
      }
    }
  };

  const backPressFunc = () => {
    if (userType?.value === 'seller') {
      if (signupSteps === 0) {
        navigation.goBack();
      } else if (signupSteps === 1) {
        // navigation.goBack();
        setSignupSteps(0);
      } else if (signupSteps === 2) {
        setSignupSteps(1);
        // navigation.goBack();
      } else {
        return;
      }
    } else if (userType?.value === 'buyer' || userType?.value === 'driver') {
      if (signupSteps === 0) {
        navigation.goBack();
      } else {
        setSignupSteps(0);
        return;
      }
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
            title={IDCard?.name ? IDCard.name : t('common:idcardPicture')}
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

        {user_Type === 'buyer' && (
          <CustomCheckbox onChildAction={handleChildAction} />
        )}

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
            Fonts.fontReg16,
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
            Fonts.fontReg16,
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

        <CustomCheckbox onChildAction={handleChildAction} />

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
      </View>
    );
  };

  const paymentDetailFunc = () => {
    return (
      <View style={[Layout.fill]}>
        <Text
          style={[
            Fonts.fontReg18,
            Gutters.xLittleBMargin,
            { color: Colors.purple, fontWeight: '700' },
          ]}
        >
          {/* {t('common:companyinformation')} */}
          {'Payment Details (Optional)'}
        </Text>
        <CustomTextInput
          placeholder={'Name on Card'}
          value={paymentDetailValues.nameOnCard}
          onChangeText={(t: any) =>
            setPaymentDetailValues({ ...paymentDetailValues, nameOnCard: t })
          }
          placeholderTextColor={Colors.gray1}
        />
        <CustomTextInput
          placeholder={'Card Number'}
          value={paymentDetailValues.cardNumber}
          onChangeText={(t: any) =>
            setPaymentDetailValues({ ...paymentDetailValues, cardNumber: t })
          }
          placeholderTextColor={Colors.gray1}
        />
        <CustomTextInput
          placeholder={'Expiry Date'}
          value={paymentDetailValues.expiryDate}
          onChangeText={(t: any) =>
            setPaymentDetailValues({ ...paymentDetailValues, expiryDate: t })
          }
          placeholderTextColor={Colors.gray1}
        />
        <CustomTextInput
          placeholder={'CVV'}
          value={paymentDetailValues.cvv}
          onChangeText={(t: any) =>
            setPaymentDetailValues({ ...paymentDetailValues, cvv: t })
          }
          placeholderTextColor={Colors.gray1}
        />
        <Text
          style={[
            Fonts.fontReg18,
            Gutters.littleBMargin,
            { color: Colors.purple, fontWeight: '700' },
          ]}
        >
          {/* {t('common:companyinformation')} */}
          {'Subscription (Optional)'}
        </Text>

        <CustomRadioButton
          options={options}
          defaultSelected={selectedValue}
          onSelect={handleSelect}
        />

        <CustomCheckbox onChildAction={handleChildAction} />
      </View>
    );
  };

  const handleChildAction = (result: any) => {
    // This function receives the result from the child component
    console.log('Result received in parent:', result);
    // Use the result as needed in the parent component
  };

  const Openmap = () => {
    setshowBottomSheet(true);
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

  const signupComplteBtn = () => {
    console.log('Signup apis implement');
    setPhoneVerificationSheet(false);
    dispatch(setUserType(userType.value));
    dispatch(setToken('ggidkag99823adlas98fa'));
  };

  const skipPressfunc = () => {
    setPhoneVerificationSheet(true);
  };

  useEffect(() => {
    console.log('user_type ::::: ', userType.value);
  }, []);

  return (
    <Background>
      <View style={[Gutters.littleVMargin]}>
        <CustomHeader
          back
          backPress={backPressFunc}
          // headerTitle={`Sign Up ${user_Type}`}
          // topRight={signupSteps > 1 && user_Type === 'seller' ? true : false}
          headerTitle={`${userType?.title} - Sign Up`}
          topRight={
            signupSteps > 1 && userType.value === 'seller' ? true : false
          }
          skipPress={skipPressfunc}
        />
      </View>

      <KeyboardAwareScrollView
        enableAutomaticScroll
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {userType.value === 'seller'
          ? signupSteps === 0
            ? personalDetailFunc()
            : signupSteps === 1
              ? storeDetailFunc()
              : paymentDetailFunc()
          : null}
        {userType?.value === 'buyer'
          ? signupSteps === 0
            ? personalDetailFunc()
            : storeDetailFunc()
          : null}
        {userType?.value === 'driver'
          ? signupSteps === 0
            ? personalDetailFunc()
            : companyInformationFunc()
          : null}

        <CustomSimpleButton
          title={
            (userType.value === 'seller' ||
              userType.value === 'buyer' ||
              userType.value === 'driver') &&
              signupSteps < 1
              ? t('common:next')
              : signupSteps < 2 && userType.value === 'seller'
                ? t('common:next')
                : (signupSteps === 1 && userType.value === 'buyer') ||
                  userType?.value === 'driver'
                  ? t('common:save')
                  : 'Sign Up Now'
          }
          containerStyle={[Gutters.smallBMargin]}
          onPress={() => saveChanges()}
        />
      </KeyboardAwareScrollView>

      {phoneVerificationSheet && (
        <CustomBottomSheet
          title="Verify your phone"
          setShowBottomSheet={setPhoneVerificationSheet}
          showBottomSheet={phoneVerificationSheet}
        >
          <View
            style={[
              // Gutters.xSmallHPadding,
              {
                height: sHight(35),
              },
            ]}
          >
            <View style={[Gutters.xSmallTMargin]}>
              <Text style={{ color: Colors.black }}>
                Enter the verification code we sent to:
              </Text>
              <Text style={[{ color: Colors.black, fontWeight: 'bold' }]}>
                Mobile Number
              </Text>
            </View>

            <View style={[Gutters.xSmallVMargin]}>
              <CustomTextInput
                placeholder={'Verification code'}
                value={setVerificationCode}
                onChangeText={(t: any) => setVerificationCode(t)}
                placeholderTextColor={Colors.gray1}
              />
              <CustomSimpleButton
                title={'Verify & Complete Sign Up'}
                containerStyle={[Gutters.smallBMargin]}
                onPress={() => signupComplteBtn()}
              />
            </View>
          </View>
        </CustomBottomSheet>
      )}
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
    width: sHight(10),
    height: sHight(10),
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

export default SignupProcessScreen;
