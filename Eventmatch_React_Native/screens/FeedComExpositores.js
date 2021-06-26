import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';

import Header from '../components/Header'
import Footer from '../components/Footer'
import CardExpositor from '../components/CardExpositor'
import Colors from '../constants/Colors'

import axios from 'axios';
import GLOBALS from '../constants/Globals';

export default class FeedComExpositores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topCardsExpositor: [],
            regularCardsExpositor: []
        }

        this.expositorDataHandler = this.expositorDataHandler.bind(this);
    }

    async expositorDataHandler() {
        let URI = '/dados/expositores';
        await axios.get(`${GLOBALS.API_URL}${URI}`)
            .then((response) => {
                const len = response.data.lenght;
                this.setState({ topCardsExpositor: response.data.slice(0, 5) });
                this.setState({ regularCardsExpositor: response.data.slice(6, 12) });
            })
    }


    renderTopCards() {
        return (
            this.state.topCardsExpositor.map((item, index) => {
                const ROUTE = '/imagens/expositor/'
                return (
                    <CardExpositor
                        key={index}
                        source={{ uri: `${GLOBALS.API_URL}${ROUTE}${String(item.id)}` }}
                        title={item.name}
                        topFeedCard={true}
                    />
                )
            })
        )
    }

    renderRegularCards() {
        return (
            this.state.regularCardsExpositor.map((item, index) => {
                const ROUTE = '/imagens/expositor/'
                return (
                    <CardExpositor
                        key={index}
                        source={{ uri: `${GLOBALS.API_URL}${ROUTE}${String(item.id)}` }}
                        title={item.name}
                        topFeedCard={false}
                        rating={item.rating}
                        category={item.category}
                        description={item.description}
                    />
                )
            })
        )
    }

    async componentDidMount() {
        await this.expositorDataHandler();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header />
                <ScrollView style={styles.contentView}>
                    <Text style={styles.text}>
                        Recomendados
                    </Text>
                    <ScrollView horizontal={true} style={styles.horizontalScroolView}>
                        {this.renderTopCards()}
                    </ScrollView>
                    <Text style={styles.text}>
                        Sugestões
                    </Text>
                    {this.renderRegularCards()}
                    <View style={{ height: 80 }} />
                </ScrollView>
                <Footer 
                cor1 = {Colors.laranja}
                cor2 = {Colors.laranja}
                cor3 = 'white'
                cor4 = {Colors.laranja}
                cor5 = {Colors.laranja}
                meusEventos = {  ()  => this.props.navigation.navigate('MeusEventosOrg') }
                mensagens = {  ()  => this.props.navigation.navigate('Mensagens') }
                feedComExpositores = {  ()  => this.props.navigation.navigate('FeedComExpositores') }
                pendentes = {  ()  => this.props.navigation.navigate('EventoPendentesLista') }
                profile = {  ()  => this.props.navigation.navigate('Profile') }
                />
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
    horizontalScroolView: {
        marginLeft: 10
    },
});
