// 8. Упаковка и Распаковка (Boxing)
export default function solution(value) {
  const obj = Object();
  obj.valueOf = () => `Value is ${value}`
  return obj;
}

console.log(solution('some value').__proto__ + '');
console.log(solution(1) + ''); // 'Value is 1'
console.log(solution(10) + ''); // 'Value is 10'
console.log(solution('some value') + ''); // 'Value is some value'
