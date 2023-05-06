import Item from "../models/Item";
import {StyleSheet, Text, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import ItensRepository from "../repositories/ItensRepository";

interface ShowItemProps {
    item: Item
}

export default function ShowItem({item}: ShowItemProps) {
    
    const updateItem = (id: string) => {
        ItensRepository.changeChecked(id)
    }
    
    return <View style={s.box} >
        <View>
            <Text style={{color: "rgba(153,0,255,0.5)"}}>
                {item.title}
            </Text>
            <Text style={s.description}>
                {item.description.slice(0, 60)}
            </Text>
        </View>
        {item.isChecked ? <Icon onPress={() => {updateItem(item.id)}} name="check-square-o" size={30} color="purple" /> : <Icon onPress={() => {updateItem(item.id)}} name="square-o" size={30} color="purple" />}
        

    </View>
}

const s = StyleSheet.create({
    box: {
        height: 100,
        borderWidth: 1,
        borderColor: "#9900ff",
        borderRadius: 6,
        marginBottom: 15,
        padding: 15,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    description: {
        maxWidth: 290,
        color: "#9900ff",
    }
})