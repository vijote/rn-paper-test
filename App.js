import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Appbar, Searchbar } from 'react-native-paper';
import moment from 'moment';

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
        />
        <Text style={{color: '#fefefe'}}>Open up App.js to start working on your app!</Text>
        <Text>{date}</Text>
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
    backgroundColor: '#707070',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between'
  },
});