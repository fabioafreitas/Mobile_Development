import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../components/Header'
import Footer from '../components/Footer'
import Colors from '../constants/Colors'
import Accord from '../components/Accord'

export default class Ajuda extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header />
                <ScrollView style={styles.contentView} flexDirection = {'column'}>
                    <View flexDirection = 'row' paddingLeft = {5} paddingTop = {5} alignContent = {'center'}>
                    
                        <View paddingTop = {5}>
                            <Icon  name="book" size={30} color= {Colors.cinza} />
                        </View>
                        
                        <Text style={styles.text}>
                            Ajuda
                        </Text>
                    </View>
                    <View width = {'100%'} height = {2} backgroundColor = {Colors.azulClaro} />
                    
                    <View>
                        <Accord
                            title = {"COMO CRIAR UM EVENTOS?"}
                            data = {"Para criar um EVENTOS, basta você acessar a aba MEUS EVENTOS localizada na parte inferior esquerda da tela, simbolizada por uma estrela, e criar o seu eventos!!!" }
                        />
                        <Accord
                            title = {"COMO EXCLUIR UM EVENTOS?"}
                            data = {"Para excluir um EVENTOS é simples, basta você mandar uma mensagem para o suporte localizado no final desta tela, com o titulo: QUERO EXCLUIR UM EVENTOS" }
                        />
                        <Accord
                            title = {"COMO VEJO MEU PERFIL?"}
                            data = {"Ver o seu perfil é simples, basta você clicar no icone mais a direita no canto inferior da tela." }
                        />
                        <Accord
                            title = {"CONTACTE-NOS!!!"}
                            data = {"Envie suas dúvidas para o nosso e-mail:\nempresaeventmatch@gmail.com\n\nOu acesse nosso site:\nwww.EventMatch.com.br " }
                        />
                    </View>

                    <View style={{ height: 80 }} />
                </ScrollView>
                <Footer 
                cor1 = {Colors.laranja}
                cor2 = {Colors.laranja}
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
