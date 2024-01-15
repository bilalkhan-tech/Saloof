import i18next from 'i18next';
import Images from '../theme/Images';

i18next.language = 'en';

console.log('language== dummy data', i18next.language);

export const alerts_list = [
  {
    title:
      i18next.language == 'en'
        ? 'Your Order with ID order'
        : i18next.language == 'ur'
        ? 'ID آرڈر کے ساتھ آپ کا آرڈر'
        : 'طلبك مع أمر معرف',
    subTitle:
      i18next.language == 'en'
        ? 'Just now!'
        : i18next.language == 'ur'
        ? 'ابھی ابھی!'
        : 'الآن!',
    status: Images('').svgs.award,
    created_by: 'Wed Nov 6 2023 05:10:16 GMT+0500',
  },
  {
    title:
      i18next.language == 'en'
        ? 'Your Order with id order is delivered'
        : i18next.language == 'ur'
        ? 'آئی ڈی آرڈر کے ساتھ آپ کا آرڈر ڈیلیور ہو گیا ہے۔'
        : 'يتم تسليم طلبك مع طلب الهوية',
    subTitle:
      i18next.language == 'en'
        ? 'You have successfully sent money to'
        : i18next.language == 'ur'
        ? 'آپ نے کامیابی سے رقم بھیج دی ہے۔'
        : 'لقد قمت بإرسال الأموال بنجاح إلى',
    status: Images('').svgs.money_send,
    created_by: 'Wed Nov 5 2023 03:46:16 GMT+0500',
  },
  {
    title:
      i18next.language == 'en'
        ? 'Payment Notification'
        : i18next.language == 'ur'
        ? 'ادائیگی کی اطلاع'
        : 'إشعار الدفع',
    subTitle:
      i18next.language == 'en'
        ? 'Successfully paid!'
        : i18next.language == 'ur'
        ? 'کامیابی سے ادائیگی ہو گئی!'
        : 'تم الدفع بنجاح!',
    status: Images('').svgs.payment,
    created_by: 'Wed Oct 30 2023 11:57:16 GMT+0500',
  },
  {
    title:
      i18next.language == 'en'
        ? 'Your Order with ID order'
        : i18next.language == 'ur'
        ? 'ID آرڈر کے ساتھ آپ کا آرڈر'
        : 'طلبك مع أمر معرف',
    subTitle:
      i18next.language == 'en'
        ? 'Your top up is successfully!'
        : i18next.language == 'ur'
        ? 'آپ کا ٹاپ اپ کامیابی کے ساتھ ہے!'
        : 'تم تعبئة رصيدك بنجاح!',
    status: Images('').svgs.money_received,
    created_by: 'Wed Oct 30 2023 11:5:16 GMT+0500',
  },
  {
    title:
      i18next.language == 'en'
        ? 'Your Order with ID order'
        : i18next.language == 'ur'
        ? 'ID آرڈر کے ساتھ آپ کا آرڈر'
        : 'طلبك مع أمر معرف',
    subTitle:
      i18next.language == 'en'
        ? 'You have successfully sent money to Maria of...'
        : i18next.language == 'ur'
        ? 'آپ نے کامیابی کے ساتھ ماریہ کو رقم بھیج دی ہے...'
        : 'لقد قمت بإرسال الأموال بنجاح إلى ماريا من...',
    status: Images('').svgs.money_send,
    created_by: 'Wed Oct 30 2023 11:55:16 GMT+0500',
  },
  {
    title:
      i18next.language == 'en'
        ? 'Your Order with ID order'
        : i18next.language == 'ur'
        ? 'ID آرڈر کے ساتھ آپ کا آرڈر'
        : 'طلبك مع أمر معرف',
    subTitle:
      i18next.language == 'en'
        ? 'You have successfully sent money to Maria of...'
        : i18next.language == 'ur'
        ? 'آپ نے کامیابی کے ساتھ ماریہ کو رقم بھیج دی ہے...'
        : 'لقد قمت بإرسال الأموال بنجاح إلى ماريا من...',
    status: Images('').svgs.discount,
    created_by: 'Wed Oct 30 2023 11:55:16 GMT+0500',
  },
  {
    title:
      i18next.language == 'en'
        ? 'Payment Notification'
        : i18next.language == 'ur'
        ? 'ادائیگی کی اطلاع'
        : 'إشعار الدفع',
    subTitle:
      i18next.language == 'en'
        ? 'Successfully paid!'
        : i18next.language == 'ur'
        ? 'کامیابی سے ادائیگی ہو گئی!'
        : 'تم الدفع بنجاح!',
    status: Images('').svgs.payment,
    created_by: 'Wed Oct 30 2022 11:55:16 GMT+0500',
  },
];

export const more_list_supplier = [
  {
    en: {
      title: 'Profile Settings',
    },
    ur: {
      title: 'پروفائل کی ترتیبات',
    },
    ar: {
      title: 'إعدادات الملف الشخصي',
    },
    url: 'ProfileSettingsContainer',
    icon: Images('').svgs.UserIcon,
  },
  {
    en: {
      title: 'Payment Details',
    },
    ur: {
      title: 'ادائیگی کی تفصیلات',
    },
    ar: {
      title: 'بيانات الدفع',
    },

    url: 'PaymanetDetailsContainer',
    icon: Images('').svgs.PaymentDetail,
  },
  {
    en: {
      title: 'Commission',
    },
    ur: {
      title: 'کمیشن',
    },
    ar: {
      title: 'عمولة',
    },
    url: 'CommissionContainer',
    icon: Images('').svgs.CommissionIcon,
  },
  {
    en: {
      title: 'Products',
    },
    ur: {
      title: 'مصنوعات',
    },
    ar: {
      title: 'منتج',
    },
    url: 'ProductsContainer',
    icon: Images('').svgs.ProductIcon,
  },
  {
    en: {
      title: 'Shipping Details',
    },
    ur: {
      title: 'شپنگ کی تفصیلات',
    },
    ar: {
      title: 'تفاصيل الشحن',
    },
    url: 'ShippingDetailContainer',
    icon: Images('').svgs.ShippingIcon,
  },
  {
    en: {
      title: 'Reports',
    },
    ur: {
      title: 'رپورٹ',
    },
    ar: {
      title: 'تقرير',
    },
    url: 'ReportContainer',
    icon: Images('').svgs.ReportIcon,
  },
  {
    en: {
      title: 'Subscription Package',
    },
    ur: {
      title: 'سبسکرپشن پیکیج',
    },
    ar: {
      title: 'باقة الاشتراك',
    },
    url: 'SubscriptionPackageContainer',
    icon: Images('').svgs.SubscriptionIcon,
  },
  {
    en: {
      title: 'Support Ticket',
    },
    ur: {
      title: 'سپورٹ ٹکٹ',
    },
    ar: {
      title: 'بطاقة الدعم',
    },
    url: 'SupportTicketContainer',
    icon: Images('').svgs.SupportTicketIcon,
  },
  {
    en: {
      title: 'Language',
    },
    ur: {
      title: 'زبان',
    },
    ar: {
      title: 'لغة',
    },
    url: 'LanguageContainer',
    icon: Images('').svgs.LanguageIcon,
  },
  {
    en: {
      title: 'Logout',
    },
    ur: {
      title: 'لاگ آوٹ',
    },
    ar: {
      title: 'تسجيل خروج',
    },
    url: 'LogoutContainer',
    icon: Images('').svgs.LogoutIcon,
  },
];

export const more_list_buyer = [
  {
    en: {
      title: 'Profile Settings',
    },
    ur: {
      title: 'پروفائل کی ترتیبات',
    },
    ar: {
      title: 'إعدادات الملف الشخصي',
    },
    url: 'ProfileSettingsContainer',
    icon: Images('').svgs.UserIcon,
  },
  {
    en: {
      title: 'Payment Details',
    },
    ur: {
      title: 'ادائیگی کی تفصیلات',
    },
    ar: {
      title: 'بيانات الدفع',
    },
    url: 'PaymanetDetailsContainer',
    icon: Images('').svgs.PaymentDetail,
  },
  {
    en: {
      title: 'Products',
    },
    ur: {
      title: 'مصنوعات',
    },
    ar: {
      title: 'منتج',
    },
    url: 'BuyerProducts',
    icon: Images('').svgs.ProductIcon,
  },

  {
    en: {
      title: 'Favorites',
    },
    ur: {
      title: 'پسندیدہ',
    },
    ar: {
      title: 'المفضلة',
    },
    url: 'FavouritesContainer',
    icon: Images('').svgs.FavoritesIcon,
  },
  {
    en: {
      title: 'Support Ticket',
    },
    ur: {
      title: 'سپورٹ ٹکٹ',
    },
    ar: {
      title: 'بطاقة الدعم',
    },
    url: 'SupportTicketContainer',
    icon: Images('').svgs.SupportTicketIcon,
  },
  {
    en: {
      title: 'Language',
    },
    ur: {
      title: 'زبان',
    },
    ar: {
      title: 'لغة',
    },
    url: 'LanguageContainer',
    icon: Images('').svgs.LanguageIcon,
  },
  {
    en: {
      title: 'Logout',
    },
    ur: {
      title: 'لاگ آوٹ',
    },
    ar: {
      title: 'تسجيل خروج',
    },
    url: 'LogoutContainer',
    icon: Images('').svgs.LogoutIcon,
  },
];

export const more_list_driver = [
  {
    en: {
      title: 'Profile Settings',
    },
    ur: {
      title: 'پروفائل کی ترتیبات',
    },
    ar: {
      title: 'إعدادات الملف الشخصي',
    },
    url: 'ProfileSettingsContainer',
    icon: Images('').svgs.UserIcon,
  },
  {
    en: {
      title: 'Payment Details',
    },
    ur: {
      title: 'ادائیگی کی تفصیلات',
    },
    ar: {
      title: 'بيانات الدفع',
    },
    url: 'PaymanetDetailsContainer',
    icon: Images('').svgs.PaymentDetail,
  },
  {
    en: {
      title: 'Support Ticket',
    },
    ur: {
      title: 'سپورٹ ٹکٹ',
    },
    ar: {
      title: 'بطاقة الدعم',
    },
    url: 'SupportTicketContainer',
    icon: Images('').svgs.SupportTicketIcon,
  },
  {
    en: {
      title: 'Language',
    },
    ur: {
      title: 'زبان',
    },
    ar: {
      title: 'لغة',
    },
    url: 'LanguageContainer',
    icon: Images('').svgs.LanguageIcon,
  },
  {
    en: {
      title: 'Logout',
    },
    ur: {
      title: 'لاگ آوٹ',
    },
    ar: {
      title: 'تسجيل خروج',
    },
    url: 'LogoutContainer',
    icon: Images('').svgs.LogoutIcon,
  },
];
export const subscriptionList = [
  {
    text: 'Free',
  },
  {
    text: 'Executive',
  },
  {
    text: 'Free',
  },
  {
    text: 'Executive',
  },
  {
    text: 'Free',
  },
  {
    text: 'Executive',
  },
];
export const shipping_detail = [
  {
    location: 'Jeddah',
    area: 'Asfhan',
    address: 'House 123,street abc near park',
    country: 'Saudia Arabia',
  },
  {
    location: 'Riyadh',
    area: 'Asfhan',
    address: 'House 123,street abc near park',
    country: 'Saudia Arabia',
  },
  {
    location: 'Madinah',
    area: 'Asfhan',
    address: 'House 123,street abc near park',
    country: 'Saudia Arabia',
  },
  {
    location: 'Jeddah',
    area: 'Asfhan',
    address: 'House 123,street abc near park',
    country: 'Saudia Arabia',
  },
  {
    location: 'Taif',
    area: 'Asfhan',
    address: 'House 123,street abc near park',
    country: 'Saudia Arabia',
  },
];
export const payment_invoices = [
  {
    title: 'Billed',
    value: true,
  },
  {
    title: 'Not Billed',
    value: false,
  },
];
export const invoice_data = [
  {
    invoice_number: '12345678',
    commision: '45.00',
    payment_status: 'Unpaid',
    total_orders: 5,
  },
  {
    invoice_number: '12345678',
    commision: '45.00',
    payment_status: 'Unpaid',
    total_orders: 5,
  },
  {
    invoice_number: '12345678',
    commision: '45.00',
    payment_status: 'Unpaid',
    total_orders: 5,
  },
  {
    invoice_number: '12345678',
    commision: '45.00',
    payment_status: 'Unpaid',
    total_orders: 5,
  },
  {
    invoice_number: '12345678',
    commision: '45.00',
    payment_status: 'Unpaid',
    total_orders: 5,
  },
  {
    invoice_number: '12345678',
    commision: '45.00',
    payment_status: 'Unpaid',
    total_orders: 5,
  },
];
export const favourite_list = [
  {
    title: 'iPhone 14 pro max',
    products: [
      {
        title: 'By Apple in Mobile Phones',
      },
      {
        title: 'By Apple in Mobile Phones',
      },
      {
        title: 'By Apple in Mobile Phones',
      },
    ],
  },
  {
    title: 'iPhone 13 pro max',
    products: [
      {
        title: 'By Apple in Mobile Phones',
      },
      {
        title: 'By Apple in Mobile Phones',
      },
      {
        title: 'By Apple in Mobile Phones',
      },
    ],
  },
  {
    title: 'iPhone 12 pro max',
    products: [
      {
        title: 'By Apple in Mobile Phones',
      },
      {
        title: 'By Apple in Mobile Phones',
      },
      {
        title: 'By Apple in Mobile Phones',
      },
    ],
  },
];
export const browseData = [
  {
    image: require('../theme/assets/images/watch.png'),
    isCheck: false,
  },
  {
    image: require('../theme/assets/images/microphone.png'),
    isCheck: false,
  },
  {
    image: require('../theme/assets/images/watch.png'),
    isCheck: false,
  },
  {
    image: require('../theme/assets/images/microphone.png'),
    isCheck: false,
  },
  {
    image: require('../theme/assets/images/watch.png'),
    isCheck: false,
  },
  {
    image: require('../theme/assets/images/microphone.png'),
    isCheck: false,
  },
];
export const acounts = [
  {
    en: {
      title: 'My Account',
    },
    ur: {
      title: 'میرا اکاونٹ',
    },
    ar: {
      title: 'الحساب الخاص بي',
    },
    url: 'ProfileSettingsContainer',
  },
  {
    en: {
      title: 'Login / Register',
    },
    ur: {
      title: 'لاگ ان/رجسٹر',
    },
    ar: {
      title: 'تسجيل الدخول / التسجيل',
    },

    url: 'PaymanetDetailsContainer',
  },
  {
    en: {
      title: 'Cart',
    },
    ur: {
      title: 'کارٹ',
    },
    ar: {
      title: 'السلة',
    },
    url: 'CommissionContainer',
  },
  {
    en: {
      title: 'WhishList',
    },
    ur: {
      title: 'خواہشات کی فہرست',
    },
    ar: {
      title: 'قائمة الأمنيات',
    },
    url: 'ProductsContainer',
  },
  {
    en: {
      title: 'Shop',
    },
    ur: {
      title: 'شاپ',
    },
    ar: {
      title: 'محل',
    },
    url: 'ShippingDetailContainer',
  },
];
export const quickLinks = [
  {
    en: {
      title: 'Privacy Policy',
    },
    ur: {
      title: 'پرائیویسی پالیسی',
    },
    ar: {
      title: 'سياسة الخصوصيه',
    },
    url: 'ProfileSettingsContainer',
  },
  {
    en: {
      title: 'Term of use',
    },
    ur: {
      title: 'استعمال کی اصطلاح',
    },
    ar: {
      title: 'مصطلح الاستخدام',
    },

    url: 'PaymanetDetailsContainer',
  },
  {
    en: {
      title: 'About Us',
    },
    ur: {
      title: 'ہمارے متعلق',
    },
    ar: {
      title: 'معلومات عنا',
    },
    url: 'CommissionContainer',
  },
  {
    en: {
      title: 'Contact Us',
    },
    ur: {
      title: 'ہم سے رابطہ کریں۔',
    },
    ar: {
      title: 'تواصل معنا',
    },
    url: 'ProductsContainer',
  },
  {
    en: {
      title: '',
    },
    ur: {
      title: '',
    },
    ar: {
      title: '',
    },
    url: 'ProductsContainer',
  },
];
export const DrawerItems = [
  {
    en: {
      title: 'Home',
    },
    ur: {
      title: 'پرائیویسی پالیسی',
    },
    ar: {
      title: 'سياسة الخصوصيه',
    },
    url: 'ProfileSettingsContainer',
  },
  {
    en: {
      title: 'Categories',
    },
    ur: {
      title: 'استعمال کی اصطلاح',
    },
    ar: {
      title: 'مصطلح الاستخدام',
    },

    url: 'PaymanetDetailsContainer',
  },
  {
    en: {
      title: 'About Us',
    },
    ur: {
      title: 'ہمارے متعلق',
    },
    ar: {
      title: 'معلومات عنا',
    },
    url: 'CommissionContainer',
  },
  {
    en: {
      title: 'Contact Us',
    },
    ur: {
      title: 'ہم سے رابطہ کریں۔',
    },
    ar: {
      title: 'تواصل معنا',
    },
    url: 'ProductsContainer',
  },
];
export const countries = [
  {
    country: require('../theme/assets/images/pak.png'),
    text: 'SA',
    value: 'sa',
  },
  {
    country: require('../theme/assets/images/pak.png'),
    value: 'pk',
    text: 'PAK',
  },
  {
    country: require('../theme/assets/images/uk.png'),
    value: 'uk',
    text: 'UK',
  },
];
