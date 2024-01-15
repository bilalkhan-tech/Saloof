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
import { sHight } from '@/utils/ScreenDimentions';

const NewSupportTicketScreen = ({ navigation }) => {
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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <View style={[Gutters.smallVMargin, Gutters.smallHMargin]}>
          <CustomHeader
            back
            backPress={backPressFunc}
            headerTitle={t('common:newTicket')}
          />
        </View>
        <View
          style={[
            Gutters.smallHMargin,
            Layout.justifyContentBetween,
            { flex: 1 },
          ]}
        >
          <View>
            <View
              style={[
                i18next.language == 'en' ? Layout.row : Layout.rowReverse,
                Layout.justifyContentEnd,
                Layout.alignItemsCenter,
              ]}
            >
              <CustomSimpleButton
                title={t('common:cancel')}
                parentContainerStyle={{ width: '30%' }}
                containerStyle={[
                  Layout.justifyContentCenter,
                  {
                    backgroundColor: Colors.white,
                    borderColor: Colors.purple,
                    borderWidth: 1,
                    padding: 0,
                    // width: '30%',
                    height: 40,
                    borderRadius: 4,
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
            <View style={[Gutters.littleTMargin]}>
              <CustomTextInput placeholder={t('common:title') + '*'} />
              {/* <CustomTextInput placeholder={t('common:topic') + '*'} /> */}
              <CustomTextInput
                placeholder={t('common:description')}
                isMultiline={true}
                containerStyles={{
                  height: 130,
                }}
                inputStyle={{
                  marginTop: 0,
                }}
              />
            </View>
          </View>
          <View style={[Gutters.smallHMargin]}>
            <CustomSimpleButton
              title={t('common:createTicketNow')}
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
        </View>

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

export default NewSupportTicketScreen;

const styles = StyleSheet.create({});
