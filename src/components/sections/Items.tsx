import Item from "../../models/Item";
import {StyleSheet, TouchableOpacity} from "react-native";
import Container from "../Container";
import ShowItem from "../ShowItem";
import Ubuntu from "../Ubuntu";

interface ItemsProps {
    items: Item[]
    handleUpdate: any
    clear: any
}

export default function Items({items, handleUpdate, clear}: ItemsProps) {
    
    const checkedItems = items.filter((item: Item) => {
        if(item.isChecked) return item
    })
    const uncheckedItems = items.filter((item: Item) => {
        if(!item.isChecked) return item
    })
    
    return <Container>
        <TouchableOpacity onPress={clear}><Ubuntu style={s.clear}>Excluir todos</Ubuntu></TouchableOpacity>
        {uncheckedItems.length > 0 && uncheckedItems.map((item: Item) => <ShowItem handleUpdate={handleUpdate} key={item.id} item={item} />)}
        {checkedItems.length > 0 && checkedItems.map((item: Item) => <ShowItem handleUpdate={handleUpdate} key={item.id} item={item} />)}
    </Container>
}

const s = StyleSheet.create({
    clear: {
        color: "#9900ff",
        marginBottom: 5
    }
})