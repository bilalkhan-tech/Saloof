import { useTheme } from '@/hooks';
import i18next from 'i18next';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  children: ReactNode;
  title: string;
  data: Array<Object>;
};

const ItemRender = ({ children, data, title }: Props) => {
  const { Layout, Images, Colors, Gutters, Fonts } = useTheme();
  const [scrollToIndex, setScrollToIndex] = useState(0);
  const ref = useRef<ScrollView>(null);

  const handleScrollClick = (offsetX: number) => {
    if (ref.current) {
      ref.current.scrollTo({ x: offsetX, y: 0, animated: true });
    }
  };

  return (
    <View style={[Gutters.smallPadding]}>
      <View
        style={[
          i18next.language === 'en' ? Layout.row : Layout.rowReverse,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
        ]}
      >
        <Text style={[Fonts.fontBold20, { color: Colors.black }]}>{title}</Text>
        <View
          style={[
            i18next.language === 'en' ? Layout.row : Layout.rowReverse,
            Layout.justifyContentBetween,
            Layout.alignItemsCenter,
            {},
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              if (data.length === 0) {
                return;
              }
              handleScrollClick(0);
            }}
            style={[
              Gutters.littleRMargin,
              Gutters.littlePadding,
              Layout.center,
              { borderRadius: 5, backgroundColor: Colors.LightPinkEBE4F0 },
            ]}
          >
            <Images.svgs.leftarrow fill={Colors.white} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              if (scrollToIndex === 0) {
                return;
              }
              handleScrollClick(150);
            }}
            style={[
              Gutters.littlePadding,

              Layout.center,
              { borderRadius: 5, backgroundColor: Colors.purple },
            ]}
          >
            <Images.svgs.rightarrow
              style={[{ color: Colors.white }]}
              fill={Colors.purple}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={[Gutters.smallTMargin]}>
        <ScrollView
          pagingEnabled
          ref={ref}
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          {children}
        </ScrollView>
      </View>
      {/* <FlatList
        data={browseData}
        horizontal
        initialScrollIndex={initalCard}
        scrollToIndex={() => setInitialcard(initalCard + 1)}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderItem}
      /> */}
    </View>
  );
};

export default ItemRender;

const styles = StyleSheet.create({});
