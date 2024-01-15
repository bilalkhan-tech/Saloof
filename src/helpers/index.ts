import i18next from 'i18next';

export const ChangeLanguage = (lang: 'ur' | 'en' | 'ar') => {
  i18next.changeLanguage(lang);
};
