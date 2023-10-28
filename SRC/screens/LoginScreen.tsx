import React from 'react';
import { useState} from 'react';
import {Text, View, StyleSheet, Pressable, TextInput, Button, NativeSyntheticEvent, NativeTouchEvent} from 'react-native'; 
import { Image } from 'react-native';

export default () => {
    const [email, setEmail] = useState('Seu E-mail...');

    const [senha, setSenha] = useState('Sua Senha...');

    function handleTextInputPress(...args: []): void {
        setSenha(''),setEmail('');
    }
    return(
        <View style={Styles.container}>
            <Image style={Styles.img} source={require('../assets/UserIcon.png')} />

            <Text style={Styles.text}>E-mail:</Text>

            <TextInput 
                style={[Styles.textEmail, Styles.pressable]} 
                value={email}
                onChangeText={(text) => {
                    console.log('Coloque o seu email:', text);
                    setEmail(text);
                }}
                onPressIn={handleTextInputPress}
                placeholder="Digite Aqui"
            />

            <Text style={Styles.text}>Senha:</Text>
                
            <TextInput 
                style={[Styles.textEmail, Styles.pressable]} 
                value={senha}
                onChangeText={(text) => {
                    console.log('Coloque o seu email:', text);
                    setEmail(text);
                }}
                onPressIn={handleTextInputPress}
                placeholder="Digite Aqui"
            />

        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: '#C0C0C0',
        // justifyContent:'flex-start',
        alignItems:'center',
               
    },
    img: {
        height: 130,
        width: 130,
        // alignItems: 'center',
        marginTop: 50

    },
    text: {
        color: 'black',
        alignItems: 'flex-end',
        marginTop: 80,
        alignSelf: 'flex-start',
        marginLeft: 90,
                
    },
    pressable: {
        backgroundColor: 'white',
        borderRadius: 8,
        // marginBottom: 50,
        // marginLeft: 30,
        width: 350,
        height: 50
        
        
    },
    textEmail: {
        color: 'black',
        textAlign: 'left',
        
    }
});

 