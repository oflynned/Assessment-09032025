import {BaseItemUpdater, ItemCategory, ItemUpdaterFactory} from "./item-factory";
import {Logger} from "./logger";
import {Audit} from "./audit";

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

  private updateSequence = 0;
  private readonly audit = new Audit();
  private readonly updaterMap = new Map<ItemCategory, BaseItemUpdater>()

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality(): Item[] {
    const cycleId = ++this.updateSequence;

    Logger.log(`!!!️ Starting update cycle: ${cycleId} !!!`);

    this.updaterMap.clear();
    this.items.forEach((item) => {
      const category = ItemUpdaterFactory.getCategory(item);

      if (!this.updaterMap.has(category)) {
        // let's precompute the updater for each item category so we can reduce the memory footprint of the map
        this.updaterMap.set(category, ItemUpdaterFactory.create(item));
      }

      // to make typescript happy with the nullable get call
      const updater = this.updaterMap.get(category) ?? new BaseItemUpdater();

      Logger.log(`${cycleId}: Before updating item (${item.name})...`);

      // update the item
      updater.update(item);

      // let's keep a log of the changes so we can audit them later if needed
      this.audit.log(cycleId, category, item);

      Logger.log(`${cycleId}: After updating item (${item.name})...`);
    })

    Logger.log(this.audit.toString());
    Logger.log(`!!!️ Ending update cycle: ${cycleId} !!!\n`);

    return this.items;
  }
}
