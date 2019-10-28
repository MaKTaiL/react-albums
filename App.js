import React from 'react';
import {StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AlbumList from './src/screens/AlbumList';

const App = createStackNavigator(
  {
    screen: AlbumList,
  },
  {
    headerLayoutPreset: 'center',
  },
);

const styles = StyleSheet.create({});

export default createAppContainer(App);
