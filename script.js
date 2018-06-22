// Переписать наследование с ES6 на ES5 =================================
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function getName() {
  return this.name;
};

function Man(name, facialHair) {
  Person.apply(this, arguments);
  this.facialHair = facialHair;

  this.getName = function getName() {
    return `Name: ${this.name}`;
  };

  this.getFacialHair = function getFacialHair() {
    return this.facialHair;
  };
}

Man.prototype = Object.create(Person.prototype);

const person = new Person('somebody');
console.log(person.getName()); // somebody

const man = new Man('Viktor', true);
console.log(man.getName()); // Name: Viktor
console.log(man.getFacialHair()); // true
