// 5. Объекты-Сущности, Объекты-Значения и внедренные объекты
export default class Url {
  constructor(url) {
    this.url = new URL(url);
  }

  getScheme() {
    return this.url.protocol.substring(0, this.url.protocol.length - 1);
  }

  getHostName() {
    return this.url.hostname;
  }

  getQueryParams() {
    return Object.fromEntries(this.url.searchParams);
  }

  getQueryParam(key, defaultValue = null) {
    return Object.fromEntries(this.url.searchParams)[key] ?? defaultValue;
  }

  equals(url) {
    return this.url.toString() === url.url.toString();
  }
}

// const url = new Url('http://yandex.ru:80?key=value&key2=value2');
// console.log(url.getScheme()); // 'http'
// console.log(url.getHostName()); // 'yandex.ru'
// console.log(url.getQueryParams());
// // {
// //   key: 'value',
// //   key2: 'value2',
// // };
// console.log(url.getQueryParam('key')); // 'value'
// // второй параметр - значение по умолчанию
// console.log(url.getQueryParam('key2', 'lala')); // 'value2'
// console.log(url.getQueryParam('new', 'ehu')); // 'ehu'
// console.log(url.getQueryParam('new')); // null
// console.log(url.equals(new Url('http://yandex.ru:80?key=value&key2=value2'))); // true
// console.log(url.equals(new Url('http://yandex.ru:80?key=value'))); // false

const yandexUrl = 'http://yandex.ru?key=value&key2=value2';
const googleUrl = 'https://google.com:80?a=b&c=d&lala=value';
const url = new Url(googleUrl);
console.log(url.equals(new Url(googleUrl.replace('80', '443'))))
