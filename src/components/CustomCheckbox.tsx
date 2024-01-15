import { useTheme } from '@/hooks';
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'; // Make sure to install and import appropriate icon library

const CustomCheckbox = ({ onChildAction }: any) => {
  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme();
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    onChildAction(setIsChecked(!isChecked));
  };

  return (
    <View style={[Layout.row, Gutters.xLittleTMargin]}>
      <TouchableOpacity
        onPress={toggleCheckbox}
        style={[styles.checkboxContainer]}
      >
        <View style={[styles.checkbox, { backgroundColor: '#DCDCDC' }]}>
          {isChecked && (
            <View>
              <Images.svgs.tick />
            </View>
          )}
        </View>
      </TouchableOpacity>
      <View style={[Layout.row, Gutters.littleLMargin]}>
        <Text style={[Fonts.fontReg14, { color: Colors.black }]}>
          I agree to all{' '}
        </Text>
        <TouchableOpacity onPress={() => console.log('Privacy Policy')}>
          <Text
            style={[
              Fonts.fontReg14,
              {
                color: Colors.black,
                textDecorationLine: 'underline',
              },
            ]}
          >
            privacy policy
          </Text>
        </TouchableOpacity>
        <Text style={[Fonts.fontReg14, { color: Colors.black }]}> and </Text>
        <TouchableOpacity onPress={() => console.log('Privacy Policy')}>
          <Text
            style={[
              Fonts.fontReg14,
              { color: Colors.black, textDecorationLine: 'underline' },
            ]}
          >
            terms of use.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 22,
    height: 22,
    // borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default CustomCheckbox;
