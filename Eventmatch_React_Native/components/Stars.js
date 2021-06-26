import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';

const Stars = props => {
    const listColors = []
    for (let i = 0; i < props.rating; i++) {
        listColors[i] = Colors.azulClaro
    }
    for (let i = props.rating; i < 5; i++) {
        listColors[i] = 'rgba(192, 204, 212, 0.8)'
    }

    return (
        <View style={styles.viewStars}>
            <Icon name="star" size={props.size} color={listColors[0]} />
            <Icon name="star" size={props.size} color={listColors[1]} />
            <Icon name="star" size={props.size} color={listColors[2]} />
            <Icon name="star" size={props.size} color={listColors[3]} />
            <Icon name="star" size={props.size} color={listColors[4]} />
        </View>
    );
}

export default Stars;

const styles = StyleSheet.create({
    viewStars: {
        flexDirection: 'row',
        width: 70,
        justifyContent: 'space-between'
    }
});

