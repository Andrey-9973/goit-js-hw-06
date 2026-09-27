class Storage {
  constructor(arrey) {
    this.nameArrey = arrey;
  }

  getItems() {
    return this.nameArrey;
  }

  addItem(newName) {
    this.nameArrey.push(newName);
  }

  removeItem(removeName) {
    this.nameArrey = this.nameArrey.filter((item) => item !== removeName);
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
