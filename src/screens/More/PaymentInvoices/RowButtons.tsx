import { useTheme } from '@/hooks';
import { settoggleButtonStatus } from '@/store/PaymentInvoices';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import i18next from 'i18next';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

interface IRowButtons {
  status?: CallableFunction;
}

const RowButtons = ({ status }: IRowButtons) => {
  const { Layout, Gutters, Colors, Fonts } = useTheme();
  const {
    paymentinvoices: { buttonStatus },
  }: any = useSelector(state => state);
  const dispatch = useDispatch();

  const toggleButtons = () => {
    if (buttonStatus === 'billed') {
      dispatch(settoggleButtonStatus('notbilled'));
    } else {
      dispatch(settoggleButtonStatus('billed'));
    }
  };

  return (
    <View
      style={[
        i18next.language === 'en' ? Layout.row : Layout.rowReverse,
        Layout.overflow,
        Layout.alignItemsCenter,
        Gutters.tinyPadding,
        {
          borderRadius: 5,
          height: sHight(5),
          backgroundColor: Colors.lightBackGray,
        },
      ]}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={toggleButtons}
        style={[
          Gutters.smallPadding,
          Layout.center,

          {
            borderRadius: 10,
            padding: 0,
            width: sWidth(18),
            height: sHight(4),
            backgroundColor:
              buttonStatus == 'billed' ? Colors.purple : 'transparent',
          },
        ]}
      >
        <Text
          style={[
            buttonStatus === 'billed' ? Fonts.fontMed16 : Fonts.fontReg14,
            {
              color:
                buttonStatus == 'billed'
                  ? Colors.white
                  : Colors.activeButtonBlack,
            },
          ]}
        >
          {t('common:payment_invoices:billed')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={toggleButtons}
        style={[
          Gutters.smallPadding,
          Layout.center,
          {
            borderRadius: 10,
            padding: 0,
            width: sWidth(22),
            marginLeft: 10,
            height: sHight(4),
            backgroundColor:
              buttonStatus == 'notbilled' ? Colors.purple : 'transparent',
          },
        ]}
      >
        <Text
          style={[
            buttonStatus === 'notbilled' ? Fonts.fontMed16 : Fonts.fontReg14,

            {
              color:
                buttonStatus == 'notbilled'
                  ? Colors.white
                  : Colors.activeButtonBlack,
            },
          ]}
        >
          {t('common:payment_invoices:not_billed')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RowButtons;
