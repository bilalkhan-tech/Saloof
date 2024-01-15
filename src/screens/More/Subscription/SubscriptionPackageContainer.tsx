import React from 'react';
import { Text, View } from 'react-native';

import CustomSimpleButton from '@/components/CustomSimpleButton';
import { useTheme } from '@/hooks';
import i18next from 'i18next';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import SubscriptionList from './SubscriptionList';
import CustomHeader from '@/components/CustomHeader';
import { sHight } from '@/utils/ScreenDimentions';

const SubscriptionPackageContainer = ({ navigation }: any) => {
  const { Layout, Fonts, Gutters, Colors } = useTheme();
  const { t } = useTranslation(['common']);
  return (
    <View
      style={[
        Layout.fill,
        Gutters.littleHPadding,
        { backgroundColor: Colors.white },
      ]}
    >
      <View
        style={[
          Layout.fill,
          Gutters.smallHPadding,
          { backgroundColor: Colors.white },
        ]}
      >
        <CustomHeader
          headerTitle={t('common:subscription:title')}
          back={true}
          backPress={() => navigation.goBack()}
        />
      </View>
      <View
        style={[
          Gutters.tinyVPadding,
          {
            backgroundColor: Colors.white,

            borderBottomWidth: 0.9,
            borderColor: Colors.Gray10,
          },
        ]}
      >
        <View
          style={[
            i18next.language == 'en' ? Layout.row : Layout.rowReverse,
            Layout.alignItemsCenter,
            Layout.justifyContentBetween,
            Gutters.tinyTMargin,
            Gutters.smallHPadding,
          ]}
        >
          <Text style={[Fonts.fontBold16, { color: Colors.purple }]}>
            {t('common:subscription:intermidate_packge')}
          </Text>
          <Text style={[Fonts.fontBold16, { color: Colors.purple }]}>
            100 {t('common:subscription:total_products')}
          </Text>
        </View>
        <View
          style={[
            [
              i18next.language == 'en' ? Layout.row : Layout.rowReverse,
              Layout.alignItemsCenter,
              Layout.justifyContentBetween,
              Gutters.tinyTMargin,
              Gutters.smallHPadding,
            ],
          ]}
        >
          <Text style={[Fonts.fontReg16, { color: Colors.gray2 }]}>
            {t('common:subscription:next_payment')}:
            <Text style={[Fonts.fontReg16, { color: Colors.gray2 }]}>
              {' '}
              {moment().format('DD-MM-YYYY')}
            </Text>
          </Text>
          <Text style={[Fonts.fontReg16, { color: Colors.gray2 }]}>
            25 {t('common:subscription:product_left')}
          </Text>
        </View>
        <View style={[Gutters.smallHMargin, Gutters.smallTMargin]}>
          <CustomSimpleButton
            title={t('common:subscription:cancel_subcription')}
            containerStyle={[
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
            onPress={() => {}}
          />
        </View>
      </View>
      <View
        style={[Gutters.smallPadding, Layout.overflow, { height: sHight(55) }]}
      >
        <SubscriptionList />
      </View>
    </View>
  );
};

export default SubscriptionPackageContainer;
