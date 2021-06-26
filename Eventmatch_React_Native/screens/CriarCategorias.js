import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, CheckBox} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import Colors from '../constants/Colors';
import { Button, TextInput} from 'react-native-paper';


export default class CriarCategorias extends Component {
    state = {
        artesanato: '',
        comida: '',
        flores: '',
        livros: '',
        otaku: '',
    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style = {styles.rowView} paddingVertical = {4}>
                        <Icon 
                        style = {styles.icon}
                        name="close"
                        size={22}
                        color= {Colors.cinza}
                        onPress= { () => this.props.navigation.navigate('MeusEventosOrg') }/>
                        <Text style = {styles.text2}>
                            Categorias e Vagas
                        </Text>
                </View>
                    <View width = {'100%'} height = {2} backgroundColor = {Colors.azulClaro} />
                
                    <View width = {'100%'} height = {2} backgroundColor = {Colors.azulEscuro} />  
                    <ScrollView paddingHorizontal = {8}>
                        <TextInput
                        mode='outlined'
                        label='ARTESANATO'
                        value={this.state.artesanato}
                        onChangeText={artesanato => this.setState({ artesanato })}
                        />
                        <TextInput
                        mode='outlined'
                        label='COMIDA'
                        value={this.state.comida}
                        onChangeText={comida => this.setState({ comida })}
                        />
                        <TextInput
                        mode='outlined'
                        label='FLORES'
                        value={this.state.flores}
                        onChangeText={flores => this.setState({ flores })}
                        />
                        <TextInput
                        mode='outlined'
                        label='LIVROS'
                        value={this.state.livros}
                        onChangeText={livros => this.setState({ livros })}
                        />
                        <TextInput
                        mode='outlined'
                        label='OTAKU'
                        value={this.state.otaku}
                        onChangeText={otaku => this.setState({ otaku })}
                        />
                    </ScrollView>
                    <View flexDirection = {'row'} width = {'100%'} paddingHorizontal = {'2%'} justifyContent = {'space-between'} paddingVertical = {5}>
                    <Button
                            mode='outlined'
                            borderBottomWidth={2}
                            borderTopWidth={2}
                            borderBottomColor={Colors.laranja}
                            onPress= { () => this.props.navigation.navigate('CriarEventoData') } >
                            <Icon style = {styles.icon} name="angle-double-left" size={22} color= {Colors.azulEscuro} />
                            <Text
                            style = {{fontSize: 18, color: Colors.azulEscuro, textAlign: 'center'}}
                            >  VOLTAR</Text>
                            </Button>    
                            <Button
                            mode='outlined'
                            borderBottomWidth={2}
                            borderTopWidth={2}
                            borderBottomColor={Colors.azulClaro}
                            onPress= {  () => this.props.navigation.navigate('CriarImagens') } >
                            <Icon style = {styles.icon} name="angle-double-right" size={22} color= {Colors.azulEscuro} />
                            <Text
                            style = {{fontSize: 18, color: Colors.azulEscuro, textAlign: 'center'}}
                            >  PRÓXIMO</Text>
                            </Button>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    rowView: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: 6
        
    },
    text2: {
        fontSize: 20,
        color: Colors.azulEscuro,
        paddingVertical: 10,
        fontWeight: 'bold'
    },
    icon: {
        alignSelf: 'center',
        paddingVertical: 10
        
    },
});