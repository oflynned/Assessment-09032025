import {Item} from "../gilded-rose";
import {BaseItemUpdater} from "./base-item.updater";

export class AgedBrieItemUpdater extends BaseItemUpdater {
  protected override onElapse(item: Item) {
    // "Aged Brie" actually increases in Quality the older it gets
    this.increaseQuality(item);
  }
}
