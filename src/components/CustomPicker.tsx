import { useTheme } from '@/hooks';
import { setFilterShipping } from '@/store/shipping';
import { sHight } from '@/utils/ScreenDimentions';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

type TCustomPicker = {
  data: Array<Object>;
  title: string;
  customStyle?: any;
};

const CustomPicker = ({ data, customStyle, title }: TCustomPicker) => {
  const { Layout, Gutters, Images, Colors, Fonts } = useTheme();
  const [openPicker, setopenPicker] = useState(false);
  const {
    shipping: { filterText },
  }: any = useSelector(state => state);

  const dispatch = useDispatch();
  return (
    <>
      <TouchableOpacity
        onPress={() => setopenPicker(!openPicker)}
        style={[
          Layout.fullWidth,
          Layout.row,
          Gutters.smallPadding,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
          { backgroundColor: Colors.gray4, borderRadius: 10 },
          customStyle,
        ]}
      >
        <Text style={[Fonts.fontReg16, { color: Colors.Gray9CA3AF }]}>
          {filterText ? filterText : title}
        </Text>
        <Images.svgs.arrowDown />
      </TouchableOpacity>
      {openPicker && (
        <View
          style={[
            Layout.fullWidth,
            {
              borderBottomWidth: 1,
              borderLeftWidth: 1,
              borderRightWidth: 1,
              maxHeight: sHight(20),
              overflow: 'hidden',
              borderColor: Colors.Gray10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            },
          ]}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {data?.map((item, i) => {
              return (
                <TouchableOpacity
                  key={`index-${i}`}
                  activeOpacity={0.8}
                  onPress={() => {
                    dispatch(setFilterShipping(item));
                    setopenPicker(false);
                  }}
                  style={[Layout.fullWidth, Gutters.smallPadding]}
                >
                  <Text style={[Fonts.fontMed12, { color: Colors.Gray9CA3AF }]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default CustomPicker;
