import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({ term, onTermChange, onTermSubmitted }) => {

    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    value={term}
                    onChangeText={onTermChange}

                />
                <TouchableOpacity
                    style={styles.opacityStyle}
                    onPress={onTermSubmitted}>
                    <Feather style={styles.iconStyle}
                        name='search'
                        color='white' />
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'red',
        height: 55,
        flexDirection: 'row',
        padding: 5,
        paddingVertical: 6
    },
    container: {
        flexDirection: 'row',
        flex: 1,
        paddingLeft: 10,
        paddingRight: 3,
        fontSize: 18,
        borderRadius: 50,
        backgroundColor: 'white',
        marginHorizontal: 2
    },
    input: {
        flex: 1
    },
    iconStyle: {
        alignSelf: 'center',
        fontSize: 25,
        padding: 5,
        width: 50,
        backgroundColor: 'red',
        borderRadius: 30,
        textAlign: 'center'
    },
    opacityStyle: {
        alignSelf: 'center'
    }

});


export default SearchBar;