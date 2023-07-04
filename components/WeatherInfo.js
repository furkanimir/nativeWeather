import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import WeatherSearch from './WeatherSearch';

const WeatherInfo = ({ weatherData, fetchWeather }) => {
  const {
    name,
    visibility,
    weather: [{ icon, description }],
    main: { temp, humidity, feels_like, },
    wind: { speed },
    sys: { sunrise, sunset },
  } = weatherData;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <WeatherSearch fetchWeather={fetchWeather} />
      </View>

      <View style={{ alignItems: 'center' }}>
        <Text style={styles.title}> {name} </Text>
      </View>

      <View style={styles.logo}>
        <View style={{ flexDirection: 'column', alignItems: 'center', }}>
          <Image
            style={styles.largeIcon}
            source={{ uri: `http://openweathermap.org/img/wn/${icon}@4x.png` }}
          />
          <Text style={{ fontSize: 22, color: 'white' }}>{description}</Text>
        </View>

        <View style={styles.elementke}>
          <Text style={styles.beyaz}>temp : {temp} °C</Text>

        </View>

      </View>
      {/* {*logo*} */}
      <View style={styles.row}>
        <View style={styles.elementke}>
          <Image
            style={styles.smallIcon}
            source={{ uri: 'https://static-00.iconduck.com/assets.00/temperature-feels-like-icon-495x512-ylzv705f.png' }}
          />
          <Text style={styles.beyaz}>{feels_like} °C</Text>
          <Text style={styles.beyaz}>Feels Like</Text>

        </View>
        <View style={styles.elementke}>
          <Image
            style={styles.smallIcon}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4148/4148460.png' }}
          />
          <Text style={styles.beyaz}>{humidity} %</Text>
          <Text style={styles.beyaz}>humidity</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.elementke}>
          <Image
            style={styles.smallIcon}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1163/1163765.png' }}
          />
          <Text style={styles.beyaz}>{new Date(sunrise * 1000).toLocaleString()}</Text>
          <Text style={styles.beyaz}>Sunrise</Text>

        </View>
        <View style={styles.elementke}>
          <Image
            style={styles.smallIcon}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3920/3920799.png' }}
          />
          <Text style={styles.beyaz}>{new Date(sunset * 1000).toLocaleString()}</Text>
          <Text style={styles.beyaz}>Sunset</Text>
        </View>
      </View>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  elementke: {
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#80826f',
    justifyContent: 'space-evenly',
    height:150,
    width: Dimensions.get('window').width / 4,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderRadius: 8
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor:'red',
    margin: 10,
    marginTop:25,
    // height:Dimensions.get('window').height/6,
  },
  smallIcon: {
    marginTop: 5,
    width: 65, //Dimensions.get('window').width/2,
    height: 65,
  },
  largeIcon: {
    width: 135, //Dimensions.get('window').width/2,
    height: 135,
  },
  logo: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

  },
  title: {
    color: '#ca3131',
    fontSize: 34,
    width: '100%',
    textAlign: 'center',
    // fontWeight: 'bold',
    fontFamily: '',
    marginBottom: 5

  },
  cityName: {

  },
  container: {
    flex: 1,
    marginTop: 15
  },
  header: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: 95,
  },
  beyaz: {
    color: 'white',
    fontSize:20,
  },

});

export default WeatherInfo