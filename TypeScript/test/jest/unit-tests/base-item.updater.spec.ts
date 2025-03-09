import {Item} from "../../../app/gilded-rose";
import {BaseItemUpdater} from "../../../app/item-factory";

describe('Base Item Updater', () => {
  it('should decrement day and decrease quality', () => {
    const item = new Item('Item', 5, 5)
    const updater = new BaseItemUpdater()

    updater.update(item)

    expect(item.sellIn).toBe(4)
    expect(item.quality).toBe(4)
  })

  it('should decrease quality even if sellIn reaches 0', () => {
    const item = new Item('Conjured item', 0, 5)
    const updater = new BaseItemUpdater()

    updater.update(item)

    expect(item.sellIn).toBe(0)
    expect(item.quality).toBe(4)
  })

  it('should limit lowest quality to 0', () => {
    const item = new Item('Conjured item', 0, 0)
    const updater = new BaseItemUpdater()

    updater.update(item)

    expect(item.sellIn).toBe(0)
    expect(item.quality).toBe(0)
  })
})
