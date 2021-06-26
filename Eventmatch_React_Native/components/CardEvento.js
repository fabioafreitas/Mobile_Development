import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../constants/Colors';
import Stars from './Stars'

const CardEvento = (props) => {
    if (props.topFeedCard == true) {
        return (
            <TouchableOpacity style={{ ...topCardStyle.card, ...props.style }} onPress={props.onPress}>
                <Image
                    source={props.source}
                    style={topCardStyle.image}
                    resizeMode='cover'
                />
                <Text style={topCardStyle.title} numberOfLines={1}>{props.title}</Text>
                <Text style={topCardStyle.description} numberOfLines={2}>{props.description}</Text>
            </TouchableOpacity>
        );
    }
    else {
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
                        <Stars size={13} rating={props.rating} />
                    </View>
                    <View style={cardStyle.content}>
                        <Text style={cardStyle.description} numberOfLines={3}>
                            {props.description}
                        </Text>
                    </View>
                    <View style={cardStyle.footer}>
                        <View style={cardStyle.categoriaEvento}>
                            <Icon name="key" size={12} color={Colors.azulEscuro} />
                            <Text style={{ fontSize: 11, marginLeft: 5 }}>
                                Artesanato
                            </Text>
                        </View>
                        <Button
                            mode="contained"
                            style={cardStyle.button}
                            theme={{ roundness: 50 }}
                            onPress={props.onPress}>
                            <Text style={{ fontSize: 8, color: 'white' }}>
                            DETALHES
                            </Text>
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
}

const topCardStyle = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        alignItems: 'flex-start',
        width: 150,
        height: 140,
        marginLeft: 10,
    },
    image: {
        height: 90,
        width: 150,
        borderRadius: 5
    },
    viewCategoria: {
        padding: '2%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    categoria: {
        height: 20,
        width: 20
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.azulEscuro,
        paddingRight: 10
    },
    description: {
        fontSize: 11,
        color: Colors.azulEscuro,
        textAlign: 'justify',
        paddingRight: 15
    }
});

const cardStyle = StyleSheet.create({
    card: {
        flexDirection: 'row',
        height: 90,
        width: '94%',
        marginLeft: '3%',
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
        fontSize: 12,
        fontWeight: 'bold',
        color: Colors.azulEscuro
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
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    categoriaEvento: {
        width: '50%',
        flexDirection: 'row'
    },
    button: {
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.laranja
    },
});

export default CardEvento;
