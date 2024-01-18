'use strict';
class Storage {
    #items = [];
    constructor(array) {
    this.#items = array;
    }
    
    getItems() {
    return this.#items;
    }

    addItem(item) {
        this.#items.push(item);
    }

    removeItem(item) {
          this.#items = this.#items.filter((value) => value !== item);
    }
}
    
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);

console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");

console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");

console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]