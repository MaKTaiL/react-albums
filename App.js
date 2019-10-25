import React from 'react';
import {StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AlbumScreen from './src/screens/AlbumScreen';

const App = createStackNavigator(
  {
    Home: {
      screen: AlbumScreen,
    },
  },
  {
    headerLayoutPreset: 'center',
  },
);

const styles = StyleSheet.create({});

export default createAppContainer(App);
