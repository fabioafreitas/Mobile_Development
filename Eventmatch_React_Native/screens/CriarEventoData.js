import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



import Colors from '../constants/Colors';
import { Button, TextInput } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';



export default class CriarEventoData extends Component {

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
                            Datas do Evento
                        </Text>
                </View>
                    <View width = {'100%'} height = {2} backgroundColor = {Colors.azulEscuro} />
                
                <ScrollView style={styles.contentView}>
                <View flexDirection = {'row'} paddingTop = {10} justifyContent = {'space-between'} paddingStart = {'2%'}>
                    <Text style = {{fontSize: 18, fontWeight: 'bold', color: Colors.azulEscuro}}>COMEÇA EM:</Text>
                    <Text style = {{fontSize: 18, fontWeight: 'bold', color: Colors.azulEscuro, paddingRight: 30}}>TERMINA EM:</Text>
                </View>
                <View flexDirection = {'row'} paddingTop = {20} justifyContent = {'space-between'} paddingStart = {'2%'} paddingEnd = {10}>
                    <DatePicker format="DD-MM-YYYY">
                    </DatePicker>
                    <DatePicker format="DD-MM-YYYY"></DatePicker>
                    
                </View>
                <View paddingVertical = {5}/>
                    <View alignSelf = {'center'}>    
                        <Button
                        mode='outlined'
                        borderBottomWidth={2}
                        borderTopWidth={2}
                        borderBottomColor={Colors.azulClaro}
                        width='50%'
                        onPress= { () => console.log('clicado') } >
                        <Text
                        style = {{fontSize: 18, color: Colors.azulEscuro, textAlign: 'center'}}
                        >SELECIONAR</Text>
                        </Button>
                    </View>    
                    <View paddingVertical = {5}/>
                    <View style = {{height: 2, width: '100%', backgroundColor: Colors.laranja, paddingBottom: 2 }}>
                    </View>
                    <View paddingVertical = {5}/>
                    
                    <View>
                        <TextInput
                        mode = 'outlined'
                        multiline = {true}
                        placeholder = {'INSERIR DADOS DO DATEPICKER!!! CADA DIA EM UMA LINHA PRA FACILITAR A REMOÇÃO DAS DATAS PELO USUÁRIO!!!'}>
                        </TextInput>
                    </View>
                    <View paddingVertical = {5}/>
                    <View alignSelf = {'center'}>    
                        <Button
                        mode='outlined'
                        borderBottomWidth={2}
                        borderTopWidth={2}
                        borderBottomColor={Colors.azulClaro}
                        width='60%'
                        onPress= { () => console.log('clicado') } >
                        <Text
                        style = {{fontSize: 18, color: Colors.azulEscuro, textAlign: 'center'}}
                        >CONFIRMAR DATAS</Text>
                        </Button>
                    </View>
                    
                
                </ScrollView>
                
                <View flexDirection = {'row'} width = {'100%'} paddingHorizontal = {'2%'} justifyContent = {'space-between'} paddingVertical = {5}>
                        
                            <Button
                            mode='outlined'
                            borderBottomWidth={2}
                            borderTopWidth={2}
                            borderBottomColor={Colors.laranja}
                            onPress= { () => this.props.navigation.navigate('CriarEvento') } >
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
                            onPress= {  () => this.props.navigation.navigate('CriarCategorias') } >
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
    contentView: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: 'white',
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