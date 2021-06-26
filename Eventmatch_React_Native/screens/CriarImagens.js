import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import Colors from '../constants/Colors';
import { Button, TextInput } from 'react-native-paper';



export default class CriarImagens extends Component {

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
                            Upload de imagens
                        </Text>
                </View>
                    <View width = {'100%'} height = {2} backgroundColor = {Colors.azulClaro} />

                    <View flexDirection = {'column'} backgroundColor = {'white'}>
                    <View paddingVertical = {10} flexDirection = {'row'} paddingHorizontal = {10}  backgroundColor = {'white'}>
                    <Image
                    borderRadius = {20}
                    width = {100}
                    height = {100}
                    backgroundColor = {Colors.cinza}
                    resizeMode='cover'
                    />
                    <View paddingLeft = {10}/>
                    <Icon style = {styles.icon} name="camera" size={30} color= {Colors.laranja} />
                    
                    <View paddingVertical = {40} paddingLeft = {10}>
                    <Text>ADICIONAR FOTO PRINCIPAL</Text>
                    </View>
                    </View>
                    <View width = {'100%'} height = {2} backgroundColor = {Colors.azulClaro} />
                    
                    <View paddingVertical = {10} flexDirection = {'row'} paddingHorizontal = {10}  backgroundColor = {'#ffc1d2'} justifyContent = {'flex-end'}>
                    <View paddingTop = {20} backgroundColor = {'white'} borderRadius = {10}>
                        <Icon style = {styles.icon} name="camera" size={30} color= {'black'} />
                        <Text style={{color: 'black', fontWeight: 'bold'}}>  MAIS FOTOS  </Text>
                    </View>
                    <View paddingLeft = {20}/>
                    <Image
                    borderRadius = {20}
                    width = {100}
                    height = {100}
                    backgroundColor = {Colors.cinza}
                    resizeMode='cover'
                    />
                    <View paddingLeft = {10}/>
                    <View height = {'100%'} width = {2} backgroundColor = {'white'} />
                    <View paddingLeft = {10}/>
                    <Image
                    borderRadius = {20}
                    width = {100}
                    height = {100}
                    backgroundColor = {Colors.cinza}
                    resizeMode='cover'
                    />
                    </View>
                    <View width = {'100%'} height = {2} backgroundColor = {'white'} />
                    <View paddingVertical = {10} flexDirection = {'row'} paddingHorizontal = {10} backgroundColor = {'#ffc1d2'} justifyContent = {'flex-end'}> 
                    <Image
                    borderRadius = {20}
                    width = {100}
                    height = {100}
                    backgroundColor = {Colors.cinza}
                    resizeMode='cover'
                    />
                    <View paddingLeft = {10}/>
                    <View height = {'100%'} width = {2} backgroundColor = {'white'} />
                    <View paddingLeft = {10}/>
                    <Image
                    borderRadius = {20}
                    width = {100}
                    height = {100}
                    backgroundColor = {Colors.cinza}
                    resizeMode='cover'
                    />
                    </View>
                    <View width = {'100%'} height = {2} backgroundColor = {Colors.azulClaro} />
                    </View>

                    <View position = {'absolute'} left = {3} right = {3} bottom = {5} flexDirection = {'row'} width = {'100%'} paddingHorizontal = {'2%'} justifyContent = {'space-between'} >
                    <Button
                            mode='outlined'
                            borderBottomWidth={2}
                            borderTopWidth={2}
                            borderBottomColor={Colors.laranja}
                            onPress= { () => this.props.navigation.navigate('CriarCategorias') } >
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
                            onPress= {  () => this.props.navigation.navigate('MeusEventosOrg') } >
                            <Icon style = {styles.icon} name="angle-double-right" size={22} color= {Colors.azulEscuro} />
                            <Text
                            style = {{fontSize: 18, color: Colors.azulEscuro, textAlign: 'center'}}
                            >  FINALIZAR</Text>
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
    btnCriar: {
        borderRadius: 10,
        justifyContent: 'space-around',
        backgroundColor: Colors.laranja,
    },
    btnCriar2: {
        width: '46%',
        height: '25%',
        marginHorizontal: '2%',
        alignSelf: 'flex-end',
        borderRadius: 10,
        justifyContent: 'space-around',
        backgroundColor: Colors.azulClaro,
    },
    btnCriar3: {
        
        width: '20%',
        height: '28%',
        marginHorizontal: '2%',
        borderRadius: 10,
        justifyContent: 'space-around',
        backgroundColor: Colors.azulClaro,
    },
    contentView: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 17,
        fontWeight: 'bold',
        margin: 10,
        
    },
    text2: {
        fontSize: 20,
        color: Colors.azulEscuro,
        paddingVertical: 10,
        fontWeight: 'bold'
    },
    horizontalScroolView: {
        marginLeft: 10
    },
    centerView: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colors.cinza,
        fontSize: 18
    },
    icon: {
        alignSelf: 'center',
        paddingVertical: 10
        
    },
    input: {
        margin: '5%',
        width: '75%',
        height: 50,
        backgroundColor: Colors.azulClaro,
    },
    input2: {
        margin: '2%',
        width: '96%',
        height: 40,
        backgroundColor: Colors.azulClaro,
        fontWeight: 'bold',
        fontSize: 20,
    },
    input3: {
        margin: '5%',
        width: '75%',
        
        backgroundColor: Colors.azulClaro,
    },
    input4: {
        margin: '2%',
        width: '96%',
        backgroundColor: Colors.azulClaro,
        fontWeight: 'bold',
        fontSize: 20,
    },
});