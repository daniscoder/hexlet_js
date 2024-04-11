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
// const run = (text) => {
//   // BEGIN (write your solution here)
//   const takeLast = (text, n) => {
//     if (text === '' || text.length < n) {
//       return null;
//     }
//     return text.slice(text.length - n).split('').reverse().join('');
//   }
//   // END
//
//   return takeLast(text, 4);
// };
//
// console.log(run(''));       // null
// console.log(run('cb'));     // null
// console.log(run('power'));  // rewo
// console.log(run('hexlet')); // telx

// 9. Функции высшего порядка
// const takeOldest = (users, num = 1) => {
//   const compare = (a, b) => {
//     const aParse = Date.parse(a.birthday);
//     const bParse = Date.parse(b.birthday);
//     if (aParse === bParse) {
//       return 0;
//     }
//     return aParse > bParse ? 1 : -1;
//   };
//
//   users.sort(compare);
//   return users.slice(0, num);
// };
//
// const users = [
//   { name: 'Tirion', birthday: 'Nov 19, 1988' },
//   { name: 'Sam', birthday: 'Nov 22, 1999' },
//   { name: 'Rob', birthday: 'Jan 11, 1975' },
//   { name: 'Sansa', birthday: 'Mar 20, 2001' },
//   { name: 'Tisha', birthday: 'Feb 27, 1992' },
//   { name: 'Chris', birthday: 'Dec 25, 1995' },
// ];
//
// console.log(takeOldest(users));

// 10. Отображение (map)
// const getChildren = (users) => users.map((user) => user.children).flat();
//
// const users = [
//   {
//     name: 'Tirion',
//     children: [{ name: 'Mira', birthday: '1983-03-23' }],
//   },
//   { name: 'Bronn', children: [] },
//   {
//     name: 'Sam',
//     children: [
//       { name: 'Aria', birthday: '2012-11-03' },
//       { name: 'Keit', birthday: '1933-05-14' },
//     ],
//   },
//   {
//     name: 'Rob',
//     children: [{ name: 'Tisha', birthday: '2012-11-03' }],
//   },
// ];
//
// console.log(getChildren(users));

// 11. Фильтрация (filter)
// const getGirlFriends = (users) =>
//   users
//     .map((user) => user.friends)
//     .flat()
//     .filter((friend) => friend.gender === 'female');
//
// const users = [
//   {
//     name: 'Tirion',
//     friends: [
//       { name: 'Mira', gender: 'female' },
//       { name: 'Ramsey', gender: 'male' },
//     ],
//   },
//   { name: 'Bronn', friends: [] },
//   {
//     name: 'Sam',
//     friends: [
//       { name: 'Aria', gender: 'female' },
//       { name: 'Keit', gender: 'female' },
//     ],
//   },
//   {
//     name: 'Rob',
//     friends: [{ name: 'Taywin', gender: 'male' }],
//   },
// ];
//
// console.log(getGirlFriends(users));

// 12. Агрегация (reduce)
// const groupBy = (args, mark) => args.reduce((acc, arg) => {
//   if (!Object.hasOwn(acc, arg[mark])) {
//     acc[arg[mark]] = [];
//   }
//   acc[arg[mark]].push(arg);
//   return acc;
// }, {});
//
// const students = [
//   { name: 'Tirion', class: 'B', mark: 2 },
//   { name: 'Keit', class: 'A', mark: 3 },
//   { name: 'Ramsey', class: 'A', mark: 4 },
//   { name: 'Bronn', class: 'B', mark: 3 },
//   { name: 'Sam', class: 'A', mark: 2 },
//   { name: 'Aria', class: 'B', mark: 5 },
//   { name: 'Keit', class: 'B', mark: 4 },
//   { name: 'Rob', class: 'B', mark: 4 },
//   { name: 'Taywin', class: 'A', mark: 5 },
// ];
//
// console.log(groupBy(students, 'class'));

// 13. Сигналы
const freeEmailDomains = ['gmail.com', 'yandex.ru', 'hotmail.com', 'yahoo.com'];

const getFreeDomainsCount = (emails) =>
  emails
    .map((email) => {
      const [, domain] = email.split('@');
      return domain;
    })
    .filter((domain) => freeEmailDomains.includes(domain))
    .reduce((acc, domain) => {
      Object.hasOwn(acc, domain) ? (acc[domain] += 1) : (acc[domain] = 1);
      return acc;
    }, {});

const emails = [
  'info@gmail.com',
  'info@yandex.ru',
  'info@hotmail.com',
  'mk@host.com',
  'support@hexlet.io',
  'key@yandex.ru',
  'sergey@gmail.com',
  'vovan@gmail.com',
  'vovan@hotmail.com',
];

console.log(getFreeDomainsCount(emails));
