import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EventList from './EventList';
import EventForm from './EventForm';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Your events',
    })
  },
  form: {
    screen: EventForm,
    title:'Your Events',
    navigationOptions: () => ({
      title: 'Add event',
    })
  }
});

const App = createAppContainer(MainNavigator);

export default App;