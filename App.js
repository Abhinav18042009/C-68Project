import React from'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FaceBookScreen from './screens/fb';
import InstagramScreen from './screens/in';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer />
    );
  }
}

var TabNavigator = createBottomTabNavigator({
  Facebook : {screen:FaceBookScreen},
  Instagram:{screen:InstagramScreen}
})
const AppContainer = createAppContainer(TabNavigator);