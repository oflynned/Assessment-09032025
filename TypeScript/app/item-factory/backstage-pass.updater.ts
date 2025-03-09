import {BaseItemUpdater} from "./base-item.updater";

export class BackstagePassItemUpdater extends BaseItemUpdater {
  protected onElapse(): void {
    // "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches
    this.increaseQuality();

    // Quality increases by 2 when there are 10 days or less
    if (this.item.sellIn <= 10) {
      this.increaseQuality();
    }

    // and by 3 when there are 5 days or less
    if (this.item.sellIn <= 5) {
      this.increaseQuality()
    }

    // but quality drops to 0 after the concert
    if (this.item.sellIn <= 0) {
      this.item.quality = 0;
    }
  }
}
