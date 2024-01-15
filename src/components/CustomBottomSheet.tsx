import { useKeyboard } from '@/helpers/KeyboardHeight';
import { useTheme } from '@/hooks';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import i18next from 'i18next';
import React, { ReactNode, useEffect, useState } from 'react';
import { Keyboard, Platform } from 'react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

interface ICustomBottomSheet {
  showBottomSheet: boolean;
  children: ReactNode;
  setShowBottomSheet: CallableFunction;
  height?: Number;
  title: string;
}

const CustomBottomSheet = ({
  showBottomSheet,
  children,
  height,
  title,
  setShowBottomSheet,
}: ICustomBottomSheet) => {
  const { Layout, Images, Fonts, Gutters, Colors } = useTheme();
  const [KeyBoardStatus, setKeyBoardStatus] = useState(false);
  const keyboardHeight = useKeyboard();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyBoardStatus(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyBoardStatus(false);
      },
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <TouchableWithoutFeedback
      style={[Layout.fill]}
      onPress={() => setShowBottomSheet(!showBottomSheet)}
    >
      <Modal
        isVisible={showBottomSheet}
        animationInTiming={500}
        style={{
          padding: 0,
          margin: 0,
          justifyContent: 'flex-end',
          backgroundColor: 'transparent',
        }}
        animationIn={'slideInUp'}
      >
        <View
          style={[
            Layout.fullWidth,
            Gutters.smallHPadding,
            Platform.OS == 'ios' ? Gutters.smallBPadding : undefined,
            {
              borderTopRightRadius: 40,
              borderTopLeftRadius: 40,
              flexDirection: 'column',
              backgroundColor: Colors.white,
            },
          ]}
        >
          <View
            style={[
              Gutters.xSmallVPadding,
              i18next.language == 'en' ? Layout.row : Layout.rowReverse,
              Layout.justifyContentBetween,
              Layout.alignItemsCenter,
            ]}
          >
            <Text style={[Fonts.fontBold18, { color: Colors.purple }]}>
              {title}
            </Text>
            <TouchableOpacity
              style={[Gutters.tinyPadding]}
              onPress={() => setShowBottomSheet(false)}
            >
              <Images.svgs.CloseIcon width={sWidth(4.5)} height={sHight(4.5)} />
            </TouchableOpacity>
          </View>
          {children}
          {Platform.OS == 'ios' && KeyBoardStatus && (
            <View style={{ height: keyboardHeight }} />
          )}
        </View>
      </Modal>
    </TouchableWithoutFeedback>
  );
};

export default CustomBottomSheet;
