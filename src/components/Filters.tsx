import { useTheme } from '@/hooks';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import i18next from 'i18next';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface IFilters {
  enteries?: string;
  buttonData: Array<Object>;
  sortPress?: CallableFunction;
  filterPress?: CallableFunction;
}

const Filters = ({
  enteries = '12',

  filterPress,
  buttonData,
}: IFilters) => {
  const { Layout, Gutters, Colors, Fonts } = useTheme();
  return (
    <View
      style={[
        i18next.language === 'en' ? Layout.row : Layout.rowReverse,
        Layout.fullWidth,
        Layout.alignItemsCenter,
        Layout.overflow,
        Layout.justifyContentBetween,
        Gutters.tinyHPadding,
        Gutters.smallVMargin,
      ]}
    >
      <Text style={[Fonts.fontMed14, { color: Colors.purple }]}>
        {enteries} {t('common:payment_invoices:entries')}
      </Text>
      <View
        style={[
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
          i18next.language === 'en' ? Layout.row : Layout.rowReverse,
        ]}
      >
        {buttonData &&
          buttonData?.map((obj, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={filterPress}
                key={index}
                style={[
                  Layout.center,
                  {
                    borderWidth: 1,
                    width: sWidth(18),
                    height: sHight(4),
                    borderRadius: 5,
                    marginLeft: 10,
                    borderColor: Colors.purple,
                  },
                ]}
              >
                <Text style={[Fonts.fontMed14, { color: Colors.purple }]}>
                  {obj?.item}
                </Text>
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
};

export default Filters;
