import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../components/Header'
import Footer from '../components/Footer'
import Colors from '../constants/Colors'
import CardMessage from '../components/CardMessage';

export default class Mensagens extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header />
                <ScrollView style={styles.contentView} flexDirection = {'column'}>
                    <View flexDirection = 'row' paddingLeft = {5} paddingTop = {5} alignContent = {'center'}>
                    
                        <View paddingTop = {5}>
                            <Icon  name="envelope" size={30} color= {Colors.cinza} />
                        </View>
                        
                        <Text style={styles.text}>
                            Mensagens
                        </Text>
                    </View>
                    <View width = {'100%'} height = {2} backgroundColor = {Colors.azulClaro} />
                    
                    <CardMessage
                        source={require('../assets/profiles/expositor/homem5.jpeg')}
                        name="JHON BACKUS"
                        time={'há 1h'}
                        subject = {"Ameno, fabio, eder, rafael, maik, vanessa, dorime!! dorime! EventMatch dorime!"}
                        onPress = {() => console.log("eita")}
                    />
                    <CardMessage
                        source={require('../assets/profiles/expositor/homem6.jpeg')}
                        name="CIA DE EVENTOS"
                        time={'ontem'}
                        subject = {"Ameno, fabio, eder, rafael, maik, vanessa, dorime!! dorime! EventMatch dorime!"}
                        onPress = {() => console.log("eita")}
                    />
                    <CardMessage
                        source={require('../assets/profiles/expositor/mulher5.jpeg')}
                        name="VANESSA VS CORONA"
                        time={'há 14 dias'}
                        subject = {"Já estou me sentindo parte da mobilia. Essa quarentena é muito ruim!!!"}
                        onPress = {() => console.log("eita")}
                    />

                    <View style={{ height: 80 }} />
                </ScrollView>
                <Footer 
                cor1 = {Colors.laranja}
                cor2 = 'white'
                cor3 = {Colors.laranja}
                cor4 = {Colors.laranja}
                cor5 = {Colors.laranja}
                meusEventos = {  ()  => this.props.navigation.navigate('MeusEventosOrg') }
                mensagens = {  ()  => this.props.navigation.navigate('Mensagens') }
                feedComExpositores = {  ()  => this.props.navigation.navigate('FeedComExpositores') }
                pendentes = {  ()  => this.props.navigation.navigate('EventoPendentesLista') }
                profile = {  ()  => this.props.navigation.navigate('Profile') }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contentView: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: 'white'
    },
    text: {
        fontSize: 17,
        margin: 10,
        fontWeight: "bold",
        
    },
});
