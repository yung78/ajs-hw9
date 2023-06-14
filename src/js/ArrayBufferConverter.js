export default class ArrayBufferConverter {
  load(buffer) {
    this.bufferView = new Uint16Array(buffer);
  }

  toString() {
    let string = '';
    this.bufferView.forEach((el) => {
      string += String.fromCharCode(el);
    });
    return string;
  }
}
