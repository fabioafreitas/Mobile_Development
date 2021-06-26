import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';

import Header from '../components/Header'
import Footer from '../components/Footer'
import CardEvento from '../components/CardEvento'

export default class FeedComEventos extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header />
                <ScrollView style={styles.contentView}>
                    <Text style={styles.text}>
                        Recomendados
                    </Text>
                    <ScrollView horizontal={true} >
                        <CardEvento
                            source={require('../assets/eventos/evento1.jpg')}
                            title="Autonor 2020"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing"
                            topFeedCard={true}
                        />
                        <CardEvento
                            source={require('../assets/eventos/evento2.jpg')}
                            title="XII Bienal do livro"
                            description="Lorem ipsum dolor sit amet, consectetur are inadipiscing"
                            topFeedCard={true}
                        />
                        <CardEvento
                            source={require('../assets/eventos/evento3.jpg')}
                            title="Autonor 2020"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscin psum dgg"
                            topFeedCard={true}
                        />
                    </ScrollView>
                    <Text style={styles.text}>
                        Sugestões
                    </Text>
                    <CardEvento
                        source={require('../assets/eventos/evento4.jpg')}
                        title="Lorem ipsum dolor"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscin psum dgg"
                        topFeedCard={false}
                        onPress={() => console.log("teste")}
                        rating={3}
                    />
                    <CardEvento
                        source={require('../assets/eventos/evento5.jpg')}
                        title="Lorem ipsum dolor"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscin psum dgg"
                        topFeedCard={false}
                        onPress={() => console.log("teste")}
                        rating={5}
                    />
                    <CardEvento
                        source={require('../assets/eventos/evento6.jpg')}
                        title="Lorem ipsum dolor"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscin psum dgg"
                        topFeedCard={false}
                        onPress={() => console.log("teste")}
                        rating={4}
                    />
                    <CardEvento
                        source={require('../assets/eventos/evento7.jpg')}
                        title="Lorem ipsum dolor"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscin psum dgg"
                        topFeedCard={false}
                        onPress={() => console.log("teste")}
                        rating={4}
                    />
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
        margin: 10
    },
});
