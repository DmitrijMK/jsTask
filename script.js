// Singleton (практика Замыканий) =============================
const Universe = (function universe() {
  let instance;
  this.size = 100;

  return function ConstructUniverse() {
    if (instance) return instance;
    if (this && this.constructor === ConstructUniverse) instance = this;
    else return new ConstructUniverse();
  };
})();

Universe.prototype.getSize = () => this.size;
Universe.prototype.setSize = value => this.size = value;

const a = new Universe();
const b = new Universe();
console.log(a === b);
console.log(a.getSize(), b.getSize()); // 100, 100
a.setSize(200);
console.log(a.getSize(), b.getSize()); // 200, 200

