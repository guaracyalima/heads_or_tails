import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class OutrosJogos extends Component {

  render(){
    return(
      <Text style={ css.about }>
        Nossos outros jogos
      </Text>
    )
  }
}

const css = StyleSheet.create({
  about: {
    flex: 1,
    backgroundColor: '#61bd8c'
  }
})
