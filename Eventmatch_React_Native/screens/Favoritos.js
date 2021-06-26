import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, flexBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../components/Header'
import Footer from '../components/Footer'
import CardExpoUser from '../components/CardExpoUser'
import Colors from '../constants/Colors';

export default class Favoritos extends Component {


    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header />
                <ScrollView style={styles.contentView}>
                    <Text style={styles.text}>
                        Favoritos
                    </Text>
                    
                    <CardExpoUser
                        source={require('../assets/profiles/expositor/mulher1.jpeg')}
                        title="FABIO MULHER"
                        onPress={() => console.log("teste")}
                        rating={2}
                    />
                    <CardExpoUser
                        source={require('../assets/profiles/expositor/mulher3.jpeg')}
                        title="RAFA RIO DOCE"
                        onPress={() => console.log("teste")}
                        rating={2}
                    />
                    <CardExpoUser
                        source={require('../assets/profiles/expositor/homem3.jpeg')}
                        title="MAIK FRANCÊS"
                        onPress={() => console.log("teste")}
                        rating={2}
                    />
                    
                    <View>
                    <Icon style = {styles.icon} name="heart" size={30} color= {Colors.cinza} />
                        <Text 
                            style = {styles.centerView}>
                            Você não possui mais favoritos
                        </Text>
                    </View>
                    <View style={{ height: 80 }} />
                </ScrollView>
                <Footer />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contentView: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: 'white'
    },
    text: {
        fontSize: 17,
        fontWeight: 'bold',
        margin: 10
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
        
    }
});