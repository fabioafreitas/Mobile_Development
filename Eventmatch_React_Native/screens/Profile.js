import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';
import { TextInput, Button, Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors'

import Footer from '../components/Footer';

const CardInfo = props => {
    return (
        <View style={{ alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
                <Icon
                    name={props.icon}
                    size={20}
                    color={Colors.azulEscuro}
                />
                <Text style={{ color: Colors.azulEscuro, paddingLeft: 5 }}>
                    {props.title}
                </Text>
            </View>
            <Text style={{
                color: Colors.azulEscuro,
                fontSize: 18,
                fontWeight: 'bold'
            }}>
                {props.number}
            </Text>
        </View>
    );
}

const HeaderIcon = props => {
    return (
        <View style={{
            width: '94%',
            flexDirection: 'row',
            alignItems: 'flex-start'
        }}>
            <Icon
                name={props.icon}
                size={16}
                color={Colors.azulEscuro}
            />
            <Text style={{
                fontSize: 12,
                fontWeight: 'bold',
                paddingLeft: 5,
                color: Colors.azulEscuro
            }}>
                {props.title}
            </Text>
        </View>
    );
}

const ButtonInteresse = props => {
    const title = " " + props.title

    return (
        <Button
            mode="contained"
            style={{
                height: 30,
                backgroundColor: Colors.laranja,
                justifyContent: 'center',
                marginBottom: 10,
                marginLeft: 10
            }}
            theme={{ roundness: 50 }}
            onPress={() => console.log('Pressed')}>
            <Icon name={props.icon} size={12} color="white" />
            <Text style={{
                color: 'white',
                fontSize: 10
            }}>
                {title}
            </Text>
        </Button>
    );
}

export default class Profile extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={styles.header}>
                    <Icon
                        name="arrow-left"
                        size={25}
                        color="white"
                        style={styles.backaction}
                        onPress={() => { this.props.navigation.goBack() }}
                    />
                </View>
                <View style={styles.info}>
                    <Text style={infoStyles.title}>
                        Santiago Silva
                    </Text>
                    <Text
                        style={infoStyles.description}
                        numberOfLines={3}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    </Text>
                    <Button
                        mode="contained"
                        style={infoStyles.button}
                        theme={{ roundness: 50 }}
                        onPress={() => console.log('Pressed')}>
                        <Text style={infoStyles.buttonText}>
                            Conectar
                        </Text>
                    </Button>
                    <View style={infoStyles.cards}>
                        <CardInfo
                            icon="camera"
                            title="Imagens"
                            number="32"
                        />
                        <CardInfo
                            icon="paw"
                            title="Matches"
                            number="40"
                        />
                        <CardInfo
                            icon="map-marker"
                            title="Eventos"
                            number="12"
                        />
                    </View>
                </View>
                <Avatar.Image
                    size={110}
                    style={styles.picture}
                    source={require('../assets/profiles/expositor/homem1.jpeg')}
                />
                <HeaderIcon
                    icon="format-list-bulleted"
                    title="Portfolio"
                />
                <View style={styles.scrollview}>
                    <ScrollView horizontal={true}>
                        <Image
                            source={require("../assets/paisagem/1.jpg")}
                            style={styles.imagePortfolio}
                            resizeMode='cover'
                        />
                        <Image
                            source={require("../assets/paisagem/2.jpg")}
                            style={styles.imagePortfolio}
                            resizeMode='cover'
                        />
                        <Image
                            source={require("../assets/paisagem/3.jpg")}
                            style={styles.imagePortfolio}
                            resizeMode='cover'
                        />
                        <Image
                            source={require("../assets/paisagem/4.jpg")}
                            style={styles.imagePortfolio}
                            resizeMode='cover'
                        />
                    </ScrollView>
                </View>
                <HeaderIcon
                    icon="lightbulb-on-outline"
                    title="Interesses"
                />
                <ScrollView horizontal={true} style={{ marginTop: 5 }}>
                    <ButtonInteresse
                        icon="ubuntu"
                        title="artesanato"
                    />
                    <ButtonInteresse
                        icon="windows"
                        title="livros"
                    />
                    <ButtonInteresse
                        icon="debian"
                        title="quadrinhos"
                    />
                    <ButtonInteresse
                        icon="instagram"
                        title="quadrinhos"
                    />
                </ScrollView>
                <Footer 
                cor1 = {Colors.laranja}
                cor2 = {Colors.laranja}
                cor3 = {Colors.laranja}
                cor4 = {Colors.laranja}
                cor5 = 'white'
                meusEventos = {  ()  => this.props.navigation.navigate('MeusEventosOrg') }
                mensagens = {  ()  => this.props.navigation.navigate('Mensagens') }
                feedComExpositores = {  ()  => this.props.navigation.navigate('FeedComExpositores') }
                pendentes = {  ()  => this.props.navigation.navigate('EventoPendentesLista') }
                profile = {  ()  => this.props.navigation.navigate('Profile') }
                />
            </View >
        );
    }
}

const imgTopValue = 10;
const imgLenght = 115;
const infoTopValue = imgTopValue + (imgLenght / 2);

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.azulClaro,
        height: 200,
        width: '100%',
        padding: 10,
        marginBottom: 125
    },
    info: {
        backgroundColor: 'rgb(222, 225, 228)',
        alignItems: 'center',
        position: 'absolute',
        borderRadius: 10,
        top: infoTopValue,
        left: "3%",
        height: 245,
        width: '94%',
        paddingTop: (imgLenght / 2),
        elevation: 4,
    },
    picture: {
        position: 'absolute',
        top: imgTopValue,
        width: imgLenght,
        height: imgLenght,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        elevation: 5,
    },
    scrollview: {
        height: 90,
        width: '100%',
        marginVertical: 10
    },
    imagePortfolio: {
        maxWidth: 120,
        maxHeight: 90,
        borderRadius: 5,
        marginLeft: 10
    }
});

//Estilos apenas de dentro da caixa cinza
const infoStyles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.azulEscuro,
    },
    description: {
        color: Colors.azulEscuro,
        fontSize: 14,
        textAlign: 'center',
        paddingHorizontal: 40,
        height: 65,
    },
    button: {
        width: 110,
        height: 30,
        backgroundColor: Colors.laranja,
        justifyContent: 'center',
        marginBottom: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 12
    },
    cards: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 5
    }
});