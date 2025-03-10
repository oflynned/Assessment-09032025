import {BaseItemUpdater} from "./base-item.updater";

export class SulfurasItemUpdater extends BaseItemUpdater {
  protected override onElapse() {
    // "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
    // so we don't need to do anything here
  }
}
