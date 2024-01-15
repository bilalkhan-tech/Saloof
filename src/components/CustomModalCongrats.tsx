import { useKeyboard } from '@/helpers/KeyboardHeight';
import { useTheme } from '@/hooks';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import i18next from 'i18next';
import React, { ReactNode, useEffect, useState } from 'react';
import { Keyboard, Platform } from 'react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import CustomSimpleButton from './CustomSimpleButton';

interface ICustomModalCongrats {
  isShow: boolean;
  children?: ReactNode;
  setIsShow?: CallableFunction;
  height?: Number;
  title?: string;
  description?: string;
}

const CustomModalCongrats = ({
  isShow,
  children,
  height,
  title,
  description,
  setIsShow,
}: ICustomModalCongrats) => {
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
    <Modal
      isVisible={isShow}
      // animationInTiming={500}
      style={{
        padding: 0,
        margin: 0,
        justifyContent: 'center',
        backgroundColor: 'transparent',
      }}
    // animationIn={'slideInUp'}
    >
      <View style={[Gutters.littleBMargin]} >
        <Images.svgs.PatternStars width={sWidth(100)} height={sHight(13)} />
      </View>
      <View style={[

        Gutters.smallHMargin,
        {
          backgroundColor: Colors.white,
          borderRadius: 20,
        }]} >
        <View style={{ position: 'absolute', top: -sHight(7), alignItems: 'center', width: "100%" }} >
          <View
            style={{
              height: 100, width: 100, backgroundColor: Colors.white,
              justifyContent: 'center', alignItems: 'center', borderRadius: 50
            }}
          >
            <View
              style={{
                height: 80, width: 80, backgroundColor: Colors.GrayF3F4F6,
                justifyContent: 'center', alignItems: 'center', borderRadius: 50
              }}
            >
              <View style={{}}>
                <Images.svgs.ShoppingBag width={sWidth(15)} height={sHight(15)} />
              </View>
            </View>

          </View>

        </View>
        <View
          style={[
            Gutters.regularHPadding,
          ]}
        >
          <View
            style={[
              Gutters.xSmallVPadding,
              // i18next.language == 'en' ? Layout.row : Layout.rowReverse,
              Layout.justifyContentBetween,
              Layout.alignItemsCenter,
            ]}
          >
            <Text style={[Fonts.fontBold20, Gutters.smallTMargin, { color: Colors.purple }]}>
              {title}
            </Text>
            {
              description &&
              <Text style={[Fonts.fontReg14, { color: Colors.Gray9CA3AF }]}>
                {description}
              </Text>
            }

          </View>
          {children}
          <CustomSimpleButton
            title={t('common:okay')}
            parentContainerStyle={[
              // Gutters.smallTMargin,
              Gutters.xLittleVPadding,
            ]}
            onPress={() => { setIsShow(false) }}
          />
          {Platform.OS == 'ios' && KeyBoardStatus && (
            <View style={{ height: keyboardHeight }} />
          )}
        </View>

      </View>
    </Modal>
  );
};

export default CustomModalCongrats;
