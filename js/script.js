// Singleton (практика Замыканий) =============================

const Universe = (function () {
    let instance;
    this._size = 100;

    return function ConstructUniverse() {
        if (instance) return instance;
        if (this && this.constructor === ConstructUniverse) instance = this;
        else return new ConstructUniverse();
    };
})();

Universe.prototype.getSize = () => this._size;
Universe.prototype.setSize = (value) => this._size = value;

let a = new Universe();
let b = new Universe();
console.log(a === b);
console.log(a.getSize(), b.getSize()); // 100, 100
a.setSize(200);
console.log(a.getSize(), b.getSize()); // 200, 200

// Переписать наследование с ES6 на ES5 ===============================
