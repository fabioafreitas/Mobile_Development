import React from 'react';
import {
    TextInput,
    StyleSheet
} from 'react-native';

import Colors from '../constants/colors';

/**
 *  {...props} adiciona todas as propriedades
 * definidas por quem utiliza este componente
 * 
 * style não é afetado, pois já existe dentro
 * do componente
 */
const Input = props => {
    return (
        <TextInput {...props} style={{ ...styles.input, ...props.style }} />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
});

export default Input;