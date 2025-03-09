import {ItemUpdaterFactory} from "./item-factory";

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

  // private readonly updaterCache = new Map<ItemCategory, BaseItemUpdater>()

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    // this.updaterCache.clear()

    this.items.forEach((item) => {
      const updater = ItemUpdaterFactory.create(item);

      updater.update();
    });

    return this.items;
  }
}
