import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const OrderRow = ({ name, description, price, img}) => {

    console.log(img);

    return (
        <View
            style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: img }} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.details}>{description}</Text>
            <Text style={styles.details}>{price}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: windowWidth / 2,
        flex: 1,
        padding: 5,
        justifyContent: 'center'
    },
    image: {
        height: 100,
        width: windowWidth / 2
    },
    name: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    details: {
        marginTop: 5
    }
});


export default OrderRow;