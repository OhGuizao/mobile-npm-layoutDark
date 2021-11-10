import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { estilo } from './css/Styles';

export default function App() {
  return (
    <View style={estilo.container}>


      {/* Inicio do header ####################################################*/}
      <View style={estilo.header}>

        <View style={estilo.perfil}>
          <Image source={{ uri: "https://tntsports.com.br/__export/1630518367553/sites/esporteinterativo/img/2021/09/01/ronaldo_1.jpg_423682103.jpg" }} style={estilo.imgperfil} />
        </View>

        <View style={estilo.titulo}>
          <Text style={estilo.nome}>Cristiano Ronaldo</Text>
          <Text style={estilo.descricao}>Jogador de futebol</Text>
        </View>

        <View style={estilo.pesquisa}>
          <Image source={{ uri: "https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_960_720.png" }} style={estilo.imgpesquisa} />
        </View>

      </View>
      {/* Fim do header ####################################################*/}




      {/* Começo do Stories #################################################### */}
      <View style={estilo.stories}>

        <View>
          <Text style={estilo.titulostories}> Stories </Text>
        </View>

        <ScrollView horizontal={true} style={estilo.scrollstories}>
          <View>
            <Text style={estilo.blackbox}>Live</Text>
            <Image source={{ uri: "https://s1.1zoom.me/big0/389/298333-svetik.jpg" }} style={estilo.imgstories} ></Image>
            <View style={estilo.txticon}>
              <Text style={estilo.txt}>Savannah</Text>
              <Image source={require("./assets/iconverified.png")} style={estilo.icon}></Image>
            </View>
          </View>

          <View>
            <Text style={estilo.redbox}>Premiere</Text>
            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdvq7kRZc3dJCOWIklmoyNEu1yHhUm5zXNkQ&usqp=CAU" }} style={estilo.imgstories} ></Image>

          </View>

          <View>
            <Text style={estilo.blackbox}>Live</Text>
            <Image source={{ uri: "https://s1.1zoom.me/big0/931/Volkswagen_Baja_1000_Beetles_2017_534019_1280x800.jpg" }} style={estilo.imgstories} ></Image>
            <View style={estilo.txticon}>
              <Text style={estilo.txt}>Savannah</Text>
              <Image source={require("./assets/iconverified.png")} style={estilo.icon}></Image>
            </View>
          </View>
          <View>
            <Text style={estilo.redbox}>Premiere</Text>
            <Image source={{ uri: "https://s1.1zoom.me/big0/284/353588-admin.jpg" }} style={estilo.imgstories} ></Image>
            <View style={estilo.txticon}>
              <Text style={estilo.txt}>Savannah</Text>
              <Image source={require("./assets/iconverified.png")} style={estilo.icon}></Image>
            </View>
          </View>

          <View>
            <Text style={estilo.blackbox}>Live</Text>
            <Image source={{ uri: "https://s1.1zoom.me/big0/380/McLaren_Yellow_504332.jpg" }} style={estilo.imgstories} ></Image>
            <View style={estilo.txticon}>
              <Text style={estilo.txt}>Savannah</Text>
              <Image source={require("./assets/iconverified.png")} style={estilo.icon}></Image>
            </View>
          </View>
        </ScrollView>

      </View>
      {/* Fim do Stories #################################################### */}


    </View>
  );
}

