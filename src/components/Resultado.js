import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const cara = require('../../assets/img/moeda_cara.png');
const coroa = require('../../assets/img/moeda_coroa.png');

export default class Resultado extends Component {

  constructor(props){
    super(props)
    this.state = { resultado: '' }
  }

  componentWiilMount(){
    const numAleatorio = Math.floor(Math.random() * 2)
    let caraOuCoroa = ''
    console.log(numAleatorio)
      if( numAleatorio === 0 ){
        caraOuCoroa = 'cara'
      }else{
        caraOuCoroa = 'coroa'
      }

      this.setState({ resultado: caraOuCoroa })
  }
  render(){
    if( this.state.resultado === 'cara'){
      return(
        <View style={ css.reultado }>
          <Image source={ cara }/>
        </View>
      )
    }
      return(
        <View style={ css.reultado }>
          <Image source={ coroa }/>
        </View>
      )


  }
}

const css = StyleSheet.create({
  about: {
    flex: 1,
    backgroundColor: '#61bd8c',
  },
  reultado: {
    flex: 1,
    backgroundColor: '#61bd8c',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
