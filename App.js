import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button, DefaultTheme, Modal, Provider as PaperProvider } from 'react-native-paper';
import { Appbar, Searchbar } from 'react-native-paper';
import { Icon, Image } from 'react-native-elements'
import axios from 'axios';
import moment from 'moment';
import LightingIcon from './components/LightingIcon';
import RainIcon from './components/RainIcon';
import SunIcon from './components/SunIcon';
import SnowIcon from './components/SnowIcon';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3d3d3d',
  },
};

export default function App() {
  const date = moment().format('dddd, MMMM Do');
  const [searchQuery, setSearchQuery] = useState('');
  const [toggleSearch, setToggleSearch] = useState(false);
  const [weather, setWeather] = useState({});

  const onChangeSearch = query => setSearchQuery(query);

  const searchCity = async () => {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${searchQuery.toLowerCase()}&appid=c31be7507dbc0c604de53a9fadb835ae`;
    try{
      const response = await axios.get(apiUrl);
      setWeather(response.data);
      setSearchQuery('');
      setToggleSearch(!toggleSearch);
      console.log(response.data);
    }catch(error){
      console.log(error);
    }
  }

  const showSearchBar = () => {
    setToggleSearch(!toggleSearch);
  }
  
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Modal visible={!toggleSearch}>
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
        </Modal>
        <View style={styles.weatherContainer}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.city}>Barranqueras</Text>
          <Image
            source={{uri: 'http://openweathermap.org/img/wn/03d@4x.png'}}
            style={{ width: 200, height: 200 }}
          />
        <Text style={styles.temperature}>37°</Text>
        </View>
        <Appbar style={styles.bottom}>
          <Appbar.Action
            icon="archive"
            onPress={() => console.log('Pressed archive')}
            />
              <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
              <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
              <Appbar.Action
                icon="delete"
                onPress={() => console.log('Pressed delete')}
              />
        </Appbar>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#324E71',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottom: {
    width: '100%',
    justifyContent: 'space-between'
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
    fontSize: 60,
    color: '#fefefe',
  }
});