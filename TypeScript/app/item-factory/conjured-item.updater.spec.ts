import {Item} from "../gilded-rose";
import {ConjuredItemUpdater} from "./conjured-item.updater";

describe('Conjured Updater', () => {
  it('should decrement day and decrease quality twice as quickly', () => {
    const item = new Item('Conjured item', 5, 5)
    const updater = new ConjuredItemUpdater()

    updater.update(item)

    expect(item.sellIn).toBe(4)
    expect(item.quality).toBe(3)
  })
  it('should decrement day and decrease quality twice as quickly', () => {
    const item = new Item('Conjured item', 5, 5)
    const updater = new ConjuredItemUpdater()

    updater.update(item)

    expect(item.sellIn).toBe(4)
    expect(item.quality).toBe(3)
  })
})
