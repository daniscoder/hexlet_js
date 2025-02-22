// 4. Связывание (bind)
const bind = (obj, fn) => (...args) => fn.apply(obj, args);

const obj = { number: 7 };
const fn = function fn(number) {
  return number + this.number;
};
const fnWithContext = bind(obj, fn);

// Принимает столько же аргументов сколько и исходная функция
console.log(fnWithContext(3)); // 8
