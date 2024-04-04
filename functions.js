// 2. Чистые функции
// function isPrime(num) {
//   for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }
//
// export default function sayPrimeOrNot(num) {
//   console.log(isPrime(num) ? 'yes' : 'no');
// }
//
// sayPrimeOrNot(5); // 'yes'
// sayPrimeOrNot(4); // 'no'

// 5. Оператор Rest (упаковка аргументов)
// import _ from 'lodash';
//
// export default function average(...rest) {
//   if (rest.length === 0) {
//     return null;
//   }
//   return _.sum(rest) / rest.length;
// }
//
// console.log(average(0)); // 0
// console.log(average(0, 10)); // 5
// console.log(average(-3, 4, 2, 10)); // 3.25
// console.log(average()); // null

// 6. Оператор Spread (распаковка аргументов)
// export default function convert(...dates) {
//   const formattedDates = [];
//   for (const date of dates) {
//     formattedDates.push(new Date(...date).toDateString());
//   }
//   return formattedDates;
// }
//
// console.log(convert());
// // []
// console.log(convert([1993, 3, 24]));
// // ['Sat Apr 24 1993']
// console.log(convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]));
// // ['Sat Apr 24 1993', 'Fri Sep 12 1997', 'Sun Nov 18 2001']

// 8. Объекты первого класса
const run = (text) => {
  // BEGIN (write your solution here)
  const takeLast = (text, n) => {
    if (text === '' || text.length < n) {
      return null;
    }
    return text.slice(text.length - n).split('').reverse().join('');
  }
  // END

  return takeLast(text, 4);
};

console.log(run(''));       // null
console.log(run('cb'));     // null
console.log(run('power'));  // rewo
console.log(run('hexlet')); // telx

export default run;
