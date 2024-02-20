import Block from '../Block.js'

export default class BlockObsidian extends Block {
  constructor(id, textureSlotId) {
    super(id, textureSlotId)

    // Hardness
    this.hardness = 16

    // Experiemntal Efficiency
    this.efficiency = 4
  }
}
