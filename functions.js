// 2. Чистые функции
function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

export default function sayPrimeOrNot(num) {
  console.log(isPrime(num) ? 'yes' : 'no');
}

sayPrimeOrNot(5); // 'yes'
sayPrimeOrNot(4); // 'no'
