import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Dimensions, StyleSheet } from 'react-native';

const height = Dimensions.get('window').height;

const Maps = ({ navigation }) => {
    return (
        <MapView
            style={styles.maps}
            loadingEnabled={true}
            showsUserLocation={true}
            region={{
                latitude: 37.7825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121
            }}>
            <Marker
                coordinate={{ latitude: 37.7825, longitude: -122.4324 }}
                title={"San Fransicco"} />

            <Marker
                coordinate={{ latitude: 45.7825, longitude: -122.4324 }}
                title={'San Fransicco'} />

        </MapView>
    )
};

const styles = StyleSheet.create({
    maps: {
        height
    }
});


export default Maps;