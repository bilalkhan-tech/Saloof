import { useTheme } from '@/hooks';
import { invoice_data } from '@/utils/DummyData';
import { sWidth } from '@/utils/ScreenDimentions';
import i18next from 'i18next';
import moment from 'moment';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';

const List = () => {
  const { Layout, Gutters, Colors, Fonts } = useTheme();
  const {
    paymentinvoices: { buttonStatus },
  }: any = useSelector(state => state);

  const renderItem = ({ item, index }: any) => {
    return (
      <View
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
            {index + 1}.{' '}
            {buttonStatus === 'billed'
              ? `INV-${item?.invoice_number}`
              : item?.invoice_number}
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
            {t('common:payment_invoices:commission')}
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
        {buttonStatus === 'billed' ? (
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
                {t('common:payment_invoices:total_order')}
              </Text>
              <Text style={[Fonts.fontReg14, { color: Colors.gray1 }]}>
                {item?.total_orders}
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
              <Text
                style={[
                  Fonts.fontReg12,
                  Gutters.tinyTMargin,
                  { color: Colors.black },
                ]}
              >
                {t('common:payment_invoices:bill_date')}
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
              <Text
                style={[
                  Fonts.fontReg12,
                  Gutters.tinyTMargin,
                  { color: Colors.black },
                ]}
              >
                {t('common:payment_invoices:payment_status')}
              </Text>
              <Text style={[Fonts.fontReg12, { color: Colors.black }]}>
                {item?.payment_status}
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
              <Text
                style={[
                  Fonts.fontReg12,
                  Gutters.tinyTMargin,
                  { color: Colors.black },
                ]}
              >
                {t('common:payment_invoices:payment_date')}
              </Text>
              <TouchableOpacity
                style={{ borderBottomWidth: 1, borderColor: Colors.black }}
                activeOpacity={0.8}
                onPress={() => {}}
              >
                <Text
                  style={[
                    Fonts.fontMed14,
                    {
                      color: Colors.black,
                    },
                  ]}
                >
                  {t('common:payment_invoices:download_invoice')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
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
              {t('common:payment_invoices:delivery_time')}
            </Text>
            <Text style={[Fonts.fontReg12, { color: Colors.black }]}>
              {moment().format('DD-MM-YYY')}
            </Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={[{ flex: 0.9 }]}>
      <FlatList
        data={invoice_data}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(_, i) => i.toString()}
      />
    </View>
  );
};

export default List;
