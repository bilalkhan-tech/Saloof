import CustomSimpleButton from '@/components/CustomSimpleButton';
import { useTheme } from '@/hooks';
import i18next from 'i18next';
import React from 'react';
import { Text, View } from 'react-native';

interface IRenderCard {
  item: Object;
  index: number;
}

const RenderCard = ({ index, item }: IRenderCard) => {
  const { Layout, Fonts, Colors, Gutters } = useTheme();

  return (
    <View
      style={[
        Layout.fullWidth,
        Layout['round1/2'],
        Gutters.smallPadding,

        {
          borderWidth: 1,
          marginTop: index === 0 ? 0 : 10,
          backgroundColor: Colors.white,
          borderColor: Colors.Gray10,
        },
      ]}
    >
      <View
        style={[
          i18next.language == 'en' ? Layout.row : Layout.rowReverse,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
        ]}
      >
        <Text style={[Fonts.fontReg14, { color: Colors.black }]}>
          {index + 1}. {item?.text}{' '}
        </Text>
        <Text style={[Fonts.fontBold16, { color: Colors.purple }]}>
          {' '}
          100 {t('common:subscription:products')}
        </Text>
      </View>

      <CustomSimpleButton
        title={t('common:subscription:subscribe')}
        containerStyle={[
          {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: Colors.purple,
          },
        ]}
        titleStyle={[
          Fonts.fontMed16,
          {
            color: Colors.purple,
          },
        ]}
        onPress={() => {}}
      />
    </View>
  );
};

export default RenderCard;
