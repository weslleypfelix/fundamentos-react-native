import React from 'react'
import { Text, Image } from 'react-native'
import produtos from './produtos'

export default props => {
    return (
        <>
        <Text>Lista de jogos!</Text>
        {produtos.map(
            p => {
                return <Text key={p.id}>
                    {p.id}) {p.nome} está no valor de :{p.preco}
                    </Text>
            }
        )}
        </>
    )
}

