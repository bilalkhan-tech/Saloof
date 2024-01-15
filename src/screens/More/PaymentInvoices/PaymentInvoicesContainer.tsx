import CustomHeader from '@/components/CustomHeader';
import Filters from '@/components/Filters';
import { useTheme } from '@/hooks';
import React, { useState } from 'react';
import { View } from 'react-native';
import List from './List';
import RowButtons from './RowButtons';
import { CustomBottomSheet } from '@/components';
import CustomTextInput from '@/components/CustomTextInput';
import CustomSimpleButton from '@/components/CustomSimpleButton';
import CustomButton from '@/components/CustomButton';

interface IPaymentInvoicesContainer {
  navigation: any;
}

const PaymentInvoicesContainer = ({
  navigation,
}: IPaymentInvoicesContainer) => {
  const { Layout, Gutters, Colors, Fonts } = useTheme();
  const [activeButton, setActiveButton] = useState('button1');

  const [filtersButtons, setfiltersButtons] = useState<{
    sort: boolean;
    filters: boolean;
  }>({
    sort: false,
    filters: false,
  });
  const [filter, setfilter] = useState<{
    from: string;
    to: string;
  }>({
    from: '',
    to: '',
  });
  const handleButtonPress = (button: any) => {
    console.log('Button Value:', button);
    setActiveButton(button);
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
        headerTitle={t('common:payment_invoices:title')}
        back={false}
        backPress={() => navigation.goBack()}
      />
      <View style={[{ backgroundColor: Colors.gray4, borderRadius: 10 }]}>
        <CustomButton
          data={[
            { title: t('common:payment_invoices:billed'), value: 'button1' },
            {
              title: t('common:payment_invoices:not_billed'),
              value: 'button2',
            },
          ]}
          activeButton={activeButton}
          onButtonPress={handleButtonPress}
        />
      </View>

      {/* <RowButtons /> */}

      <Filters
        buttonData={[
          // {
          //   item: t('common:payment_invoices:sort'),
          // },
          {
            item: t('common:shipping_detail:filter'),
          },
        ]}
        // sortPress={() => setfiltersButtons({ ...filtersButtons, sort: true })}
        filterPress={() =>
          setfiltersButtons({ ...filtersButtons, filters: true })
        }
      />
      <List />
      <CustomBottomSheet
        title={t('common:shipping_detail:filter')}
        showBottomSheet={filtersButtons.filters}
        setShowBottomSheet={() =>
          setfiltersButtons({ ...filtersButtons, filters: false })
        }
      >
        <View
          style={
            [
              // Gutters.smallHPadding
            ]
          }
        >
          <CustomTextInput
            // placeholderTextColor={Colors.gray2}
            placeholder={t('common:from')}
            onChangeText={t => setfilter({ ...filter, from: t })}
          />

          <CustomTextInput
            // placeholderTextColor={Colors.gray2}
            placeholder={t('common:to')}
            onChangeText={t => setfilter({ ...filter, to: t })}
          />
          <CustomSimpleButton title={t('common:shipping_detail:apply')} />
        </View>
      </CustomBottomSheet>
    </View>
  );
};

export default PaymentInvoicesContainer;
