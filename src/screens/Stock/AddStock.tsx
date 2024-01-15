import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { Colors, FontSize } from '@/theme/Variables';
import fonts from '@/theme/assets/fonts';
import CustomSvgImage from '@/components/CustomSvgImage';

import { useTheme } from '@/hooks';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { JumpingTransition } from 'react-native-reanimated';
import CustomSimpleButton from '@/components/CustomSimpleButton';
import CustomTextInput from '@/components/CustomTextInput';
import CustomHeader from '@/components/CustomHeader';
import CustomDropDown from '@/components/CustomDropDown';
import { sHight } from '@/utils/ScreenDimentions';

const AddStock = ({ navigation }) => {
  const { t } = useTranslation(['common']);

  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme();

  const [selectedDropdown, setSelectedDropdown] = useState({
    label: '',
    value: '',
  });
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
  ];

  const renderTextInputs = text => {
    return (
      <View style={{}}>
        <CustomTextInput
          placeholder={text}
          //   value={loginDetail.password}
          //   onChangeText={(t: any) =>
          //     setLoginDetail({
          //       ...loginDetail,
          //       password: t,
          //     })
          //   }
          secureTextEntry={false}
          placeholderTextColor={Colors.gray1}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <View style={[Gutters.smallVMargin, Gutters.smallHMargin]}>
          <CustomHeader
            back
            backPress={() => navigation.goBack()}
            headerTitle={t('common:addNewStock')}
          />
        </View>

        <ScrollView>
          <View style={{ flex: 1, backgroundColor: Colors.white }}>
            {/* <View style={{ flex: 1, backgroundColor: '', marginTop: 15 }}>
              <FlatList data={textInputs} renderItem={renderTextInputs} />
            </View> */}

            <View style={[Gutters.smallHMargin, {}]}>
              <CustomDropDown
                style={[Gutters.smallBMargin]}
                placeholder={t('common:productName')}
                disable={false}
                value={selectedDropdown}
                setValue={setSelectedDropdown}
                data={data}
              />
              <CustomDropDown
                style={[Gutters.smallBMargin]}
                placeholder={t('common:SKU')}
                disable={false}
                value={selectedDropdown}
                setValue={setSelectedDropdown}
                data={data}
              />
              <CustomDropDown
                style={[Gutters.smallBMargin]}
                placeholder={t('common:storeAddress')}
                disable={false}
                value={selectedDropdown}
                setValue={setSelectedDropdown}
                data={data}
              />
              {renderTextInputs(t('common:quantity'))}
            </View>

          </View>
          <CustomSimpleButton
            title={t('common:addNewStock')}
            // title={t('common:updateStock')}
            parentContainerStyle={[
              // Gutters.smallTMargin,
              Gutters.smallHPadding,
              Gutters.xLittleVPadding,
            ]}
            onPress={() => navigation.navigate('ProductDetailScreen')}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AddStock;

const styles = StyleSheet.create({});
