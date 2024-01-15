import { TouchableOpacity, StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface propTypes {
  title?: string;
  onPress?: any;
}

const SocialButtons = ({ title, onPress }: propTypes) => {
  const { Layout, Gutters, Fonts, Colors, Images } = useTheme();
  return (
    <View>
      <TouchableOpacity
        style={[
          {
            backgroundColor: Colors.white,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: Colors.borderGray,
          },
          Layout.alignItemsCenter,
          Gutters.xLittlePadding,
          Gutters.littleHMargin,
          Gutters.xSmallVMargin,
          Layout.alignItemsCenter,
        ]}
        onPress={onPress}
      >
        {title === 'facebook' ? (
          <Images.svgs.facebook width={sWidth(8.5)} height={sHight(4)} />
        ) : title === 'google' ? (
          <Images.svgs.google width={sWidth(8.5)} height={sHight(4)} />
        ) : (
          <Images.svgs.apple width={sWidth(8.5)} height={sHight(4)} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imgBG: {
    height: sHight(12),
    width: sHight(12),
    backgroundColor: Colors.white,
    // overflow: 'hidden',
    borderRadius: sHight(11),
    borderColor: Colors.purple,
    alignSelf: 'center',
    marginTop: sHight(1),
    marginBottom: sHight(3),
    padding: 8,
    borderWidth: 2,
  },
  img: {
    width: sHight(12),
    height: sHight(12),
    resizeMode: 'contain',
  },

  cameraBG: {
    backgroundColor: Colors.purple,
    padding: sHight(1),
    borderRadius: 50,
    bottom: -10,
    right: 0,
    zIndex: 1,
  },
});

export default SocialButtons;
