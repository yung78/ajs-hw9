import ArrayBufferConverter from '../js/ArrayBufferConverter.js';
import getBuffer from '../js/app.js';

test('load(buffer) & toString()', () => {
  const convert = new ArrayBufferConverter();
  convert.load(getBuffer());
  expect(convert.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
