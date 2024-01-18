'use strict';

class StringBuilder {
    #value;

    constructor(str) {
        this.#value = String(str);
    }
    
    getValue() {
        return this.#value;
    }

    padStart(str) {
        this.#value = String(str) + this.#value;
    }

    padEnd(str) {
        this.#value = this.#value + String(str);
    } 

    padBoth(str) {
        this.#value = String(str) + this.#value + String(str);
    } 
}

const builder = new StringBuilder(".");

console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="