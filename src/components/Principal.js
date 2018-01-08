import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux'
const logo = require('../../assets/img/logo.png');
const btnJogar = require('../../assets/img/botao_jogar.png');
const btnSobreJogo = require('../../assets/img/sobre_jogo.png');
const outros_jogos = require('../../assets/img/outros_jogos.png');

export default class Principal extends Component {
  render() {
    return (
      <View style={styles.cenaPrincipal}>

        <View style={ styles.apresentacaoJogo}>
          <Image source={ logo } />

          <TouchableHighlight onPress={ () => {
            Actions.resultado()
          }}>
            <Image source={ btnJogar } />
          </TouchableHighlight>
        </View>

        <View style={ styles.rodape }>
          <TouchableHighlight onPress={ () => {
            Actions.sobrejogos()
          }}>
            <Image source={ btnSobreJogo } />
          </TouchableHighlight>


          <TouchableHighlight onPress={ () => {
            Actions.outrosjogos()
          }}>
            <Image source={ outros_jogos } />
          </TouchableHighlight>
        </View>

        <View></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cenaPrincipal: {
    backgroundColor: '#61bd8c',
    flex: 1
  },
  apresentacaoJogo: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rodape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
