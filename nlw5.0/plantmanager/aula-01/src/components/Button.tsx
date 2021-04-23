import React from 'react';
import { TouchableOpacity, StyleSheet, Text, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';

//Com o TypeScript é possível fazer uso de tipagem ao trabalhar com JavaScript.
interface ButtonProps extends TouchableOpacityProps { //Quando o componente Button for utilizado, deve-se respeitar esta inferface. 
    title: string;
}


export function Button({ title, ...rest }: ButtonProps) { //Pode-se colocar propriedades nos componentes

    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
        paddingHorizontal: 10
    },

    buttonText: {
        color: colors.white,
        fontSize: 24
    }
});