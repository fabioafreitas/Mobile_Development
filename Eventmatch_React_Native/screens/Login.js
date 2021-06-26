import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Colors from '../constants/Colors'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.view}>
                <Image
                    style={styles.image}
                    source={require('../assets/logotipo.png')}
                    resizeMode="cover"
                />
                <TextInput
                    placeholder="Email"
                    mode="outlined"
                    style={styles.textInput}
                    theme={{ roundness: 50 }}
                    onChangeText={() => { }}
                />
                <TextInput
                    placeholder="Senha"
                    mode="outlined"
                    style={styles.textInput}
                    theme={{ roundness: 50 }}
                    onChangeText={() => { }}
                />
                <Button
                    mode="contained"
                    style={styles.button}
                    theme={{ roundness: 50 }}
                    onPress={() => this.props.navigation.navigate('MeusEventosOrg')}>
                    Acessar
                </Button>
                <Button
                    mode="text"
                    style={{ marginTop: '10%' }}
                    onPress={() => console.log('Pressed')}>
                    <Text style={styles.text}>Esqueceu sua senha?</Text>
                </Button>
                <Button
                    mode="text"
                    onPress={() => this.props.navigation.navigate('CreateAccount')}>
                    <Text style={styles.text}>Sem acesso? Crie sua conta.</Text>
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
        width: '80%'
    },
    button: {
        height: 40,
        width: '80%',
        marginTop: '10%',
        alignItems: 'center',
        backgroundColor: Colors.azulClaro
    },
    text: {
        fontSize: 12
    }
});
