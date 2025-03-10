import {Item} from "../gilded-rose";
import {SulfurasItemUpdater} from "./sulfuras.updater";

describe('Sulfuras Updater', () => {
  it('should decrement day and keep quality as is on update', () => {
    const item = new Item('Item', 5, 80)
    const updater = new SulfurasItemUpdater()

    updater.update(item)

    expect(item.sellIn).toBe(4)
    expect(item.quality).toBe(80)
  })

  it('should keep quality as is when sellIn reaches 0', () => {
    const item = new Item('Item', 0, 80)
    const updater = new SulfurasItemUpdater()

    updater.update(item)

    expect(item.sellIn).toBe(-1)
    expect(item.quality).toBe(80)
  })
})
