import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CustomHeader from '@/components/CustomHeader';
import Background from '@/components/Background';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import CustomButton from '@/components/CustomButton';
import CustomTextInput from '@/components/CustomTextInput';
import CustomSimpleButton from '@/components/CustomSimpleButton';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';

const PaymanetDetailsContainer = ({ navigation, route }: any) => {
  const { user_type } = useSelector((state: any) => state.auth);
  const user_Type = user_type;

  const [activeButton, setActiveButton] = useState(
    user_Type === 'buyer' ? 'button2' : 'button1',
  );

  const [bankDetail, setBankDetail] = useState({
    bankName: '',
    bankAccountTitleName: '',
    accountNumber: '',
  });
  const [cardDetail, setCardDetail] = useState({
    nameOnCard: '',
    CardNumber: '',
    expiryDate: '',
    cvc: '',
  });

  const { t } = useTranslation(['common']);
  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme();

  const handleButtonPress = (button: any) => {
    console.log('Button Value:', button);
    setActiveButton(button);
  };

  const renderData = () => {
    if (activeButton === 'button1') {
      return (
        <View style={[Layout.fill]}>
          <CustomTextInput
            placeholder={t('common:bankname')}
            value={bankDetail.bankName}
            onChangeText={(t: any) =>
              setBankDetail({ ...bankDetail, bankName: t })
            }
            secureTextEntry={false}
            placeholderTextColor={Colors.gray1}
          />
          <CustomTextInput
            placeholder={t('common:bankaccounttitlename')}
            value={bankDetail.bankAccountTitleName}
            onChangeText={(t: any) =>
              setBankDetail({ ...bankDetail, bankAccountTitleName: t })
            }
            secureTextEntry={false}
            placeholderTextColor={Colors.gray1}
          />
          <CustomTextInput
            placeholder={t('common:accountnumber')}
            value={bankDetail.accountNumber}
            onChangeText={(t: any) =>
              setBankDetail({ ...bankDetail, accountNumber: t })
            }
            secureTextEntry={false}
            placeholderTextColor={Colors.gray1}
          />
        </View>
      );
    } else if (activeButton === 'button2') {
      return (
        <View style={[Layout.fill]}>
          <CustomTextInput
            placeholder={t('common:nameoncard')}
            value={cardDetail.nameOnCard}
            onChangeText={(t: any) =>
              setCardDetail({ ...cardDetail, nameOnCard: t })
            }
            secureTextEntry={false}
            placeholderTextColor={Colors.gray1}
          />
          <CustomTextInput
            placeholder={t('common:cardnumber')}
            value={cardDetail.CardNumber}
            onChangeText={(t: any) =>
              setCardDetail({ ...cardDetail, CardNumber: t })
            }
            secureTextEntry={false}
            placeholderTextColor={Colors.gray1}
          />
          <CustomTextInput
            placeholder={t('common:expirydate')}
            value={cardDetail.expiryDate}
            onChangeText={(t: any) =>
              setCardDetail({ ...cardDetail, expiryDate: t })
            }
            secureTextEntry={false}
            placeholderTextColor={Colors.gray1}
          />
          <CustomTextInput
            placeholder={t('common:cvc')}
            value={cardDetail.cvc}
            onChangeText={(t: any) => setCardDetail({ ...cardDetail, cvc: t })}
            secureTextEntry={false}
            placeholderTextColor={Colors.gray1}
          />
        </View>
      );
    }
  };

  const saveInfoFunc = () => {
    if (activeButton === 'button1') {
      console.log('bank detal ::::: ', bankDetail);
    } else {
      console.log('bank detal ::::: ', cardDetail);
    }
    // Add your logic for button press action here
  };

  return (
    <Background>
      <View style={[Gutters.smallVMargin]}>
        <CustomHeader
          back
          backPress={() => navigation.goBack()}
          headerTitle={route.params.headerTitle}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View
          style={[
            Gutters.littleBMargin,
            {
              borderRadius: 8,
              width: '100%',
              backgroundColor: Colors.inputGray,
              padding: 7,
            },
          ]}
        >
          <CustomButton
            data={
              user_Type === 'buyer'
                ? [{ title: t('common:carddetails'), value: 'button2' }]
                : [
                    { title: t('common:bankdetails'), value: 'button1' },
                    { title: t('common:carddetails'), value: 'button2' },
                  ]
            }
            activeButton={activeButton}
            onButtonPress={handleButtonPress}
          />
        </View>

        <View style={[Layout.fill, Layout.justifyContentBetween]}>
          {renderData()}
          <View style={[Gutters.smallVMargin]}>
            <CustomSimpleButton
              title={t('common:save')}
              onPress={saveInfoFunc}
            />
          </View>
        </View>
      </ScrollView>
    </Background>
  );
};

// PaymanetDetailsContainer.navigationOptions = {
//   tabBarVisible: false,
// };

export default PaymanetDetailsContainer;
