import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import moment from 'moment';

export default function WeatherDisplay(props) {
    const date = moment().format('dddd, MMMM Do');

    const convertToCelsius = () => {
        console.log(props.weather.weather[0].icon)
        const temp = parseInt(props.weather.main.temp);
        return (temp - 273.15).toFixed(1);
    }

    return (
        <View style={styles.weatherContainer}>
            <Image
                source={{uri: `http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@4x.png`}}
                style={{ width: 150, height: 150, marginVertical: 0}}
            />
            <Text style={styles.date}>{date}</Text>
            <View style={styles.tempContainer}>
                <Text style={styles.temperature}>{convertToCelsius()}</Text>
                <Text style={styles.degrees}>°C</Text>
            </View>
            <Text style={styles.city}>{props.weather.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tempContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    date: {
        fontSize: 16,
        color: '#fefefe'
    },
    weatherContainer: {
        alignItems: 'center',
    },
    city: {
        fontSize: 36,
        color: '#fefefe',
        marginBottom: 30
    },
    temperature: {
        marginTop: 20,
        fontSize: 100,
        color: '#fefefe',
    },
    degrees: {
        color: '#fefefe',
        fontSize: 40
    }
  });

