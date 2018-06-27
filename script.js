// 6. Полифилы
// 1. myApply myCall myBindByCall
// Object.prototype.myApply = function myApply(obj, value) {
//   return this.call(obj, ...value);
// };
//
// Object.prototype.myCall = function myCall(obj, ...value) {
//   return this.apply(obj, value);
// };
//
// Object.prototype.myBindByCall = function myBindByCall(obj, ...value) {
//   return () => this.call(obj, ...value);
// };
//
// const obj1 = {
//   a: 20,
//   foo(...numbers) {
//     return this.a + numbers.reduce((prev, curr) => prev + curr);
//   },
// };
//
// const obj2 = {
//   a: 30,
// };
//
// console.log(obj1.foo.myApply(obj2, [5, 5])); // 40
// console.log(obj1.foo.myApply(obj2, [5, 5, 10])); // 50
// console.log(obj1.foo.myCall(obj2, 5, 5, 20)); // 60
// console.log(obj1.foo.myCall(obj2, 5, 5, 10, 20)); // 70
//
// const f1 = obj1.foo.myBindByCall(obj2, 5, 5);
// console.log(f1()); // 40
// const f2 = obj1.foo.myBindByCall(obj2, 5, 5, 10);
// console.log(f2()); // 50

// 2. Написать полифил на Object.create ===========================
// function objectCreate(obj, propertiesObject) {
//   function F() {}
//
//   F.prototype = obj;
//   const f = new F();
//
//
//   return Object.defineProperties(f, propertiesObject);
// }
//
// const obj = {
//   a: 1,
// };
//
// const obj2 = objectCreate(obj, {
//   p: {
//     value: 20,
//   },
//   k: {
//     value: 30,
//   },
// });
//
// console.log(obj2); // { p: 20, k: 30, __proto__: { a: 1 } }

// 3 Написать свою реализацию new в виде функции myNew=========================
// function myNew(func) {
//   const that = Object.create(func.prototype);
//   func.apply(that);
//   return that;
// }
//
// function F() {
//   this.a = 10;
// }
//
// F.prototype.foo = function foo() {
//   return this.a;
// };
//
// const a = myNew(F);
// console.log(a); // { a: 10, __proto__: { foo, constructor } }
// console.log(a.foo()); // 10

// 4. Написать полифил на Object.assign=========================
function objectAssign(target, ...sources) {
  if (!target) throw new TypeError('Can`t convert');

  for (let i = 0; i < sources.length; i++) {
    const nextSource = sources[i];
    if (!nextSource) continue;

    const keysArray = Object.keys(nextSource);
    for (let i = 0; i < keysArray.length; i++) {
      const desc = Object.getOwnPropertyDescriptor(nextSource, keysArray[i]);

      if (desc !== undefined && desc.enumerable) {
        target[keysArray[i]] = nextSource[keysArray[i]];
      }
    }
  }
  return target;
}

const o2 = { b: 2, z: 5, f: null };
const o3 = { c: 3 };
const ar = [1];
const df = null;

const obj = objectAssign(ar, o2, o3, df);
console.log(obj);
console.log(ar);
