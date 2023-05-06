import {StyleSheet, Text} from "react-native";

interface UbuntuProps {
    children: any
    style: any
}

export default function Ubuntu({children, style}: UbuntuProps) {
    return <Text style={[style, s.text]}>{children}</Text>    
}

const s = StyleSheet.create({
    text: {
        fontFamily: 'Ubuntu_400Regular'
    }
})