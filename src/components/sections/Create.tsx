import { StyleSheet, Text, View } from "react-native";


export default function Create() {

  return <View style={s.box}>
    <Text style={s.title}>
      Criar item
    </Text>
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
    marginTop: 15,
    marginLeft: 15,
    fontSize: 17
  }
})