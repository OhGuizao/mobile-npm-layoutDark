import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { estilo } from './css/Styles';

export default function App() {
  return (
    <View style={estilo.container}>


      {/* #################################################### Inicio do header ####################################################*/}
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
      {/* #################################################### Fim do header ####################################################*/}
      <ScrollView horizontal={false}>


        {/* ####################################################   Começo do Stories   #################################################### */}
        <View style={estilo.stories}>

          <View>
            <Text style={estilo.titulostories}> Stories </Text>
          </View>

          <ScrollView horizontal={true} style={estilo.scrollstories}>
            <View>
              <Text style={estilo.blackbox}>Live</Text>
              <Image source={{ uri: "https://s1.1zoom.me/big0/389/298333-svetik.jpg" }} style={estilo.imgstories} ></Image>
              <View style={estilo.txticon}>
                <Text style={estilo.txt}>Lamborghinni</Text>
                <Image source={require("./assets/iconverified.png")} style={estilo.icon}></Image>
              </View>
            </View>

            <View>
              <Text style={estilo.redbox}>Premiere</Text>
              <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdvq7kRZc3dJCOWIklmoyNEu1yHhUm5zXNkQ&usqp=CAU" }} style={estilo.imgstories} ></Image>
              <View style={estilo.txticon}>
                <Text style={estilo.txt}>Ferrari</Text>
                <Image source={require("./assets/iconverified.png")} style={estilo.icon}></Image>
              </View>
            </View>

            <View>
              <Text style={estilo.blackbox}>Luxe</Text>
              <Image source={{ uri: "https://s1.1zoom.me/big0/931/Volkswagen_Baja_1000_Beetles_2017_534019_1280x800.jpg" }} style={estilo.imgstories} ></Image>
              <View style={estilo.txticon}>
                <Text style={estilo.txt}>Fusca</Text>
                <Image source={require("./assets/iconverified.png")} style={estilo.icon}></Image>
              </View>
            </View>
            <View>
              <Text style={estilo.redbox}>Premiere</Text>
              <Image source={{ uri: "https://s1.1zoom.me/big0/284/353588-admin.jpg" }} style={estilo.imgstories} ></Image>
              <View style={estilo.txticon}>
                <Text style={estilo.txt}>Osiris</Text>
                <Image source={require("./assets/iconverified.png")} style={estilo.icon}></Image>
              </View>
            </View>

            <View>
              <Text style={estilo.blackbox}>Popular</Text>
              <Image source={{ uri: "https://s1.1zoom.me/big0/380/McLaren_Yellow_504332.jpg" }} style={estilo.imgstories} ></Image>
              <View style={estilo.txticon}>
                <Text style={estilo.txt}>T20</Text>
                <Image source={require("./assets/iconverified.png")} style={estilo.icon}></Image>
              </View>
            </View>

          </ScrollView>

        </View>
        {/* #################################################### Fim do Stories #################################################### */}



        {/* #################################################### Começo do Trending ################################################*/}
        <View style={estilo.trending}>

          <View style={estilo.trendingcxtitulo}>
            <Text style={estilo.tredingtitulo}>Trending</Text>
            <Image source={require("./assets/more.png")} style={estilo.trendingmore}></Image>
          </View>

          <View style={estilo.cxtredingdetalhe}>
            <View>
              <Image source={{ uri: "https://turinha-static.pkds.it/blog/production/2018/09/11113740/soccer-kids-picture-id157315889.jpg" }} style={estilo.detalheimg} />
              {/* #################################################### <Text style={estilo.detalhelike}>Like</Text> */}
              <Image source={require("./assets/dedo.png")} style={estilo.detalhelike}/>
            </View>

            <View style={estilo.trendinguser}>
              <Image source={{ uri: "data:image/jpeg;base64,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" }} style={estilo.trendingusuarioimg} />
              <View>
                <Text style={estilo.trendingusuariotitulo}>Lionel Messi</Text>
                <Text style={estilo.treendingusuariosub}>2 minutos atrás</Text>
              </View>

            </View>

            <Text style={estilo.trendinggobs}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptates tenetur, tempora deleniti accusamus veritatis recusandae modi eaque facere a expedita quas sed quos pariatur soluta quaerat neque in ut!</Text>

          </View>

        </View>
        {/* #################################################### Fim do Trending ################################################*/}

      </ScrollView>
    </View>
  );
}

