import { useTheme } from '@/hooks';
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomRadioButton = ({ options, defaultSelected, onSelect }) => {
  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme();

  const [selectedOption, setSelectedOption] = useState(defaultSelected);

  const handleSelect = option => {
    console.log('option ::::: ', option);
    setSelectedOption(option);
    onSelect(option);
    // Implement any other logic needed on selection
  };
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.radioButton,
            Layout.fullWidth,
            Gutters.smallPadding,
            {
              backgroundColor:
                selectedOption.label === option.label
                  ? Colors.purpledeSelectedButton
                  : Colors.inputGray,
              borderRadius: 15,
              borderColor:
                selectedOption.label === option.label
                  ? Colors.purple
                  : Colors.inputGray,
              borderWidth: 1,
            },
          ]}
          onPress={() => handleSelect(option)}
        >
          <View
            style={[
              styles.radioButtonCircle,
              {
                borderColor:
                  selectedOption.label === option.label
                    ? Colors.purple
                    : Colors.gray1,
              },
            ]}
          >
            {selectedOption.label === option.label && (
              <View
                style={[
                  styles.radioButtonCheckedCircle,
                  {
                    backgroundColor:
                      selectedOption.label === option.label
                        ? Colors.purple
                        : Colors.gray1,
                  },
                ]}
              />
            )}
          </View>
          <View
            style={[Layout.row, Layout.justifyContentBetween, { width: '90%' }]}
          >
            <Text
              style={[
                styles.radioButtonLabel,
                Fonts.fontReg18,
                { fontWeight: 'bold' },
              ]}
            >
              {option.label}
            </Text>
            <Text
              style={[Fonts.fontReg16, { color: '#333' }]}
            >{`(${option.value})`}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  radioButtonCircle: {
    height: 20,
    width: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioButtonCheckedCircle: {
    width: 10,
    height: 10,
    borderRadius: 7,
    backgroundColor: '#000',
  },
  radioButtonLabel: {
    fontSize: 16,
    color: '#000',
  },
});

export default CustomRadioButton;
