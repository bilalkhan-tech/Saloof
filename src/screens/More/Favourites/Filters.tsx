import { useTheme } from '@/hooks';
import { sWidth } from '@/utils/ScreenDimentions';
import i18next from 'i18next';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface IFilters {
  setOpenBottomSheet: CallableFunction;
}

const Filters = ({ setOpenBottomSheet }: IFilters) => {
  const { Layout, Fonts, Gutters, Colors } = useTheme();
  return (
    <View
      style={[
        i18next.language == 'en' ? Layout.row : Layout.rowReverse,
        Layout.alignItemsCenter,
        Layout.selfCenter,
        Layout.justifyContentBetween,
        { width: sWidth(87) },
      ]}
    >
      <Text style={[Fonts.fontMed16, { color: Colors.purple }]}>
        246 {t('common:fav:products')}
      </Text>
      <TouchableOpacity
        onPress={() => setOpenBottomSheet(true)}
        activeOpacity={0.8}
        style={[
          {
            borderWidth: 1,
            paddingHorizontal: '5%',
            paddingVertical: '2%',
            borderColor: Colors.purple,
            borderRadius: 4,
          },
        ]}
      >
        <Text style={[Fonts.fontReg14, { color: Colors.purple }]}>
          {t('common:shipping_detail:filter')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Filters;
