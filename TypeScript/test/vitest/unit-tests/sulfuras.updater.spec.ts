import {Item} from "../../../app/gilded-rose";
import {ItemUpdaterFactory} from "../../../app/item-factory";
import {SulfurasItemUpdater} from "@/item-factory/sulfuras.updater";

describe('Sulfuras Updater', () => {
  it('should decrement day and keep quality as is on update', () => {
    const item = new Item('Item', 5, 80)
    const updater = new SulfurasItemUpdater(item)

    updater.update()

    expect(item.sellIn).toBe(4)
    expect(item.quality).toBe(80)
  })

  it('should not decrement day and should keep quality as is when sellIn reaches 0', () => {
    const item = new Item('Item', 0, 80)
    const updater = new SulfurasItemUpdater(item)

    updater.update()

    expect(item.sellIn).toBe(0)
    expect(item.quality).toBe(80)
  })
})
