import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from "react-native";
import { useState } from "react";
import ItensRepository from "../../repositories/ItensRepository";

export default function Create() {

  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")

  const submit = async () => {
    if(title.length > 0 && description.length > 2) {  
      console.log(`Formulário recebido: título: ${title}, descrição: ${description}`)
      await ItensRepository.addItem(title, description)
    }
  }

  return <View style={s.box}>
    <Text style={s.title}>
      Criar item
    </Text>
    <SafeAreaView>
      <TextInput style={s.input} placeholder="Título do item" placeholderTextColor={"#FFFFFF"} onChangeText={(txt: string) => setTitle(txt)}/>
      <TextInput style={s.input} placeholder="Descrição do item" placeholderTextColor={"#FFFFFF"} onChangeText={(txt: string) => setDescription(txt)}/>
      <TouchableOpacity style={s.button} onPress={submit}>
        <Text style={{textAlign: "center", color: "#FFF"}}>
          Salvar
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  </View>
}

const s = StyleSheet.create({
  box: {
    marginTop: 15,
    backgroundColor: "#9900ff",
    height: 200
  },
  title: {
    color: "#FFFFFF",
    marginVertical: 10,
    marginLeft: 15,
    fontSize: 17,
  },
  input: {
    color: "#FFF",
    marginLeft: 15,
    height: 40,
    width: 380,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    borderColor: "#FFF"
  },
  button: {
    marginTop: 6,
    borderWidth: 1,
    borderColor: "#FFF",
    margin: 15,
    width: 380,
    paddingVertical: 5,
    borderRadius: 6 
  }
})