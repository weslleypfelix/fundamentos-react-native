import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import Estilo from './estilo'

export default props => {

    const [numero, setNumero] = useState(props.inicial)

    const inc = () => setNumero(numero + props.suba)
    const dec = () => setNumero(numero - props.diminua)


    return (
        <>
            <Text>{numero}</Text>

            <Button
            title="+"
            onPress={inc}
            />

            <Button
            title="-"
            onPress={dec}
            />
            
        </>
    )
}