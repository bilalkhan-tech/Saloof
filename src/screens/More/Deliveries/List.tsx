import { useTheme } from '@/hooks';
import { invoice_data } from '@/utils/DummyData';
import { sWidth } from '@/utils/ScreenDimentions';
import i18next from 'i18next';
import moment from 'moment';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

type TList = {
  navigation: any;
  status: string;
};

const List = ({ navigation, status }: TList) => {
  const { Layout, Gutters, Colors, Fonts } = useTheme();
  const {
    paymentinvoices: { buttonStatus },
  }: any = useSelector(state => state);

  const renderItem = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DeliveryDetailContainer', {
            _id: '',
            status,
          })
        }
        key={index}
        style={[
          Gutters.smallPadding,

          {
            marginTop: index === 0 ? 0 : 10,
            borderRadius: 10,
            backgroundColor: Colors.gray4,
          },
        ]}
      >
        <View
          style={[i18next.language === 'en' ? Layout.row : Layout.rowReverse]}
        >
          <Text style={[Fonts.fontBold16, { color: Colors.purple }]}>
            {index + 1}. {item?.invoice_number}
          </Text>
        </View>
        <View
          style={[
            i18next.language === 'en' ? Layout.row : Layout.rowReverse,
            Layout.justifyContentBetween,
            Layout.alignItemsCenter,
          ]}
        >
          <Text
            style={[
              Fonts.fontReg12,
              Gutters.tinyTMargin,
              { color: Colors.gray1 },
            ]}
          >
            {t('common:invoices_deliveries:to')}
            <Text style={[Fonts.fontMed12, { color: Colors.black }]}>
              {' '}
              {'Jeddah'}
            </Text>
          </Text>
          <Text
            style={[
              Fonts.fontBold16,
              { fontSize: sWidth(4), color: Colors.purple },
            ]}
          >
            {item?.commision} SAR
          </Text>
        </View>

        <View style={[Layout.fullWidth]}>
          <View
            style={[
              i18next.language === 'en' ? Layout.row : Layout.rowReverse,
              Layout.justifyContentBetween,

              Layout.fullWidth,
              Layout.alignItemsCenter,
            ]}
          >
            <Text
              style={[
                Fonts.fontReg12,
                Gutters.tinyTMargin,
                { color: Colors.black },
              ]}
            >
              {t('common:invoices_deliveries:buyer')}
              <Text style={[Fonts.fontMed14, { color: Colors.black }]}>
                {' '}
                {'Ahmed Ali'}
              </Text>
            </Text>
            <Text style={[Fonts.fontReg12, { color: Colors.black }]}>
              {moment().format('DD-MM-YYYY')}
            </Text>
          </View>
          <View
            style={[
              i18next.language === 'en' ? Layout.row : Layout.rowReverse,
              Layout.justifyContentBetween,
              Layout.fullWidth,
              Layout.alignItemsCenter,
            ]}
          >
            <View>
              <Text
                style={[
                  Fonts.fontReg12,
                  Gutters.tinyTMargin,
                  { color: Colors.black },
                ]}
              >
                {t('common:number_of_products')}: {123}
                {/* <Text style={[Fonts.fontMed14, { color: Colors.black }]}>
                  {' '}
                  {t('common:invoices_deliveries:in_progress')}
                </Text> */}
              </Text>
              {/* <Text style={[Fonts.fontMed14, { color: Colors.black }]}>
                {t('common:invoices_deliveries:shipping_fee')} {'50 SAR'}
              </Text> */}
            </View>
            <Text style={[Fonts.fontReg12, { color: Colors.black }]}>
              {'Express Shipping'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[{ flex: 0.9 }]}>
      <FlatList
        data={invoice_data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
      />
    </View>
  );
};

export default List;
