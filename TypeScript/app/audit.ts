import {Item} from "./gilded-rose";
import {ItemCategory} from "./item-factory";

type Transaction = {
  id: number;
  timestamp: Date;
  category: ItemCategory;
  item: Item;
}

export class Audit {
  private transactions: Transaction[] = []

  // recording actions between the update cycles would be useful for debugging and tracking purposes
  log(updateId: number, category: ItemCategory, item: Item) {
    this.transactions.push({
      id: updateId,
      timestamp: new Date(),
      category,
      item,
    })
  }

  getTrail() {
    return this.transactions
  }

  toString() {
    return this.transactions.map((transaction) => {
      const log = [transaction.category, transaction.timestamp.toISOString(), transaction.item.name, transaction.item.sellIn, transaction.item.quality].join(' - ')

      return `${transaction.id}: ${log}`
    }).join('\n')
  }
}
