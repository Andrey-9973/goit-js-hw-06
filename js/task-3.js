class StringBuilder {
  constructor(value) {
    this.startValue = value;
  }

  getValue() {
    return this.startValue;
  }

  padStart(complement) {
    this.startValue = complement + this.startValue;
  }

  padEnd(complement) {
    this.startValue = this.startValue + complement;
  }

  padBoth(complement) {
    this.startValue = complement + this.startValue + complement;
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
