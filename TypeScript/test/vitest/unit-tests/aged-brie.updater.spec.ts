import {Item} from "../../../app/gilded-rose";
import {AgedBrieItemUpdater} from "../../../app/item-factory/aged-brie.updater";

describe('Aged Brie Updater', () => {
  it('should not increment `quality` when equal to 50', () => {
    const item = new Item('Item', 5, 50)
    const updater = new AgedBrieItemUpdater(item)

    updater.update()

    expect(item.sellIn).toBe(4)
    expect(item.quality).toBe(50)
  })

  it('should increase `quality` by 1 when `sellIn` is greater than 0', () => {
    const item = new Item('Item', 5, 0)
    const updater = new AgedBrieItemUpdater(item)

    updater.update()

    expect(item.sellIn).toBe(4)
    expect(item.quality).toBe(1)
  })

  describe("when `sellIn` reaches 0", () => {
    it('should reduce `quality` by 2', () => {
      const item = new Item('Item', 0, 5)
      const updater = new AgedBrieItemUpdater(item)

      updater.update()

      expect(item.sellIn).toBe(0)
      expect(item.quality).toBe(3)
    })

    it('should limit `quality` to be 0 if it cannot be reduced in full', () => {
      const item = new Item('Item', 0, 1)
      const updater = new AgedBrieItemUpdater(item)

      updater.update()

      expect(item.sellIn).toBe(0)
      expect(item.quality).toBe(0)
    })
  })
})
