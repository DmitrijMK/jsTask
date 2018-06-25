// ========================= task-7 =========================
// const objectHell = arg => arg.split('.')
//   .reduceRight((prev, cur) => ({ [cur]: prev }), null);
// console.log(objectHell('a.b.c.d'));
// 2. Реализовать функции объединения, пересечения, разности элементов двух arr:
// const union = (arr1, arr2) => [...new Set([...arr1, ...arr2])];
// const intersection = (arr1, arr2) => [...new Set(arr1)]
//   .filter(value => new Set(arr2).has(value));
// const diff = (arr1, arr2) => [...new Set(arr1)]
//   .filter(value => !(new Set(arr2).has(value)));
//
// console.log(union([4, 5, 7, 2, 1, 5], [1, 2, 3, 7, 9]));// [4, 5, 7, 2, 1, 3, 9]
// console.log(intersection([1, 2, 3], [4, 3, 2])); // [2, 3]
// console.log(diff([1, 2, 3, 7, 9], [4, 5, 7, 2, 1, 5])); // [3, 9]
// console.log(diff([4, 5, 7, 2, 1, 5], [1, 2, 3, 7, 9])); // [4, 5]

// 3. Написать функцию, которая принимает массив слов и ищет анаграммы
const input = [
  'вертикаль',
  'кильватер',
  'апельсин',
  'спаниель',
  'австралопитек',
  'ватерполистка',
  'кластер',
  'сталкер',
  'стрелка',
];

const alphabetize = word => word.split('').sort().join('');

function anagrams(words) {
  const result = [];

  words.forEach(word => result[alphabetize(word)]
    ? result[alphabetize(word)].push(word)
    : result[alphabetize(word)] = [word]);

  return result;
}

console.log(anagrams(input));

// 4. Написать функцию, которая работает с многим кол. последовательных вызовов
// function sum(value) {
//   const totalSum = nextValue => nextValue ? sum(value + nextValue) : value;
//   totalSum.toString = () => value;
//   return totalSum;
// }
//
// console.log(sum(1)(2)(3)()); // 6
// console.log(sum(1)(2)(3)(4) + 1); // 11
// console.log(sum(1)(2)(3)(4)(5) + 1); // 16
