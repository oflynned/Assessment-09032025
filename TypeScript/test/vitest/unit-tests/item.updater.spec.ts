import {Item} from "../../../app/gilded-rose";
import {ItemUpdaterFactory} from "../../../app/item-factory";
import {ConjuredItemUpdater} from "@/item-factory/conjured-item.updater";
import {BaseItemUpdater} from "@/item-factory/item.updater";

describe('Item Updater', () => {
  it('should decrement day and decrease quality', () => {
    const item = new Item('Item', 5, 5)
    const updater = new BaseItemUpdater(item)

    updater.update()

    expect(item.sellIn).toBe(4)
    expect(item.quality).toBe(4)
  })

  it('should decrease quality even if sellIn reaches 0', () => {
    const item = new Item('Conjured item', 0, 5)
    const updater = new BaseItemUpdater(item)

    updater.update()

    expect(item.sellIn).toBe(0)
    expect(item.quality).toBe(4)
  })

  it('should limit lowest quality to 0', () => {
    const item = new Item('Conjured item', 0, 0)
    const updater = new BaseItemUpdater(item)

    updater.update()

    expect(item.sellIn).toBe(0)
    expect(item.quality).toBe(0)
  })
})
