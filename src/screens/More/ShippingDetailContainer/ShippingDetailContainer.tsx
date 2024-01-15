import { CustomBottomSheet, CustomPicker } from '@/components';

import { useTheme } from '@/hooks';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import i18next from 'i18next';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import RenderItems from './RenderItems';
import CustomSimpleButton from '@/components/CustomSimpleButton';
import CustomHeader from '@/components/CustomHeader';
import { shipping_detail } from '@/utils/DummyData';
import CustomDropDown from '@/components/CustomDropDown';
interface IBottomSheetBody {
  setBottomSheet: CallableFunction;
}

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
];
const ShippingDetailContainer = ({ navigation }: any) => {
  const { Layout, Gutters, Fonts, Colors } = useTheme();
  const [showBottomSheet, setshowBottomSheet] = useState<boolean>(false);
  const [selectedDropdown, setSelectedDropdown] = useState({
    label: '',
    value: '',
  });
  const BottomSheetBody = ({ setBottomSheet }: IBottomSheetBody) => {
    const { Layout, Images, Fonts, Gutters, Colors } = useTheme();
    return (
      <View
        style={[
          Layout.fullWidth,
          Gutters.smallVPadding,
          Layout.justifyContentBetween,
          {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            flexDirection: 'column',
            backgroundColor: Colors.white,
          },
        ]}
      >
        <View>
          <View style={[Layout.alignItemsCenter, Gutters.smallTMargin]}>
            <CustomPicker />
          </View>
        </View>
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
        back={true}
        backPress={() => navigation.goBack()}
        headerTitle={t('common:shippingDetails')}
      />
      <View
        style={[
          Layout.fullWidth,
          i18next.language !== 'en' ? Layout.row : Layout.rowReverse,
          Layout.alignItemsEnd,
          {
            padding: 13,
          },
        ]}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setshowBottomSheet(true)}
          style={[
            Layout.justifyContentCenter,
            Layout.alignItemsCenter,

            {
              width: sWidth(20),
              borderWidth: 1,
              borderRadius: 4,
              borderColor: Colors.purple,
              height: sHight(4.4),
            },
          ]}
        >
          <Text style={[Fonts.fontReg14, { color: Colors.purple }]}>
            {t('common:shipping_detail:filter')}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[{ flex: 1 }]}>
        <FlatList
          data={shipping_detail}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <RenderItems item={item} index={index} />
          )}
        />
      </View>
      <View
        style={[
          Gutters.smallHMargin,
          Layout.alignItemsEnd,
          Layout.justifyContentEnd,
          { flex: 0.15 },
        ]}
      >
        <CustomSimpleButton
          title={t('common:shipping_detail:add_new')}
          containerStyle={[
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
          onPress={() => navigation.navigate('AddShippingDetail')}
        />
      </View>

      <CustomBottomSheet
        title={t('common:shipping_detail:filter')}
        setShowBottomSheet={setshowBottomSheet}
        showBottomSheet={showBottomSheet}
      >
        <View style={[{ height: sHight(30) }]}>
          <CustomDropDown
            style={[Gutters.smallBMargin]}
            placeholder={t('common:shipping_detail:select_country')}
            disable={false}
            value={selectedDropdown}
            setValue={setSelectedDropdown}
            data={data}
          />
          <View
            style={[
              Layout.fill,
              Layout.justifyContentEnd,
              Layout.alignItemsEnd,
            ]}
          >
            <CustomSimpleButton
              title={t('common:shipping_detail:apply')}
              containerStyle={[
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
              onPress={() => { }}
            />
          </View>
        </View>
      </CustomBottomSheet>
    </View>
  );
};

export default ShippingDetailContainer;
