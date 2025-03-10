import {Item} from "../gilded-rose";
import {BaseItemUpdater} from "./base-item.updater";

describe('Base Item Updater', () => {
  it('should decrement day and decrease quality', () => {
    const item = new Item('Item', 5, 5)
    const updater = new BaseItemUpdater()

    updater.update(item)

    expect(item.sellIn).toBe(4)
    expect(item.quality).toBe(4)
  })

  it('should allow sellIn to go below 0', () => {
    const item = new Item('Item', 0, 5)
    const updater = new BaseItemUpdater()

    updater.update(item)

    expect(item.sellIn).toBe(-1)
    expect(item.quality).toBe(4)
  })

  it('should limit lowest quality to 0', () => {
    const item = new Item('Item', 1, 0)
    const updater = new BaseItemUpdater()

    updater.update(item)

    expect(item.sellIn).toBe(0)
    expect(item.quality).toBe(0)
  })
})
