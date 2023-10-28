import { useState, useEffect } from "react";
import { Alert, Pressable, FlatList, StyleSheet, Text, TextInput, View } from "react-native";

import firestore from "@react-native-firebase/firestore";
import {ListarNotasProps } from "../types";
import { INotas } from "../models/INotas";

export default ({navigation, route}: ListarNotasProps) => {
    const [notas, setNotas] = useState([] as INotas[]);
    const [isLoading, setIsLoading] =useState(false);

    useEffect(() => {
        setIsLoading(true);
        const subscribe = firestore()
        .collection('notas')
        .onSnapshot(querySnapshot => {
            const data = querySnapshot.docs.map(doc => {

                return{
                    id: doc.id,
                    ...doc.data()
                }
            }) as INotas[];
            
            setNotas(data);
            setIsLoading(false);
        });

        return () => subscribe();
    }, []);

    return (
        <View>
            <Text style={{fontSize: 30}}>Listagem de Notas</Text>
            <FlatList
            data={notas}
            renderItem={{info} => {
                return(
                    <View style={StyleSheet.card}>
                        <Text>{info.index}</Text>
                    </View>
                )
            }
    )
}