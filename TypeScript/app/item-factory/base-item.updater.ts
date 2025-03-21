import {AbstractItemUpdater} from "./abstract-item.updater";
import {Item} from "../gilded-rose";

export class BaseItemUpdater extends AbstractItemUpdater {
  protected override onElapse(item: Item) {
    this.decreaseQuality(item);
  }
}
