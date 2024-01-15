import { CustomBottomSheet } from '@/components';
import Background from '@/components/Background';
import TabsHeading from '@/components/TabsHeading';
import { useTheme } from '@/hooks';
import { alerts_list } from '@/utils/DummyData';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import i18next from 'i18next';
import moment from 'moment';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { AlertScreenProps } from 'types/navigation';

const AlertsMainScreen = ({ navigation, route }: AlertScreenProps) => {
  const { t } = useTranslation(['common']);
  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme();
  const dispatch = useDispatch();

  const [showBottomSheet, setshowBottomSheet] = useState<boolean>(false);

  console.log('language==', i18next.language);
  const todayTime = moment();
  const user_Type = 'seller';

  // useEffect(() => {
  //   splitDataIntoSections(alerts_list);
  // }, []);

  console.log('alerts_list ::: ', JSON.stringify(alerts_list));

  const organizeDataByTimeframe = data => {
    const today = moment().startOf('day');
    const thisWeekStart = moment().startOf('isoWeek');
    const lastMonthStart = moment().subtract(1, 'month').startOf('month');
    const lastYearStart = moment().subtract(1, 'year').startOf('year');

    const todayData = data.filter(item =>
      moment(item.created_by).isSame(today, 'day'),
    );
    const thisWeekData = data.filter(
      item =>
        moment(item.created_by).isSameOrAfter(thisWeekStart, 'day') &&
        !todayData.includes(item),
    );
    const lastMonthData = data.filter(
      item =>
        moment(item.created_by).isSameOrAfter(lastMonthStart, 'day') &&
        !thisWeekData.includes(item) &&
        !todayData.includes(item),
    );
    const lastYearData = data.filter(
      item =>
        moment(item.created_by).isSameOrAfter(lastYearStart, 'day') &&
        !lastMonthData.includes(item) &&
        !thisWeekData.includes(item) &&
        !todayData.includes(item),
    );

    const sections = [
      {
        title: t('common:today'),
        data: todayData,
      },
      {
        title: t('common:thisWeek'),
        data: thisWeekData,
      },
      {
        title: t('common:lastMonth'),
        data: lastMonthData,
      },
      {
        title: t('common:lastYear'),
        data: lastYearData,
      },
    ];

    return sections;
  };

  const sections = organizeDataByTimeframe(alerts_list);

  const dateFormatFunc = (date: any) => {
    if (
      moment(date).format('YYYY-MM-DD') ===
      moment(new Date()).format('YYYY-MM-DD')
    ) {
      const fromNow = moment(date).fromNow();
      return fromNow.replace(/minutes?/, 'm').replace(/hours?/, 'hr');
    } else {
      return moment(date).format('DD MMM');
    }
  };
  const alertreadFunc = (item: any) => {
    console.log('aaa item :::: ', item);
    setshowBottomSheet(true);
  };

  const markAsReadFunc = () => {
    console.log('apply mark as read api');
  };
  const removeFunc = () => {
    console.log('apply remove api');
  };

  return (
    <Background>
      <TabsHeading title={t('common:alerts')} />
      <View style={[Layout.fill, {}]}>
        <SectionList
          sections={sections}
          scrollEnabled={true}
          stickySectionHeadersEnabled={false}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({ section: { title } }) => (
            <Text
              style={[
                Gutters.smallVMargin,
                Layout.textAlignCenter,
                Fonts.fontReg18,
                Fonts.textBold,
                {
                  color: Colors.black,
                  // backgroundColor: 'red',
                  textAlign: i18next.language == 'en' ? 'left' : 'right',
                },
              ]}
            >
              {title}
            </Text>
          )}
          renderItem={({ item }) => (
            <View style={[Layout.fill]}>
              <TouchableOpacity
                onPress={() => alertreadFunc(item)}
                style={[
                  Gutters.smallBMargin,
                  i18next.language == 'en' ? Layout.row : Layout.rowReverse,
                  { width: '100%' },
                ]}
              >
                <View
                  style={[
                    Layout.row,
                    Layout.center,
                    i18next.language == 'en'
                      ? Layout.justifyContentStart
                      : Layout.justifyContentEnd,

                    {
                      width: '20%',
                    },
                  ]}
                >
                  <View
                    style={[
                      Layout.center,
                      {
                        aspectRatio: 1,
                        width: '80%',
                        backgroundColor: Colors.lightGray,
                        borderRadius: 12,
                      },
                    ]}
                  >
                    <item.status width={sWidth(7)} height={sWidth(7)} />
                  </View>
                </View>
                <View style={[Gutters.tinyLMargin, { width: '60%' }]}>
                  <Text
                    style={[
                      Gutters.tinyBMargin,
                      Gutters.tinyRMargin,
                      Fonts.fontReg18,
                      Fonts.textBold,

                      { color: Colors.purple },
                    ]}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={[
                      Gutters.tinyBMargin,
                      Gutters.tinyRMargin,
                      Fonts.fontReg14,
                      { color: Colors.gray1 },
                    ]}
                  >
                    {item.subTitle}
                  </Text>
                </View>
                <View style={[{ width: '20%' }]}>
                  <Text style={[{ textAlign: 'center', color: Colors.gray2 }]}>
                    {dateFormatFunc(item.created_by)}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{ height: sHight(10) }} />}
        />
      </View>
      {showBottomSheet && (
        <CustomBottomSheet
          title="Alerts Options"
          setShowBottomSheet={setshowBottomSheet}
          showBottomSheet={showBottomSheet}
        >
          <View style={[]}>
            <View
              style={[
                {
                  height: sHight(20),
                },
              ]}
            >
              <TouchableOpacity
                onPress={() => markAsReadFunc()}
                style={[
                  Layout.row,
                  // Gutters.xSmallHPadding,
                  Gutters.smallVPadding,
                  {
                    borderBottomWidth: 1,
                    borderColor: Colors.GrayE5E5E5,
                  },
                ]}
              >
                <Text
                  style={[
                    Fonts.fontReg14,
                    Gutters.xLittleHMargin,
                    { color: Colors.black },
                  ]}
                >
                  Mark as read
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => removeFunc()}
                style={[
                  Layout.row,
                  // Gutters.xSmallHPadding,
                  Gutters.smallVPadding,
                ]}
              >
                <Text
                  style={[
                    Fonts.fontReg14,
                    Gutters.xLittleHMargin,
                    { color: Colors.black },
                  ]}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </CustomBottomSheet>
      )}
    </Background>
  );
};

export default AlertsMainScreen;

const styles = StyleSheet.create({});
