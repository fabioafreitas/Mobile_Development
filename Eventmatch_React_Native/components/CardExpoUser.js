import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';


import Colors from '../constants/Colors';
import Stars from '../components/Stars'
import colors from '../constants/Colors';

const CardExpoUser = props => {
        return (
            <View style={{ ...cardStyle.card, ...props.style }}>
                <Image
                    source={props.source}
                    style={cardStyle.image}
                    resizeMode='cover'
                />
                <View style={cardStyle.container}>
                    <View style={cardStyle.header}>
                        <Text style={cardStyle.title}>{props.title}</Text>
                        <Stars size={15} rating={props.rating} />
                    </View>
                    <View style={cardStyle.footer}>
                        <View style={cardStyle.categoriaEvento}>
                            
                            <Text style={{ fontSize: 16, paddingVertical: 4}}>
                                Artesanato
                            </Text>
                        </View>
                    </View>
                    <View paddingVertical = {2} style = {cardStyle.footerButton}>
                        <Button
                                mode="contained"
                                style={cardStyle.button}
                                theme={{ roundness: 50 }}
                                onPress={props.onPress}>
                                <Text style={{ fontSize: 8, color: 'white' }} textAlign = {'center'}>
                                    VER PERFIL
                                </Text>
                        </Button>
                        <Button
                                mode="contained"
                                style={cardStyle.button2}
                                theme={{ roundness: 50 }}
                                onPress={props.onPress}>
                                <Text style={{ fontSize: 8, color: 'white' }}>
                                    REMOVER
                                </Text>
                        </Button>
                    </View>
                </View>
            </View>
        );
}

const cardStyle = StyleSheet.create({
    card: {
        flexDirection: 'row',
        height: 90,
        width: '96%',
        marginLeft: '2%',
        marginBottom: 10,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: 'rgba(52, 73, 94, 0.3)'
    },
    image: {
        height: 85,
        width: 85,
        borderRadius: 8,
        margin: 2,
    },
    container: {
        flex: 1,
        padding: '2%',
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.azulEscuro
    },
    description: {
        fontSize: 10,
        color: Colors.cinza,
        textAlign: 'justify'
    },
    header: {
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    content: {
        width: '100%',
        height: '45%',
        marginVertical: '1%'
    },
    footer: {
        width: '100%',
        height: '20%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    categoriaEvento: {
        width: '50%',
        flexDirection: 'row'
    },
    button: {
        alignSelf: 'flex-end',
        justifyContent: 'center',
        backgroundColor: Colors.laranja,
        width: '40%',
        height: '60%'        
    },
    button2: {
        alignSelf: 'flex-end',
        justifyContent: 'center',
        backgroundColor: Colors.azulClaro,
        width: '40%',
        height: '60%'        
    },
    footerButton: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});


export default CardExpoUser;