import {
  View,
  Text,
  Modal,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { useTheme } from '@/hooks';
import CustomButton from './CustomButton';
import { sWidth } from '@/utils/ScreenDimentions';
import CustomSimpleButton from './CustomSimpleButton';

interface PROPS {
  headerText: string;
  buttonTypes: 'single' | 'double';
  children: React.ReactNode;
  BtnOnePress: () => void;
  BtnTwoPress?: () => void;
  firstBtnName?: string;
  secondBtnName?: string;
}
export type modalTypes = {
  show: () => void;
  hide: () => void;
};

const CustomModal = forwardRef<modalTypes, PROPS>(
  (
    {
      headerText,
      buttonTypes,
      children,
      BtnOnePress,
      BtnTwoPress,
      firstBtnName = 'OK',
      secondBtnName = 'CANCEL',
    },
    ref,
  ) => {
    const { Layout, Gutters, Fonts, Colors, Images } = useTheme();
    const [isModalVisible, setModalVisible] = useState(false);
    useImperativeHandle(ref, () => ({
      show() {
        setModalVisible(true);
      },
      hide() {
        setModalVisible(false);
      },
    }));

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    const Button = ({ title, onPress }) => {
      return (
        <TouchableOpacity
          style={[
            Layout.center,
            Gutters.xSmallHPadding,
            {
              backgroundColor: Colors.purple,
              height: 50,
              borderRadius: 25,
              minWidth: '30%',
            },
          ]}
          onPress={onPress}
        >
          <Text
            style={[Fonts.fontMed14, Fonts.textCenter, { color: Colors.white }]}
          >
            {title}
          </Text>
        </TouchableOpacity>
      );
    };
    return (
      <View>
        <Modal
          animationType="slide"
          statusBarTranslucent
          transparent={true}
          visible={isModalVisible}
          // onRequestClose={() => {
          //   setModalVisible(!isModalVisible);
          // }}
        >
          <Pressable
            onPress={() => {
              Keyboard.dismiss();
              setModalVisible(!isModalVisible);
            }}
            style={[
              Layout.fill,
              Layout.center,
              { backgroundColor: 'rgba(0, 0, 0, 0.35)' },
            ]}
          >
            <TouchableOpacity
              activeOpacity={1}
              style={[
                Layout.alignItemsCenter,
                Gutters.smallVPadding,
                {
                  backgroundColor: Colors.white,
                  width: sWidth(85),
                  borderRadius: 15,
                  overflow: 'hidden',
                },
              ]}
            >
              <Text style={[Fonts.fontBold20, { color: Colors.purple }]}>
                {headerText}
              </Text>

              <View style={[Gutters.xLittleVMargin, Layout.fullWidth]}>
                {children}
              </View>
              <View
                style={[
                  Layout.row,
                  Layout.justifyContentCenter,
                  Layout.fullWidth,
                  Gutters.regularHPadding,
                ]}
              >
                {buttonTypes == 'double' ? (
                  <>
                    <Button onPress={BtnOnePress} title={firstBtnName} />
                    <View style={[Layout.center, { width: 50 }]}>
                      <View
                        style={{
                          height: 40,
                          borderLeftWidth: 2,
                          borderColor: Colors.Gray10,
                        }}
                      />
                    </View>
                    <Button onPress={BtnTwoPress} title={secondBtnName} />
                  </>
                ) : (
                  <Button onPress={BtnOnePress} title={firstBtnName} />
                )}
              </View>
            </TouchableOpacity>
          </Pressable>
        </Modal>
      </View>
    );
  },
);

export default CustomModal;
const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
