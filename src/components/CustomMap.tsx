import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { useTheme } from '@/hooks';
import { useTranslation } from 'react-i18next';
import CustomSimpleButton from './CustomSimpleButton';

const CustomMap = ({
  getMapValues,
  showBottomSheet,
  setShowBottomSheet,
}: any) => {
  const { t } = useTranslation(['common']);
  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme();
  const [currentLocation, setCurrentLocation] = useState<any>(null);

  const [addressValues, setAddressValues] = useState<any>({
    city: '',
    sectorArea: '',
    address: '',
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        currentAddressValue(position.coords);
        setCurrentLocation({ latitude, longitude });
      },
      error => console.error(error),
      { enableHighAccuracy: true, timeout: 200000, maximumAge: 10000 },
    );
  }, []);

  const onMarkerDrag = e => {
    // console.log('Marker Dragged:', e.nativeEvent.coordinate);
  };

  const onMarkerDragEnd = async e => {
    console.log('Marker Drag End:', e.nativeEvent.coordinate);
    const { latitude, longitude } = e.nativeEvent.coordinate;

    const apiKey = 'AIzaSyDTrnapaNJdkLqfuupPcnchRonjXzsRdU4';
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`,
    );

    const data = await response.json();
    console.log('===========', data);
    if (data.results && data.results.length > 0) {
      const filterCity = 'administrative_area_level_2';
      const filteredCity = data.results[0].address_components.filter(val =>
        val.types.includes(filterCity),
      );
      const filterAreaSector = 'sublocality_level_2';
      const filteredAreaSector = data.results[0].address_components.filter(
        val => val.types.includes(filterAreaSector),
      );
      const filterAddress = data.results[0].formatted_address;
      setAddressValues({
        ...addressValues,
        address: filterAddress,
        city: filteredCity[0].long_name,
        sectorArea: filteredAreaSector[0].long_name,
      });

      //   console.log('address :::: ', JSON.stringify(data.results));
    }
  };

  const currentAddressValue = async (coordinateValues: any) => {
    console.log('coordinateValues:', coordinateValues);
    const { latitude, longitude } = coordinateValues;

    const apiKey = 'AIzaSyDTrnapaNJdkLqfuupPcnchRonjXzsRdU4';
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`,
    );

    const data = await response.json();
    if (data.results && data.results.length > 0) {
      const filterCity = 'administrative_area_level_2';
      const filteredCity = data.results[0].address_components.filter(val =>
        val.types.includes(filterCity),
      );
      const filterAreaSector = 'sublocality_level_2';
      const filteredAreaSector = data.results[0].address_components.filter(
        val => val.types.includes(filterAreaSector),
      );
      const filterAddress = data.results[0].formatted_address;
      setAddressValues({
        ...addressValues,
        address: filterAddress,
        city: filteredCity[0].long_name,
        sectorArea: filteredAreaSector[0].long_name,
      });
    }
  };

  const saveAddress = () => {
    // console.log('send to parent value :::: ', addressValues);
    getMapValues(addressValues);
    setShowBottomSheet(!showBottomSheet);
  };

  return (
    <View style={styles.container}>
      {currentLocation && (
        <>
          <View
            style={[
              // Gutters.xSmallHPadding,
              Layout.fill,
            ]}
          >
            <MapView
              style={styles.map}
              initialRegion={{
                //   latitude: 37.78825,
                //   longitude: -122.4324,
                //   latitudeDelta: 0.0922,
                //   longitudeDelta: 0.0421,
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                draggable
                coordinate={{
                  latitude: currentLocation.latitude,
                  longitude: currentLocation.longitude,
                }}
                onDrag={e => onMarkerDrag(e)}
                onDragEnd={e => onMarkerDragEnd(e)}
              />
            </MapView>
          </View>

          <View
            style={[
              Gutters.xSmallVMargin,
              {
                borderWidth: 1,
                borderColor: Colors.borderGray,
              },
            ]}
          />
          <View style={[Gutters.xSmallHPadding]}>
            <Text style={{ color: Colors.black }}>{addressValues.address}</Text>

            <CustomSimpleButton
              title={t('common:save')}
              containerStyle={[Gutters.xSmallHMargin, Gutters.regularVMargin]}
              onPress={() => saveAddress()}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default CustomMap;
