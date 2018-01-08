import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class BarraSuperior extends Component {
  render() {
    return (
      <View style={css.main}>
        <Text style={ css.mainTitle }>cara ou coroa</Text>
      </View>
    );
  }
}

const css = {
  main: {
    backgroundColor: '#fff',
    paddingTop:5
  },
  mainTitle: {
    fontSize: 20,
    color: '#000'
  }
}
