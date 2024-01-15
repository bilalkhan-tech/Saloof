import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { sWidth } from '@/utils/ScreenDimentions';
import i18next from 'i18next';

interface Props {
  value?: string;
  handleSearch?: CallableFunction;
  placeholder: string;
  backgroundColor?: string;
}

const CustomSearch = ({
  value,
  backgroundColor,
  placeholder,
  handleSearch,
}: Props) => {
  const { Gutters, Fonts, Layout, Images, Colors } = useTheme();
  return (
    <View
      style={[
        Gutters.smallBMargin,
        i18next.language == 'en' ? Layout.row : Layout.rowReverse,
        Layout.alignItemsCenter,
        {
          backgroundColor: backgroundColor ? backgroundColor : Colors.lightGray,
          borderRadius: 16,
          paddingHorizontal: 12,
          paddingVertical: Platform.OS == 'ios' ? 12 : 2,
        },
      ]}
    >
      <Images.svgs.Search width={sWidth(7)} height={sWidth(7)} />
      <TextInput
        style={[
          Layout.fill,
          Fonts.fontReg18,
          Gutters.smallLMargin,
          i18next.language == 'en'
            ? Gutters.smallLMargin
            : Gutters.smallRMargin,
          ,
          { color: Colors.black },
        ]}
        placeholder={placeholder}
        // placeholder={t('common:search')}
        placeholderTextColor={Colors.gray2}
        value={value}
        onChangeText={handleSearch}
      />
    </View>
  );
};

export default CustomSearch;

const styles = StyleSheet.create({});
