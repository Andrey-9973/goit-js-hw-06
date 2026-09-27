class StringBuilder {
  #value;

  constructor(value) {
    this.#value = value;
  }

  getValue() {
    return this.#value;
  }

  padStart(complement) {
    this.#value = complement + this.#value;
  }

  padEnd(complement) {
    this.#value = this.#value + complement;
  }

  padBoth(complement) {
    this.#value = complement + this.#value + complement;
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."

builder.padStart('^');
console.log(builder.getValue()); // "^."

builder.padEnd('^');
console.log(builder.getValue()); // "^.^"

builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
