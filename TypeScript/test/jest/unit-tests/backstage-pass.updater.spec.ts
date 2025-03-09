import {Item} from "../../../app/gilded-rose";
import {BackstagePassItemUpdater} from "../../../app/item-factory/backstage-pass.updater";

describe('Backstage Passes Updater', () => {
  it('should increase quality by 1 outside of day limits', () => {
    const item = new Item('Item', 20, 0)
    const updater = new BackstagePassItemUpdater()

    updater.update(item)

    expect(item.sellIn).toBe(19)
    expect(item.quality).toBe(1)
  })

  it('should increase quality by 2 when sellIn is greater than 5 days and less than or equal to 10 days', () => {
    const item = new Item('Item', 10, 0)
    const updater = new BackstagePassItemUpdater()

    updater.update(item)

    expect(item.sellIn).toBe(9)
    expect(item.quality).toBe(2)
  })

  it('should increase quality by 3 when sellIn is greater than 0 days and less than or equal to 5 days', () => {
    const item = new Item('Item', 5, 0)
    const updater = new BackstagePassItemUpdater()

    updater.update(item)

    expect(item.sellIn).toBe(4)
    expect(item.quality).toBe(3)
  })

  it('should become worthless when sellIn reaches 0', () => {
    const item = new Item('Item', 0, 10)
    const updater = new BackstagePassItemUpdater()

    updater.update(item)

    expect(item.sellIn).toBe(0)
    expect(item.quality).toBe(0)
  })
})
