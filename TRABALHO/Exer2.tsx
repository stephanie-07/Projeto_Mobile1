import { Route } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";

type HomeProps = {
    navigation: any,
    route: Route<string>,
}

const Exer2 = ({navigation, route}: HomeProps) => {
    return(
    <View>
    <Pressable
    onPress={() => navigation.navigate('Exer1')}>
        <Text>Exer 1</Text>
    </Pressable>

    <Pressable
    onPress={() => navigation.navigate('Exer3')}>
        <Text>Exer 3</Text>
    </Pressable>
    </View>
    );
};
export default Exer2;


