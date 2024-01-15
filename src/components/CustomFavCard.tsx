import { useTheme } from '@/hooks';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import { useNavigation } from '@react-navigation/native';
import i18next from 'i18next';
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

type TRenderCard = {
  title: string;
  index: number;
  addToCartPress: CallableFunction;
  products: Array<Object>;
};

const CustomFavCard = ({
  title,
  index,
  products,
  addToCartPress,
}: TRenderCard) => {
  const { Layout, Gutters, Fonts, Colors, Images } = useTheme();

  const navigation = useNavigation();
  const renderItem = ({ item, i }: any) => {
    return (
      <View style={{ width: 140 }} key={`index-${i}`}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('ProductDetail')}
        >
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
        </TouchableOpacity>

        {/* <View
          style={[
            i18next.language == 'en' ? Layout.row : Layout.rowReverse,
            {
              width: '95%',
              top: 3,
            },
            Gutters.tinyPadding,
            Layout.absolute,
            Layout.justifyContentEnd,
          ]}
        >
          <View
            style={[
              Layout.center,
              {
                width: 25,
                height: 25,
                backgroundColor: Colors.white,
                borderRadius: 20,
              },
            ]}
          >
            <View
              style={[
                Layout.center,
                {
                  width: 20,
                  height: 20,
                  backgroundColor: Colors.purple,
                  borderRadius: 18,
                },
              ]}
            >
              <Images.svgs.heart width={13} height={13} />
            </View>
          </View>
        </View> */}
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
            {title}
          </Text>
          <Text
            style={[
              Fonts.fontReg14,
              Gutters.tinyTMargin,
              { color: Colors.white },
            ]}
          >
            255 SAR
          </Text>
        </View>

        <View
          style={[
            Gutters.littleTMargin,
            i18next.language == 'en' ? Layout.row : Layout.rowReverse,
            Layout.alignItemsCenter,
            Layout.justifyContentBetween,
            Layout.overflow,
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {}}
            style={[
              i18next.language == 'en' ? Layout.row : Layout.rowReverse,
              {},
              Gutters.tinyPadding,
              Layout.justifyContentEnd,
            ]}
          >
            <View
              style={[
                Layout.center,
                {
                  width: 25,
                  height: 25,
                  backgroundColor: Colors.white,
                  borderRadius: 20,
                },
              ]}
            >
              <View
                style={[
                  Layout.center,
                  {
                    width: 20,
                    height: 20,
                    backgroundColor: Colors.purple,
                    borderRadius: 18,
                  },
                ]}
              >
                <Images.svgs.heart width={13} height={13} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={addToCartPress}
            style={[
              Layout.fill,
              Layout.center,
              {
                borderRadius: 5,
                padding: 3,
                marginRight: 7,
                backgroundColor: Colors.purple,
              },
            ]}
          >
            <Text style={[Fonts.fontBold14, { color: Colors.white }]}>
              {t('common:fav:add_cart')}
            </Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
            activeOpacity={0.8}
            onPress={cartIconPress}
            style={[
              Layout.center,
              { borderRadius: 5, padding: 5, backgroundColor: Colors.purple },
            ]}
          >
            <Images.svgs.cart width={20} height={20} />
          </TouchableOpacity> */}
        </View>
      </View>
    );
  };

  return (
    <View
      key={index}
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
        <Text style={[Fonts.fontMed16, { color: Colors.purple }]}>{title}</Text>
        {/* <View
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
        </View> */}
      </View>
      <View style={[Gutters.tinyVMargin, { width: '100%' }]}>
        <FlatList
          data={products}
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

export default CustomFavCard;
