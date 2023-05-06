import {StyleSheet, View, TextInput, SafeAreaView, TouchableOpacity } from "react-native";
import Ubuntu from "../Ubuntu";
export default function Create({handleSubmit, setTitle, setDescription, title, description}: any) {
  

  return <View style={s.box}>
    <Ubuntu style={s.title}>
      Criar item
    </Ubuntu>
    <SafeAreaView>
      <TextInput style={s.input} placeholder="Título do item" placeholderTextColor={"#FFFFFF"} value={title} onChangeText={(txt: string) => setTitle(txt)}/>
      <TextInput style={s.input} placeholder="Descrição do item" placeholderTextColor={"#FFFFFF"} value={description} onChangeText={(txt: string) => setDescription(txt)}/>
      <TouchableOpacity style={s.button} onPress={handleSubmit}>
        <Ubuntu style={{textAlign: "center", color: "#FFF"}}>
          Salvar
        </Ubuntu>
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