import {Item} from "../gilded-rose";
import {AgedBrieItemUpdater} from "./aged-brie.updater";

describe('Aged Brie Updater', () => {
  it('should not increment `quality` when equal to 50', () => {
    const item = new Item('Item', 5, 50)
    const updater = new AgedBrieItemUpdater()

    updater.update(item)

    expect(item.sellIn).toBe(4)
    expect(item.quality).toBe(50)
  })

  it('should increase `quality` by 1 on day elapse', () => {
    const item = new Item('Item', 5, 0)
    const updater = new AgedBrieItemUpdater()

    updater.update(item)

    expect(item.sellIn).toBe(4)
    expect(item.quality).toBe(1)
  })
})
