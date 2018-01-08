import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class SobreJogo extends Component {

  render(){
    return(
      <Text style={ css.about }>Aqui podem ser apresentadas informacoes sobre  jogo</Text>
    )
  }
}

const css = StyleSheet.create({
  about: {
    flex: 1,
    backgroundColor: '#61bd8c',
  }
})
