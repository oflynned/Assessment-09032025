import {BaseItemUpdater} from "./base-item.updater";
import {Item} from "../gilded-rose";

export class BackstagePassItemUpdater extends BaseItemUpdater {
  protected onElapse(item: Item): void {
    // "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches
    this.increaseQuality(item);

    // Quality increases by 2 when there are 10 days or less
    if (item.sellIn <= 10) {
      this.increaseQuality(item);
    }

    // and by 3 when there are 5 days or less
    if (item.sellIn <= 5) {
      this.increaseQuality(item)
    }

    // but quality drops to 0 after the concert
    if (item.sellIn <= 0) {
      item.quality = 0;
    }
  }
}
