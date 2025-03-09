import {BaseItemUpdater} from "./base-item.updater";

export class ConjuredItemUpdater extends BaseItemUpdater {
  protected onElapse() {
    // "Conjured" items degrade in Quality twice as fast as normal items
    this.decreaseQuality(2)
  }
}
