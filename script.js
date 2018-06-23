// 6. Полифилы

// 1. myApply myCall myBindByCall
Object.prototype.myApply = function myApply(obj, value) {
  return this.call(obj, ...value);
};

Object.prototype.myCall = function myCall(obj, ...value) {
  return this.apply(obj, value);
};

Object.prototype.myBindByCall = function myBindByCall(obj, ...value) {
  return () => this.call(obj, ...value);
};

const obj1 = {
  a: 20,
  foo(...numbers) {
    return this.a + numbers.reduce((prev, curr) => prev + curr);
  },
};

const obj2 = {
  a: 30,
};

console.log(obj1.foo.myApply(obj2, [5, 5])); // 40
console.log(obj1.foo.myApply(obj2, [5, 5, 10])); // 50
console.log(obj1.foo.myCall(obj2, 5, 5, 20)); // 60
console.log(obj1.foo.myCall(obj2, 5, 5, 10, 20)); // 70

const f1 = obj1.foo.myBindByCall(obj2, 5, 5);
console.log(f1()); // 40
const f2 = obj1.foo.myBindByCall(obj2, 5, 5, 10);
console.log(f2()); // 50

// 2. Написать полифил на Object.create ===========================
Object.prototype.objectCreate = function objectCreate() {

};

const obj = {
  a: 1
};

const obj2 = objectCreate(obj, {
  p: {
    value: 20
  },
  k: {
    value: 30
  }
});

console.log(obj2); // { p: 20, k: 30, __proto__: { a: 1 } }
