import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../components/Header'
import Footer from '../components/Footer'
import CardEvento from '../components/CardEvento'
import Colors from '../constants/Colors';
import { Button, Modal, Portal, Provider, Appbar } from 'react-native-paper';

export default class MeusEventosOrg extends Component {
    
    render() {

        return (
            <View style={{ flex: 1 }}>
                <Header />
                <ScrollView style={styles.contentView}>
                    <View style = {styles.rowView} paddingVertical = {4}>
                        <Text style={styles.text}>
                            Meus Eventos
                        </Text>
                        <Button 
                            style = {styles.btnCriar}
                            mode='contained' 
                            theme={{ roundness: 50 }}
                            onPress= { () => this.props.navigation.navigate('CriarEvento') } >
                            <Text
                            style = {{fontSize: 16, color: 'white'}}
                            >NOVO EVENTO</Text>
                        </Button>
                        
                    </View>
                    <View>
                        <View>
                            <View width = {'100%'} height = {2} backgroundColor = {Colors.azulClaro} />
                                    
                                    <CardEvento
                                    paddingTop = {10}
                                    source={require('../assets/eventos/evento1.jpg')}
                                    title="Autonor 2020"
                                    description="Maior feira automobilística da america latina, ocorrerá entre os meses de maio e julho deste ano."
                                    onPress = {  ()  => this.props.navigation.navigate('EventDetails') }
                                    />


                                    <View>
                                        <Icon style = {styles.icon} name="exclamation-circle" size={40} color= {Colors.cinza} />
                                        <Text 
                                            style = {styles.centerView}>
                                            Fim da Lista
                                        </Text>
                                    </View>
                        </View>
                    </View>
                    <View style={{ height: 80 }} />
                </ScrollView>
                <Footer
                cor1 = 'white'
                cor2 = {Colors.laranja}
                cor3 = {Colors.laranja}
                cor4 = {Colors.laranja}
                cor5 = {Colors.laranja}
                meusEventos = {  ()  => this.props.navigation.navigate('MeusEventosOrg') }
                mensagens = {  ()  => this.props.navigation.navigate('Mensagens') }
                feedComExpositores = {  ()  => this.props.navigation.navigate('FeedComExpositores') }
                pendentes = {  ()  => this.props.navigation.navigate('EventoPendentesLista') }
                profile = {  ()  => this.props.navigation.navigate('Profile') }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rowView: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: 6
        
    },
    btnCriar: {
        borderRadius: 10,
        justifyContent: 'space-around',
        backgroundColor: Colors.laranja,
        
        
    },
    contentView: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: 'white'
    },
    text: {
        fontSize: 17,
        fontWeight: 'bold',
        margin: 10,
        
    },
    horizontalScroolView: {
        marginLeft: 10
    },
    centerView: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colors.cinza,
        fontSize: 18
    },
    icon: {
        alignSelf: 'center',
        paddingVertical: 10
        
    }
});