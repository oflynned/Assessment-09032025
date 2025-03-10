import {ItemUpdaterFactory} from "./item-updater.factory";
import {Item} from "../gilded-rose";
import {AgedBrieItemUpdater} from "./aged-brie.updater";
import {BackstagePassItemUpdater} from "./backstage-pass.updater";
import {SulfurasItemUpdater} from "./sulfuras.updater";
import {ConjuredItemUpdater} from "./conjured-item.updater";
import {BaseItemUpdater} from "./base-item.updater";

describe('Item Updater Factory', () => {
  describe('create', () => {
    it('should return aged brie updater', () => {
      const item = new Item('Aged brie cheese', 5, 5)
      const updater = ItemUpdaterFactory.create(item)

      expect(updater).toBeInstanceOf(AgedBrieItemUpdater)
    })

    it('should return backstage passes updater', () => {
      const item = new Item('Backstage passes to some show', 5, 5)
      const updater = ItemUpdaterFactory.create(item)

      expect(updater).toBeInstanceOf(BackstagePassItemUpdater)
    })

    it('should return sulfuras item updater', () => {
      const item = new Item('Sulfuras item', 5, 5)
      const updater = ItemUpdaterFactory.create(item)

      expect(updater).toBeInstanceOf(SulfurasItemUpdater)
    })

    it('should return conjured item updater', () => {
      const item = new Item('Conjured item', 5, 5)
      const updater = ItemUpdaterFactory.create(item)

      expect(updater).toBeInstanceOf(ConjuredItemUpdater)
    })

    it('should take first value as type guess', () => {
      const item = new Item('Conjured backstage passes', 5, 5)
      const updater = ItemUpdaterFactory.create(item)

      expect(updater).toBeInstanceOf(ConjuredItemUpdater)
    })

    it('should fallback to a common item updater', () => {
      const item = new Item('Unknown item', 5, 5)
      const updater = ItemUpdaterFactory.create(item)

      expect(updater).toBeInstanceOf(BaseItemUpdater)
    })
  })

  describe('getCategory', () => {
    it('should return aged brie category', () => {
      const item = new Item('Aged brie cheese', 5, 5)
      const category = ItemUpdaterFactory.getCategory(item)
      expect(category).toBe('Aged Brie')
    })

    it('should return backstage passes category', () => {
      const item = new Item('Backstage passes to some show', 5, 5)
      const category = ItemUpdaterFactory.getCategory(item)
      expect(category).toBe('Backstage Passes')
    })

    it('should return sulfuras category', () => {
      const item = new Item('Sulfuras item', 5, 5)
      const category = ItemUpdaterFactory.getCategory(item)
      expect(category).toBe('Sulfuras')
    })

    it('should return conjured category', () => {
      const item = new Item('Conjured item', 5, 5)
      const category = ItemUpdaterFactory.getCategory(item)
      expect(category).toBe('Conjured')
    })

    it('should return common category', () => {
      const item = new Item('Unknown item', 5, 5)
      const category = ItemUpdaterFactory.getCategory(item)
      expect(category).toBe('Common')
    })
  })
})
