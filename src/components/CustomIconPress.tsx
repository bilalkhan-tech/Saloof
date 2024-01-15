import { useTheme } from '@/hooks';
import React, { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  counter: number;
  images: any;
  onPress: CallableFunction;
  showCount: boolean;
};

const CustomIconPress = ({
  counter,
  showCount = false,
  images,
  onPress,
}: Props) => {
  const { Colors, Layout } = useTheme();
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      {showCount && (
        <View
          style={[
            Layout.absolute,
            Layout.center,
            {
              backgroundColor: Colors.purple,
              borderRadius: 20,
              width: 15,
              height: 15,
              top: -3,
              left: -13,
            },
          ]}
        >
          <Text style={[{ fontSize: 10, color: Colors.white }]}>
            {counter >= 0 ? `${0}` : `${0}+`}
          </Text>
        </View>
      )}

      {images}
    </TouchableOpacity>
  );
};

export default CustomIconPress;

const styles = StyleSheet.create({});
