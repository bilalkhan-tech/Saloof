import React from 'react';
import { FlatList } from 'react-native';
import RenderCards from './RenderCards';

type Props = {
  data?: Array<Object>;
};

const OrderProductList = ({ data }: Props) => {
  return (
    <FlatList
      data={[0, 1, 2, 3]}
      showsVerticalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item, index }: any) => (
        <RenderCards item={item} index={index} />
      )}
    />
  );
};

export default OrderProductList;
