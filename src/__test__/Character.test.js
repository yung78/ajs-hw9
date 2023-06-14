import Character from '../js/Character.js';

test('attack if dist = 1', () => {
  const pers = new Character('Player', 'Daemon');
  expect(pers.attacked).toBe(40);
});

test('attack if dist = 3', () => {
  const pers = new Character('Player', 'Daemon');
  pers.attacked = 3;
  expect(pers.attacked).toBe(32);
});

test('stoned + attack if dist = 2', () => {
  const pers = new Character('Player', 'Daemon');
  pers.attacked = 2;
  pers.attacked;
  expect(pers.stoned).toBe(31);
});
