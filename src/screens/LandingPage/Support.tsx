import {
  StyleSheet,
  Text,
  Linking,
  View,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import i18next from 'i18next';

type Props = {};

const Support = (props: Props) => {
  const { Fonts, Gutters, Layout, Images, Colors } = useTheme();
  return (
    <View
      style={[
        i18next.language === 'en' ? Layout.row : Layout.rowReverse,
        Gutters.smallPadding,
        Layout.alignItemsCenter,
      ]}
    >
      <View>
        <Text style={[Fonts.fontBold16, { color: Colors.black }]}>
          {t('common:support')}
        </Text>
        <View style={[Layout.col, Layout.justifyContentBetween]}>
          <Text
            style={[
              Fonts.fontReg12,
              Gutters.littleVMargin,
              { color: Colors.GrayBlack555455 },
            ]}
          >
            1235 Market Street, Auckland, 012234, New Zealand.{' '}
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              Linking.canOpenURL('message:')
                .then(supported => {
                  if (!supported) {
                    alert('Cant handle url');
                  } else {
                    return Linking.openURL(`mailto:example@domain.com`);
                  }
                })
                .catch(err => {
                  console.error('An error occurred', err);
                });
            }}
            style={[
              i18next.language === 'en' ? Layout.row : Layout.rowReverse,
              Layout.alignItemsCenter,
            ]}
          >
            <Images.svgs.mail />
            <Text
              style={[
                Fonts.fontReg12,
                Gutters.littleVMargin,
                Gutters.littleLMargin,
                { color: Colors.GrayBlack555455 },
              ]}
            >
              example@domain.com
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              let phoneNumber = '';
              if (Platform.OS !== 'android') {
                phoneNumber = `telprompt: (+01) 123-456-7890`;
              } else {
                phoneNumber = `tel: (+01) 123-456-7890`;
              }
              Linking.canOpenURL(phoneNumber)
                .then(supported => {
                  if (!supported) {
                    Alert.alert('Phone number is not available');
                  } else {
                    return Linking.openURL(phoneNumber);
                  }
                })
                .catch(err => console.log(err));
            }}
            style={[
              i18next.language === 'en' ? Layout.row : Layout.rowReverse,
              Layout.alignItemsCenter,
            ]}
          >
            <Images.svgs.call />
            <Text
              style={[
                Fonts.fontReg12,
                Gutters.littleVMargin,
                Gutters.littleLMargin,
                { color: Colors.GrayBlack555455 },
              ]}
            >
              (+01) 123-456-7890
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Support;

const styles = StyleSheet.create({});
