import { StyleSheet, Text, View, ViewBase } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import i18next from 'i18next';
import { sWidth } from '@/utils/ScreenDimentions';

type Props = {
  _id: string;
  category: string;
  subCatagory: string;
  weight: string;
  length: string;
  height: string;
  color: string;
  description: string;
  size: string;
};

const AboutProduct = ({
  _id = 'SFFWER132123',
  color,
  description,
  size,
  height,
  length,
  weight,
  category,
  subCatagory,
}: Props) => {
  const { Layout, Gutters, Images, Colors, Fonts } = useTheme();
  return (
    <View
      style={[
        Gutters.tinyVPadding,
        Gutters.smallTMargin,
        { backgroundColor: Colors.white, borderRadius: 10 },
      ]}
    >
      <View
        style={[
          Gutters.littlePadding,
          Gutters.littleHPadding,
          i18next.language === 'en' ? Layout.row : Layout.rowReverse,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
          {
            borderBottomWidth: 1,
            borderColor: Colors.inputGray,
          },
        ]}
      >
        <Text style={[Fonts.fontReg14, { color: Colors.gray2 }]}>
          {t('common:SKU')}
        </Text>
        <Text style={[Fonts.fontReg14, { color: Colors.black }]}>{_id}</Text>
      </View>
      <View
        style={[
          Gutters.littlePadding,
          Gutters.littleHPadding,
          i18next.language === 'en' ? Layout.row : Layout.rowReverse,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
          { borderBottomWidth: 1, borderColor: Colors.inputGray },
        ]}
      >
        <Text style={[Fonts.fontReg14, { color: Colors.black }]}>
          {t('common:category')}
        </Text>
        <Text style={[Fonts.fontReg14, { color: Colors.black }]}>
          {category}
        </Text>
      </View>
      <View
        style={[
          Gutters.littlePadding,
          Gutters.littleHPadding,
          i18next.language === 'en' ? Layout.row : Layout.rowReverse,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
          { borderBottomWidth: 1, borderColor: Colors.inputGray },
        ]}
      >
        <Text style={[Fonts.fontReg14, { color: Colors.black }]}>
          {t('common:subcategory')}
        </Text>
        <Text style={[Fonts.fontReg14, { color: Colors.black }]}>
          {subCatagory}
        </Text>
      </View>
      <View
        style={[
          Gutters.littlePadding,
          Gutters.littleHPadding,
          i18next.language === 'en' ? Layout.row : Layout.rowReverse,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
          { borderBottomWidth: 1, borderColor: Colors.inputGray },
        ]}
      >
        <Text style={[Fonts.fontReg14, { color: Colors.black }]}>
          {t('common:weight')}
        </Text>
        <Text style={[Fonts.fontReg14, { color: Colors.black }]}>{weight}</Text>
      </View>
      <View
        style={[
          Gutters.littlePadding,
          Gutters.littleHPadding,
          i18next.language === 'en' ? Layout.row : Layout.rowReverse,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
          { borderBottomWidth: 1, borderColor: Colors.inputGray },
        ]}
      >
        <Text style={[Fonts.fontReg14, { color: Colors.black }]}>
          {t('common:length')}
        </Text>
        <Text style={[Fonts.fontReg14, { color: Colors.black }]}>{length}</Text>
      </View>
      <View
        style={[
          Gutters.littlePadding,
          Gutters.littleHPadding,
          i18next.language === 'en' ? Layout.row : Layout.rowReverse,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
          { borderBottomWidth: 1, borderColor: Colors.inputGray },
        ]}
      >
        <Text style={[Fonts.fontReg14, { color: Colors.black }]}>
          {t('common:height')}
        </Text>
        <Text style={[Fonts.fontReg14, { color: Colors.black }]}>{height}</Text>
      </View>
      <View
        style={[
          Gutters.littlePadding,
          Gutters.littleHPadding,
          i18next.language === 'en' ? Layout.row : Layout.rowReverse,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
          { borderBottomWidth: 1, borderColor: Colors.inputGray },
        ]}
      >
        <Text style={[Fonts.fontReg14, { color: Colors.black }]}>
          {t('common:color')}
        </Text>
        <Text style={[Fonts.fontReg14, { color: Colors.black }]}>{color}</Text>
      </View>
      <View
        style={[
          Gutters.littlePadding,
          Gutters.littleHPadding,
          i18next.language === 'en' ? Layout.row : Layout.rowReverse,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
          { borderBottomWidth: 1, borderColor: Colors.inputGray },
        ]}
      >
        <Text style={[Fonts.fontReg14, { color: Colors.black }]}>
          {t('common:size')}
        </Text>
        <Text style={[Fonts.fontReg14, { color: Colors.black }]}>{size}</Text>
      </View>
      <View
        style={[
          Gutters.littlePadding,
          Gutters.littleHPadding,
          i18next.language === 'en' ? Layout.row : Layout.rowReverse,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
          { borderColor: Colors.inputGray },
        ]}
      >
        <Text style={[Fonts.fontReg14, { color: Colors.black }]}>
          {t('common:description')}
        </Text>
        <Text style={[Fonts.fontReg14, { color: Colors.black }]}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default AboutProduct;

const styles = StyleSheet.create({});
