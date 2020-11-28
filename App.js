import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Appbar, Searchbar } from 'react-native-paper';
import moment from 'moment';
import Icon from './components/Icon';
import RainIcon from './components/RainIcon';
import SunIcon from './components/SunIcon';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3d3d3d',
  },
};

export default function App() {
  const date = moment().format('dddd, MMMM Do');
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.search}
        />
        <View style={styles.weatherContainer}>
          <Text style={styles.date}>{date}</Text>
          <Icon name='snow'/>
          {/* <RainIcon/> */}
          <SunIcon/>
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
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#2d2d2d',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottom: {
    width: '100%',
    justifyContent: 'space-between'
  },
  date: {
    fontSize: 20,
    marginBottom: 20,
    color: '#fefefe'
  },
  weatherContainer: {
    alignItems: 'center',
  }
});