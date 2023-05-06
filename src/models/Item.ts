import 'react-native-get-random-values';
import {v4} from "uuid";

export default class Item {
  
  id: string
  title: string
  description: string
  isChecked: false

  constructor(
    title: string,
    description: string
    ) {
      this.id = "4328473824928"
      this.title = title
      this.description = description
      this.isChecked = false   
    }
}