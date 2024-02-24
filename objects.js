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
import _ from 'lodash';

export default function countWords(text) {
  const result = {};
  for (const word of _.words(text.toLowerCase())) {
    result[word] = (result[word] ?? 0) + 1;
  }
  return result;
}

console.log(countWords(''));
const text1 = 'one two     three,two ONE one wow';
console.log(countWords(text1));
const text2 = 'another one sentence with strange Words words';
console.log(countWords(text2));
