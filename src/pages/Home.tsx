import {Alert, ScrollView} from "react-native";
import Header from "../components/sections/Header";
import Create from "../components/sections/Create";
import Items from "../components/sections/Items";
import {useEffect, useState} from "react";
import Item from "../models/Item";
import ItensRepository from "../repositories/ItensRepository";
import {
    useFonts,
    Ubuntu_400Regular,
} from "@expo-google-fonts/ubuntu"
import Ubuntu from "../components/Ubuntu";
import AppLoading from "expo-app-loading";

export default function Home() {
    
    let [fontsLoaded] = useFonts({
        Ubuntu_400Regular,
    });


    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const [allItems, setItems] = useState<Item[]>([])
    useEffect(() => {
        ItensRepository.getItems().then((result: Item[]) => setItems(result.reverse())).catch(() => {
            Alert.alert("Ocorreu um erro 😭", "Tente novamente mais tarde ou contate um administrador!")
        })
    }, [])

    const submit = () => {
        if (title.length > 0 && description.length > 2) {
            ItensRepository.addItem(title, description).then(() => {
                const newItem = new Item(title, description);
                setItems(prevItems => [newItem, ...prevItems]);
                Alert.alert("Sucesso ✅", "O item foi cadastrado com sucesso!");
                setTitle("");
                setDescription("");
            }).catch((err) => {
                console.log(err)
                Alert.alert("Ocorreu um erro 😭", "Tente novamente mais tarde ou contate um administrador!")
            })
        }
    }

    const updateItem = (id: string) => {
        ItensRepository.changeChecked(id);
        setItems((prevItems: any) => {
            const updatedItems = prevItems.map((item: Item) => {
                if (item.id === id) {
                    return {...item, isChecked: !item.isChecked};
                }
                return item;
            });
            return updatedItems;
        });
    };


    const clearItems = () => {
        ItensRepository.clear().then(() => {
            Alert.alert("Sucesso ✅", "O item foi cadastrado com sucesso!");
            setItems([])
        }).catch((err) => {
            console.log(err)
            Alert.alert("Ocorreu um erro 😭", "Tente novamente mais tarde ou contate um administrador!")
        })
    }

    if(fontsLoaded) {
        return <ScrollView>
            <Header/>
            <Create handleSubmit={submit} setTitle={setTitle} setDescription={setDescription} title={title}
                    description={description}/>

            {allItems.length > 0 ? (
                <Items items={allItems} handleUpdate={updateItem} clear={clearItems}/>
            ) : <Ubuntu style={{textAlign: "center", marginTop: 15, fontSize: 15}}>Nenhum item encontrado</Ubuntu>}

        </ScrollView>
    } else {
        return <AppLoading />
    }

    
}
