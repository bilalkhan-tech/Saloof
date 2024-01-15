/**
 * This file contains all application's style relative to fonts
 */
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet } from 'react-native';
import { ThemeVariables } from '../../@types/theme';
import fonts from './assets/fonts';
import i18next from 'i18next';
import { sHight } from '@/utils/ScreenDimentions';

export default function ({ FontSize, Colors }: ThemeVariables) {
  return StyleSheet.create({
    //Thin 100
    //Light 300
    //Regular 400
    //Medium 500
    //Bold 700
    //Black 900
    fontReg10: {
      fontSize: 10,
      lineHeight: i18next.language == 'en' ? 18 : 18,
      textAlign: i18next.language == 'en' ? 'left' : 'right',
      fontFamily:
        i18next.language == 'en'
          ? fonts.ENGLISH_REGULAR
          : i18next.language == 'ur'
          ? fonts.URDU_REGULAR
          : fonts.ARABIC_REGULAR,
    },
    fontReg12: {
      fontSize: 12,
      lineHeight: i18next.language == 'en' ? 18 : 18,
      textAlign: i18next.language == 'en' ? 'left' : 'right',
      fontFamily:
        i18next.language == 'en'
          ? fonts.ENGLISH_REGULAR
          : i18next.language == 'ur'
          ? fonts.URDU_REGULAR
          : fonts.ARABIC_REGULAR,
    },

    fontReg14: {
      fontSize: 14,
      lineHeight: i18next.language == 'en' ? 21 : 21,
      textAlign: i18next.language == 'en' ? 'left' : 'right',
      fontFamily:
        i18next.language == 'en'
          ? fonts.ENGLISH_REGULAR
          : i18next.language == 'ur'
          ? fonts.URDU_REGULAR
          : fonts.ARABIC_REGULAR,
    },
    fontReg16: {
      fontSize: 16,
      lineHeight: i18next.language == 'en' ? 24 : 24,
      textAlign: i18next.language == 'en' ? 'left' : 'right',
      fontFamily:
        i18next.language == 'en'
          ? fonts.ENGLISH_REGULAR
          : i18next.language == 'ur'
          ? fonts.URDU_REGULAR
          : fonts.ARABIC_REGULAR,
    },
    fontBold8: {
      fontSize: 8,
      lineHeight: i18next.language == 'en' ? 14 : 14,
      textAlign: i18next.language == 'en' ? 'left' : 'right',
      fontFamily:
        i18next.language == 'en'
          ? fonts.ENGLISH_BOLD
          : i18next.language == 'ur'
          ? fonts.URDU_BOLD
          : fonts.ARABIC_BOLD,
    },
    fontBold10: {
      fontSize: 10,
      lineHeight: i18next.language == 'en' ? 24 : 24,
      textAlign: i18next.language == 'en' ? 'left' : 'right',
      fontFamily:
        i18next.language == 'en'
          ? fonts.ENGLISH_BOLD
          : i18next.language == 'ur'
          ? fonts.URDU_BOLD
          : fonts.ARABIC_BOLD,
    },
    fontBold11: {
      fontSize: 11,
      lineHeight: i18next.language == 'en' ? 15 : 15,
      textAlign: i18next.language == 'en' ? 'left' : 'right',
      fontFamily:
        i18next.language == 'en'
          ? fonts.ENGLISH_BOLD
          : i18next.language == 'ur'
          ? fonts.URDU_BOLD
          : fonts.ARABIC_BOLD,
    },
    fontBold12: {
      fontSize: 12,
      lineHeight: i18next.language == 'en' ? 24 : 24,
      textAlign: i18next.language == 'en' ? 'left' : 'right',
      fontFamily:
        i18next.language == 'en'
          ? fonts.ENGLISH_BOLD
          : i18next.language == 'ur'
          ? fonts.URDU_BOLD
          : fonts.ARABIC_BOLD,
    },
    fontBold13: {
      fontSize: 13,
      lineHeight: i18next.language == 'en' ? 18 : 18,
      textAlign: i18next.language == 'en' ? 'left' : 'right',
      fontFamily:
        i18next.language == 'en'
          ? fonts.ENGLISH_BOLD
          : i18next.language == 'ur'
          ? fonts.URDU_BOLD
          : fonts.ARABIC_BOLD,
    },
    fontBold14: {
      fontSize: 14,
      lineHeight: i18next.language == 'en' ? 24 : 24,
      textAlign: i18next.language == 'en' ? 'left' : 'right',
      fontFamily:
        i18next.language == 'en'
          ? fonts.ENGLISH_BOLD
          : i18next.language == 'ur'
          ? fonts.URDU_BOLD
          : fonts.ARABIC_BOLD,
    },
    fontBold16: {
      fontSize: 16,
      lineHeight: i18next.language == 'en' ? 24 : 24,
      textAlign: i18next.language == 'en' ? 'left' : 'right',
      fontFamily:
        i18next.language == 'en'
          ? fonts.ENGLISH_BOLD
          : i18next.language == 'ur'
          ? fonts.URDU_BOLD
          : fonts.ARABIC_BOLD,
    },
    fontBold18: {
      fontSize: 18,
      lineHeight: i18next.language == 'en' ? 24 : 24,
      textAlign: i18next.language == 'en' ? 'left' : 'right',
      fontFamily:
        i18next.language == 'en'
          ? fonts.ENGLISH_BOLD
          : i18next.language == 'ur'
          ? fonts.URDU_BOLD
          : fonts.ARABIC_BOLD,
    },
    fontBold20: {
      fontSize: 20,
      lineHeight: i18next.language == 'en' ? 24 : 24,
      textAlign: i18next.language == 'en' ? 'left' : 'right',
      fontFamily:
        i18next.language == 'en'
          ? fonts.ENGLISH_BOLD
          : i18next.language == 'ur'
          ? fonts.URDU_BOLD
          : fonts.ARABIC_BOLD,
    },
    fontBold24: {
      fontSize: 24, // RFValue(24, sHight(100)),
      lineHeight: i18next.language == 'en' ? 24 : 24,
      textAlign: i18next.language == 'en' ? 'left' : 'right',
      fontFamily:
        i18next.language == 'en'
          ? fonts.ENGLISH_BOLD
          : i18next.language == 'ur'
          ? fonts.URDU_BOLD
          : fonts.ARABIC_BOLD,
    },
    fontMed10: {
      lineHeight: i18next.language == 'en' ? 24 : 24,
      fontSize: 10,
      textAlign: i18next.language == 'en' ? 'left' : 'right',
      fontFamily:
        i18next.language == 'en'
          ? fonts.ENGLISH_MEDIUM
          : i18next.language == 'ur'
          ? fonts.URDU_MEDIUM
          : fonts.ARABIC_MEDIUM,
    },
    fontMed12: {
      lineHeight: i18next.language == 'en' ? 24 : 24,
      fontSize: 12,
      textAlign: i18next.language == 'en' ? 'left' : 'right',
      fontFamily:
        i18next.language == 'en'
          ? fonts.ENGLISH_MEDIUM
          : i18next.language == 'ur'
          ? fonts.URDU_MEDIUM
          : fonts.ARABIC_MEDIUM,
    },
    fontMed14: {
      lineHeight: i18next.language == 'en' ? 24 : 24,
      fontSize: 14,
      textAlign: i18next.language == 'en' ? 'left' : 'right',
      fontFamily:
        i18next.language == 'en'
          ? fonts.ENGLISH_MEDIUM
          : i18next.language == 'ur'
          ? fonts.URDU_MEDIUM
          : fonts.ARABIC_MEDIUM,
    },
    fontMed16: {
      lineHeight: i18next.language == 'en' ? 24 : 24,
      fontSize: 16,
      textAlign: i18next.language == 'en' ? 'left' : 'right',
      fontFamily:
        i18next.language == 'en'
          ? fonts.ENGLISH_MEDIUM
          : i18next.language == 'ur'
          ? fonts.URDU_MEDIUM
          : fonts.ARABIC_MEDIUM,
    },
    fontMed18: {
      lineHeight: i18next.language == 'en' ? 24 : 24,
      fontSize: 18,
      textAlign: i18next.language == 'en' ? 'left' : 'right',
      fontFamily:
        i18next.language == 'en'
          ? fonts.ENGLISH_MEDIUM
          : i18next.language == 'ur'
          ? fonts.URDU_MEDIUM
          : fonts.ARABIC_MEDIUM,
    },
    fontMed20: {
      lineHeight: i18next.language == 'en' ? 24 : 24,
      fontSize: 20,
      textAlign: i18next.language == 'en' ? 'left' : 'right',
      fontFamily:
        i18next.language == 'en'
          ? fonts.ENGLISH_MEDIUM
          : i18next.language == 'ur'
          ? fonts.URDU_MEDIUM
          : fonts.ARABIC_MEDIUM,
    },
    fontReg11: {
      lineHeight: i18next.language == 'en' ? 20 : 20,
      fontSize: 11,
      textAlign: i18next.language == 'en' ? 'left' : 'right',
      fontFamily:
        i18next.language == 'en'
          ? fonts.ENGLISH_REGULAR
          : i18next.language == 'ur'
          ? fonts.URDU_REGULAR
          : fonts.ARABIC_REGULAR,
    },
    fontReg15: {
      lineHeight: i18next.language == 'en' ? 20 : 20,
      fontSize: 15,
      textAlign: i18next.language == 'en' ? 'left' : 'right',
      fontFamily:
        i18next.language == 'en'
          ? fonts.ENGLISH_REGULAR
          : i18next.language == 'ur'
          ? fonts.URDU_REGULAR
          : fonts.ARABIC_REGULAR,
    },
    fontReg18: {
      lineHeight: i18next.language == 'en' ? 27 : 27,
      fontSize: 18,
      textAlign: i18next.language == 'en' ? 'left' : 'right',
      fontFamily:
        i18next.language == 'en'
          ? fonts.ENGLISH_REGULAR
          : i18next.language == 'ur'
          ? fonts.URDU_REGULAR
          : fonts.ARABIC_REGULAR,
    },
    fontReg20: {
      lineHeight: i18next.language == 'en' ? 27 : 27,
      fontSize: 20,
      textAlign: i18next.language == 'en' ? 'left' : 'right',
      fontFamily:
        i18next.language == 'en'
          ? fonts.ENGLISH_REGULAR
          : i18next.language == 'ur'
          ? fonts.URDU_REGULAR
          : fonts.ARABIC_REGULAR,
    },
    fontReg24: {
      lineHeight: i18next.language == 'en' ? 27 : 32,
      fontSize: 24,
      textAlign: i18next.language == 'en' ? 'left' : 'right',
      fontFamily:
        i18next.language == 'en'
          ? fonts.ENGLISH_REGULAR
          : i18next.language == 'ur'
          ? fonts.URDU_REGULAR
          : fonts.ARABIC_REGULAR,
    },

    textTiny: {
      fontSize: FontSize.tiny,
      color: Colors.textGray400,
    },
    textSmall: {
      fontSize: FontSize.small,
      color: Colors.textGray400,
    },
    textRegular: {
      fontSize: FontSize.regular,
      color: Colors.textGray400,
    },
    textLarge: {
      fontSize: FontSize.large,
      color: Colors.textGray400,
    },
    textBold: {
      fontWeight: 'bold',
    },
    textUppercase: {
      textTransform: 'uppercase',
    },
    titleSmall: {
      fontSize: FontSize.small * 1.5,
      fontWeight: 'bold',
    },
    titleRegular: {
      fontSize: FontSize.regular * 2,
      fontWeight: 'bold',
      color: Colors.textGray800,
    },
    titleLarge: {
      fontSize: FontSize.large * 2,
      fontWeight: 'bold',
      color: Colors.textGray800,
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
    textError: {
      color: Colors.error,
    },
    textSuccess: {
      color: Colors.success,
    },
    textPrimary: {
      color: Colors.primary,
    },
    textLight: {
      color: Colors.textGray200,
    },
    textLobster: {
      fontFamily: 'lobster',
      fontWeight: 'normal',
    },
  });
}
