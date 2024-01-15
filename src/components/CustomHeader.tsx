/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/require-default-props */
import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import { CustomHeaderProps } from '@/components';
import i18next from 'i18next';

interface PROPS {
  headerTitle?: string;
  back?: boolean;
  backPress?: () => void;
  marginTop?: number;
}

const CustomHeader = ({
  headerTitle,
  topRight,
  back,
  backPress,
  skipPress,
  marginTop,
}: CustomHeaderProps) => {
  const { Layout, Gutters, Fonts, Colors, Images } = useTheme();

  return (
    <View
      style={[
        i18next.language == 'en' ? Layout.row : Layout.rowReverse,
        Layout.justifyContentCenter,
        Layout.alignItemsCenter,
        {
          marginTop: marginTop,
          width: '100%',

          height: sHight(8),
        },
      ]}
    >
      {back && (
        <TouchableOpacity
          onPress={backPress}
          style={[Layout.absolute, { left: 0 }]}
        >
          <View
            style={[
              Gutters.tinyPadding,
              {
                borderWidth: 1.5,
                borderColor: Colors.borderGray,
                borderRadius: 12,
              },
            ]}
          >
            <Images.svgs.backArrow
              width={sWidth(6)}
              height={sWidth(6)}
              style={{
                transform: [
                  { rotate: i18next.language == 'en' ? '180deg' : '0deg' },
                ],
              }}
            />
          </View>
        </TouchableOpacity>
      )}
      <View style={[]}>
        <Text
          style={[Fonts.fontReg18, { fontWeight: '700', color: Colors.purple }]}
        >
          {headerTitle}
        </Text>
      </View>
      <View style={[Layout.absolute, { right: 0 }]}>
        {topRight && (
          <TouchableOpacity onPress={skipPress}>
            <Text
              style={[
                Fonts.fontReg14,
                { fontWeight: 'bold', color: Colors.purple },
              ]}
            >
              Skip
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomHeader;
