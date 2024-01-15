import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@/hooks';
import i18next from 'i18next';
import LanguagePicker from './LanguagePicker';
import CustomSearch from '@/components/CustomSearch';
import ItemRender from './ItemRender';
import { browseData } from '@/utils/DummyData';
import { sHight, sWidth } from '@/utils/ScreenDimentions';
import RenderCard from './RenderCard';
import Services from './Services';
import AboutUs from './AboutUs';
import Support from './Support';
import Links from './Links';
import CustomIconPress from '@/components/CustomIconPress';
import { ImageSlider } from 'react-native-image-slider-banner';
type Props = {
  navigation: any;
};

const HomeLandingPage = ({ navigation }: Props) => {
  const { Fonts, Gutters, Layout, Images, Colors } = useTheme();
  const [search, setSearch] = useState<string>('');
  const [bestSeller, setBestSeller] = useState<Array<Object>>([]);

  const handleSearch = () => {};
  return (
    <View style={[Layout.fill, { backgroundColor: Colors.white }]}>
      <View
        style={[
          Layout.fullWidth,
          Gutters.tinyTMargin,
          Gutters.smallHPadding,
          {},
        ]}
      >
        <View
          style={[
            i18next.language === 'en' ? Layout.row : Layout.rowReverse,
            Layout.justifyContentBetween,
            Layout.alignItemsCenter,
            {
              zIndex: 999,
            },
          ]}
        >
          <View
            style={[
              Layout.row,
              Layout.justifyContentBetween,
              Layout.alignItemsCenter,
            ]}
          >
            <Images.svgs.Saloof />
            <LanguagePicker />
          </View>
          <View
            style={[
              Layout.row,
              Layout.justifyContentBetween,
              Layout.alignItemsCenter,
            ]}
          >
            <CustomIconPress
              images={<Images.svgs.bag />}
              counter={9}
              showCount={true}
              onPress={() => {
                navigation.navigate('LoginScreen');
              }}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={[Gutters.xSmallLMargin, Gutters.tinyMargin]}
              onPress={() => navigation.openDrawer()}
            >
              <Images.svgs.Hamburger />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[Gutters.smallVMargin]}>
          <CustomSearch
            value={search}
            backgroundColor={Colors.inputGray}
            handleSearch={handleSearch}
            placeholder={t('common:search')}
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={[Layout.fill]}>
          <ImageSlider
            data={[
              {
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU',
              },
              {
                img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
              },
              {
                img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
              },
            ]}
            preview={false}
            autoPlay={true}
            inActiveIndicatorStyle={[
              { width: 30, backgroundColor: Colors.white, height: 5 },
            ]}
            activeIndicatorStyle={[
              { width: 30, backgroundColor: Colors.purple },
            ]}
            indicatorContainerStyle={[
              Layout.absolute,
              { right: -200, bottom: 0 },
            ]}
            caroselImageStyle={{ resizeMode: 'cover' }}
            onItemChanged={item => console.log('item', item)}
            closeIconColor="#fff"
          />
        </View>
        <ItemRender data={browseData} title={t('common:browsbycatagory')}>
          {browseData &&
            browseData?.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('LoginScreen')}
                  key={index}
                  style={[
                    index === 0 ? 0 : Gutters.littleLMargin,
                    Layout.center,
                    Gutters.littlePadding,
                    {
                      borderWidth: 2,
                      width: 97,
                      height: 88,
                      borderRadius: 10,
                      borderColor: Colors.LightPinkEBE4F0,
                    },
                  ]}
                >
                  <Image
                    source={item?.image}
                    style={[Layout.fill]}
                    resizeMode="cover"
                  />
                  <Text
                    style={[
                      Fonts.fontBold8,
                      Gutters.littleTMargin,
                      { color: Colors.black },
                    ]}
                  >
                    Category Title
                  </Text>
                </TouchableOpacity>
              );
            })}
        </ItemRender>
        <View style={[Layout.fill]}>
          <View
            style={[
              Layout.row,
              Layout.justifyContentBetween,
              Layout.alignItemsCenter,
              Layout.absolute,
              Layout.selfCenter,
              {
                width: sWidth(96),
                bottom: sWidth(22),
                zIndex: 1,
              },
            ]}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                Gutters.littleRMargin,
                Gutters.littlePadding,
                Layout.center,
                { borderRadius: 5, backgroundColor: Colors.LightPinkEBE4F0 },
              ]}
            >
              <Images.svgs.leftarrow fill={Colors.white} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                Gutters.littlePadding,

                Layout.center,
                { borderRadius: 5, backgroundColor: Colors.LightPinkEBE4F0 },
              ]}
            >
              <Images.svgs.rightarrow style={[{ color: Colors.purple }]} />
            </TouchableOpacity>
          </View>
          <View
            style={[
              Gutters.littleMargin,
              Gutters.smallPadding,
              Layout.selfCenter,
              {
                width: sWidth(90),
                backgroundColor: Colors.purple,
                borderRadius: 10,
              },
            ]}
          >
            <Text
              style={[
                Fonts.fontBold20,
                Layout.selfCenter,
                { color: Colors.white },
              ]}
            >
              {t('common:shopbybrands')}
            </Text>
            <View>
              <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
              >
                {[1, 2, 3, 4]?.map((item, index) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => navigation.navigate('LoginScreen')}
                      key={index}
                    >
                      <View
                        style={[
                          Layout.center,
                          Gutters.smallTMargin,
                          Gutters.littleLMargin,
                          {
                            width: sWidth(24),
                            height: sWidth(24),
                            backgroundColor: Colors.white,
                            borderRadius: sWidth(15),
                          },
                        ]}
                      >
                        <Image
                          source={require('../../theme/assets/images/placeholder.png')}
                        />
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </View>
        <View style={[Layout.fill]}>
          <ItemRender data={browseData} title={t('common:bestseller')}>
            {browseData &&
              browseData?.map((item, index) => {
                return <RenderCard item={item} index={index} />;
              })}
          </ItemRender>
        </View>
        <View style={[Layout.fill, Gutters.smallMargin]}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            // pagingEnabled
          >
            {browseData &&
              browseData?.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={[
                      Layout.row,
                      Layout.fill,
                      Gutters.littleRMargin,
                      Gutters.littlePadding,
                      Layout.justifyContentBetween,
                      Layout.alignItemsCenter,
                      {
                        borderRadius: 10,
                        backgroundColor: Colors.LightPinkEBE4F0,
                      },
                    ]}
                  >
                    <Image
                      source={require('../../theme/assets/images/microphone2.png')}
                      style={[Layout.fill]}
                      resizeMode="contain"
                    />
                    <View style={[Gutters.smallPadding, { width: 150 }]}>
                      <Text style={[Fonts.fontBold20, { color: Colors.black }]}>
                        New Arrivals
                      </Text>
                      <Text
                        //  numberOfLines={3}
                        style={[
                          Fonts.fontReg12,
                          Gutters.littleVMargin,
                          { maxHeight: 100, color: Colors.GrayBlack555455 },
                        ]}
                      >
                        Sed ut perspiciatis unde omnis iste natus error sit
                        volup tatem accusantium doloremque. laudantium, totam
                        rem aperiam, eaque ipsa quae ab illo inventore veritatis
                        et quasi architecto beatae vitae dicta sunt explicabo.
                      </Text>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('LoginScreen')}
                        style={[
                          Layout.center,
                          Layout.row,

                          {
                            width: sWidth(30),
                            height: sHight(5),
                            borderRadius: 10,
                            backgroundColor: Colors.purple,
                          },
                        ]}
                      >
                        <Images.svgs.bag fill={Colors.white} />
                        <Text
                          style={[
                            Fonts.fontBold11,

                            Gutters.littleLMargin,
                            { color: Colors.white },
                          ]}
                        >
                          {t('common:shopnow')}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
          </ScrollView>
        </View>
        <View style={[Layout.fill]}>
          <ItemRender data={browseData} title={t('common:bestseller')}>
            {browseData &&
              browseData?.map((item, index) => {
                return <RenderCard item={item} index={index} />;
              })}
          </ItemRender>
        </View>
        <View style={[Layout.fill]}>
          <ItemRender data={browseData} title={t('common:bestseller')}>
            {browseData &&
              browseData?.map((item, index) => {
                return <RenderCard item={item} index={index} />;
              })}
          </ItemRender>
        </View>
        <View style={[Layout.fill]}>
          <ItemRender data={browseData} title={t('common:bestseller')}>
            {browseData &&
              browseData?.map((item, index) => {
                return <RenderCard item={item} index={index} />;
              })}
          </ItemRender>
        </View>
        <Services />
        <AboutUs
          text={`Sed ut perspiciatis unde omnis iste natus error sit volup tatem accusa ntium dolore mqu laudan tium, totam rem aperiam, eaque ipsa quae ab illo. inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`}
        />
        <Support />
        {/* <Links navigation={navigation} /> */}
      </ScrollView>
    </View>
  );
};

export default HomeLandingPage;
