import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import moment from 'moment';

export default function WeatherDisplay(props) {
    console.log(props.weather);
    const date = moment().format('dddd, MMMM Do');

    return (
        <View style={styles.weatherContainer}>
            <Image
                source={{uri: 'http://openweathermap.org/img/wn/03d@4x.png'}}
                style={{ width: 150, height: 150, marginVertical: 0}}
            />
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.temperature}>37</Text>
            <Text style={styles.degrees}>°C</Text>
            <Text style={styles.city}>Barranqueras</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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

