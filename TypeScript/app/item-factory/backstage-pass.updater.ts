import {BaseItemUpdater} from "./base-item.updater";
import {Item} from "../gilded-rose";

export class BackstagePassItemUpdater extends BaseItemUpdater {
  protected override onElapse(item: Item) {
    if (item.sellIn <= 0) {
      // but quality drops to 0 after the concert
      item.quality = 0;

      return;
    }

    if (item.sellIn <= 5) {
      // and by 3 when there are 5 days or less
      this.increaseQuality(item, 3)

      return;
    }

    if (item.sellIn <= 10) {
      // Quality increases by 2 when there are 10 days or less
      this.increaseQuality(item, 2);

      return;
    }

    // "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches
    this.increaseQuality(item)
  }
}
