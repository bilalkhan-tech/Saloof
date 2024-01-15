import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import CustomHeader from '@/components/CustomHeader';
import i18next from 'i18next';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import DetailCard from './DetailCard';
import ProductImages from './ProductImages';
import AboutProduct from './AboutProduct';

type Props = {
  navigation: any;
};

const ProductDetailContainer = ({ navigation }: Props) => {
  const { Layout, Gutters, Images, Colors, Fonts } = useTheme();

  return (
    <View
      style={[
        Layout.fill,
        Gutters.smallHPadding,
        { backgroundColor: Colors.gray4 },
      ]}
    >
      <CustomHeader
        headerTitle={t('common:product_detail')}
        back={true}
        backPress={() => navigation.goBack()}
      />
      <View style={[Layout.fill, {}]}>
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          style={[Layout.fill]}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <DetailCard
            addToCart={() => {}}
            detail={`Our tomato sauce with mozzarella, sliced onions, green peppers,chopped tomatoes, juicy sweetcorn and chestnut mushrooms`}
            title={' Garden Party'}
            price={' 255.0 SAR'}
          />
          <ProductImages
            data={[
              {
                image: require('../../theme/assets/images/iPhoneDummy.png'),
              },
              {
                image: require('../../theme/assets/images/iphone.png'),
              },
              {
                image: require('../../theme/assets/images/iPhoneDummy.png'),
              },
              {
                image: require('../../theme/assets/images/iphone.png'),
              },
              {
                image: require('../../theme/assets/images/iPhoneDummy.png'),
              },
            ]}
          />
          <AboutProduct
            _id={'12345'}
            category={'mobile'}
            subCatagory={'iphone'}
            weight={'200g'}
            length={'6inch'}
            height={'5inch'}
            color={'black'}
            description={'description'}
            size={'100g'}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default ProductDetailContainer;
