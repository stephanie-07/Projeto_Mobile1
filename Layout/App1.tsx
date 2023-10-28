import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App1 = () => {
    return <>
    <Text>Hello World!</Text>
        <View style={styles.container}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi blanditiis accusantium, delectus id saepe repudiandae eaque, illo eius inventore quos, autem ullam? Mollitia ipsa similique iusto minus quaerat accusantium facilis!</Text>
        </View>
    </>
}

export default App1;

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
});


