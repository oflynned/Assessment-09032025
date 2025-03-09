import {Item} from "../../../app/gilded-rose";
import {ItemUpdaterFactory} from "../../../app/item-factory";
import {ConjuredItemUpdater} from "@/item-factory/conjured-item.updater";

describe('Conjured Updater', () => {
  it('should decrement day and decrease quality twice as quickly', () => {
    const item = new Item('Conjured item', 5, 5)
    const updater = new ConjuredItemUpdater(item)

    updater.update()

    expect(item.sellIn).toBe(4)
    expect(item.quality).toBe(3)
  })
  it('should decrement day and decrease quality twice as quickly', () => {
    const item = new Item('Conjured item', 5, 5)
    const updater = new ConjuredItemUpdater(item)

    updater.update()

    expect(item.sellIn).toBe(4)
    expect(item.quality).toBe(3)
  })
})
