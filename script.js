// 5. Наделение функционалом
Array.prototype.duplicate = function duplicate() {
  return [...this, ...this];
};

console.log([].duplicate()); // [1, 2, 3, 4, 1, 2, 3, 4]
