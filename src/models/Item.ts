import v4 from "uuid"

export default class Item {
  
  id: string
  title: string
  description: string
  isChecked: false

  constructor(
    title: string,
    description: string
    ) {
      this.id = v4.v4() 
      this.title = title
      this.description = description
      this.isChecked = false   
    }
}