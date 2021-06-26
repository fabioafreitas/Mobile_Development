import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper';
import Colors from '../constants/Colors'

const Header = props => {
    const [searchBar, setSearchBar] = useState(false);

    if (searchBar) {
        return (
            <Appbar.Header style={styles.header}>
                <Searchbar
                    placeholder="Buscar"
                    theme={{ roundness: 50 }}
                    icon="arrow-left"
                    onIconPress={() => setSearchBar(false)}
                />
            </Appbar.Header>
        );
    } else {
        return (
            <Appbar.Header style={styles.header}>
                <Appbar.Action icon="menu" color='white' onPress={() => { }} />
                <Image
                    style={styles.image}
                    source={require('../assets/brand-logo-light.png')}
                    resizeMode="cover"
                />
                <Appbar.Action icon="magnify" color='white' onPress={() => setSearchBar(true)} />
            </Appbar.Header>
        );
    }
}

export default Header;

const styles = StyleSheet.create({
    image: {
        height: '40%',
        width: '40%'
    },
    header: {
        justifyContent: 'space-between',
        backgroundColor: Colors.azulClaro
    }
});

