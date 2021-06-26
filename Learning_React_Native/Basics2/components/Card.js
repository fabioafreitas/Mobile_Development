import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

/**
 * O estilo indicado no View indica que
 * as propriedades de props.style
 * tem prioridade sobre styles.card
*/
const Card = props => {
    return (
        <View style={{ ...styles.card, ...props.style }}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        borderRadius: 10
    },
});

export default Card;