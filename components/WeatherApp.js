import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DefaultTheme, Modal, Provider as PaperProvider } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import { Icon } from 'react-native-elements'
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay';

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#1d1d1d',
    },
  };

export default function WeatherApp() {
    const [searchQuery, setSearchQuery] = useState('');
    const [toggleSearch, setToggleSearch] = useState(false);
    const [weather, setWeather] = useState({});
    const [error, setError] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    const searchCity = async () => {
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${searchQuery.toLowerCase()}&appid=c31be7507dbc0c604de53a9fadb835ae`;
        try{
        const response = await axios.get(apiUrl);
        setWeather({main: response.data.main, name: response.data.name, weather: response.data.weather});
        setSearchQuery('');
        setToggleSearch(!toggleSearch);
        }catch(error){
            setError(error.response.data.message);
        }
    }

    const formatError = (error) => {
        let formattedError = error.charAt(0).toUpperCase() + error.slice(1,error.length)
        return formattedError;
    }

    const showSearchBar = () => {
        setToggleSearch(!toggleSearch);
    }
    
    return (
        <PaperProvider theme={theme}>
            <View style={styles.container}>
                <Modal visible={!toggleSearch && !weather.hasOwnProperty('main')}>
                    <Icon name='search' reverse color='#fefefe' iconStyle={{color: '#1d1d1d'}} onPress={showSearchBar}/>
                </Modal>
                <Modal visible={toggleSearch}>
                    <Searchbar
                        placeholder="Search for a city"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                        style={styles.search}
                        onSubmitEditing={searchCity}
                    />
                    <Text style={styles.error}>{error.length > 0 ? `${formatError(error)}!` : ''}</Text>
                </Modal>
                <Modal visible={weather.hasOwnProperty('main')}>
                    <WeatherDisplay weather={weather.weather}/>
                </Modal>
            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    error: {
        fontSize: 24,
        textAlign: 'center',
        color: '#3d3d3d'
    }
  });