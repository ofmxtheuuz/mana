import 'react-native-get-random-values';

export default class Item {
  
  id: string
  title: string
  description: string
  isChecked: boolean

  constructor(
    title: string,
    description: string
    ) {
    this.id = Math.floor(Math.random() * (10000 - 1000) + 1000).toString()
      
      this.title = title
      this.description = description
      this.isChecked = false   
    }
}