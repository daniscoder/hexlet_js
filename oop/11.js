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
