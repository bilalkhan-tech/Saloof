import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { countries } from '@/utils/DummyData';
import { useTheme } from '@/hooks';
import i18next from 'i18next';

type Props = {
  data: Array<Object>;
  text: string;
  value: string;
};

const LanguagePicker = ({ data, text, value }: Props) => {
  const [select, setselect] = useState<{
    country: string;
    text: string;
    value: string;
  }>({
    country: countries[0].country,
    text: 'SA',
    value: 'sa',
  });
  const [showList, setshowList] = useState(false);
  const { Gutters, Layout, Images, Colors, Fonts } = useTheme();
  return (
    <View style={[{}]}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setshowList(!showList)}
        style={[
          i18next.language === 'en' ? Layout.row : Layout.rowReverse,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
          Gutters.littleLMargin,
          {},
        ]}
      >
        <Image
          source={select?.country}
          style={[
            {
              width: 50,
              height: 50,
              borderRadius: 25,
            },
          ]}
        />
        <Images.svgs.arrowsvgdown
          width={10}
          height={10}
          style={[Gutters.littleLMargin]}
          fill={Colors.black}
          strok={Colors.black}
        />
      </TouchableOpacity>

      <View
        style={[
          Layout.absolute,
          {
            top: 30,
            left: 65,
            zIndex: 999,
            elevation: 5,
            backgroundColor: Colors.gray4,
          },
        ]}
      >
        {showList &&
          countries?.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                style={[Gutters.littlePadding]}
                onPress={() => {
                  setselect(item);
                  setshowList(false);
                }}
              >
                <Text style={[Fonts.fontBold16, { color: Colors.black }]}>
                  {item?.text}
                </Text>
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
};

export default LanguagePicker;

const styles = StyleSheet.create({});
