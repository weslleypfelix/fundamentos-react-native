import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import estilo from './estilo'
import Estilo from './estilo'

export default ({ num = 0 }) => {

    return (
        <View>
            <Text>O resultado é: </Text>
            {
                num % 2 === 0 ? <Text style={estilo.txt}>Par</Text> : <Text style={estilo.txt}>Ímpar</Text>
            }
        </View>
    )

}