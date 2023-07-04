import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, Alert, ActivityIndicator, Button } from 'react-native'
import Constants from 'expo-constants'
import WeatherInfo from './WeatherInfo'

const API_KEY = '353052993f91c64a440f9bb18189fe1d';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(false);

    //fetch data functiom
    const fetchWeather = async (cityName) => {
        try {
            setLoaded(false);
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
            if (response.status == 200) {
                const data = await response.json();
                setWeatherData(data);
            } else {
                setWeatherData(null);
            }
            setLoaded(true);


        } catch (error) {
            Alert.alert('Error, ', error.message)
        }
    }
    //ümraniye
    useEffect(() => {
        fetchWeather('Ümraniye');
    }, [])

    if (!loaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color={"red"} />
                <Text style={{ color: 'white' }}>yüklenmedi </Text>
            </View>
        )
    }
    if (weatherData == null) {
        return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color={"red"} />
                    <Text style={{ color: 'white' }}>Sehir Bulunamadı</Text>
                    <Button onPress={() => setWeatherData('Uskudar')}> </Button>
                </View>
        )
    }

    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Text style={styles.textHeader}>Native Weather App</Text>

            </View>
            <WeatherInfo weatherData={weatherData} fetchWeather={fetchWeather} />

            <View style={styles.created}>
                <Text style={{color:'white', paddingLeft:10}}>created by furkanimir</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    created:{
        backgroundColor:'red',
        height:30,
        flexDirection:'column',
        justifyContent:'center',
    },
    textHeader: {
        color: 'gray',
        fontSize: 31
    },
    container: {
        flex: 1,
        backgroundColor: '#ada389',
        paddingTop: Constants.statusBarHeight,
    },
    header: {
        backgroundColor: '#cfcf',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
    },

});

export default Weather