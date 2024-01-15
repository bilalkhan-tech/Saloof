import { CustomBottomSheet } from '@/components';
import CustomHeader from '@/components/CustomHeader';
import CustomSimpleButton from '@/components/CustomSimpleButton';
import { useTheme } from '@/hooks';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import i18next from 'i18next';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import OrderProductList from './OrderProductList';
import CustomMap from './CustomMap';
import { useRoute } from '@react-navigation/native';
import moment from 'moment';

type Props = {
  navigation: any;
};

const DeliveryDetailContainer = ({ navigation }: Props) => {
  const { Layout, Gutters, Images, Colors, Fonts } = useTheme();
  const [startDelivery, setStartDelivery] = useState<boolean>(false);
  const [bottomSheet, setbottomSheet] = useState<{
    googleMap: boolean;
    productList: boolean;
  }>({
    googleMap: false,
    productList: false,
  });
  const {
    params: { status, _id },
  }: any = useRoute();

  return (
    <View
      style={[
        Layout.fill,
        Gutters.smallHPadding,
        { backgroundColor: Colors.white },
      ]}
    >
      <CustomHeader
        headerTitle={t('common:delivery_detail:title')}
        back={true}
        backPress={() => navigation.goBack()}
      />
      <View
        style={[
          Gutters.smallPadding,
          { flex: 1, backgroundColor: Colors.gray4, borderRadius: 10 },
        ]}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={[i18next.language === 'en' ? Layout.row : Layout.rowReverse]}
          >
            <View>
              <Text style={[Fonts.fontMed14, { color: Colors.black }]}>
                {t('common:delivery_detail:order_id')}
              </Text>
              <Text style={[Fonts.fontReg12, { color: Colors.black }]}>
                12345678
              </Text>
            </View>
          </View>
          <View
            style={[i18next.language === 'en' ? Layout.row : Layout.rowReverse]}
          >
            <View style={[Gutters.smallTMargin]}>
              <Text style={[Fonts.fontMed14, { color: Colors.black }]}>
                {t('common:order_date')}
              </Text>
              <Text style={[Fonts.fontReg12, { color: Colors.black }]}>
                {moment().format('DD-MM-YYYY')}
              </Text>
            </View>
          </View>
          <View
            style={[i18next.language === 'en' ? Layout.row : Layout.rowReverse]}
          >
            <View style={[Gutters.smallTMargin]}>
              <Text style={[Fonts.fontMed14, { color: Colors.black }]}>
                {t('common:product_name')}
              </Text>
              <Text style={[Fonts.fontReg12, { color: Colors.black }]}>
                {'Example'}
              </Text>
            </View>
          </View>
          <View
            style={[i18next.language === 'en' ? Layout.row : Layout.rowReverse]}
          >
            <View style={[Gutters.smallTMargin]}>
              <Text style={[Fonts.fontMed14, { color: Colors.black }]}>
                {t('common:totalProductPrice')}
              </Text>
              <Text style={[Fonts.fontReg12, { color: Colors.black }]}>
                {'50 SAR'}
              </Text>
            </View>
          </View>
          <View
            style={[i18next.language === 'en' ? Layout.row : Layout.rowReverse]}
          >
            <View style={[Gutters.smallTMargin]}>
              <Text style={[Fonts.fontMed14, { color: Colors.black }]}>
                {t('common:discount')}
              </Text>
              <Text style={[Fonts.fontReg12, { color: Colors.black }]}>
                {'50 SAR'}
              </Text>
            </View>
          </View>
          <View
            style={[i18next.language === 'en' ? Layout.row : Layout.rowReverse]}
          >
            <View style={[Gutters.smallTMargin]}>
              <Text style={[Fonts.fontMed14, { color: Colors.black }]}>
                {t('common:delivery_detail:status')}
              </Text>
              <Text style={[Fonts.fontReg12, { color: Colors.black }]}>
                Pending
              </Text>
            </View>
          </View>
          <View
            style={[i18next.language === 'en' ? Layout.row : Layout.rowReverse]}
          >
            <View style={[Gutters.smallTMargin]}>
              <Text style={[Fonts.fontMed14, { color: Colors.black }]}>
                {t('common:delivery_detail:shipping_city')}
              </Text>
              <Text style={[Fonts.fontReg12, { color: Colors.black }]}>
                Jeddah
              </Text>
            </View>
          </View>
          <View
            style={[i18next.language === 'en' ? Layout.row : Layout.rowReverse]}
          >
            <View style={[Gutters.smallTMargin]}>
              <Text style={[Fonts.fontMed14, { color: Colors.black }]}>
                {t('common:delivery_detail:buyer')}
              </Text>
              <Text style={[Fonts.fontReg12, { color: Colors.black }]}>
                Nasir Jamshed
              </Text>
            </View>
          </View>
          <View
            style={[i18next.language === 'en' ? Layout.row : Layout.rowReverse]}
          >
            <View style={[Gutters.smallTMargin]}>
              <Text style={[Fonts.fontMed14, { color: Colors.black }]}>
                {t('common:delivery_detail:status_by_admin')}
              </Text>
              <Text style={[Fonts.fontReg12, { color: Colors.black }]}>
                In Progress
              </Text>
            </View>
          </View>
          <View
            style={[i18next.language === 'en' ? Layout.row : Layout.rowReverse]}
          >
            <View style={[Gutters.smallTMargin]}>
              <Text style={[Fonts.fontMed14, { color: Colors.black }]}>
                {t('common:delivery_detail:shipping')}
              </Text>
              <View style={[Layout.row]}>
                <Text style={[Fonts.fontReg12, { color: Colors.black }]}>
                  {t('common:delivery_detail:express')}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[i18next.language === 'en' ? Layout.row : Layout.rowReverse]}
          >
            <View style={[Gutters.smallTMargin]}>
              <Text style={[Fonts.fontMed14, { color: Colors.black }]}>
                {t('common:delivery_detail:amount')}
              </Text>
              <Text style={[Fonts.fontReg12, { color: Colors.black }]}>
                12345678
              </Text>
            </View>
          </View>
          <View
            style={[i18next.language === 'en' ? Layout.row : Layout.rowReverse]}
          >
            <View style={[Gutters.smallTMargin]}>
              <Text style={[Fonts.fontMed14, { color: Colors.black }]}>
                {t('common:admin_note')}
              </Text>
              <Text style={[Fonts.fontReg12, { color: Colors.black }]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                quibusdam rem porro odit possimus? Mollitia, ipsum autem id
                similique amet fuga voluptate alias sequi distinctio.
                Consectetur, nisi enim. Expedita, possimus.
              </Text>
            </View>
          </View>
          <View
            style={[i18next.language === 'en' ? Layout.row : Layout.rowReverse]}
          >
            <View style={[Gutters.smallTMargin]}>
              <Text style={[Fonts.fontMed14, { color: Colors.black }]}>
                {t('common:delivery_detail:product')}
              </Text>
              <Text style={[Fonts.fontReg12, { color: Colors.black }]}>
                12345678
              </Text>
            </View>
          </View>
          <View
            style={[
              i18next.language === 'en' ? Layout.row : Layout.rowReverse,
              Layout.justifyContentBetween,
              Layout.alignItemsCenter,
              Gutters.smallTMargin,
            ]}
          >
            <View>
              <Text style={[Fonts.fontMed14, { color: Colors.black }]}>
                {t('common:delivery_detail:seller_store_location')}
              </Text>
              <Text style={[Fonts.fontReg12, { color: Colors.black }]}>
                12345678
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                setbottomSheet({ ...bottomSheet, googleMap: true })
              }
            >
              <Images.svgs.flat />
            </TouchableOpacity>
          </View>
          <View
            style={[
              i18next.language === 'en' ? Layout.row : Layout.rowReverse,
              Layout.justifyContentBetween,
              Layout.alignItemsCenter,
              Gutters.smallTMargin,
            ]}
          >
            <View>
              <Text style={[Fonts.fontMed14, { color: Colors.black }]}>
                {t('common:delivery_detail:shipping_address')}
              </Text>
              <Text style={[Fonts.fontReg12, { color: Colors.black }]}>
                12345678
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                setbottomSheet({ ...bottomSheet, googleMap: true })
              }
            >
              <Images.svgs.flat />
            </TouchableOpacity>
          </View>
          <View
            style={[
              i18next.language === 'en' ? Layout.row : Layout.rowReverse,
              Layout.justifyContentBetween,
              Layout.alignItemsCenter,
              Gutters.smallTMargin,
            ]}
          >
            <View>
              <Text style={[Fonts.fontMed14, { color: Colors.black }]}>
                {t('common:delivery_detail:no_of_products')}
              </Text>
              <Text style={[Fonts.fontReg12, { color: Colors.black }]}>
                12345678
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                setbottomSheet({ ...bottomSheet, productList: true })
              }
            >
              <Images.svgs.help />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {!startDelivery && (
        <View
          style={[
            Layout.justifyContentEnd,
            Layout.alignItemsEnd,
            Gutters.largeTMargin,
          ]}
        >
          <CustomSimpleButton
            title={
              status === 'new'
                ? t('common:request_approval')
                : status === 'pending'
                ? t('common:pending_from_admin')
                : status === 'approved'
                ? t('common:delivery_detail:start_delivery')
                : status === 'denied'
                ? ''
                : t('common:delivered')
            }
            onPress={() => {
              if (status === 'approved') {
                setStartDelivery(true);
              }
            }}
          />
        </View>
      )}

      {startDelivery && (
        <View
          style={[
            Gutters.tinyBMargin,
            i18next.language == 'en' ? Layout.row : Layout.rowReverse,
          ]}
        >
          <CustomSimpleButton
            title={t('common:downloadInvoice')}
            parentContainerStyle={{
              width: sWidth(50) - 20,
            }}
            containerStyle={[
              {
                backgroundColor: Colors.white,
                borderColor: Colors.purple,
                borderWidth: 1,
                width: sWidth(50) - 30,
                // height: 50,
              },
            ]}
            titleStyle={[
              {
                color: Colors.purple,
                // marginVertical: 0,
              },
            ]}
            onPress={() => {}}
          />
          <CustomSimpleButton
            title={t('common:readyToShip')}
            parentContainerStyle={{
              width: sWidth(50) - 20,
            }}
            containerStyle={[
              {
                // backgroundColor: Colors.white,
                // borderColor: Colors.purple,
                // borderWidth: 1,
                width: sWidth(50) - 30,
                // height: 50,
              },
            ]}
            // titleStyle={[

            // ]}
            onPress={() => {}}
          />
        </View>
      )}
      <CustomBottomSheet
        showBottomSheet={bottomSheet.googleMap}
        setShowBottomSheet={() =>
          setbottomSheet({ ...bottomSheet, googleMap: false })
        }
        title={t('common:delivery_detail:seller_store_location_map_view')}
      >
        <View
          style={[
            Layout.selfCenter,
            Layout.overflow,
            {
              width: '90%',
              height: sHight(50),
              borderRadius: 10,
            },
          ]}
        >
          <CustomMap />
        </View>
        <View style={[Gutters.smallHMargin]}>
          <CustomSimpleButton
            title={t('common:delivery_detail:get_direction')}
            onPress={() => setbottomSheet({ ...bottomSheet, googleMap: false })}
          />
        </View>
      </CustomBottomSheet>
      <CustomBottomSheet
        showBottomSheet={bottomSheet.productList}
        setShowBottomSheet={() =>
          setbottomSheet({ ...bottomSheet, productList: false })
        }
        title={t('common:delivery_detail:order_products')}
      >
        <View
          style={[
            Gutters.smallHPadding,
            {
              height: sHight(60),
            },
          ]}
        >
          <OrderProductList />
        </View>
      </CustomBottomSheet>
    </View>
  );
};

export default DeliveryDetailContainer;
