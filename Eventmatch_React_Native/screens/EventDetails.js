import React, { Component } from "react";
import { View, StyleSheet, Text, CheckBox } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { SliderBox } from "react-native-image-slider-box";

import Colors from '../constants/Colors';

import { Button, TextInput, Checkbox } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
const CustomButton = props => {
  return (
    <Button mode="contained" theme={{ roundness: 100 }} onPress={props.onPress}>
      <Text style={{ fontSize: 10 }}>{props.title}</Text>
    </Button>
  );
};

export default class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teste:true,
      images: [
        /*"https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",*/ // Network image
        require('../assets/paisagem/1.jpg'),  
        require('../assets/paisagem/2.jpg'),  
        require('../assets/paisagem/3.jpg'),  
        require('../assets/paisagem/4.jpg'),     
      ]
    };

    this.functionTeste = this.functionTeste.bind(this);
  }

  functionTeste(e) {
    this.setState({
        teste: !this.state.teste
    });
  }

  render() {
    return (
      <ScrollView>
        <View margin = {5} flexDirection = {'column'} backgroundColor = {'white'}>
            <Button 
            mode="contained"
            onPress={this.functionTeste} />
            {
                this.state.teste ? (
                  <View flexDirection = {'row'} justifyContent = {'center'} marginLeft = {6} width = {'96%'}>
                    <Button
                        style = {styles.btn}
                        mode='contained'
                        onPress= { () => this.props.navigation.navigate('CriarEvento') } >
                        <Icon style = {styles.icon} name="unlock-alt" size={16} color= {Colors.azulClaro} />
                        <Text
                        style = {{fontSize: 10, color: 'white', textAlign: 'center'}}
                        > EDITAR</Text>
                      </Button>
                      <Button
                        style = {styles.btn}
                        mode='contained'
                        onPress= { () => this.props.navigation.navigate('EventoAlugadosLista') } >
                        <Icon style = {styles.icon} name="group" size={16} color= {Colors.azulClaro} />
                        <Text
                        style = {{fontSize: 10, color: 'white', textAlign: 'center'}}
                        > PARCEIROS</Text>
                      </Button>
                      <Button
                        style = {styles.btn}
                        mode='contained'
                        onPress= { () => this.props.navigation.navigate('EventoPendentesLista') } >
                        <Icon style = {styles.icon} name="search" size={16} color= {Colors.azulClaro} />
                        <Text
                        style = {{fontSize: 10, color: 'white', textAlign: 'center'}}
                        > PENDENTES</Text>
                      </Button>
                      
                  </View>
                ) : (
                  <Text>teste false</Text>
                )
            }
            {/* Implementação de trecho de codigo onde todos terão acesso! */}
            <SliderBox
            marginRight = {20}
            circleLoop = {true}
            images={this.state.images} />
            <View paddingVertical = {2}/>
            <View flexDirection = {'row'} justifyContent = {'center'} style = {styles.participar}>
            <Icon style = {styles.icon} name="book" size={26} color= {Colors.laranja} />
              <CheckBox/>
              <View paddingTop = {6}>
              <Text>PARTICIPAR</Text>
              </View>
            </View>
            
            <Text style = {{fontWeight: 'bold', backgroundColor: Colors.azulClaro, marginVertical: 5}}>
              {'BIENAL INTERNACIONAL DO LIVRO - PERNAMBUCO \nhttps://www.bienalpernambuco.com/ \nCentro de Convenções \nEndereço: Av. Prof. Eduardo Bezerra, s/n \n Entre os dias 04 e 13 de outubro de 2019, livreiros, editores e distribuidores de todo o país e do exterior estarão reunidos mais uma vez, agora homenageando o escritor pernambucano, Solano Trindade  (in memorian) e trazendo a temática “Histórias para Resistir”, como mote central de suas atividades, trazendo a importância da preservação e do resgaste histórico de nossa cultura.'}
            </Text>
            <View backgroundColor = {Colors.laranja}>
            <Text>QUAIS ESTANDES ENCONTRO NESSE EVENTO?</Text>
            <Text>ARTESANATO: 20 ESTANDES</Text>
            <Text>CULINÁRIA: 20 ESTANDES</Text>
            <Text>JOIAS: 20 ESTANDES</Text>
            <Text>LIVROS: 20 ESTANDES</Text>
            <Text>ROUPAS: 20 ESTANDES</Text>
            <Text>TAPECARIA: 20 ESTANDES</Text>
            </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    height: 30,
    width: '35%',
    backgroundColor: '#40698d',
    borderRadius: 5
  },
  slideImage: {
    width: '100%',
    height: '300',
    backgroundColor: Colors.cinza
  },
  participar: {
    borderRadius: 20,
    height: 40,
    width: '48%',
    alignSelf: 'center',
    borderWidth: 2.0,
    borderColor: Colors.laranja
  },
  icon: {
    
  }

});