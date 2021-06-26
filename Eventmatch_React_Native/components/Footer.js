import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Appbar } from 'react-native-paper';
import Colors from '../constants/Colors';

const Footer = props => {
    return (
        <Appbar style={styles.footer}>
            <Appbar.Action icon="star" color={props.cor1} onPress={props.meusEventos} />
            <Appbar.Action icon="message" color={props.cor2} onPress={props.mensagens} />
            <Appbar.Action icon="home" color={props.cor3} onPress={props.feedComExpositores} />
            <Appbar.Action icon="clipboard-check" color={props.cor4} onPress={props.pendentes} />
            <Appbar.Action icon="account" color={props.cor5}  onPress={props.profile} />
        </Appbar>
    );
}

export default Footer;

const styles = StyleSheet.create({
    image: {
        height: '40%',
        width: '40%'
    },
    footer: {
        justifyContent: 'space-between',
        backgroundColor: Colors.azulClaro,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    }
});

