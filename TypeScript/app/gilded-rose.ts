import {BaseItemUpdater, ItemCategory, ItemUpdaterFactory} from "./item-factory";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  private readonly updaterMap = new Map<ItemCategory, BaseItemUpdater>()

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.updaterMap.clear()


    this.items.forEach((item) => {
      const category = ItemUpdaterFactory.getCategory(item);

      if (!this.updaterMap.has(category)) {
        // let's precompute the updater for each item category so we can reduce the memory footprint
        this.updaterMap.set(category, ItemUpdaterFactory.create(item))
      }

      const updater = this.updaterMap.get(category);

      updater?.update(item);
    })

    return this.items;
  }
}
