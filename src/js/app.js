import Magician from './Magician.js';
import Daemon from './Daemon.js';
import ArrayBufferConverter from './ArrayBufferConverter.js';

const pers1 = new Magician('Merlin', 'Magician');
const pers2 = new Daemon('Abaddon', 'Magician');

pers1.distSet(2);
pers2.distSet(4);

console.log(pers1.attacked());
console.log(pers1.stoned());

console.log(pers2.attacked());
console.log(pers2.stoned());

export default function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

const convert = new ArrayBufferConverter();
convert.load(getBuffer());
console.log(convert.toString());
