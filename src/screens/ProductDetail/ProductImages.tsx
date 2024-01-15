import { useTheme } from '@/hooks';
import { sHight } from '@/utils/ScreenDimentions';
import i18next from 'i18next';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  data: Array<Object>;
};

const ProductImages = ({ data }: Props) => {
  const { Layout, Gutters, Images, Colors, Fonts } = useTheme();
  const [selectedImage, setSelectedImage] = useState(data[0]);

  return (
    <View
      style={[
        Gutters.littlePadding,
        Gutters.smallVMargin,
        { borderRadius: 10, backgroundColor: Colors.white },
      ]}
    >
      <Text
        style={[
          Fonts.fontMed12,
          { textTransform: 'uppercase', color: Colors.gray2 },
        ]}
      >
        {t('common:products')}
      </Text>
      <Text
        style={[
          Fonts.fontMed12,
          { textTransform: 'uppercase', color: Colors.gray2 },
        ]}
      >
        {t('common:image')}
      </Text>
      <View
        style={[
          i18next.language === 'en' ? Layout.row : Layout.rowReverse,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
        ]}
      >
        <View
          style={[
            Layout.overflow,
            Layout.center,
            {
              width: '100%',
              height: sHight(30),
              borderRadius: 10,
            },
          ]}
        >
          {/* <CustomSvgImage
            resizeMode="contain"
            style={[Layout.fill, {}]}
            source={require('../../theme/assets/images/iPhoneDummy.png')}
          /> */}
          <Image
            style={[Layout.fill]}
            resizeMode="cover"
            source={selectedImage?.image}
          />
        </View>
      </View>
      <View style={[Gutters.smallTMargin]}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={[{}]}
        >
          {data?.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setSelectedImage(item)}
                style={[
                  Gutters.littleLMargin,
                  {
                    borderWidth: selectedImage === item ? 2 : 0,
                    borderRadius: 10,
                    borderColor: Colors.purple,
                  },
                ]}
                key={index}
              >
                {/* <CustomSvgImage
                  resizeMode="contain"
                  style={[{ width: sWidth(40), height: sWidth(20) }]}
                  source={require('../../theme/assets/images/picIphone.png')}
                /> */}
                <Image
                  style={[{ borderRadius: 10, width: 100, height: 100 }]}
                  resizeMode="cover"
                  source={item?.image}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default ProductImages;

const styles = StyleSheet.create({});
