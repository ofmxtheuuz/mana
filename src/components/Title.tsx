import { Text, StyleSheet } from "react-native"

interface TitleProps {
  name: string
}

export default function Title({name}: TitleProps) {
  return <Text style={s.title}>
    Seja bem-vindo ao Mana! {name}
  </Text>;
}

const s = StyleSheet.create({
  title: {
    textAlign: "center",
    color: "#9900ff",
    fontWeight: "bold",
    fontSize: 15
  }
})