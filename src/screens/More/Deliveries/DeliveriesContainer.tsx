import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@/hooks';
import CustomHeader from '@/components/CustomHeader';
import CustomButton from '@/components/CustomButton';
import Filters from '@/components/Filters';
import List from './List';
import { CustomBottomSheet } from '@/components';
import CustomSimpleButton from '@/components/CustomSimpleButton';
import CustomDropDown from '@/components/CustomDropDown';
import CustomTextInput from '@/components/CustomTextInput';

interface IDeliveriesContainer {
  navigation: any;
}
const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
];
const DeliveriesContainer = ({ navigation }: IDeliveriesContainer) => {
  const { Layout, Gutters, Colors, Fonts } = useTheme();
  const [activeButton, setActiveButton] = useState('new');
  const [filterButton, setfilterButton] = useState<{
    filter: boolean;
    sort: boolean;
  }>({
    filter: false,
    sort: false,
  });
  const handleButtonPress = (button: any) => {
    console.log('Button Value:', button);
    setActiveButton(button);
  };
  const [selectedDropdown, setSelectedDropdown] = useState({
    label: '',
    value: '',
  });

  const renderBottomSheetFilter = () => {
    return (
      <View
        style={
          [
            // Gutters.smallHPadding
          ]
        }
      >
        <CustomDropDown
          style={[Gutters.smallBMargin]}
          placeholder={t('common:invoices_deliveries:order_id')}
          disable={false}
          value={selectedDropdown}
          setValue={setSelectedDropdown}
          data={data}
        />

        {/* <CustomTextInput
          placeholderTextColor={Colors.gray2}
          placeholder={t('common:delivery_detail:shipping_city')}
        /> */}

        <CustomTextInput
          // placeholderTextColor={Colors.gray2}
          placeholder={t('common:from')}
        />

        <CustomTextInput
          // placeholderTextColor={Colors.gray2}
          placeholder={t('common:to')}
        />

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
          onPress={() => setfilterButton({ ...filterButton, filter: false })}
        />
      </View>
    );
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
        headerTitle={t('common:invoices_deliveries:title')}
        back={false}
        backPress={() => navigation.goBack()}
      />
      <View
        style={[
          Gutters.tinyPadding,
          { borderRadius: 5, backgroundColor: Colors.gray4 },
        ]}
      >
        <CustomButton
          data={[
            {
              title: t('common:new'),
              value: 'new',
            },
            {
              title: t('common:invoices_deliveries:pending'),
              value: 'pending',
            },
            {
              title: t('common:invoices_deliveries:approved'),
              value: 'approved',
            },
            {
              title: t('common:invoices_deliveries:denied'),
              value: 'denied',
            },
            {
              title: t('common:delivered'),
              value: 'delivered',
            },
          ]}
          activeButton={activeButton}
          onButtonPress={handleButtonPress}
        />
      </View>
      <Filters
        buttonData={[
          {
            item: t('common:shipping_detail:filter'),
          },
        ]}
        filterPress={() => setfilterButton({ ...filterButton, filter: true })}
      />
      <List navigation={navigation} status={activeButton} />
      <CustomBottomSheet
        title={t('common:shipping_detail:filter')}
        showBottomSheet={filterButton.filter}
        setShowBottomSheet={() =>
          setfilterButton({ ...filterButton, filter: false })
        }
      >
        {renderBottomSheetFilter()}
      </CustomBottomSheet>
    </View>
  );
};

export default DeliveriesContainer;
