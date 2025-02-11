// 3. Конфигурация
// const hasNumber = (string) => string.search(/\d/) !== -1;
//
// export default class PasswordValidator {
//   options = {}
//
//   constructor(obj = {}) {
//     this.options.minLength = Object.hasOwn(obj, 'minLength') ? obj.minLength : 8;
//     this.options.containNumbers = Object.hasOwn(obj, 'containNumbers') ? obj.containNumbers : true;
//   }
//
//   validate(passwd) {
//     const res = {};
//     if (passwd.length < this.options.minLength) {
//       res.minLength = 'too small';
//     }
//     if (this.options.containNumbers && !hasNumber(passwd)) {
//       res.containNumbers = 'should contain at least one number';
//     }
//     return res;
//   }
// }
//
// const validator = new PasswordValidator({ containNumbers: false });
// console.log(validator.validate('qwertya3sdf')); // {}
// console.log(validator.validate('qwerty')); // { minLength: 'too small' }

// 4. Изменяемая конфигурация
// export default class Truncater {
//   static defaultOptions = {
//     separator: '...',
//     length: 200,
//   };
//
//   static getNewOptions(oldOptions, newOptions) {
//     return Object.assign(structuredClone(oldOptions), newOptions);
//   }
//
//   constructor(options) {
//     this.options = this.constructor.getNewOptions(this.constructor.defaultOptions, options);
//   }
//
//   truncate(text, newOptions = {}) {
//     const options = this.constructor.getNewOptions(this.options, newOptions);
//     if (text.length > options.length) {
//       return text.substring(0, options.length).concat(options.separator);
//     }
//     return text;
//   }
// }
//
// // const truncater = new Truncater();
// // console.log(truncater.truncate('one two')); // 'one two'
// // console.log(truncater.truncate('one two', { length: 6 })); // 'one tw...'
//
// const truncater = new Truncater({ length: 6 });
// console.log(truncater.truncate('one two', { separator: '.' })); // 'one tw.'
// console.log(truncater.truncate('one two', { length: 3 })); // 'one...'

// 5. Объекты-Сущности, Объекты-Значения и внедренные объекты
// export default class Url {
//   constructor(url) {
//     this.url = new URL(url);
//   }
//
//   getScheme() {
//     return this.url.protocol.substring(0, this.url.protocol.length - 1);
//   }
//
//   getHostName() {
//     return this.url.hostname;
//   }
//
//   getQueryParams() {
//     return Object.fromEntries(this.url.searchParams);
//   }
//
//   getQueryParam(key, defaultValue = null) {
//     return Object.fromEntries(this.url.searchParams)[key] ?? defaultValue;
//   }
//
//   equals(url) {
//     return this.url.toString() === url.url.toString();
//   }
// }
//
// // const url = new Url('http://yandex.ru:80?key=value&key2=value2');
// // console.log(url.getScheme()); // 'http'
// // console.log(url.getHostName()); // 'yandex.ru'
// // console.log(url.getQueryParams());
// // // {
// // //   key: 'value',
// // //   key2: 'value2',
// // // };
// // console.log(url.getQueryParam('key')); // 'value'
// // // второй параметр - значение по умолчанию
// // console.log(url.getQueryParam('key2', 'lala')); // 'value2'
// // console.log(url.getQueryParam('new', 'ehu')); // 'ehu'
// // console.log(url.getQueryParam('new')); // null
// // console.log(url.equals(new Url('http://yandex.ru:80?key=value&key2=value2'))); // true
// // console.log(url.equals(new Url('http://yandex.ru:80?key=value'))); // false
//
// const yandexUrl = 'http://yandex.ru?key=value&key2=value2';
// const googleUrl = 'https://google.com:80?a=b&c=d&lala=value';
// const url = new Url(googleUrl);
// console.log(url.equals(new Url(googleUrl.replace('80', '443'))))

// 6. Fluent Interface
// function trim(str) {
//   return str.trim().toLowerCase();
// }
//
// export default function normalize(arr) {
//   const result = arr.reduce((acc, city) => {
//     const name = trim(city.name);
//     const country = trim(city.country);
//     !acc[country] ? (acc[country] = [name]) : acc[country].push(name);
//     return acc;
//   }, {});
//
//   return Object.keys(result)
//     .sort()
//     .reduce((acc, country) => {
//       acc[country] = Array.from(new Set(result[country])).sort();
//       return acc;
//     }, {});
// }
//
// const countries = [
//   { name: 'Miami', country: 'usa' },
//   { name: 'samarA', country: '  ruSsiA' },
//   { name: 'Moscow ', country: ' Russia' },
// ];
//
// console.log(normalize(countries));
// // {
// //   russia: [
// //     'moscow',
// //     'samara',
// //   ],
// //   usa: [
// //     'miami',
// //   ],
// // }
//
// const raw = [
//   { name: 'istanbul', country: 'turkey' },
//   { name: 'Moscow ', country: ' Russia' },
//   { name: 'iStanbul', country: 'tUrkey' },
//   { name: 'antalia', country: 'turkeY ' },
//   { name: 'samarA', country: '  ruSsiA' },
//   { name: 'Miami', country: 'usa' },
// ];
// console.log(normalize(raw));
// // {
// //   france: [
// //     'marcel',
// //     'paris',
// //   ],
// //     spain: [
// //   'madrid',
// //   'valencia',
// // ],
// // };

// 7. Сборщики
// import yup from 'yup';
//
// const genres = ['drama', 'horror', 'fantasy', 'classic'];
//
// const schema = yup.object().shape({
//   name: yup.string().required(),
//   author: yup.string().required(),
//   pagesCount: yup.number().positive().integer(),
//   link: yup.string().url().min(1),
//   genre: yup.string().oneOf(genres),
// });
//
// export default function getInvalidBooks(books) {
//   return books.filter((book) => !schema.isValidSync(book));
// }
//
// const books = [{ name: 'book', author: 'author' }, { author: 'author 2' }];
// console.log(getInvalidBooks(books)); // [{ author: 'author 2' }]
//
// const books4 = [
//   {
//     name: 'besi',
//     author: 'dostoevski',
//     pagesCount: 100,
//     genre: 'drama',
//     link: 'https://some.ru',
//   },
//   {
//     name: 'voina i mir',
//     author: 'lev tolstoy',
//     pagesCount: 1000,
//     genre: 'drama',
//     link: '', // не может быть пустой строкой
//   },
// ];
// console.log(getInvalidBooks(books4));

// 8. Прокси
function validate(target, key, protectedProps) {
  if (!(key in target) || new Set(protectedProps).has(key)) {
    throw new Error(`Access to '${key}' is restricted`);
  }
}

export default function protect(user, protectedProps) {
  return new Proxy(user, {
    get(target, key) {
      validate(target, key, protectedProps);
      return target[key];
    },
    set(target, key, value) {
      validate(target, key, protectedProps);
      target[key] = value;
      return true;
    },
  });
}

const user = {
  name: 'John',
  age: 25,
  password: 'secret',
};

const protectedProps = ['password'];

const protectedUser = protect(user, protectedProps);
console.log(protectedUser.name); // John
console.log(protectedUser.age); // 25
// console.log(protectedUser.password); // Error: Access to 'password' is restricted

console.log((protectedUser.name = 'Jane')); // установит значение 'Jane' в свойство 'name'
console.log((protectedUser.password = 'newPassword')); // Error: Access to 'password' is restricted
