import { View, Text } from 'react-native';
import React from 'react';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import { useTheme } from '@/hooks';
import i18next, { t } from 'i18next';

interface propTypes {
  title?: string;
  count?: any;
  tileHeight?: number;
  BottomValue?: boolean;
}

const DashboardTile = ({
  title,
  count,
  tileHeight,
  BottomValue,
}: propTypes) => {
  const { Colors, Layout, Fonts, Gutters, Images } = useTheme();

  console.log('tileHeight :::::: ', tileHeight);
  const tileHeightValue = tileHeight;

  return (
    <View
      style={[
        // Layout.row,
        i18next.language == 'en' ? Layout.row : Layout.rowReverse,
        Gutters.tinyBMargin,
        {
          height: tileHeight,
          backgroundColor: Colors.white,
          borderTopLeftRadius: i18next.language == 'en' ? 10 : 0,
          borderBottomLeftRadius: i18next.language == 'en' ? 10 : 0,
          borderTopRightRadius: i18next.language == 'en' ? 0 : 10,
          borderBottomRightRadius: i18next.language == 'en' ? 0 : 10,
          // borderWidth: 1,
          shadowColor: Colors.Gray60,
          shadowOffset: {
            width: 2,
            height: 5,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3.22,
          elevation: 5,
        },
      ]}
    >
      <View
        style={[
          {
            width: '4%',
            backgroundColor: Colors.purple,
            borderTopLeftRadius: i18next.language == 'en' ? 10 : 0,
            borderBottomLeftRadius: i18next.language == 'en' ? 10 : 0,
            borderTopRightRadius: i18next.language == 'en' ? 0 : 10,
            borderBottomRightRadius: i18next.language == 'en' ? 0 : 10,
          },
        ]}
      ></View>
      <View
        style={[
          Layout.fill,
          {
            padding: 10,
            width: '96%',
          },
        ]}
      >
        <View
          style={[
            Layout.rowHCenter,
            {
              flex: 4,
            },
          ]}
        >
          <View
            style={[
              i18next.language == 'en' ? Layout.row : Layout.rowReverse,
              { width: '100%' },
            ]}
          >
            <View style={[Layout.center]}>
              <Images.svgs.TileIcon width={sWidth(8.5)} height={sWidth(8.5)} />
            </View>
            <View
              style={[
                i18next.language == 'en'
                  ? Gutters.tinyLMargin
                  : Gutters.tinyRMargin,
              ]}
            >
              {BottomValue && (
                <Text style={[Fonts.fontReg14, { color: Colors.black }]}>
                  {t('common:total')}
                </Text>
              )}
              <Text
                style={[
                  Fonts.fontReg14,
                  { color: Colors.black, },
                ]}
              >
                {title}
              </Text>
              {!BottomValue && (
                <Text style={[Fonts.fontReg12, { color: Colors.gray }]}>
                  {count}
                </Text>
              )}
            </View>
          </View>
        </View>
        {BottomValue && (
          <View
            style={[
              Layout.center,
              {
                alignItems:
                  i18next.language == 'en' ? 'flex-end' : 'flex-start',
              },
            ]}
          >
            <Text style={[Fonts.fontReg12, { color: Colors.gray }]}>
              {count}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default DashboardTile;
