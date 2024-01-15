import { StyleSheet, Text, View } from 'react-native';
import React, { SetStateAction } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { useTheme } from '@/hooks';
import { sWidth } from '@/utils/ScreenDimentions';
import { Colors } from '@/theme/Variables';
import { StyleProps } from 'react-native-reanimated';
import i18next from 'i18next';

interface PROPS {
  value: { label: string; value: string };
  setValue: React.Dispatch<SetStateAction<{ label: string; value: string }>>;
  disable: boolean;
  placeholder: string;
  data: {
    label: string;
    value: string;
  }[];
  style?: StyleProps;
  position: 'auto' | 'bottom' | 'top';
}

const CustomDropDown = ({
  data,
  value,
  setValue,
  disable = false,
  placeholder,
  position,
  style,
}: PROPS) => {
  const { Layout, Gutters, Fonts, Colors, Images } = useTheme();

  return (
    <Dropdown
      disable={disable}
      placeholder={placeholder ? placeholder : undefined}
      placeholderStyle={[
        Fonts.fontReg16,
        { color: Colors.Gray9CA3AF, textTransform: 'capitalize' },
      ]}
      dropdownPosition={position}
      style={[
        Gutters.littleVPadding,
        Gutters.smallHPadding,
        styles.containerStyle,
        {
          width: sWidth(100) - 40,
          borderRadius: 10,
          backgroundColor: Colors.GrayF5F5F5,
        },
        style,
      ]}
      selectedTextStyle={[
        Fonts.fontReg16,
        { color: Colors.black, textTransform: 'capitalize' },
      ]}
      itemTextStyle={[
        Fonts.fontReg16,
        {
          color: Colors.black,
          textTransform: 'capitalize',
        },
      ]}
      itemContainerStyle={[
        {
          backgroundColor: Colors.transparent,
          width: '98%',
        },
      ]}
      containerStyle={[
        {
          borderColor: Colors.white,
          backgroundColor: Colors.white,
        },
      ]}
      data={data}
      maxHeight={300}
      labelField="label"
      valueField="value"
      searchPlaceholder="Search..."
      value={value}
      onChange={item => {
        setValue(item);
      }}
      renderRightIcon={() =>
        i18next.language == 'en' ? (
          <View style={[Layout.center]}>
            <Images.svgs.DropdownArrowDown height={12} width={12} />
          </View>
        ) : null
      }
      renderLeftIcon={() =>
        i18next.language == 'en' ? null : (
          <View style={[Layout.center]}>
            <Images.svgs.DropdownArrowDown height={12} width={12} />
          </View>
        )
      }
    />
  );
};

export default CustomDropDown;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: Colors.purpleF3E4FF,
    width: sWidth(35),
    borderColor: Colors.Purple8F53C0,
  },
});
