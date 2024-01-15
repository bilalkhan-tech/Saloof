// import { LineChart } from 'react-native-chart-kit';
// import { View, Dimensions } from 'react-native';
// import React from 'react';

// const screenWidth = Dimensions.get('window').width;

// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//   datasets: [
//     {
//       data: [
//         20, 45, 28, 80, 99, 43, 30, 20, 45, 28, 80, 99, 43, 30, 20, 45, 28, 80,
//         99, 43, 30,
//       ],
//     },
//   ],
// };

// const chartConfig = {
//   backgroundColor: '#8630CC',
//   backgroundGradientFrom: '#8630CC',
//   backgroundGradientTo: '#8630CC',
//   backgroundGradientFromOpacity: 0.5,

//   decimalPlaces: 2, // optional, defaults to 2dp
//   color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//   labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//   style: {
//     borderRadius: 16,
//   },
//   propsForDots: {
//     r: '6',
//     strokeWidth: '8',
//     stroke: '#BB4D2A',
//   },
// };

// const CustomGraph = () => {
//   const strokeWidth = screenWidth; // You can adjust this multiplier for line width

//   return (
//     <View>
//       <LineChart
//         data={data}
//         width={screenWidth - 30}
//         height={200}
//         chartConfig={{
//           backgroundColor: '#8630CC',
//           backgroundGradientFrom: '#8630CC',
//           backgroundGradientTo: '#8630CC',
//           backgroundGradientFromOpacity: 0.5,

//           // decimalPlaces: 2, // optional, defaults to 2dp
//           color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//           labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//           style: {
//             borderRadius: 16,
//           },
//           propsForDots: {
//             r: '6',
//             strokeWidth: '8',
//             stroke: '#BB4D2A',
//           },
//         }}
//         style={{
//           marginVertical: 8,
//           borderRadius: 16,
//           paddingRight: 0,
//         }}
//         bezier
//         withShadow={false}
//         withDots={false}
//         withInnerLines={false}
//         withOuterLines={false}
//         withHorizontalLabels={false}
//         withVerticalLabels={false}
//         withScrollableDot={false}
//         // withCustomBarColorFromData
//         // fromZero
//         segments={9}
//         // chart={{
//         //   strokeWidth: strokeWidth, // Set the line width dynamically
//         // }}
//       />
//     </View>
//   );
// };

// export default CustomGraph;

import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@/hooks';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
// import LinearGradient from 'react-native-linear-gradient';
import { BarChart } from 'react-native-gifted-charts';
import CustomBottomSheet from './CustomBottomSheet';
import CustomTextInput from './CustomTextInput';
import CustomSimpleButton from './CustomSimpleButton';
import i18next, { t } from 'i18next';

const CustomGraph = ({ hideFilters }) => {
  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme();
  const [showBottomSheetFilters, setshowBottomSheetFilters] =
    useState<boolean>(false);

  const data = [
    {
      value: 2500,
      frontColor: Colors.purple,
      gradientColor: Colors.purple,
      spacing: 6,
      label: '31 Dec',
    },
    {
      value: 2400,
      frontColor: Colors.darkBlue,
      gradientColor: Colors.darkBlue,
    },

    {
      value: 3500,
      frontColor: Colors.purple,
      gradientColor: Colors.purple,
      spacing: 6,
      label: '30 Dec',
    },
    {
      value: 3000,
      frontColor: Colors.darkBlue,
      gradientColor: Colors.darkBlue,
    },

    {
      value: 4500,
      frontColor: Colors.purple,
      gradientColor: Colors.purple,
      spacing: 6,
      label: '29 Dec',
    },
    {
      value: 4000,
      frontColor: Colors.darkBlue,
      gradientColor: Colors.darkBlue,
    },

    {
      value: 5200,
      frontColor: Colors.purple,
      gradientColor: Colors.purple,
      spacing: 6,
      label: '28 Dec',
    },
    {
      value: 4900,
      frontColor: Colors.darkBlue,
      gradientColor: Colors.darkBlue,
    },

    {
      value: 3000,
      frontColor: Colors.purple,
      gradientColor: Colors.purple,
      spacing: 6,
      label: '27 Dec',
    },
    {
      value: 2800,
      frontColor: Colors.darkBlue,
      gradientColor: Colors.darkBlue,
    },

    {
      value: 5000,
      frontColor: Colors.purple,
      gradientColor: Colors.purple,
      spacing: 6,
      label: '26 Dec',
    },
    {
      value: 2800,
      frontColor: Colors.darkBlue,
      gradientColor: Colors.darkBlue,
    },

    {
      value: 4000,
      frontColor: Colors.purple,
      gradientColor: Colors.purple,
      spacing: 6,
      label: '27 Dec',
    },
    {
      value: 5000,
      frontColor: Colors.darkBlue,
      gradientColor: Colors.darkBlue,
    },
  ];

  const renderBottomSheetFilter = () => {
    return (
      <View style={{}}>
        <View style={[Gutters.smallTMargin]}>
          <CustomTextInput placeholder={t('common:from')} />
          <CustomTextInput placeholder={t('common:to')} />
        </View>

        <CustomSimpleButton
          title={t('common:apply')}
          containerStyle={[
            Gutters.xLittleVMargin,
            {
              backgroundColor: Colors.purple,
            },
          ]}
          titleStyle={[
            Fonts.fontMed16,
            {
              color: Colors.white,
            },
          ]}
          onPress={() => setshowBottomSheetFilters(false)}
        />
      </View>
    );
  };

  return (
    <View>
      {/* =====Bar Graph ===== */}

      <View
        style={{
          marginTop: 10,

          backgroundColor: Colors.transparent,
          overflow: 'hidden',
        }}
      >
        {
          hideFilters ?
            null
            :
            <View
              style={[
                i18next.language == 'en' ? Layout.row : Layout.rowReverse,
                Layout.justifyContentBetween,
                Layout.alignItemsCenter,
              ]}
            >
              <View
                style={[
                  i18next.language == 'en' ? Layout.row : Layout.rowReverse,
                  Layout.center,
                ]}
              >
                <Text style={[Fonts.fontBold18, { color: Colors.Purple8F53C0 }]}>
                  {t('common:insightsOrders')}
                </Text>
                <Images.svgs.arrowDown
                  width={sWidth(4.5)}
                  height={sHight(4.5)}
                  style={[Gutters.littleLMargin]}
                />
              </View>
              <CustomSimpleButton
                title={t('common:filters')}
                parentContainerStyle={{ width: '30%' }}
                containerStyle={[
                  Layout.justifyContentCenter,
                  {
                    backgroundColor: Colors.white,
                    borderColor: Colors.purple,
                    borderWidth: 1,
                    borderRadius: 4,
                    padding: 0,
                    height: 40,
                  },
                ]}
                titleStyle={[
                  Fonts.fontReg14,
                  {
                    color: Colors.purple,
                    marginVertical: 0,
                  },
                ]}
                onPress={() => {
                  setshowBottomSheetFilters(true);
                }}
              />
            </View>
        }

        <View style={{ padding: 0, alignItems: 'center' }}>
          <BarChart
            data={data}
            barWidth={16}
            initialSpacing={10}
            spacing={25}
            barBorderRadius={4}
            showGradient
            yAxisThickness={0}
            xAxisType={'dashed'}
            xAxisColor={Colors.gray}
            yAxisTextStyle={[Fonts.fontReg12, { color: Colors.gray2 }]}
            stepValue={1000}
            maxValue={6000}
            noOfSections={4}
            yAxisLabelTexts={['$1', '$2k', '$3k', '$4k', '$5k', '$6k']}
            labelWidth={40}
            xAxisLabelTextStyle={[
              Fonts.fontReg12,
              { color: Colors.gray2, textAlign: 'center' },
            ]}
          />
        </View>
      </View>
      {showBottomSheetFilters && (
        <CustomBottomSheet
          title={t('common:filters')}
          setShowBottomSheet={setshowBottomSheetFilters}
          showBottomSheet={showBottomSheetFilters}
        >
          {renderBottomSheetFilter()}
        </CustomBottomSheet>
      )}
    </View>
  );
};

export default CustomGraph;
