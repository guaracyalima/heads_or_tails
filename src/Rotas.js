import React from 'react';
import { Router, Scene} from 'react-native-router-flux'
import Principal from './components/Principal'
import SobreJogo from './components/sobreJogo'
import OutrosJogos from './components/outrosJogos'
import Resultado from './components/Resultado'

const Rotas = () => (
  <Router sceneStyle={{ paddingTop: 60 }}>
    <Scene key='principal' component={ Principal } initil title="Cara ou coroa"/>
    <Scene key='sobrejogos' component={ SobreJogo } title="Sobre os jogos"/>
    <Scene key='outrosjogos' component={ OutrosJogos } title="Outros jogos"/>
    <Scene key='resultado' component={ Resultado } title="Resultado"/>
  </Router>
)

export default Rotas;
