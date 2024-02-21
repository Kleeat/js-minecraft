import { GLTFLoader } from '../../../../../../libraries/GLTFLoader'

export class ModelLoader {
  loader = new GLTFLoader()

  /**
   * @type {Record<'pickaxe', any>}
   */
  models = {}

  /**
   * creates a 3d model loader
   * @param {(models: typeof this.models)} onLoad callback
   */
  constructor(onLoad) {
    this.loader.load('https://dgreenheck.github.io/minecraft-threejs-clone/models/pickaxe.glb', (model) => {
      const mesh = model.scene
      this.models.pickaxe = mesh
      onLoad(this.models)
    })
  }
}
