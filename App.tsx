import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image,StyleSheet, Text, View } from 'react-native';
import { estilo } from './css/Styles';

export default function App() {
  return (
    <View style={estilo.container}>

      <View style={estilo.header}>

        <View style={estilo.perfil}>
          <Image source={{ uri:"https://tntsports.com.br/__export/1630518367553/sites/esporteinterativo/img/2021/09/01/ronaldo_1.jpg_423682103.jpg"}} style={estilo.imgperfil} />
        </View>

        <View style={estilo.titulo}>
          <Text style={estilo.nome}>Cristiano Ronaldo</Text>
          <Text style={estilo.descricao}>Jogador de futebol</Text>
        </View>

        <View style={estilo.pesquisa}>
          <Image source={{uri:"https://image.flaticon.com/icons/png/512/70/70866.png"}} style={estilo.imgpesquisa}/>
        </View>
      </View>
      <StatusBar style="auto" />

    </View>
  );
}

