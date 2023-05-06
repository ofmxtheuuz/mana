import {ScrollView, View} from "react-native";
import Header from "../components/sections/Header";
import Create from "../components/sections/Create";
import Items from "../components/sections/Items";


export default function Home() {
  return <ScrollView>
      <Header />
      <Create />
      <Items />
  </ScrollView>
}