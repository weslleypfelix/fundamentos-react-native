import React from 'react'
import { Text, View, FlatList } from 'react-native'
import produtos from './produtos'
import estilo from '../estilo'

export default props => {
    return (
        <>
        <View style={estilo.container}>
        <Text>Lista de jogos V2</Text>
        <FlatList
        data={produtos}
        keyExtractor={i => `${i.id}`}
        renderItem={({ item: a }) => {
            return <Text>{a.id}) {a.nome} está no valor de : {a.preco}</Text>
        }}
        />
        </View>
        </>
    )
}

