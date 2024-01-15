import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { Colors, FontSize, allUserTypes } from '@/theme/Variables';
import fonts from '@/theme/assets/fonts';
import CustomSvgImage from '@/components/CustomSvgImage';

import { useTheme } from '@/hooks';
import CustomButton from '@/components/CustomButton';
import CustomSimpleButton from '@/components/CustomSimpleButton';
import i18next from 'i18next';
import { CustomBottomSheet } from '@/components';
import CustomTextInput from '@/components/CustomTextInput';
import CustomDropDown from '@/components/CustomDropDown';
import TabsHeading from '@/components/TabsHeading';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import { useSelector } from 'react-redux';
import moment from 'moment';

const OrdersMainScreen = ({ navigation }) => {
  const { Common, Fonts, Gutters, Layout, Images } = useTheme();
  const { user_type }: any = useSelector(state => state.auth);

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
  const [newOrdersData, setNewOrdersData] = useState([
    { value: 987511, count: 3, sar: '45.00', isNew: true, date: new Date(), type: 1 },
    { value: 987511, count: 1, sar: '45.00', isNew: false, date: new Date(), type: 2 },
    { value: 987511, count: 0, sar: '45.00', isNew: false, date: new Date(), type: 3 },
    { value: 987511, count: 3, sar: '45.00', isNew: false, date: new Date(), type: 2 },
    { value: 987511, count: 3, sar: '45.00', isNew: false, date: new Date(), type: 1 },
  ]);

  const [activeButton, setActiveButton] = useState(user_type === allUserTypes.Supplier ? t('common:pending') : t('common:new'));
  const handleButtonPress = (button: any) => {
    console.log('Button Value:', button);
    setActiveButton(button);
  };

  const ItemOrderOPtions = ({ title, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={[Fonts.fontReg14, { color: Colors.black }]}>{title}</Text>
      </TouchableOpacity>
    );
  };
  const renderBottomSheetOrderOption = () => {
    return (
      <View style={{}}>
        <ItemOrderOPtions
          title={t('common:readyToShip')}
          onPress={() => setshowBottomSheetOrder(false)}
        />
        <View
          style={[
            Gutters.smallVMargin,
            {
              height: 1,
              width: sWidth(100),
              backgroundColor: Colors.GrayE2E2E2,
            },
          ]}
        ></View>
        <ItemOrderOPtions
          title={t('common:downloadInvoice')}
          onPress={() => setshowBottomSheetOrder(false)}
        />
      </View>
    );
  };
  const renderBottomSheetFilter = () => {
    return (
      <View style={{}}>
        <View style={[Gutters.smallTMargin]}>
          <CustomTextInput placeholder={t('common:searchByOrderID')} />
        </View>
        {/* <CustomDropDown
          style={[Gutters.smallBMargin]}
          placeholder={t('common:orderStatus')}
          disable={false}
          value={selectedDropdown}
          setValue={setSelectedDropdown}
          data={data}
        /> */}
        {/* <CustomDropDown
          style={[Gutters.smallBMargin]}
          placeholder={t('common:amountStatus')}
          disable={false}
          value={selectedDropdown}
          setValue={setSelectedDropdown}
          data={data}
        /> */}
        <CustomTextInput placeholder={t('common:from')} />

        <CustomTextInput placeholder={t('common:to')} />

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
  const RenderItemBuyerActions = ({ item }) => {

    return (
      <TouchableOpacity
        onPress={() => {

          console.log('>>> New')

        }}
      >
        <Text style={[
          Fonts.fontBold12,
          { color: item.isNew ? Colors.white : Colors.Gray9CA3AF, textDecorationLine: 'underline' }]} >
          {item.type === 1 ? t("common:downloadInvoice") : t("common:createTicket")}
        </Text>

      </TouchableOpacity>
    )

  }
  const renderNewOrders = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('OrdersDetailsScreen', { tab: activeButton })}
        style={[
          Gutters.littleTMargin,
          Gutters.smallHPadding,
          Gutters.smallHMargin,
          Gutters.xLittleVPadding,
          {
            backgroundColor: item.isNew
              ? Colors.Purple8F53C0
              : Colors.GrayF9F8F8,
            borderRadius: 10,
          },
        ]}
      >
        {/* {
          user_type === allUserTypes.Supplier &&
          <TouchableOpacity
            onPress={() => setshowBottomSheetOrder(true)}
            style={[Layout.alignItemsEnd]}
          >
            <CustomSvgImage
              source={Images.svgs.MenuButtonsHorizontal}
              style={{
                width: 22,
                height: 22,
                color: item.isNew ? Colors.white : Colors.Gray696969,
              }}
            />
          </TouchableOpacity>
        } */}
        <View
          style={[
            i18next.language == 'en' ? Layout.row : Layout.rowReverse,
            Layout.justifyContentBetween,
            Layout.alignItemsCenter,
          ]}
        >
          <View>
            <Text
              style={[
                Fonts.fontMed16,
                {
                  color: item.isNew ? Colors.white : Colors.Purple8F53C0,
                },
              ]}
            >
              {item.value}
            </Text>
            <Text
              style={[
                Fonts.fontReg10,
                {
                  color: item.isNew ? Colors.white : Colors.Gray9CA3AF,
                },
              ]}
            >
              {item.count}{' '}
              {item.count === 1 ? t('common:product') : t('common:products')}
            </Text>
            <Text
              style={[
                Fonts.fontReg10,
                {
                  color: item.isNew ? Colors.white : Colors.Gray9CA3AF,
                },
              ]}
            >
              {`${t('common:date')}: ${moment(item.date).format('DD-MM-YYYY')}`}
            </Text>


          </View>
          <View style={{}}>
            <Text
              style={[
                Fonts.fontMed16,
                {
                  color: item.isNew ? Colors.white : Colors.Purple8F53C0,
                },
              ]}
            >
              {item.sar} {t('common:SAR')}
            </Text>
            {
              user_type === allUserTypes.Supplier &&
              <Text
                style={[
                  Fonts.fontMed10,
                  Layout.textAlignRight,
                  {
                    color: item.isNew ? Colors.white : Colors.Gray9CA3AF,
                  },
                ]}
              >
                {t('common:transferred')}
              </Text>
            }
            {
              user_type === allUserTypes.Buyer &&
              <RenderItemBuyerActions
                item={item}

              />
            }
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <TabsHeading title={t('common:orders')} />

        <View
          style={[
            Gutters.littleBMargin,
            Gutters.smallHMargin,
            {
              borderRadius: 8,
              backgroundColor: Colors.inputGray,
              padding: 7,
            },
          ]}
        >
          <CustomButton
            data={
              user_type === allUserTypes.Supplier ?
                [
                  { title: t('common:pending'), value: t('common:pending') },
                  { title: t('common:readyToShip'), value: t('common:readyToShip') },
                  { title: t('common:shipped'), value: t('common:shipped') },
                  { title: t('common:delivered'), value: t('common:delivered') },
                ]
                :
                [
                  { title: t('common:new'), value: t('common:new') },
                  { title: t('common:inTransit'), value: t('common:inTransit') },
                  { title: t('common:delivered'), value: t('common:delivered') },
                ]

            }
            style={user_type === allUserTypes.Supplier ? { height: sHight(6), } : {}}
            activeButton={activeButton}
            onButtonPress={handleButtonPress}
          />
        </View>
        <FlatList data={newOrdersData} renderItem={renderNewOrders} />
        <CustomSimpleButton
          title={`${false ? t('common:filter') : t('common:filters')} (${'3'})`}
          containerStyle={[
            {
              backgroundColor: Colors.white,
              borderColor: Colors.purple,
              borderWidth: 1,
              borderRadius: 4,
              width: '35%',
              height: 50,
            },
          ]}
          onPress={() => {
            setshowBottomSheetFilters(true);
          }}
          titleStyle={[
            Fonts.fontReg14,
            {
              color: Colors.purple,
              marginVertical: 0,
            },
          ]}
        />
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

export default OrdersMainScreen;

const styles = StyleSheet.create({});
