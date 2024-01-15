import { useTheme } from '@/hooks';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import i18next from 'i18next';
import React from 'react';
import { Text, View } from 'react-native';

type TRenderItems = {
  item: object;
  index: number;
};

const RenderItems = ({ item, index }: TRenderItems) => {
  const { Layout, Gutters, Fonts, Images, Colors } = useTheme();

  return (
    <View
      style={[
        Layout.fullWidth,
        Layout['round1/2'],
        Gutters.smallPadding,

        {
          marginTop: index === 0 ? 0 : 15,
          backgroundColor:
            index == 1 || index == 3 ? Colors.purpleF3E4FF : Colors.gray4,
        },
      ]}
    >
      <View
        style={[
          i18next.language == 'en' ? Layout.row : Layout.rowReverse,
          Layout.alignItemsCenter,
          Layout.justifyContentBetween,
        ]}
      >
        <Text
          numberOfLines={1}
          style={[
            Fonts.fontBold16,
            { fontSize: sWidth(5), color: Colors.purple },
          ]}
        >
          {index + 1}.<Text>{' ' + item?.location}</Text>
        </Text>
        <View
          style={[
            i18next.language == 'en' ? Layout.row : Layout.rowReverse,
            Layout.justifyContentBetween,
            Layout.alignItemsCenter,
          ]}
        >
          <Images.svgs.pin width={sWidth(5)} height={sHight(5)} />
          <Text
            style={[
              Fonts.fontReg12,
              Gutters.tinyLMargin,
              { color: Colors.black },
            ]}
          >
            {item?.area}
          </Text>
        </View>
      </View>
      <View
        style={[
          i18next.language == 'en' ? Layout.row : Layout.rowReverse,
          Layout.alignItemsCenter,
          Layout.justifyContentBetween,
          Gutters.tinyTMargin,
        ]}
      >
        <Text
          numberOfLines={1}
          style={[Fonts.fontReg12, { width: sWidth(50), color: Colors.black }]}
        >
          {item?.address}
        </Text>
        <View
          style={[
            Layout.justifyContentCenter,
            Layout.alignItemsCenter,
            {
              padding: 6,
              paddingHorizontal: 15,
              borderRadius: 100,

              backgroundColor: Colors.purple,
            },
          ]}
        >
          <Text
            numberOfLines={1}
            style={[
              Fonts.fontBold12,
              {
                color: Colors.white,
              },
            ]}
          >
            {item?.country}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RenderItems;
