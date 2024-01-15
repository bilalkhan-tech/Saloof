import Background from '@/components/Background';
import CustomModal, { modalTypes } from '@/components/CustomModal';
import CustomSearch from '@/components/CustomSearch';
import TabsHeading from '@/components/TabsHeading';
import { useTheme } from '@/hooks';
import { persistor } from '@/store';
import { logout } from '@/store/auth';
import {
  more_list_buyer,
  more_list_driver,
  more_list_supplier,
} from '@/utils/DummyData';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import i18next from 'i18next';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MoreScreenProps } from 'types/navigation';

type Props = {
  item: {
    en: { title: string };
    ur: { title: string };
    ar: { title: string };
    url?: string;
    icon?: any;
  };
  index?: number;
};

const MoreMainScreen = ({ navigation, route }: MoreScreenProps) => {
  const { t } = useTranslation(['common']);
  // const navigation = useNavigation();
  const dispatch = useDispatch();
  const { Layout, Gutters, Fonts, Colors, Images } = useTheme();
  const { user_type } = useSelector((state: any) => state.auth);
  const logoutModal = useRef<modalTypes>(null);

  const user_Type = user_type;
  // const user_Type = 'seller';

  const [search, setSearch] = useState('');
  const [data, setData] = useState(
    user_Type == 'seller'
      ? more_list_supplier
      : user_Type == 'buyer'
        ? more_list_buyer
        : more_list_driver,
  );

  useEffect(() => {
    handleSearch('');
  }, [user_Type]);

  const handleSearch = (title: string) => {
    setSearch(title);
    if (user_Type === 'seller') {
      if (i18next.language === 'en') {
        const filteredData = more_list_supplier.filter(
          item =>
            item?.en?.title &&
            item?.en?.title.toLowerCase().includes(title.toLowerCase()),
        );
        setData(filteredData);
      } else if (i18next.language === 'ur') {
        const filteredData = more_list_supplier.filter(
          item =>
            item?.ur?.title &&
            item?.ur?.title.toLowerCase().includes(title.toLowerCase()),
        );
        setData(filteredData);
      } else {
        const filteredData = more_list_supplier.filter(
          item =>
            item?.ar?.title &&
            item?.ar?.title.toLowerCase().includes(title.toLowerCase()),
        );
        setData(filteredData);
      }
    } else if (user_Type === 'buyer') {
      if (i18next.language === 'en') {
        const filteredData = more_list_buyer.filter(
          item =>
            item?.en?.title &&
            item?.en?.title.toLowerCase().includes(title.toLowerCase()),
        );
        setData(filteredData);
      } else if (i18next.language === 'ur') {
        const filteredData = more_list_buyer.filter(
          item =>
            item?.ur?.title &&
            item?.ur?.title.toLowerCase().includes(title.toLowerCase()),
        );
        setData(filteredData);
      } else {
        const filteredData = more_list_buyer.filter(
          item =>
            item?.ar?.title &&
            item?.ar?.title.toLowerCase().includes(title.toLowerCase()),
        );
        setData(filteredData);
      }
    } else {
      if (i18next.language === 'en') {
        const filteredData = more_list_driver.filter(
          item =>
            item?.en?.title &&
            item?.en?.title.toLowerCase().includes(title.toLowerCase()),
        );
        setData(filteredData);
      } else if (i18next.language === 'ur') {
        const filteredData = more_list_driver.filter(
          item =>
            item?.ur?.title &&
            item?.ur?.title.toLowerCase().includes(title.toLowerCase()),
        );
        setData(filteredData);
      } else {
        const filteredData = more_list_driver.filter(
          item =>
            item?.ar?.title &&
            item?.ar?.title.toLowerCase().includes(title.toLowerCase()),
        );
        setData(filteredData);
      }
    }
  };

  const renderItem = ({ item, index }: Props) => {
    return (
      <TouchableOpacity
        onPress={() =>
          item?.url === 'LogoutContainer'
            ? logoutModal.current?.show()
            : item?.url &&
            navigation.navigate(item?.url as any, {
              headerTitle:
                i18next.language == 'en'
                  ? item?.en?.title
                  : i18next.language == 'ur'
                    ? item?.ur?.title
                    : item?.ar?.title,
            })
        }
        activeOpacity={0.8}
        style={[
          // Layout.row,
          i18next.language == 'en' ? Layout.row : Layout.rowReverse,
          Layout.alignItemsCenter,
          Layout.fullWidth,
          Gutters.tinyVPadding,
          Gutters.tinyMargin,
        ]}
      >
        <View
          style={[
            Layout.center,
            i18next.language == 'en'
              ? Gutters.tinyRMargin
              : Gutters.tinyLMargin,
            {
              aspectRatio: 1,
              width: '12%',
              backgroundColor: Colors.lightGray,
              borderRadius: 12,
            },
          ]}
        >
          <item.icon />
        </View>

        <View
          style={[
            Layout.fill,
            i18next.language == 'en' ? Layout.row : Layout.rowReverse,
            Layout.justifyContentBetween,
          ]}
        >
          <Text
            style={[
              Fonts.fontReg16,
              // Gutters.tinyLMargin,
              i18next.language == 'en'
                ? Gutters.tinyLMargin
                : Gutters.tinyRMargin,
              { fontWeight: '700', color: Colors.purple },
            ]}
          >
            {i18next.language == 'en'
              ? item?.en?.title
              : i18next.language == 'ur'
                ? item?.ur?.title
                : item?.ar?.title}
          </Text>
          <Images.svgs.Arrow
            width={sWidth(5)}
            height={sWidth(5)}
            style={{
              transform: [
                { rotate: i18next.language == 'en' ? '0deg' : '180deg' },
              ],
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const renderBreakLine = () => {
    // This component will be rendered after the fourth index
    return (
      <View
        style={[
          Gutters.smallVMargin,
          { borderWidth: 1, borderColor: Colors.lightGray },
        ]}
      ></View>
    );
  };

  return (
    <Background>
      <View
        style={[
          Layout.fill,
          {
            width: sWidth(90),
          },
        ]}
      >
        <TabsHeading title={t('common:more')} />
        <CustomSearch
          value={search}
          handleSearch={handleSearch}
          placeholder={t('common:search')}
        />
        {/* <View
          style={[
            Gutters.smallBMargin,
            i18next.language == 'en' ? Layout.row : Layout.rowReverse,
            Layout.alignItemsCenter,
            {
              backgroundColor: Colors.lightGray,
              borderRadius: 16,
              padding: 12,
            },
          ]}
        >
          <Images.svgs.Search width={sWidth(7)} height={sWidth(7)} />
          <TextInput
            style={[
              Layout.fill,
              Fonts.fontReg18,
              Gutters.smallLMargin,
              i18next.language == 'en'
                ? Gutters.smallLMargin
                : Gutters.smallRMargin,
              ,
              { color: Colors.black },
            ]}
            placeholder={t('common:search')}
            placeholderTextColor={Colors.gray2}
            value={search}
            onChangeText={handleSearch}
          />
        </View> */}

        <View style={[Layout.fill]}>
          <FlatList
            scrollEnabled={true}
            data={data}
            // renderItem={renderItem as any}
            renderItem={({ item, index }) => {
              if (user_Type === 'seller') {
                if (index < 3 || index > 6) {
                  return renderItem({ item, index });
                } else if (index === 3 || index === 6) {
                  return (
                    <React.Fragment>
                      {renderItem({ item, index })}
                      {renderBreakLine()}
                    </React.Fragment>
                  );
                } else {
                  return renderItem({ item, index });
                }
              } else if (user_Type === 'buyer') {
                if (index < 2 || index > 3) {
                  return renderItem({ item, index });
                } else if (index === 2 || index === 3) {
                  return (
                    <React.Fragment>
                      {renderItem({ item, index })}
                      {renderBreakLine()}
                    </React.Fragment>
                  );
                } else {
                  return renderItem({ item, index });
                }
              } else {
                if (index < 1) {
                  return renderItem({ item, index });
                } else if (index === 1) {
                  return (
                    <React.Fragment>
                      {renderItem({ item, index })}
                      {renderBreakLine()}
                    </React.Fragment>
                  );
                } else {
                  return renderItem({ item, index });
                }
              }
            }}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View style={{ height: sHight(10) }} />}
          />
        </View>
      </View>
      <CustomModal
        firstBtnName={t('cancel')}
        secondBtnName={t('logout')}
        BtnOnePress={() => logoutModal.current?.hide()}
        BtnTwoPress={async () => {
          logoutModal.current?.hide();
          dispatch(logout()), await persistor.purge();
          await persistor.flush();
        }}
        headerText={t('logout')}
        buttonTypes="double"
        ref={logoutModal}
      >
        <Text
          style={[
            Fonts.fontMed14,
            Fonts.textCenter,
            Gutters.regularHPadding,
            Gutters.tinyBMargin,
            { color: Colors.Gray60 },
          ]}
        >
          {t('realyWantToLogout')}
        </Text>
      </CustomModal>
    </Background>
  );
};

export default MoreMainScreen;

const styles = StyleSheet.create({});
