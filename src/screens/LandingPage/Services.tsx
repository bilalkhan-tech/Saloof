import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import i18next from 'i18next';

type Props = {};

const Services = (props: Props) => {
  const { Fonts, Gutters, Layout, Images, Colors } = useTheme();
  return (
    <View
      style={[
        Gutters.smallPadding,
        Gutters.smallMargin,
        { backgroundColor: Colors.purple, borderRadius: 10 },
      ]}
    >
      <View
        style={[
          i18next.language === 'en' ? Layout.row : Layout.rowReverse,
          Gutters.smallBMargin,
          Layout.alignItemsCenter,
        ]}
      >
        <Images.svgs.fast />
        <View style={[Gutters.smallLMargin]}>
          <Text style={[Fonts.fontBold13, { color: Colors.white }]}>
            {t('common:fast_secure_delivery')}
          </Text>
          <Text style={[Fonts.fontReg11, { color: Colors.white }]}>
            {t('common:tell_about_service')}
          </Text>
        </View>
      </View>
      <View
        style={[
          i18next.language === 'en' ? Layout.row : Layout.rowReverse,
          Gutters.smallBMargin,
          Layout.alignItemsCenter,
        ]}
      >
        <Images.svgs.returne />
        <View style={[Gutters.smallLMargin]}>
          <Text style={[Fonts.fontBold13, { color: Colors.white }]}>
            {t('common:return_policy')}
          </Text>
          <Text style={[Fonts.fontReg11, { color: Colors.white }]}>
            {t('common:no_question_ask')}
          </Text>
        </View>
      </View>
      <View
        style={[
          i18next.language === 'en' ? Layout.row : Layout.rowReverse,
          Layout.alignItemsCenter,
        ]}
      >
        <Images.svgs.bestcustomer />
        <View style={[Gutters.smallLMargin]}>
          <Text style={[Fonts.fontBold13, { color: Colors.white }]}>
            {t('common:pro_quality_support')}
          </Text>
          <Text style={[Fonts.fontReg11, { color: Colors.white }]}>
            {t('common:24_support')}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({});
