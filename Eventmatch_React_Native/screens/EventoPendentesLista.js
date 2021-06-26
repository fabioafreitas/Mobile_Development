import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import Footer from '../components/Footer'
import CardAlugado from '../components/CardAlugado'
import Colors from '../constants/Colors';
import CardPendente from '../components/CardPendente'

export default class EventoPendentesLista extends Component {
    
    render() {

        return (
            <View style={{ flex: 1 }}>
                
                <ScrollView style={styles.contentView}>
                    <View style = {styles.rowView}>
                        
                    <Icon style = {styles.icon} name="arrow-left" size={25} color= {Colors.cinza} onPress={() => { this.props.navigation.goBack() }} />
                        <Text style={styles.text2}>
                            PARCEIROS PENDENTES
                        </Text>
                    </View>
                    <View>
                        <View>
                            <View width = {'100%'} height = {2} backgroundColor = {Colors.azulClaro} />
                                

                                <CardPendente
                                source={require('../assets/profiles/expositor/homem1.jpeg')}
                                title="FABIO DAIUKU"
                                categoria = "LGBTQI"
                                estande = "Estande: F24"
                                pagamento = "Pagamento: OK"
                                onPress={() => console.log("teste")}
                                rating={1}
                                />
                                <CardPendente
                                source={require('../assets/profiles/expositor/mulher2.jpeg')}
                                title="1000ºUS"
                                categoria = "ARTESANATO"
                                estande = "Estande: Em Aberto"
                                pagamento = "Pagamento: Pendente"
                                onPress={() => console.log("teste")}
                                rating={4}
                                />
                                <CardPendente
                                source={require('../assets/profiles/expositor/mulher3.jpeg')}
                                title="DOGS"
                                categoria = "PETS"
                                estande = "Estande: P01"
                                pagamento = "Pagamento: OK"
                                onPress={() => console.log("teste")}
                                rating={5}
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
                cor1 = {Colors.laranja}
                cor2 = {Colors.laranja}
                cor3 = {Colors.laranja}
                cor4 = 'white'
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
    rowView: {
        flexDirection: 'row',
        paddingLeft: 6,
        justifyContent: "space-between",
        width: '100%'
        
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
        backgroundColor: Colors.azulClaro,
        borderRadius: 15,
        textAlign: 'center'
    },
    text2: {
        fontSize: 17,
        fontWeight: 'bold',
        margin: 10,
        borderRadius: 15,
        textAlign: 'center'
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