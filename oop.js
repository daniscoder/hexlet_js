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
// const bind = (obj, fn) => (...args) => fn.apply(obj, args);
//
// const obj = { number: 7 };
// const fn = function fn(number) {
//   return number + this.number;
// };
// const fnWithContext = bind(obj, fn);
//
// // Принимает столько же аргументов сколько и исходная функция
// console.log(fnWithContext(3)); // 8

// 5. Особенности работы this со стрелочными функциями
// const each = (obj, fn) => obj.map((elem) => fn.apply(elem));
//
// const objects = [{ name: 'Karl' }, { name: 'Mia' }];
// each(objects, function callback() {
//   this.name = this.name.split('').reverse().join('');
// });
//
// console.log(objects);
// // [
// //   { name: 'lraK' },
// //   { name: 'aiM' },
// // ];

// 6. Конструктор
// function getX() {
//   return this.x;
// }
//
// function getY() {
//   return this.y;
// }
//
// function Point(x, y) {
//   this.x = x;
//   this.y = y;
//   this.getX = getX;
//   this.getY = getY;
// }
//
// function getBeginPoint() {
//   return this.beginPoint;
// }
//
// function getEndPoint() {
//   return this.endPoint;
// }
//
// function Segment(beginPoint, endPoint) {
//   this.beginPoint = beginPoint;
//   this.endPoint = endPoint;
//   this.getBeginPoint = getBeginPoint;
//   this.getEndPoint = getEndPoint;
// }
//
// function reverse(segment) {
//   return new Segment(
//     new Point(segment.getEndPoint().getX(), segment.getEndPoint().getY()),
//     new Point(segment.getBeginPoint().getX(), segment.getBeginPoint().getY()),
//   );
// }
//
// const beginPoint = new Point(1, 10);
// const endPoint = new Point(11, -3);
//
// const segment = new Segment(beginPoint, endPoint);
// const reversedSegment = reverse(segment);
//
// // прямое обращение к свойствам приведено только в демонстрационных целях
// console.log(segment.beginPoint.x, segment.beginPoint.y, segment.endPoint.x, segment.endPoint.y); // => 1 10 11 -3
//
// console.log(
//   reversedSegment.beginPoint.x,
//   reversedSegment.beginPoint.y,
//   reversedSegment.endPoint.x,
//   reversedSegment.endPoint.y,
// ); // => 11 -3 1 10
//
// console.log(reversedSegment.getBeginPoint().getX());

// 7. Прототипы
// export default function Money(value, currency = 'usd') {
//   this.value = value;
//   this.currency = currency;
// }
//
// Money.prototype.getValue = function getValue() {
//   return this.value;
// };
//
// Money.prototype.getCurrency = function getCurrency() {
//   return this.currency;
// };
//
// Money.prototype.exchangeTo = function exchangeTo(currency) {
//   if (currency === this.currency) {
//     return new Money(this.value, currency);
//   }
//   const rates = {
//     usd: {
//       eur: 0.7,
//     },
//     eur: {
//       usd: 1.2,
//     },
//   };
//   return new Money(this.value * rates[this.getCurrency()][currency], currency);
// };
//
// Money.prototype.add = function add(money) {
//   return new Money(this.value + money.exchangeTo(this.getCurrency()).getValue(), this.currency);
// };
//
// Money.prototype.format = function format() {
//   return Number(this.value).toLocaleString(undefined, {
//     style: 'currency',
//     currency: this.getCurrency(),
//   });
// };
//
// const money1 = new Money(100);
//
// // Возвращает значение
// console.log(money1.getValue()); // 100
// console.log(money1.getCurrency()); // 'usd'
//
// // Конвертирует в указанную валюту и возвращает новое значение
// console.log(money1.exchangeTo('eur').getValue()); // 70
//
// const money2 = new Money(200, 'eur');
// console.log(money2.getValue()); // 200
// const money3 = money2.add(money1);
// console.log(money3.getValue()); // 270
// const money4 = money3.add(money1);
// console.log(money4.getValue()); // 340
//
// console.log(money1.format()); // "$100.00"
// console.log(money2.format()); // "€200.00"
//
// const money5 = new Money(10000);
// console.log(money5.format()); // "$10,000.00"

// 8. Упаковка и Распаковка (Boxing)
// export default function solution(value) {
//   const obj = Object();
//   obj.valueOf = () => `Value is ${value}`
//   return obj;
// }
//
// console.log(solution('some value').__proto__ + '');
// console.log(solution(1) + ''); // 'Value is 1'
// console.log(solution(10) + ''); // 'Value is 10'
// console.log(solution('some value') + ''); // 'Value is some value'

// 9. toString()
// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }
//
// Point.prototype.getX = function getX() {
//   return this.x;
// };
//
// Point.prototype.getY = function getY() {
//   return this.y;
// };
//
// Point.prototype.toString = function toString() {
//   return `(${this.getX()}, ${this.getY()})`
// }
//
// function Segment(beginPoint, endPoint) {
//   this.beginPoint = beginPoint;
//   this.endPoint = endPoint;
// }
//
// Segment.prototype.getBeginPoint = function getBeginPoint() {
//   return this.beginPoint;
// };
//
// Segment.prototype.getEndPoint = function getEndPoint() {
//   return this.endPoint;
// };
//
// Segment.prototype.toString = function toString() {
//   return `[${this.beginPoint}, ${this.endPoint}]`
// }
//
// const point1 = new Point(1, 10);
// const point2 = new Point(11, -3);
// const segment1 = new Segment(point1, point2);
// console.log(segment1.toString()); // => [(1, 10), (11, -3)]
//
// const segment2 = new Segment(point2, point1);
// console.log(segment2.toString()); // => [(11, -3), (1, 10)]

// 10. Класс
// export default class Cart {
//   items = [];
//
//   addItem(item, count) {
//     this.items.push({ item, count });
//   }
//
//   getItems() {
//     return this.items;
//   }
//
//   getCost() {
//     return this.items.reduce((acc, item) => item.item.price * item.count + acc, 0);
//   }
//
//   getCount() {
//     return this.items.reduce((acc, item) => item.count + acc, 0);
//   }
// }
//
// const cart = new Cart();
// cart.addItem({ name: 'car', price: 3 }, 5);
// cart.addItem({ name: 'house', price: 10 }, 2);
// console.log(cart.getItems().length); // 2
// console.log(cart.getCost()); // 35
// console.log(cart.getItems());

// 11. Статические свойства и методы
export default class Time {
  // BEGIN (write your solution here)

  static fromString(time) {
    return new Time(...time.split(':', 2));
  }

  // END

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}

const time1 = new Time(10, 15);
console.log(`The time is ${time1}`); // => 'The time is 10:15'

const time2 = Time.fromString('10:23');
// автоматически вызывается метод toString()
console.log(`The time is ${time2}`); // 'The time is 10:23'
