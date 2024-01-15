import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import i18next from 'i18next';
import { acounts, quickLinks } from '@/utils/DummyData';

type Props = {
  navigation: any;
};

const Links = ({ navigation }: Props) => {
  const { Fonts, Gutters, Layout, Images, Colors } = useTheme();
  return (
    <View
      style={[
        i18next.language === 'en' ? Layout.row : Layout.rowReverse,
        Gutters.smallPadding,
        Layout.alignItemsCenter,
      ]}
    >
      <View style={[Layout.fill]}>
        <Text style={[Fonts.fontBold24, { color: Colors.black }]}>
          {t('common:acount')}
        </Text>
        <View style={[Gutters.smallTMargin]}>
          {acounts &&
            acounts?.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.8}
                  onPress={() =>
                    navigation.navigate(item?.url as any, {
                      headerTitle:
                        i18next.language == 'en'
                          ? item?.en?.title
                          : i18next.language == 'ur'
                          ? item?.ur?.title
                          : item?.ar?.title,
                    })
                  }
                  style={[Gutters.tinyVPadding]}
                >
                  <Text
                    style={[Fonts.fontMed14, { color: Colors.GrayBlack555455 }]}
                  >
                    {i18next.language == 'en'
                      ? item?.en?.title
                      : i18next.language == 'ur'
                      ? item?.ur?.title
                      : item?.ar?.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </View>
      <View style={[Layout.fill]}>
        <Text style={[Fonts.fontBold24, { color: Colors.black }]}>
          {t('common:quick_link')}
        </Text>
        <View style={[Gutters.smallTMargin]}>
          {quickLinks &&
            quickLinks?.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.8}
                  onPress={() =>
                    navigation.navigate(item?.url as any, {
                      headerTitle:
                        i18next.language == 'en'
                          ? item?.en?.title
                          : i18next.language == 'ur'
                          ? item?.ur?.title
                          : item?.ar?.title,
                    })
                  }
                  style={[Gutters.tinyVPadding]}
                >
                  <Text
                    style={[Fonts.fontMed14, { color: Colors.GrayBlack555455 }]}
                  >
                    {i18next.language == 'en'
                      ? item?.en?.title
                      : i18next.language == 'ur'
                      ? item?.ur?.title
                      : item?.ar?.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </View>
    </View>
  );
};

export default Links;

const styles = StyleSheet.create({});
