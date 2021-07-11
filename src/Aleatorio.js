import React from 'react'
import { Text, StyleSheet } from 'react-native'
import estilo from './estilo'

export default props => {

    let valor1 = Math.random() * 10 * props.min
    let resultado
    resultado = parseInt(valor1)

    let valor2 = Math.random() * 10 * props.max
    let resultado2
    resultado2 = parseInt(valor2)
    

    if (valor1 > valor2) {
        return (
            <>
                <Text style={estilo.txt}>Dentre os valores {resultado} e {resultado2}, o maior é o : {resultado}</Text>
            </>
        )
    } else {
        return (
            <>
                <Text style={estilo.txt}> Dentre os valores {resultado} e {resultado2}, o maior é o : {resultado2}</Text>
            </>
        )
    }


    
}