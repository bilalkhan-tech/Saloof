import { View } from 'react-native';
import React, { useState } from 'react';
import CustomHeader from '@/components/CustomHeader';
import Background from '@/components/Background';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import CustomTextInput from '@/components/CustomTextInput';

const CommissionContainer = ({ navigation, route }: any) => {
  const [commissionDetail, setCommissionDetail] = useState({
    commissionType: '',
    commissionAmount: '',
  });

  const { t } = useTranslation(['common']);
  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme();

  return (
    <Background>
      <View style={[Gutters.smallVMargin]}>
        <CustomHeader
          back
          backPress={() => navigation.goBack()}
          headerTitle={
            route.params.headerTitle === 'Commission' ||
            route.params.headerTitle === 'عمولة' ||
            route.params.headerTitle === 'کمیشن'
              ? t('common:admincommission')
              : route.params.headerTitle
          }
        />
      </View>

      <View style={[Layout.fill]}>
        <CustomTextInput
          editable={false}
          placeholder={t('common:commissiontype')}
          value={commissionDetail.commissionType}
          onChangeText={(t: any) =>
            setCommissionDetail({ ...commissionDetail, commissionType: t })
          }
          secureTextEntry={false}
          placeholderTextColor={Colors.gray1}
        />
        <CustomTextInput
          editable={false}
          placeholder={t('common:commissionamount')}
          value={commissionDetail.commissionAmount}
          onChangeText={(t: any) =>
            setCommissionDetail({ ...commissionDetail, commissionAmount: t })
          }
          secureTextEntry={false}
          placeholderTextColor={Colors.gray1}
          isMultiline={true}
        />
      </View>
    </Background>
  );
};

export default CommissionContainer;
