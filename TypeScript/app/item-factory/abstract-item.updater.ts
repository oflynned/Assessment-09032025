import {Item} from "../gilded-rose";

const MIN_QUALITY = 0
const MAX_QUALITY = 50

export abstract class AbstractItemUpdater {
  update(item: Item) {
    this.onElapse(item)
    this.onDayEnd(item)
  }

  protected onDayEnd(item: Item) {
    if (item.sellIn > 0) {
      item.sellIn -= 1
    }
  }

  protected increaseQuality(item: Item, delta = 1) {
    item.quality += delta

    if (item.quality > MAX_QUALITY) {
      item.quality = MAX_QUALITY
    }
  }

  protected decreaseQuality(item: Item, delta = 1) {
    item.quality -= delta

    if (item.quality < MIN_QUALITY) {
      item.quality = MIN_QUALITY
    }
  }

  protected abstract onElapse(item: Item): void;
}
