import { useTheme } from '@/hooks';
import { favourite_list } from '@/utils/DummyData';
import React from 'react';
import { FlatList, View } from 'react-native';

import CustomFavCard from '@/components/CustomFavCard';

const ProductsBuyerList = () => {
  const { Layout, Gutters } = useTheme();

  return (
    <View style={[Layout.fill, Gutters.xLittleTMargin]}>
      <FlatList
        data={favourite_list}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item, i }: any) => (
          <CustomFavCard
            addToCartPress={() => {}}
            title={item.title}
            index={i}
            products={item?.products}
          />
        )}
      />
    </View>
  );
};

export default ProductsBuyerList;
