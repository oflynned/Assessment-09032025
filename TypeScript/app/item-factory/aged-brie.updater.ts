import {Item} from "../gilded-rose";
import {BaseItemUpdater} from "./base-item.updater";

export class AgedBrieItemUpdater extends BaseItemUpdater {
  protected onElapse(item: Item): void {
    if (item.sellIn > 0) {
      // "Aged Brie" actually increases in Quality the older it gets
      this.increaseQuality(item);
    } else {
      // Once the sell by date has passed, Quality degrades twice as fast
      this.decreaseQuality(item, 2)
    }
  }
}
