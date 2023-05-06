import Item from "../models/Item";
import {StyleSheet, Text, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

interface ShowItemProps {
    item: Item
}

export default function ShowItem({item}: ShowItemProps) {
    return <View style={s.box} key={item.id}>
        <Text style={{color: "rgba(153,0,255,0.5)"}}>
            {item.title}
        </Text>
        <Text style={s.description}>
            {item.description.slice(0, 60)}
        </Text>
    </View>
}

const s = StyleSheet.create({
    box: {
        height: 100,
        borderWidth: 1,
        borderColor: "#9900ff",
        borderRadius: 6,
        marginBottom: 15,
        padding: 15
    },
    description: {
        maxWidth: 290,
        color: "#9900ff",
    }
})