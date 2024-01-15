import { useTheme } from '@/hooks';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import i18next from 'i18next';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomIconPress from './CustomIconPress';
import { DrawerItems } from '@/utils/DummyData';

type Props = {
  navigation: any;
};
const CustomDrawer = ({ navigation, props }: Props) => {
  const { Fonts, Gutters, Layout, Images, Colors } = useTheme();
  return (
    <DrawerContentScrollView
      {...props}
      style={[{ backgroundColor: Colors.white }]}
    >
      <View
        style={[
          Gutters.smallPadding,

          i18next.language === 'en' ? Layout.row : Layout.rowReverse,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
          Layout.selfCenter,
          {
            borderBottomWidth: 2,
            width: '90%',

            borderColor: Colors.LightPinkEBE4F0,
          },
        ]}
      >
        <Images.svgs.Saloof />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.closeDrawer()}
        >
          <Images.svgs.cross height={20} width={20} />
        </TouchableOpacity>
      </View>
      <View
        style={[
          i18next.language === 'en' ? Layout.row : Layout.rowReverse,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
          Gutters.littlePadding,
          Gutters.smallLMargin,
          {
            width: '50%',
          },
        ]}
      >
        <CustomIconPress
          counter={9}
          showCount={true}
          onPress={() => {}}
          images={<Images.svgs.heartsvg width={25} height={20} />}
        />

        <CustomIconPress
          counter={9}
          showCount={true}
          onPress={() => {}}
          images={<Images.svgs.bag />}
        />

        <CustomIconPress
          counter={9}
          showCount={false}
          onPress={() => {}}
          images={<Images.svgs.user />}
        />
      </View>
      {DrawerItems &&
        DrawerItems?.map((item, index) => {
          return (
            <DrawerItem
              key={index}
              label={
                i18next.language == 'en'
                  ? item?.en?.title
                  : i18next.language == 'ur'
                  ? item?.ur?.title
                  : item?.ar?.title
              }
              labelStyle={[Fonts.fontReg15, { color: Colors.gray1 }]}
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
            />
          );
        })}
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
