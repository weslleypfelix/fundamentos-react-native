import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
    return (
        <View>
            <Text>
            {props.nome} {props.sobrenome}
            </Text> 
        </View>
    )
}

