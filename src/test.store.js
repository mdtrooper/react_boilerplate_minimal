import { action, computed, observable } from 'mobx'

class TestStore {
  @observable things

  constructor () {
    this.things = []
  }

  @action add = (thing) => {
    this.things.push(thing)
  }

  @computed get Count () {
    return this.things.length
  }
}

const testStore = new TestStore()
export default testStore
export { TestStore }
