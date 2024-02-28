// 2. Синтаксис
// export default () => {
//   return {
//     files: ['src/objects.js'],
//     config: true,
//   };
// };

// 3. Модификация
// import _ from 'lodash';
//
// export default function normalize(lesson) {
//   lesson.name = _.capitalize(lesson.name);
//   lesson.description = lesson.description.toLowerCase();
// }
//
// const lesson = {
//   name: 'ДеструКТУРИЗАЦИЯ',
//   description: 'каК удивитЬ друзей',
// };
//
// normalize(lesson);
// console.log(lesson);

// 4. Ссылки
// export default function is(object1, object2) {
//   return (
//     object1.name === object2.name &&
//     object1.state === object2.state &&
//     object1.website === object2.website
//   );
// }
//
// const company1 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
// const company2 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
// console.log(is(company1, company2)); // false

// 5. Объекты в действии
// export default function getDomainInfo(url) {
//   const urlSplit = url.split('://');
//   if (urlSplit.length === 1) {
//     urlSplit.unshift('http');
//   }
//   const [scheme, name] = urlSplit;
//   return { scheme, name };
// }
//
// console.log(getDomainInfo('yandex.ru'));
// console.log(getDomainInfo('https://hexlet.io'));
// console.log(getDomainInfo('http://google.com'));

// 6. Проверка существования свойства
// import _ from 'lodash';
//
// export default function countWords(text) {
//   const result = {};
//   for (const word of _.words(text.toLowerCase())) {
//     result[word] = (result[word] ?? 0) + 1;
//   }
//   return result;
// }
//
// console.log(countWords(''));
// const text1 = 'one two     three,two ONE one wow';
// console.log(countWords(text1));
// const text2 = 'another one sentence with strange Words words';
// console.log(countWords(text2));

// 7. Обход свойств объекта
// export default function pick(data, keys) {
//   const result = {};
//   for (const key of keys) {
//     if (Object.hasOwn(data, key)) {
//       result[key] = data[key];
//     }
//   }
//   return result;
// }
//
// const data = {
//   user: 'ubuntu',
//   cores: 4,
//   os: 'linux',
// };
// console.log(pick(data, ['user'])); // { user: 'ubuntu' }
// console.log(pick(data, ['user', 'os'])); // { user: 'ubuntu', os: 'linux' }
// console.log(pick(data, [])); // {}
// // Если такого свойства нет в исходных данных,
// // то оно игнорируется
// console.log(pick(data, ['none', 'cores'])); // { cores: 4 }

// 8. Вложенные объекты
// export default function get(obj, keys) {
//   let data = obj;
//   for (const key of keys) {
//     if (Object.hasOwn(data, key)) {
//       data = data[key];
//     } else {
//       return null;
//     }
//   }
//   return data;
// }
//
// const data = {
//   user: 'ubuntu',
//   hosts: {
//     0: {
//       name: 'web1',
//     },
//     1: {
//       name: 'web2',
//       null: 3,
//       active: false,
//     },
//   },
// };
//
// console.log(get(data, ['undefined'])); // null
// console.log(get(data, ['user'])); // 'ubuntu'
// console.log(get(data, ['user', 'ubuntu'])); // null
// console.log(get(data, ['hosts', 1, 'name'])); // 'web2'
// console.log(get(data, ['hosts', 0])); // { name: 'web1' }
// console.log(get(data, ['hosts', 1, null])); // 3
// console.log(get(data, ['hosts', 1, 'active'])); // false
// console.log(get(data, [])); // { user: 'ubuntu', hosts: { 0: { name: 'web1' }, 1: { name: 'web2', null: 3, active: false }}}

// 9. Слияние
// export default function fill(company, keys, data) {
//   const result = company;
//   const fillKeys = keys.length > 0 ? keys : Object.keys(data);
//   for (const key of fillKeys) {
//     if (Object.hasOwn(data, key)) {
//       result[key] = data[key];
//     }
//   }
//   return result;
// }
//
// const company = {
//   name: null,
//   state: 'moderating',
// };
//
// const data = {
//   name: 'Hexlet',
//   state: 'published',
// };
//
// console.log(fill(company, ['name'], data));
// // console.log(fill(company, [], data));

// 10. Клонирование и копирование
// export default function cloneShallow(data) {
//   const result = {};
//   for (const key in data) {
//     result[key] = data[key];
//   }
//   return result;
// }
//
// const data = {
//   key: 'value',
//   key2: {
//     key: 'innerValue',
//     innerKey: {
//       anotherKey: 'anotherValue',
//     },
//   },
// };
//
// // result имеет такую же структуру, как и data
// console.log(cloneShallow(data));

// 11. Создание новых объектов и spread
// export default function make(name, data = {}) {
//   const result = { name, ...data };
//   if (!Object.hasOwn(result, 'state')) {
//     result.state = 'moderating';
//   }
//   if (!Object.hasOwn(result, 'createdAt')) {
//     result.createdAt = Date.now();
//   }
//   return result;
// }
//
// console.log(make('Hexlet'));
// console.log(make('Hexlet', { website: 'hexlet.io', state: 'published' }));

// 12. Деструктуризация
export default function getSortedNames(users) {
  const names = [];
  for (const { name } of users) {
    names.push(name);
  }
  return names.sort();
}

const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
];

console.log(getSortedNames(users)); // ['Bronn', 'Eiegon', 'Reigar', 'Sansa']
