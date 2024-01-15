import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { favourite_list } from '@/utils/DummyData';

import CustomFavCard from '@/components/CustomFavCard';

const FavouritesList = () => {
  const { Layout, Gutters } = useTheme();
  return (
    <View style={[Layout.fill, Gutters.xLittleTMargin]}>
      <FlatList
        data={favourite_list}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item, i }: any) => (
          <CustomFavCard
            cartIconPress={() => {}}
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

export default FavouritesList;
