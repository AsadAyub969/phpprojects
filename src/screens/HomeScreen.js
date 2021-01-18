import React, { useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useFonts } from "@use-expo/font";
import HomeBtn from '../components/HomeBtn';
import { TouchableOpacity } from 'react-native-gesture-handler';


const customFonts = {
    avenir: require("../../assets/fonts/avenir_ff/AvenirLTStd-Black.otf"),
};



const HomeScreen = () => {
    const [isLoaded] = useFonts(customFonts);

    if (!isLoaded) {
        return null;
    }



    return (
        <ImageBackground
            style={styles.img_bg}
            source={require('../../assets/images/home_background/bg_home.png')}
        >
            <View
                style={styles.btn_bg}>
                <TouchableOpacity>
                    <LinearGradient
                        colors={['#C2C0C0', '#70A1FF']}
                        style={styles.linearGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Text style={styles.styl_btn_text}>Store</Text>
                        <Image
                            style={styles.ic_img}
                            source={require('../../assets/images/home_background/store.png')} />
                    </LinearGradient>
                </TouchableOpacity>


                <TouchableOpacity>
                    <LinearGradient
                        colors={['#CBBACC', '#2580B3']}
                        style={styles.linearGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Text style={styles.styl_btn_text}>Delivery Man</Text>
                        <Image
                            style={styles.ic_img}
                            source={require('../../assets/images/home_background/delivery.png')} />
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity>
                    <LinearGradient
                        colors={['#FFDD00', '#FBB034']}
                        style={styles.linearGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Text style={styles.styl_btn_text}>Sales Confirmer</Text>
                        <Image
                            style={styles.ic_img}
                            source={require('../../assets/images/home_background/sales.png')} />
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity>
                    <LinearGradient
                        colors={['#F7F7F7', '#9E8FB2']}
                        style={styles.linearGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Text style={styles.styl_btn_text}>Order Tracking</Text>
                        <Image
                            style={styles.ic_img}
                            source={require('../../assets/images/home_background/order.png')} />
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity>
                    <LinearGradient
                        colors={['#722AE6', '#E4B5CB']}
                        style={styles.linearGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Text style={styles.styl_btn_text_dark}>Job Offers</Text>
                        <Image
                            style={styles.ic_img}
                            source={require('../../assets/images/home_background/job.png')} />
                    </LinearGradient>
                </TouchableOpacity>
            </View>

        </ImageBackground>


    )
};

const styles = StyleSheet.create({
    ic_img: {
        width: 60,
        height: 60,
        resizeMode: 'contain'
    },
    img_bg: {
        flex: 1
    },
    styl_btn_text: {
        flex: 1,
        alignSelf: 'center',
        textAlign: 'left',
        marginLeft: 10,
        fontSize: 17,
        fontFamily: 'avenir',
        color: '#254481'
    },
    styl_btn_text_dark: {
        flex: 1,
        alignSelf: 'center',
        textAlign: 'left',
        marginLeft: 10,
        fontSize: 17,
        fontFamily: 'avenir',
        color: 'white'
    },
    btn_bg: {
        marginTop: 50,
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    linearGradient: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        height: 80,
        width: 255,
        padding: 20,
        marginBottom: 30,
    }

});


export default HomeScreen;