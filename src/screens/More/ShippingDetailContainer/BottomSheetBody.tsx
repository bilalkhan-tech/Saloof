import { CustomPicker } from '@/components';

import CustomSimpleButton from '@/components/CustomSimpleButton';

import { useTheme } from '@/hooks';
import { shipping_detail } from '@/utils/DummyData';
import React from 'react';
import { View } from 'react-native';
interface IBottomSheetBody {
  setBottomSheet: CallableFunction;
}

const BottomSheetBody = ({ setBottomSheet }: IBottomSheetBody) => {
  const { Layout, Images, Fonts, Gutters, Colors } = useTheme();
  return (
    <View style={[Layout.fill, Layout.justifyContentBetween]}>
      <View>
        <View style={[Layout.alignItemsCenter, Gutters.smallTMargin]}>
          <CustomPicker
            title={t('common:shipping_detail:select_country')}
            data={shipping_detail?.map(item => item.country)}
          />
        </View>
      </View>
      <View>
        <CustomSimpleButton
          title={t('common:shipping_detail:apply')}
          containerStyle={[
            Gutters.xLittleBMargin,
            {
              backgroundColor: Colors.purple,
            },
          ]}
          titleStyle={[
            Fonts.fontMed16,
            {
              color: Colors.white,
            },
          ]}
          onPress={() => setBottomSheet(false)}
        />
      </View>
    </View>
  );
};

export default BottomSheetBody;
