import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ListaFlat from './ListaFlat';
import { HomeProps } from './App';



const lista = [
  { key: 1, descricao: 'teste' },
  { key: 2, descricao: 'teste2' },
  { key: 3, descricao: 'teste3' },
  { key: 4, descricao: 'teste4' },
  { key: 4, descricao: 'abobrinha' }
];

const listaSection = [
  { title: 'A', data: [{ key: 1, descricao: 'Ana' }, { key: 2, descricao: 'Zidane' }] },
  { title: 'B', data: [{ key: 2, descricao: 'Bruno' }] },
  { title: 'C', data: [{ key: 3, descricao: 'Carlos' }] },
  { title: 'D', data: [{ key: 4, descricao: 'Douglas' }] },
  { title: 'E', data: [{ key: 5, descricao: 'Elio' }] },
  { title: 'F', data: [{ key: 6, descricao: 'Fábio' }] },
];

const Principal = ({ navigation, route }: HomeProps) => {
  return (
    <>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detalhes')} />
      <ListaFlat array={lista} />
    </>
  );
}

export default Principal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
});