import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ProductForm = () => {
  // Define os estados para os campos do formulário
  const [barcode, setBarcode] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  // Define a função para enviar os dados do produto
  const handleSubmit = () => {
    // Valida se os campos estão preenchidos
    if (barcode && name && price) {
      // Cria um objeto com os dados do produto
      const product = {
        barcode: barcode,
        name: name,
        price: price,
      };
      // Envia o produto para algum serviço ou banco de dados
      // Aqui você pode usar alguma biblioteca como axios ou fetch
      console.log(product);
      // Limpa os campos do formulário
      setBarcode('');
      setName('');
      setPrice('');
    } else {
      // Exibe uma mensagem de erro se algum campo estiver vazio
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

// Define os estilos para os elementos da tela
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
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
});

export default ProductForm;
function alert(arg0: string) {
    throw new Error('Function not implemented.');
}

