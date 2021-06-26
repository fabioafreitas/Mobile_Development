import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

const CardMessage = props => {
        return (
            <TouchableOpacity onPress={props.onPress}>
            <View style={{ ...cardStyle.card, ...props.style }}>
                <Image
                    source={props.source}
                    style={topCardStyle.image}
                    resizeMode='cover'
                />
                <View style={cardStyle.container}>
                    <View style={cardStyle.header}>
                        <Text style={cardStyle.title}>{props.name}</Text>
                        <Text style = {{fontWeight: 'bold'}}>{props.time}</Text>
                    </View>
                    <View style={cardStyle.content}>
                        <Text style={cardStyle.description} numberOfLines={3}>
                            {props.subject}
                        </Text>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
        );
    
}

const cardStyle = StyleSheet.create({
    card: {
        flexDirection: 'row',
        paddingTop: 4,
        height: 95,
        width: '98%',
        marginLeft: '1%',
        marginBottom: 2,
        borderBottomWidth: 3,
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
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.azulEscuro
    },
    description: {
        fontSize: 13,
        color: Colors.cinza,
        textAlign: 'justify'
    },
    header: {
        width: '100%',
        height: '35%',
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

const topCardStyle = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: 90,
        height: 100,
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 100
    },
    title: {
        fontSize: 12,
        color: Colors.azulEscuro
    }
});

export default CardMessage;