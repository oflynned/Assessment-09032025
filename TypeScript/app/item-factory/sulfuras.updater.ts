import {BaseItemUpdater} from "./base-item.updater";

export class SulfurasItemUpdater extends BaseItemUpdater {
  protected onElapse(): void {
    // "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
  }
}
