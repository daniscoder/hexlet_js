// 5. Особенности работы this со стрелочными функциями
const each = (obj, fn) => obj.map((elem) => fn.apply(elem));

const objects = [{ name: 'Karl' }, { name: 'Mia' }];
each(objects, function callback() {
  this.name = this.name.split('').reverse().join('');
});

console.log(objects);
// [
//   { name: 'lraK' },
//   { name: 'aiM' },
// ];
