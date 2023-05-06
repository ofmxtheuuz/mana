import storage from "@react-native-async-storage/async-storage"
import Item from "../models/Item"

class ItensRepository {
  async clear() {
    await storage.setItem("mana-itens", "[]")
  }
  async getItems() {
    return JSON.parse(await storage.getItem("mana-itens") || "[]")
  }
  async addItem(title: string, description: string) {
    let actuallyItens: Array<Item> = JSON.parse((await storage.getItem("mana-itens")) || "[]")
    const item: Item = new Item(title, description)
    actuallyItens.push(item)
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