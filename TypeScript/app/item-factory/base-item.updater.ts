import {AbstractItemUpdater} from "./abstract-item.updater";

export class BaseItemUpdater extends AbstractItemUpdater {
  protected onElapse() {
    this.decreaseQuality();
  }
}
