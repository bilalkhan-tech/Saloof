import { useTheme } from '@/hooks';
import i18next from 'i18next';
import React from 'react';
import { Image, Text, View } from 'react-native';

type Props = {
  item: Object;
  index: number;
};

const RenderCards = ({ item, index }: Props) => {
  const { Layout, Gutters, Colors, Fonts } = useTheme();
  return (
    <View
      key={index}
      style={[
        Gutters.tinyTMargin,
        {
          borderWidth: 2,
          padding: 8,
          borderColor: Colors.gray4,
          borderRadius: 10,
        },
      ]}
    >
      <View
        style={[
          Layout.fullWidth,
          { backgroundColor: Colors.gray4, borderRadius: 3 },
        ]}
      >
        <Image
          source={require('@/theme/assets/images/iphone.png')}
          style={[Layout.fill, Layout.selfCenter]}
          resizeMode={'cover'}
        />
      </View>
      <View
        style={[
          Gutters.tinyTMargin,
          i18next.language === 'en' ? Layout.row : Layout.rowReverse,
        ]}
      >
        <Text style={[Fonts.fontMed14, { color: Colors.black }]}>
          iPhone 15 Pro Max
        </Text>
      </View>
      <View
        style={[
          Gutters.smallVMargin,
          i18next.language === 'en' ? Layout.row : Layout.rowReverse,
        ]}
      >
        <View>
          <Text style={[Fonts.fontReg12, { color: Colors.gray2 }]}>
            {t('common:delivery_detail:by')}{' '}
            <Text
              style={[
                Fonts.fontReg14,
                Gutters.smallLMargin,
                { color: Colors.black },
              ]}
            >
              Apple
            </Text>
          </Text>
          <Text
            style={[
              Fonts.fontReg12,
              Gutters.tinyTMargin,
              { color: Colors.gray2 },
            ]}
          >
            {t('common:delivery_detail:in')}{' '}
            <Text
              style={[
                Fonts.fontReg14,
                Gutters.smallLMargin,
                { color: Colors.black },
              ]}
            >
              Mobile Phones
            </Text>
          </Text>
        </View>
      </View>

      <View
        style={[
          Gutters.tinyTMargin,
          i18next.language === 'en' ? Layout.row : Layout.rowReverse,
        ]}
      >
        <Text style={[Fonts.fontMed14, { color: Colors.black }]}>255 SAR</Text>
      </View>
    </View>
  );
};

export default RenderCards;
