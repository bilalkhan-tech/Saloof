import { useTheme } from '@/hooks';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import i18next from 'i18next';
import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import HeartView from './HeartView';
import ButtonView from './ButtonView';

type TRenderCard = {
  item: Object;
  index: number;
};

const RenderCard = ({ item, index }: TRenderCard) => {
  const { Layout, Gutters, Fonts, Colors, Images } = useTheme();

  const renderItem = ({ item, i }: any) => {
    return (
      <View style={{ width: 140 }} key={`index-${i}`}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2023/08/15/09/21/camera-8191564_1280.jpg',
          }}
          resizeMode="cover"
          style={[
            {
              width: 140,
              height: 140,
              borderRadius: 20,
            },
          ]}
        />

        {/* <HeartView /> */}
        <View
          style={[
            Layout.absolute,
            Gutters.littleHPadding,
            Layout.overflow,
            { bottom: sHight(6), width: '90%' },
          ]}
        >
          <Text
            numberOfLines={2}
            style={[Fonts.fontBold14, { color: Colors.white }]}
          >
            {item?.title}
          </Text>
          <Text
            style={[
              Fonts.fontReg14,
              Gutters.tinyTMargin,
              { color: Colors.white, fontWeight: 'bold' },
            ]}
          >
            255 SAR
          </Text>
        </View>
        <ButtonView cartIconPress={() => {}} addToCartPress={() => {}} />
      </View>
    );
  };

  return (
    <View
      key={`index-${index}`}
      style={[
        Gutters.smallPadding,
        {
          width: sWidth(90),
          borderRadius: 15,
          marginTop: 10,
          backgroundColor: Colors.inputGray,
        },
      ]}
    >
      <View
        style={[
          i18next.language == 'en' ? Layout.row : Layout.rowReverse,
          Layout.alignItemsCenter,
          Layout.overflow,
          Gutters.smallBMargin,
          Layout.justifyContentBetween,
        ]}
      >
        <Text style={[Fonts.fontMed16, { color: Colors.purple }]}>
          {item?.title}
        </Text>
        <View
          style={[
            Gutters.tinyPadding,
            Gutters.xLittleHPadding,
            {
              borderRadius: 10,
              backgroundColor: Colors.GreenLight,
            },
          ]}
        >
          <Text style={[Fonts.fontReg12, { color: Colors.Green }]}>
            {t('common:fav:available')}
          </Text>
        </View>
      </View>
      <View style={[Gutters.tinyVMargin, { width: '100%' }]}>
        <FlatList
          data={item.products}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, i) => i.toString()}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={{ margin: 10 }} />}
        />
      </View>
    </View>
  );
};

export default RenderCard;
