import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import Colors from '../constants/Colors';
import { Button, TextInput } from 'react-native-paper';



export default class CriarEvento extends React.Component {

    state = {
        nomeEvento: '',
        siteEvento: '',
        localEvento: '',
        descEvento: '',
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
                            Novo Evento
                        </Text>
                </View>
                <View width = {'100%'} height = {2} backgroundColor = {Colors.azulEscuro} />  
                    <ScrollView paddingHorizontal = {8}>
                        <TextInput
                        mode='outlined'
                        label='NOME DO EVENTO'
                        value={this.state.nomeEvento}
                        onChangeText={nomeEvento => this.setState({ nomeEvento })}
                        />
                        <TextInput
                        mode='outlined'
                        label='SITE DO EVENTO'
                        value={this.state.siteEvento}
                        onChangeText={siteEvento => this.setState({ siteEvento })}
                        />
                        <TextInput
                        mode='outlined'
                        label='LOCAL DO EVENTO'
                        value={this.state.localEvento}
                        onChangeText={localEvento => this.setState({ localEvento })}
                        />
                        <TextInput
                        mode='outlined'
                        label='DESCRIÇÃO DO EVENTO'
                        value={this.state.descEvento}
                        onChangeText={descEvento => this.setState({ descEvento })}
                        />
                        <View alignSelf={'center'} paddingVertical = {10}>    
                            <Button
                            mode='text'
                            borderBottomWidth={2}
                            borderTopWidth={2}
                            borderTopColor={Colors.cinza}
                            borderBottomColor={Colors.azulClaro}
                            width={'50%'}
                            onPress= { () => this.props.navigation.navigate('CriarEventoData') } >
                            <Icon style = {styles.icon} name="angle-double-right" size={22} color= {Colors.azulEscuro} />
                            <Text
                            style = {styles.text}
                            >  PRÓXIMO</Text>
                            </Button>
                        </View>
                    </ScrollView>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    rowView: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: '4%'
    },
    text: {
        paddingVertical: 10,
        fontSize: 20,
        color: Colors.azulEscuro,
        textAlign: 'center',
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