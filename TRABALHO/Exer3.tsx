import firestore from "@react-native-firebase/firestore";
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const Exer3 = () => {
  const [barcode, setBarcode] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  
  function CadastrarProd() {
    setIsLoading(true)

    firestore()
      .collection('Produtos')
      .add({
        name,
        barcode,
        price,
        created_at: firestore.FieldValue.serverTimestamp()
      })

      .then(() => {
        Alert.alert("Produto", "Cadastrado com sucesso")

      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
}

  const handleSubmit = () => {

    if (barcode && name && price) {

      const produto = {
        barcode: barcode,
        name: name,
        price: price,
      };

      console.log(produto);

      setBarcode('');
      setName('');
      setPrice('');
    } else {
      alert('Por favor, preencha todos os campos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Produto</Text>
      <TextInput
        style={styles.input}
        placeholder="Código de barras"
        value={barcode}
        onChangeText={setBarcode}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={price}
        onChangeText={setPrice}
        keyboardType="decimal-pad"
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: 'black'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    color: "black"
  },
});

export default Exer3;
function alert(arg0: string) {
}

function setIsLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}
