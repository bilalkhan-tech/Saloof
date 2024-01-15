import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import i18next from 'i18next';

type Props = {
  text: string;
};

const AboutUs = ({ text }: Props) => {
  const { Fonts, Gutters, Layout, Images, Colors } = useTheme();
  return (
    <View
      style={[
        i18next.language === 'en' ? Layout.row : Layout.rowReverse,
        Gutters.smallPadding,
        Layout.alignItemsCenter,
      ]}
    >
      <View>
        <Text style={[Fonts.fontBold16, { color: Colors.black }]}>
          {t('common:about')}
        </Text>
        <Text
          style={[
            Fonts.fontReg12,
            Gutters.littleTMargin,
            { color: Colors.GrayBlack555455 },
          ]}
        >
          {text}
        </Text>
      </View>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({});
