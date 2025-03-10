import {Item} from "../gilded-rose";
import {Logger} from "../logger";

const SELL_IN_DELTA = 1
const QUALITY_DELTA = 1
const MIN_QUALITY = 0
const MAX_QUALITY = 50

type Args = {
  sellInDelta: number;
  qualityDelta: number;
  minQuality: number;
  maxQuality: number;
}

const defaultArgs: Args = {
  sellInDelta: SELL_IN_DELTA,
  qualityDelta: QUALITY_DELTA,
  minQuality: MIN_QUALITY,
  maxQuality: MAX_QUALITY
}

export abstract class AbstractItemUpdater {
  protected readonly args: Args;

  constructor(args?: Partial<Args>) {
    this.args = {...defaultArgs, ...(args ?? {})}
  }

  update(item: Item) {
    Logger.log(`Updating item (${item.name})...`);

    this.onElapse(item)
    this.onDayEnd(item)
  }

  protected onDayEnd(item: Item) {
    Logger.log('Day is ending')

    item.sellIn -= this.args.sellInDelta

    Logger.log(`New sell in is now ${item.sellIn}`)
  }

  protected increaseQuality(item: Item, coefficient = 1) {
    const delta = this.args.qualityDelta * coefficient
    item.quality += delta

    Logger.log(`Increasing quality by ${delta}`)

    if (item.quality > this.args.maxQuality) {
      Logger.log(`Max quality reached`)

      item.quality = this.args.maxQuality
    }
  }

  protected decreaseQuality(item: Item, coefficient = 1) {
    const delta = this.args.qualityDelta * coefficient
    item.quality -= delta

    Logger.log(`Decreased quality by ${delta}`)

    if (item.quality < this.args.minQuality) {
      Logger.log(`Min quality reached`)

      item.quality = this.args.minQuality
    }
  }

  protected abstract onElapse(item: Item): void;
}
