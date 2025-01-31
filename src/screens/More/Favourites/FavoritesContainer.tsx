import { CustomBottomSheet, CustomPicker } from '@/components';
import CustomHeader from '@/components/CustomHeader';
import CustomSimpleButton from '@/components/CustomSimpleButton';
import CustomTextInput from '@/components/CustomTextInput';
import { useTheme } from '@/hooks';
import { shipping_detail } from '@/utils/DummyData';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import i18next from 'i18next';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import FavouritesList from './FavouritesList';
import Filters from './Filters';
import CustomDropDown from '@/components/CustomDropDown';
import CustomSearch from '@/components/CustomSearch';

interface IFavouritesContainer {
  navigation: any;
}
const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
];
const FavouritesContainer = ({ navigation }: IFavouritesContainer) => {
  const { Colors, Gutters, Images, Layout, Fonts } = useTheme();
  const [showBottomSheet, setshowBottomSheet] = useState<boolean>(false);
  const [search, setSearch] = useState('');
  const [selectedDropdown, setSelectedDropdown] = useState({
    label: '',
    value: '',
  });
  const [filters, setFilters] = useState<{
    product: string;
    manufecturer: string;
    catagory: string;
    sub_catagory: string;
  }>({
    product: '',
    manufecturer: '',
    catagory: '',
    sub_catagory: '',
  });

  return (
    <View
      style={[
        Layout.fill,
        Gutters.smallPadding,
        { backgroundColor: Colors.white },
      ]}
    >
      <CustomHeader
        headerTitle={t('common:fav:title')}
        back={true}
        backPress={() => navigation.goBack()}
      />

      <CustomSearch
        placeholder={t('common:fav:search_products')}
        value={search}
        //handleSearch={handleSearch}
      />
      {/* <View
        style={[
          Gutters.smallBMargin,
          i18next.language == 'en' ? Layout.row : Layout.rowReverse,
          Layout.alignItemsCenter,
          {
            backgroundColor: Colors.lightGray,
            borderRadius: 16,
            padding: 12,
          },
        ]}
      >
        <Images.svgs.Search width={sWidth(7)} height={sWidth(7)} />
        <TextInput
          style={[
            Layout.fill,
            Fonts.fontReg14,
            Gutters.smallLMargin,
            i18next.language == 'en'
              ? Gutters.smallLMargin
              : Gutters.smallRMargin,
            ,
            { color: Colors.black },
          ]}
          placeholder={t('common:fav:search_products')}
          placeholderTextColor={Colors.gray2}
          // value={search}
          //onChangeText={handleSearch}
        />
      </View> */}
      <Filters setOpenBottomSheet={setshowBottomSheet} />
      <FavouritesList />

      <CustomBottomSheet
        title={t('common:shipping_detail:filter')}
        showBottomSheet={showBottomSheet}
        setShowBottomSheet={setshowBottomSheet}
      >
        <View style={[Gutters.smallVMargin, { height: sHight(40) }]}>
          <CustomTextInput
            placeholder={t('common:fav:product_name')}
            placeholderTextColor={Colors.Gray9CA3AF}
            value={filters.product}
            onChangeText={t => setFilters({ ...filters, product: t })}
            inputStyle={[]}
          />
          <CustomTextInput
            placeholder={t('common:fav:manufacturer')}
            placeholderTextColor={Colors.Gray9CA3AF}
            value={filters.product}
            onChangeText={t => setFilters({ ...filters, manufecturer: t })}
            inputStyle={[]}
          />

          <CustomDropDown
            style={[Gutters.smallBMargin]}
            placeholder={t('common:category')}
            disable={false}
            value={selectedDropdown}
            setValue={setSelectedDropdown}
            data={data}
          />
          <CustomDropDown
            style={[Gutters.smallBMargin]}
            placeholder={t('common:subCategory')}
            disable={false}
            value={selectedDropdown}
            setValue={setSelectedDropdown}
            data={data}
          />
        </View>
        <View style={[Gutters.smallBMargin]}>
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
                paddingBottom: 0,
                color: Colors.white,
              },
            ]}
            onPress={() => setshowBottomSheet(false)}
          />
        </View>
      </CustomBottomSheet>
    </View>
  );
};

export default FavouritesContainer;
