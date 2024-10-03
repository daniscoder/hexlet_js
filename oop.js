// 2. Инкапсуляция
// const makeUser = ({ id = null, friends = [] } = {}) => ({
//   friends,
//   id,
//   getFriends() {
//     return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
//   },
// });
//
// const getMutualFriends = (user1, user2) => {
//   const user1Ids = user1.getFriends().map((friend) => friend.id);
//   return user2.getFriends().filter((friend) => user1Ids.includes(friend.id));
// };
//
// const user1 = makeUser({
//   friends: [
//     makeUser({
//       id: 1
//     }),
//     makeUser({
//       id: 2
//     }), // общий друг
//   ],
// });
// const user2 = makeUser({
//   friends: [
//     makeUser({
//       id: 2
//     }), // общий друг
//     makeUser({
//       id: 3
//     }),
//   ],
// });
//
// console.log(getMutualFriends(user1, user2)); // [ { friends: [], id: 2, getFriends: [Function: getFriends] } ]

// 3. Контекст (This)
// function make(numer, denom) {
//   return {
//     numer,
//     denom,
//     setNumer(n) {
//       this.numer = n;
//     },
//     setDenom(d) {
//       this.denom = d;
//     },
//     getNumer() {
//       return this.numer;
//     },
//     getDenom() {
//       return this.denom;
//     },
//     toString() {
//       return `${this.getNumer()}/${this.getDenom()}`;
//     },
//     add(rat) {
//       return make(
//         this.getNumer() * rat.getDenom() + this.getDenom() * rat.getNumer(),
//         this.getDenom() * rat.getDenom(),
//       );
//     },
//   };
// }
//
// const rat1 = make();
// rat1.setNumer(3);
// rat1.setDenom(8);
// console.log(rat1.getNumer()); // 3
// console.log(rat1.getDenom()); // 8
//
// const rat2 = make(10, 3);
// console.log(rat2);
//
// // Формула сложения: a / b + c / d = (a * d + b * c) / (b * d)
// const rat3 = rat1.add(rat2);
// console.log(rat3);
// console.log(rat3.toString()); // '89/24'

// 4. Связывание (bind)
const bind = (obj, fn) => (...args) => fn.apply(obj, args);

const obj = { number: 7 };
const fn = function fn(number) {
  return number + this.number;
};
const fnWithContext = bind(obj, fn);

// Принимает столько же аргументов сколько и исходная функция
console.log(fnWithContext(3)); // 8

