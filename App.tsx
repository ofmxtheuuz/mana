
import { View, StatusBar } from 'react-native';
import Home from './src/pages/Home';

export default function App() {
  return (
    <View style={{marginTop: 15}}>
      <StatusBar />
      <Home />
    </View>
  );
}
