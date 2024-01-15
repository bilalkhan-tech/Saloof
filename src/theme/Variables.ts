/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { ThemeNavigationColors } from '../../@types/theme';

/**
 * Colors
 */
export const Colors = {
  transparent: 'rgba(0,0,0,0)',
  white: '#ffffff',
  purple: '#8F53C0',
  purpleSelectedButton: '#B979ED',
  purpledeSelectedButton: '#EBD2FF',
  gray: '#828587',
  gray1: '#9CA3AF',
  gray2: '#6B7280',
  gray3: '#4E4E4E',
  gray4: '#F9F8F8',
  lightGray: '#F9FAFB',
  borderGray: '#E5E7EB',
  inputGray: '#F5F5F5',
  activeButtonBlack: '#2D3032',
  darkBlue: '#1D3A70',

  purple1: '#BB4D2A',
  purple2: '#F2C66B',
  purple3: '#F08A57',
  purple4: '#E8CBFF',
  black: '#000000',
  GrayBlack: '0B0A0C',
  Gray60: 'rgba(11, 10, 12, 0.6)',
  Gray40: 'rgba(11, 10, 12, 0.4)',
  Gray10: 'rgba(11, 10, 12, 0.1)',
  GrayLite: 'rgba(248, 249, 250, 1)',
  Purple8F53C0: '#8F53C0',
  purpleF3E4FF: '#F3E4FF',
  GrayF9F8F8: '#F9F8F8',
  Gray9CA3AF: '#9CA3AF',
  Gray696969: '#696969',
  Green: '#3DB115',
  GreenLight: '#dff6b9',
  Gray979797: '#979797',
  GrayF2F2F2: '#F2F2F2',
  lightBackGray: '#F1F1F1',
  GrayF5F5F5: '#F5F5F5',
  black111819: '#111819',
  GrayA0A3A3: '#A0A3A3',
  GrayECECEC: '#ECECEC',
  GrayF0F0F0: '#F0F0F0',
  GrayE5E5E5: '#E5E5E5',
  GrayE2E2E2: '#E2E2E2',
  LightPinkEBE4F0: '#EBE4F0',
  GrayBlack555455: '#555455',
  textGray0B0A0C: '#0B0A0C',
};

export const NavigationColors: Partial<ThemeNavigationColors> = {
  // primary: Colors.primary,
  background: '#EFEFEF',
  card: '#EFEFEF',
};

/**
 * FontSize
 */
export const FontSize = {
  tiny: 14,
  small: 16,
  regular: 20,
  large: 40,
  font_10: 10,
  font_12: 12,
  font_14: 14,
  font_16: 16,
  font_18: 18,
  font_20: 20,
  font_22: 22,
};

/**
 * Metrics Sizes
 */
const tiny = 5;
const little = 10;
const xLittle = 15;
const small = 20;
const xSmall = 25;
const regular = 30;
const xRegular = 35;
const large = 40;
const xLarge = 45;
const extraLarge = 50;

export const MetricsSizes = {
  tiny,
  little,
  xLittle,
  small,
  xSmall,
  regular,
  xRegular,
  large,
  xLarge,
  extraLarge,
};

export const allUserTypes = {
  Buyer: 'buyer',
  Driver: 'Driver',
  Supplier: 'seller',
};

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
};
