import Item from "../models/Item";
import {StyleSheet, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Ubuntu from "./Ubuntu";

interface ShowItemProps {
    item: Item
    handleUpdate: any
}

export default function ShowItem({item, handleUpdate}: ShowItemProps) {
    

    
    return <View style={s.box} >
        <View>
            <Ubuntu style={{color: "rgba(153,0,255,0.5)"}}>
                {item.title}
            </Ubuntu>
            <Ubuntu style={s.description}>
                {item.description}
            </Ubuntu>
        </View>
        {item.isChecked ? <Icon onPress={() => {handleUpdate(item.id)}} name="check-square-o" size={30} color="purple" /> : <Icon onPress={() => {handleUpdate(item.id)}} name="square-o" size={30} color="purple" />}
        

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