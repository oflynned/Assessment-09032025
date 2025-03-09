import {Item} from "../gilded-rose";

const MIN_QUALITY = 0
const MAX_QUALITY = 50

export abstract class AbstractItemUpdater {
  constructor(readonly item: Item) {
  }

  update() {
    this.onElapse()
    this.onDayEnd()
  }

  protected onDayEnd() {
    if (this.item.sellIn > 0) {
      this.item.sellIn -= 1
    }
  }

  protected increaseQuality(delta = 1) {
    this.item.quality += delta

    if (this.item.quality > MAX_QUALITY) {
      this.item.quality = MAX_QUALITY
    }
  }

  protected decreaseQuality(delta = 1) {
    this.item.quality -= delta

    if (this.item.quality < MIN_QUALITY) {
      this.item.quality = MIN_QUALITY
    }
  }

  protected abstract onElapse(): void;
}
