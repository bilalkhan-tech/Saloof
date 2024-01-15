import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@/hooks';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import { useNavigation } from '@react-navigation/native';

type Props = {
  item: any;
  index: number;
};

const RenderCard = ({ item, index }: Props) => {
  const { Layout, Gutters, Fonts, Images, Colors } = useTheme();
  const [favourite, setFavourite] = useState<boolean>(false);
  const navigation = useNavigation();
  return (
    <View
      key={index}
      style={[
        index === 0 ? 0 : Gutters.littleLMargin,
        Layout.center,
        Gutters.littlePadding,
        {
          width: sWidth(60),
          height: sHight(40),
          borderRadius: 10,
          backgroundColor: Colors.gray4,
        },
      ]}
    >
      <View style={[Layout.fullWidth, Layout.alignItemsEnd, { height: 20 }]}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('LoginScreen');
            setFavourite(!favourite);
          }}
        >
          <Images.svgs.heartsvg
            width={20}
            height={20}
            fill={favourite ? Colors.purple : Colors.black}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={require('../../theme/assets/images/microphone2.png')}
        style={[Layout.fill]}
        resizeMode="contain"
      />
      <View style={[Layout.center, Gutters.smallVPadding]}>
        <Text
          style={[
            Fonts.fontBold16,
            Gutters.littleTMargin,
            { color: Colors.black },
          ]}
        >
          Smart Watch
        </Text>
        <Text
          style={[
            Fonts.fontBold12,
            Gutters.tinyTMargin,
            { color: Colors.GrayBlack555455 },
          ]}
        >
          Electronic Appliences
        </Text>
        <Text
          style={[
            Fonts.fontBold16,
            Gutters.littleTMargin,
            { color: Colors.purple },
          ]}
        >
          SAR50.00
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}
          style={[
            Layout.center,
            Gutters.littleTMargin,
            {
              borderRadius: 10,
              width: sWidth(30),
              height: sHight(5),
              backgroundColor: Colors.purple,
            },
          ]}
        >
          <Text style={[Fonts.fontBold11, { color: Colors.white }]}>
            {t('common:fav:add_cart')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RenderCard;

const styles = StyleSheet.create({});
