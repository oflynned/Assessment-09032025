import {Item} from "../gilded-rose";
import {SulfurasItemUpdater} from "./sulfuras.updater";
import {AgedBrieItemUpdater} from "./aged-brie.updater";
import {BackstagePassItemUpdater} from "./backstage-pass.updater";
import {ConjuredItemUpdater} from "./conjured-item.updater";
import {BaseItemUpdater} from "./base-item.updater";

export type ItemCategory = 'Aged Brie' | 'Backstage Passes' | 'Sulfuras' | 'Conjured' | 'Common';

export class ItemUpdaterFactory {
  static create(item: Item) {
    const category = ItemUpdaterFactory.getCategory(item);

    switch (category) {
      case 'Aged Brie':
        return new AgedBrieItemUpdater(item);
      case 'Backstage Passes':
        return new BackstagePassItemUpdater(item);
      case 'Sulfuras':
        return new SulfurasItemUpdater(item);
      case 'Conjured':
        return new ConjuredItemUpdater(item);
      default:
        return new BaseItemUpdater(item);
    }
  }

  static getCategory(item: Item): ItemCategory {
    if (item.name.toUpperCase().startsWith('AGED BRIE')) {
      return 'Aged Brie';
    }

    if (item.name.toUpperCase().startsWith('BACKSTAGE PASSES')) {
      return 'Backstage Passes';
    }

    if (item.name.toUpperCase().startsWith('SULFURAS')) {
      return 'Sulfuras';
    }

    if (item.name.toUpperCase().startsWith('CONJURED')) {
      return 'Conjured';
    }

    return 'Common';
  }
}
