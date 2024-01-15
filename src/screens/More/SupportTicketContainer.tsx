import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { Colors, FontSize } from '@/theme/Variables';
import fonts from '@/theme/assets/fonts';
import CustomSvgImage from '@/components/CustomSvgImage';

import { useTheme } from '@/hooks';
import CustomButton from '@/components/CustomButton';
import CustomSimpleButton from '@/components/CustomSimpleButton';
import i18next from 'i18next';
import { CustomBottomSheet } from '@/components';
import CustomTextInput from '@/components/CustomTextInput';
import CustomDropDown from '@/components/CustomDropDown';
import CustomHeader from '@/components/CustomHeader';

const SupportTicketContainer = ({ navigation }) => {
  const { Common, Fonts, Gutters, Layout, Images } = useTheme();

  const [showBottomSheetFilters, setshowBottomSheetFilters] =
    useState<boolean>(false);
  const [selectedDropdown, setSelectedDropdown] = useState({
    label: '',
    value: '',
  });
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
  ];
  const [showBottomSheetOrder, setshowBottomSheetOrder] =
    useState<boolean>(false);
  const [newSupportTickectsData, setNewSupportTickectsData] = useState([
    {
      value: 'Ticket title goes here',
      id: '123456',
      count: 4000,
      sar: '45.00',
      by: 'by Apple',
      des: 'Ticket description goes here',
      isNew: true,
    },
    {
      value: 'Ticket title goes here',
      id: '123456',
      count: 1000,
      sar: '45.00',
      by: 'by Apple',
      des: 'Ticket description goes here',
      isNew: false,
    },
    {
      value: 'Ticket title goes here',
      id: '123456',
      count: 300,
      sar: '45.00',
      by: 'by Apple',
      des: 'Ticket description goes here',
      isNew: true,
    },
    {
      value: 'Ticket title goes here',
      id: '123456',
      count: 4000,
      sar: '45.00',
      by: 'by Apple',
      des: 'Ticket description goes here',
      isNew: false,
    },
    {
      value: 'Ticket title goes here',
      id: '123456',
      count: 5000,
      sar: '45.00',
      by: 'by Apple',
      des: 'Ticket description goes here',
      isNew: true,
    },
  ]);

  const [activeButton, setActiveButton] = useState('button1');
  const handleButtonPress = (button: any) => {
    console.log('Button Value:', button);
    setActiveButton(button);
  };
  const backPressFunc = () => {
    navigation.pop();
  };

  const renderBottomSheetOrderOption = () => {
    return (
      <View style={{}}>
        <CustomSimpleButton
          title={t('common:markAsReady')}
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
          onPress={() => setshowBottomSheetOrder(false)}
        />
        <CustomSimpleButton
          title={t('common:downloadInvoice')}
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
          onPress={() => setshowBottomSheetOrder(false)}
        />
      </View>
    );
  };
  const renderBottomSheetFilter = () => {
    return (
      <View style={{}}>
        <View style={[Gutters.smallTMargin]}>
          <CustomTextInput placeholder={t('common:ticketD')} />
        </View>
        {/* <CustomDropDown
          style={[Gutters.smallBMargin]}
          placeholder={t('common:topic')}
          disable={false}
          value={selectedDropdown}
          setValue={setSelectedDropdown}
          data={data}
        /> */}
        <CustomDropDown
          style={[Gutters.smallBMargin]}
          placeholder={t('common:status')}
          disable={false}
          value={selectedDropdown}
          setValue={setSelectedDropdown}
          data={data}
          position="top"
        />
        {/* <CustomTextInput placeholder={t('common:from')} />
        <CustomTextInput placeholder={t('common:to')} /> */}

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
          onPress={() => setshowBottomSheetFilters(false)}
        />
      </View>
    );
  };
  const renderSupportTickects = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => { }}
        style={[
          Gutters.smallBMargin,
          Gutters.smallHPadding,
          Gutters.smallHMargin,
          Gutters.xLittleVPadding,
          {
            backgroundColor: item.isNew
              ? Colors.purpleF3E4FF
              : Colors.GrayF9F8F8,
            borderRadius: 10,
          },
        ]}
      >
        <View
          style={[
            i18next.language == 'en' ? Layout.row : Layout.rowReverse,
            Layout.justifyContentBetween,
            Layout.alignItemsCenter,
          ]}
        >
          <Text
            style={[
              Fonts.fontBold16,
              {
                color: Colors.Purple8F53C0,
              },
            ]}
          >
            {`${index + 1}. `}
            {item.value}
          </Text>
        </View>
        <View
          style={[
            i18next.language == 'en' ? Layout.row : Layout.rowReverse,
            Layout.justifyContentBetween,
          ]}
        >
          <View>
            <Text
              style={[
                Fonts.fontReg12,
                {
                  color: Colors.black,
                },
              ]}
            >
              {t('common:orders')}
            </Text>
            <Text
              style={[
                Fonts.fontReg12,
                {
                  color: Colors.gray2,
                },
              ]}
            >
              {item.id}
            </Text>
            <Text
              style={[
                Fonts.fontReg12,
                {
                  color: Colors.gray2,
                },
              ]}
            >
              {item.id}
            </Text>
          </View>
          <CustomSimpleButton
            title={item.isNew ? t('common:new') : t('common:processing')}
            parentContainerStyle={{ width: item.isNew ? '25%' : '32%' }}
            containerStyle={[
              Layout.justifyContentCenter,
              {
                borderColor: Colors.purple,
                borderWidth: 1,
                padding: 0,
                // width: '30%',
                height: 30,
                borderRadius: 30,
                marginTop: 0,
              },
            ]}
            titleStyle={[
              Fonts.fontBold12,
              {
                marginVertical: 0,
              },
            ]}
            onPress={() => { }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <View style={[Gutters.smallVMargin, Gutters.smallHMargin]}>
          <CustomHeader
            back
            backPress={backPressFunc}
            headerTitle={t('common:supportTickets')}
          />
        </View>
        <View
          style={[
            i18next.language == 'en' ? Layout.row : Layout.rowReverse,
            Layout.justifyContentEnd,
            Layout.alignItemsCenter,
            Gutters.smallHMargin,
          ]}
        >
          <CustomSimpleButton
            title={t('common:filters')}
            parentContainerStyle={{ width: '30%' }}
            containerStyle={[
              Layout.justifyContentCenter,
              {
                backgroundColor: Colors.white,
                borderColor: Colors.purple,
                borderWidth: 1,
                borderRadius: 4,
                padding: 0,
                // width: '30%',
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
              setshowBottomSheetFilters(true);
            }}
          />
        </View>
        <FlatList
          style={[Gutters.smallTMargin]}
          data={newSupportTickectsData}
          renderItem={renderSupportTickects}
        />
        <View style={[Gutters.smallHMargin]}>
          <CustomSimpleButton
            title={t('common:newTicket')}
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
            onPress={() => navigation.navigate('NewSupportTicketScreen')}
          />
        </View>
        {showBottomSheetFilters && (
          <CustomBottomSheet
            title={t('common:filters')}
            setShowBottomSheet={setshowBottomSheetFilters}
            showBottomSheet={showBottomSheetFilters}
          >
            {renderBottomSheetFilter()}
          </CustomBottomSheet>
        )}
        {showBottomSheetOrder && (
          <CustomBottomSheet
            title={t('common:orderOptions')}
            setShowBottomSheet={setshowBottomSheetOrder}
            showBottomSheet={showBottomSheetOrder}
          >
            {renderBottomSheetOrderOption()}
          </CustomBottomSheet>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SupportTicketContainer;

const styles = StyleSheet.create({});
