import {
  BackHandler,
  Button,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
// import { setToken } from '@/store/auth';
import { useDispatch, useSelector } from 'react-redux';
import { HomeScreenProps } from 'types/navigation';
import Font from '../../theme/assets/fonts';
import i18next from 'i18next';
import Background from '@/components/Background';
import Svg, { Circle } from 'react-native-svg';
import TabsHeading from '@/components/TabsHeading';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import DashboardTile from '@/components/DashboardTile';
import CustomGraph from '@/components/CustomGraph';
import CustomModal, { modalTypes } from '@/components/CustomModal';

const DashboardScreen = ({ navigation, route }: HomeScreenProps) => {
  const { t } = useTranslation(['common']);
  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme();
  const dispatch = useDispatch();
  const { user_type } = useSelector((state: any) => state.auth);
  const modalRef = useRef<modalTypes>(null);
  console.log('language==', i18next.language);
  console.log('userType from selector==', user_type);

  // const user_Type = 'buyer';
  const user_Type = user_type;

  useEffect(() => {
    const handleBackPress = () => {
      modalRef.current?.show();
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []);

  const Supplier = () => {
    return (
      <View
        style={[
          i18next.language == 'en' ? Layout.row : Layout.rowReverse,
          {
            width: '100%',
          },
        ]}
      >
        <View style={[{ width: '48%' }]}>
          <DashboardTile
            BottomValue={true}
            title={t('common:orders')}
            count={`${4000} ` + t('common:SAR')}
            tileHeight={sHight(14)}
          />
          <DashboardTile
            BottomValue={true}
            title={t('common:stocks')}
            count={4500}
            tileHeight={sHight(14)}
          />
        </View>
        <View style={[{ width: '4%' }]}></View>
        <View style={[{ width: '48%' }]}>
          <DashboardTile
            BottomValue={true}
            title={t('common:products')}
            count={200}
            tileHeight={sHight(9.2)}
          />
          <DashboardTile
            BottomValue={true}
            title={t('common:revenue')}
            count={`${25000} ` + t('common:SAR')}
            tileHeight={sHight(9.2)}
          />
          <DashboardTile
            BottomValue={true}
            title={t('common:priceOfProducts')}
            count={`${25000} ` + t('common:SAR')}
            tileHeight={sHight(9.2)}
          />
        </View>
      </View>
    );
  };
  const Buyer = () => {
    return (
      <View
        style={[
          i18next.language == 'en' ? Layout.row : Layout.rowReverse,
          {
            width: '100%',
          },
        ]}
      >
        <View style={[{ width: '48%' }]}>
          <DashboardTile
            BottomValue={true}
            title={t('common:orders')}
            count={`${4000} ` + t('common:SAR')}
            tileHeight={sHight(21.9)}
          />
        </View>
        <View style={[{ width: '4%' }]}></View>
        <View style={[{ width: '48%' }]}>
          <DashboardTile
            BottomValue={true}
            title={t('common:wishlist') + " " + t('common:products')}
            count={12}
            tileHeight={sHight(10.8)}
          />
          <DashboardTile
            BottomValue={true}
            title={t('common:supportTickets')}
            count={34}
            tileHeight={sHight(10.8)}
          />
        </View>
      </View>
    );
  };
  const Driver = () => {
    return (
      <View
        style={[
          i18next.language == 'en' ? Layout.row : Layout.rowReverse,
          {
            width: '100%',
          },
        ]}
      >
        <View style={[{ width: '48%' }]}>
          <DashboardTile
            BottomValue={true}
            title={t('common:deliveries')}
            count={4000}
            tileHeight={sHight(21)}
          />
        </View>
        <View style={[{ width: '4%' }]}></View>
        <View style={[{ width: '48%' }]}>
          <DashboardTile
            BottomValue={true}
            title={t('common:revenue')}
            count={'45,650 SAR'}
            tileHeight={sHight(10.8)}
          />
          <DashboardTile
            BottomValue={true}
            title={t('common:supportTickets')}
            count={25000}
            tileHeight={sHight(10.8)}
          />
        </View>
      </View>
    );
  };

  return (
    <Background paddingHorizontal={sWidth(5)}>
      <TabsHeading title={t('common:dashboard')} />
      <View
        style={[
          Layout.alignItemsCenter,
          i18next.language == 'en' ? Layout.row : Layout.rowReverse,
          {
            // flexDirection: i18next.language == 'en' ? 'row' : 'row-reverse',
            height: sHight(8),
          },
        ]}
      >
        <Text
          style={[
            Fonts.fontReg18,
            Gutters.tinyRMargin,
            {
              color: Colors.purple,
              fontWeight: '700',
            },
          ]}
        >
          {t('common:hi')} {t('common:hanzila')}!
        </Text>
        <Images.svgs.HandWave width={20} height={20} />
      </View>

      {user_Type === 'seller'
        ? Supplier()
        : user_Type === 'buyer'
          ? Buyer()
          : Driver()}

      <CustomGraph />

      {/* <Button onPress={() => modalRef.current?.show()} title="uiop" /> */}

      <CustomModal
        firstBtnName={t('cancel')}
        secondBtnName={t('exit')}
        BtnOnePress={() => modalRef.current?.hide()}
        BtnTwoPress={async () => {
          modalRef.current?.hide();
          BackHandler.exitApp();
        }}
        headerText="Saloof"
        buttonTypes="double"
        ref={modalRef}
      >
        <Text
          style={[
            Fonts.fontMed14,
            Fonts.textCenter,
            Gutters.regularHPadding,
            Gutters.tinyBMargin,
            { color: Colors.Gray60 },
          ]}
        >
          {t('realyWantToExitApp')}
        </Text>
      </CustomModal>
    </Background>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({});
