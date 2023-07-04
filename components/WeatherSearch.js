import { EvilIcons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native'

const WeatherSearch = ({ fetchWeather }) => {
    const [cityName, setCityName] = useState('');

    return (
        <View style={styles.serchBar}>
            <TextInput
                style = {{width: Dimensions.get('window').width / 2+80 , paddingLeft:10}}
                placeholder='Sehir girin , aramak için icona tıklayın'
                value={cityName}
                placeholderTextColor="#fff"
                onChangeText={(text) => setCityName(text)}
            />
            <EvilIcons name='search' size={32} color={'white'} style={{paddingRight:5}}
                onPress={() => fetchWeather(cityName)}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    serchBar: {
        borderColor: 'black',
        flexDirection: 'row',
        backgroundColor: '#80826f',
        height: 40,
        width: Dimensions.get('window').width / 2 + 90,
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 17,
    },


});

export default WeatherSearch