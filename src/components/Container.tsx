import { View, StyleSheet } from "react-native";


export default function Container({children}: any) {
  return <View style={s.container}>
    {children}
  </View>
}

const s = StyleSheet.create({
  container: {
    
  }
})