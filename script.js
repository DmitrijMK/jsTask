// 5. Наделение функционалом
function duplicate() {
  return this.length !== 0 ? [...this, ...this] : this;
};

Array.prototype.duplicate = duplicate;

console.log([1, 2, 3, 4].duplicate()); // [1, 2, 3, 4, 1, 2, 3, 4]
