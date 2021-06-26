import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Colors from '../constants/Colors';

export default class CreateAccount extends Component {
    render() {
        return (
            <View style={styles.view}>
                <Image
                    style={styles.image}
                    source={require('../assets/logotipo.png')}
                    resizeMode="cover"
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Nome"
                    mode="outlined"
                    theme={{ roundness: 50 }}
                    onChangeText={() => { }}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    mode="outlined"
                    theme={{ roundness: 50 }}
                    onChangeText={() => { }}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Senha"
                    mode="outlined"
                    theme={{ roundness: 50 }}
                    onChangeText={() => { }}
                />
                <Button
                    mode="contained"
                    style={styles.button}
                    theme={{ roundness: 50 }}
                    onPress={() => this.props.navigation.navigate('Profile')}>
                    Acessar
                </Button>
                <Button
                    mode="text"
                    style={{ marginTop: '10%' }}
                    onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.text}>Já possuo uma conta.</Text>
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        height: 100,
        width: 100,
        marginTop: "20%",
        marginBottom: "10%"
    },
    textInput: {
        height: 40,
        width: '80%',
    },
    button: {
        width: '80%',
        marginTop: '10%',
        backgroundColor: Colors.laranja
    },
    text: {
        fontSize: 12
    }
});
