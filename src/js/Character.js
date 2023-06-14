export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.attack = 40;
    this.damage = 0;
    this.dist = 1;
  }

  get attacked() {
    this.damage = ((11 - this.dist) / 10) * this.attack;
    return this.damage;
  }

  set attacked(newDist) {
    this.dist = newDist;
  }

  get stoned() {
    const specDamage = this.damage - Math.log2(this.dist) * 5;
    return specDamage;
  }
}
