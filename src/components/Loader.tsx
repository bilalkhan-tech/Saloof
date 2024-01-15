import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { sHight } from '@/utils/ScreenDimentions';
import { useTheme } from '@/hooks';

const Loader = () => {
  const { Colors } = useTheme();
  return (
    <ActivityIndicator
      style={{
        height: sHight(100),
        backgroundColor: '#000000ab',
      }}
      size="large"
      color={Colors.purpleF3E4FF}
    />
  );
};

export default Loader;

const styles = StyleSheet.create({});
