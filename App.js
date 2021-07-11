import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
// import Pessoa from './src/Pessoa';
import estilo from './src/estilo';
// import MinMax from './src/MinMax';
// import Aleatorio from './src/Aleatorio';
// import Contador from './src/contador';
// import ParImpar from './src/ParImpar';
// import Familia from './src/children/Familia';
// import Membro from './src/children/Membro';
// import ListaProdutos from './src/produtos/ListaProdutos';
import ListaProdutosV2 from './src/produtos/ListaProdutosV2';
import Api from './src/serviços/api'

export default function App() {

  //Criando um estado para armazenar essa resposta.
  //Cars será um array

  const [cars, setCars] = useState([])

  React.useEffect(() => {
    Api.get("/cars").then((response) => {
      //console.log("==============================")
      //Toda vez que chegar uma resposta para mim da nossa API, eu vou usar o setCars
      //console.log(response.data)
      setCars(response.data)
    })
  }, [])

  const handlePost = () => {
    Api.post("/cars", {
      brand:'Peugeot',
      brand: 'Gol',
      hp: 500
    }).then( ({data}) => console.log(data))
  }


  return (
    <View style={estilo.container}>

      {/* <Text style={estilo.txt}>{cars[0].model}</Text> */}

      <Text style={estilo.txt}>Olá !!</Text>
      <FlatList
        data={cars}
        keyExtractor={a => `${a.id}`}
        renderItem={({ item: a }) => {
          return (
            <>
          <Text>Modelo : {a.model} {a.brand}</Text>
          <Button
          title="create new"
          onPress={() => handlePost()}/>
          </>
          )
        }} />

      {/* <Familia>
        <Membro nome="Cláudia" sobrenome="Fontes"/>
        <Membro nome="Emerson" sobrenome="Fontes"/>
        <Membro nome="Hernane" sobrenome="Fontes"/>
        <Membro nome="Israel" sobrenome="Aro"/>
        <Membro nome="Andrey" sobrenome="Felix"/>
        <Membro nome="Weslley" sobrenome="Felix"/>
        <Membro nome="Yuri" sobrenome="Felix"/>
      </Familia> */}
      {/* <ParImpar num={1}/> */}

      {/*  */}
      {/* <Contador inicial={10} suba={15} diminua={5}/>

      <Aleatorio min={2} max={3} />
      <Button
        title="Click on me"
        onPress={() => console.warn('You clicked on me, damn..')}
      />

      <Button
      title="give it a try"
      onPress={press}/> */}


    </View>
  );
}