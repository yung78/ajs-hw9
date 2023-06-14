import Character from './Character.js';

export default class Magician extends Character {
  constructor(name, type) {
    super(name, type);
  }

  attacked() {
    return super.attacked;
  }

  stoned() {
    return super.stoned;
  }

  distSet(newDist) {
    super.attacked = newDist;
  }
}
