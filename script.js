// Переписать наследование с ES6 на ES5 =================================
function Person(value) {
  const that = {};
  that.name = value.name;

  that.getName = function getName() {
    return that.name;
  };

  return that;
}

function Man(value, nextValue) {
  const that = Person(value);
  that.facialHair = nextValue.facialHair;

  that.getName = function getName() {
    return `Name: ${that.name}`;
  };

  that.getFacialHair = function getFacialHair() {
    return that.facialHair;
  };

  return that;
}

const person = Person({ name: 'somebody' });
console.log(person.getName()); // somebody

const man = Man({ name: 'Viktor' }, { facialHair: true });
console.log(man.getName()); // Name: Viktor
console.log(man.getFacialHair()); // true

