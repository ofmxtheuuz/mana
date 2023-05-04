import { Text, StyleSheet } from "react-native"

export default function DateDay() {
  const data = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  return <Text style={s.date}>{data}</Text>
}

const s = StyleSheet.create({
  date: {

  }
})