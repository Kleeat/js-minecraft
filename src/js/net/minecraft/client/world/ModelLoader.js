import { GLTFLoader } from '../../../../../../libraries/GLTFLoader'
import * as THREE from '../../../../../../libraries/three.module.js'

export class ModelLoader {
  loader = new GLTFLoader()

  /**
   * @type {Record<'pickaxe', THREE.Group>}
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
