import React, { useState } from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

import { Button } from '../components/Button'; //Componente: permite reutilizar determinado elemento.

//JSX: semelhante ao HTML, permite o uso de tags.
export function Welcome() {
    const [visible, setVisible] = useState(false);

    function handleVisibility() {
        setVisible(true)
    }

    return ( //Com react apenas um elemento deve ser retornado. Para tal, pode-se utilizar fragment (<> </>) ou view (<View> </View>) em torno dos elementos.
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>

            {
                visible &&
                <Image source={wateringImg} style={styles.image} />
            }

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <Button title=">" />

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },

    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        paddingHorizontal: 10
    },

    image: {
        width: 292,
        height: 284
    },

    buttonText: {
        color: colors.white,
        fontSize: 24
    }
});