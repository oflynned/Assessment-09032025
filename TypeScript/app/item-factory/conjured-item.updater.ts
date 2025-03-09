import {BaseItemUpdater} from "./base-item.updater";
import {Item} from "../gilded-rose";

export class ConjuredItemUpdater extends BaseItemUpdater {
  protected onElapse(item: Item) {
    // "Conjured" items degrade in Quality twice as fast as normal items
    this.decreaseQuality(item, 2)
  }
}
