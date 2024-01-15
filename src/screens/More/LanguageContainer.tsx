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
import { ChangeLanguage } from '@/helpers';

const LanguageContainer = ({ navigation, route }: any) => {
  const { t } = useTranslation(['common']);
  const [selectedButton, setSelectedButton] = useState(0);
  const buttonData: any = [
    {
      label: t('common:arabic'),
      value: 'Arabic',
      shortValue: 'ar',
    },
    { label: t('common:english'), value: 'English', shortValue: 'en' },
    { label: t('common:urdu'), value: 'Urdu', shortValue: 'ur' },
  ];

  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme();

  const saveInfoFunc = () => {
    console.log(
      'change language and save  ::::: ',
      buttonData[selectedButton].value,

      // const selectedValue = buttonData[index].value;
      ChangeLanguage(buttonData[selectedButton].shortValue),
      // console.log('Selected Value:', selectedValue);
    );
  };

  const handleButtonPress = (index: any) => {
    setSelectedButton(index);
  };

  return (
    <Background>
      <View style={[{ backgroundColor: Colors.white }]}>
        <CustomHeader
          back
          backPress={() => navigation.goBack()}
          headerTitle={route.params.headerTitle}
        />
      </View>
      <View style={[Layout.center, Gutters.smallTMargin, Gutters.largeBMargin]}>
        <Text style={[Fonts.fontMed20, { color: Colors.purple }]}>
          {t('common:selectdefaultlanguage')}
        </Text>
        <Text style={[Fonts.fontReg14, { color: Colors.gray2 }]}>
          {t('common:appwillrestarttoapplynewlyselectedlanguage.')}
        </Text>
      </View>
      <View style={[Layout.fill, Layout.justifyContentBetween]}>
        <View>
          {buttonData.map((button: any, index: any) => (
            <CustomSimpleButton
              key={index}
              title={button.label}
              containerStyle={[
                Gutters.smallPadding,
                {
                  backgroundColor:
                    index === selectedButton
                      ? Colors.purpleSelectedButton
                      : Colors.purpledeSelectedButton,
                },
              ]}
              titleStyle={[
                Fonts.fontReg18,
                {
                  color: index === selectedButton ? Colors.white : Colors.black,
                },
              ]}
              onPress={() => handleButtonPress(index)}
            />
          ))}
        </View>
        <View style={[Gutters.smallVMargin]}>
          <CustomSimpleButton
            title={t('common:save&restartapp')}
            onPress={saveInfoFunc}
          />
        </View>
      </View>
    </Background>
  );
};

export default LanguageContainer;
