import {BaseItemUpdater} from "./base-item.updater";

export class AgedBrieItemUpdater extends BaseItemUpdater {
  protected onElapse(): void {
    if (this.item.sellIn > 0) {
      // "Aged Brie" actually increases in Quality the older it gets
      this.increaseQuality();
    } else {
      // Once the sell by date has passed, Quality degrades twice as fast
      this.decreaseQuality(2)
    }
  }
}
