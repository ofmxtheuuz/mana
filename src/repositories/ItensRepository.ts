import storage from "@react-native-async-storage/async-storage"
import Item from "../models/Item"

class ItensRepository {
  async clear() {
    await storage.setItem("mana-itens", "[]")
  }
  async addItem(title: string, description: string) {
    let actuallyItens: Array<Item> = JSON.parse((await storage.getItem("mana-itens")) || "[]")
    actuallyItens.push(new Item(title, description))
    console.log(actuallyItens)
    await storage.setItem("mana-itens", JSON.stringify(actuallyItens))
  }
  async changeChecked(id: string) {
    let actuallyItens: Array<Item> = JSON.parse((await storage.getItem("mana-itens")) || "[]")

    await storage.setItem("mana-itens", JSON.stringify(
      actuallyItens.map((item: Item) => {
        if(item.id == id) {
          return {...item, isChecked: !item.isChecked}
        }
        return item;
      })
    ))
  }
}

export default new ItensRepository()