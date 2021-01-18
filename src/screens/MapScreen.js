import React from 'react';
import { ImageBackground, View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-navigation'
import Map from '../components/Maps'


const MapsScreen = ({ navigation }) => {
    return <SafeAreaView
        forceInset={{ top: 'always' }}>
            <Map>
                
            </Map>
    </SafeAreaView>
};

const styles = StyleSheet.create({});


export default MapsScreen;