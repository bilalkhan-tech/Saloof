import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { useTranslation } from 'react-i18next';
import RenderCard from './RenderCard';
import { subscriptionList } from '@/utils/DummyData';
const SubscriptionList = () => {
  const { Layout, Fonts, Gutters, Colors } = useTheme();
  const { t } = useTranslation();
  return (
    <View style={[Layout.fill, ,]}>
      <Text style={[Fonts.fontBold16, { color: Colors.purple }]}>
        {t('common:subscription:more_subscription')}
      </Text>
      <View style={[Gutters.tinyTMargin]}>
        <FlatList
          data={subscriptionList}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <RenderCard item={item} index={index} />
          )}
          contentContainerStyle={[Gutters.smallTMargin, {}]}
        />
      </View>
    </View>
  );
};

export default SubscriptionList;
