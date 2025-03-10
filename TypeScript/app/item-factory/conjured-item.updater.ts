import {BaseItemUpdater} from "./base-item.updater";

export class ConjuredItemUpdater extends BaseItemUpdater {
  constructor() {
    // "Conjured" items degrade in Quality twice as fast as normal items
    super({qualityDelta: 2});
  }
}
