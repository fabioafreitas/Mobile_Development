import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import Footer from '../components/Footer'
import CardAlugado from '../components/CardAlugado'
import Colors from '../constants/Colors';
import { Button, Modal, Portal, Provider } from 'react-native-paper';

export default class EventoAlugadosLista extends Component {
    
    render() {

        return (
            <View style={{ flex: 1 }}>
                
                <ScrollView style={styles.contentView}>
                    <View style = {styles.rowView}>
                        
                    <Icon style = {styles.icon} name="arrow-left" size={25} color= {Colors.cinza} onPress = { () => this.props.navigation.navigate('EventDetails')} />
                        <Text style={styles.text2}>
                            PARCEIROS ACEITOS
                        </Text>
                    </View>
                    <View>
                        <View>
                            <View width = {'100%'} height = {2} backgroundColor = {Colors.azulClaro} />
                                

                                <CardAlugado
                                source={require('../assets/profiles/expositor/homem1.jpeg')}
                                title="FABIO DAIUKU"
                                categoria = "LGBTQI"
                                estande = "Estande: F24"
                                pagamento = "Pagamento: OK"
                                onPress={() => console.log("teste")}
                                rating={1}
                                />
                                <CardAlugado
                                source={require('../assets/profiles/expositor/mulher2.jpeg')}
                                title="1000ºUS"
                                categoria = "ARTESANATO"
                                estande = "Estande: Em Aberto"
                                pagamento = "Pagamento: Pendente"
                                onPress={() => console.log("teste")}
                                rating={4}
                                />
                                <CardAlugado
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
                <Footer />
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