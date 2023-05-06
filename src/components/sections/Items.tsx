import ItensRepository from "../../repositories/ItensRepository";
import {useEffect, useState} from "react";
import Item from "../../models/Item";
import {Alert} from "react-native";
import Container from "../Container";

export default function Items() {
    const [allItems, setItems] = useState<Item[]>([])
    useEffect(() => {
        ItensRepository.getItems().then((result: Item[]) => setItems(result)).catch(() => {
            Alert.alert("Ocorreu um erro 😭", "Tente novamente mais tarde ou contate um administrador!")
        })
    }, [])
    
    return <Container>
        
    </Container>
}