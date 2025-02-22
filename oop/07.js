// 7. Прототипы
export default function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money.prototype.getValue = function getValue() {
  return this.value;
};

Money.prototype.getCurrency = function getCurrency() {
  return this.currency;
};

Money.prototype.exchangeTo = function exchangeTo(currency) {
  if (currency === this.currency) {
    return new Money(this.value, currency);
  }
  const rates = {
    usd: {
      eur: 0.7,
    },
    eur: {
      usd: 1.2,
    },
  };
  return new Money(this.value * rates[this.getCurrency()][currency], currency);
};

Money.prototype.add = function add(money) {
  return new Money(this.value + money.exchangeTo(this.getCurrency()).getValue(), this.currency);
};

Money.prototype.format = function format() {
  return Number(this.value).toLocaleString(undefined, {
    style: 'currency',
    currency: this.getCurrency(),
  });
};

const money1 = new Money(100);

// Возвращает значение
console.log(money1.getValue()); // 100
console.log(money1.getCurrency()); // 'usd'

// Конвертирует в указанную валюту и возвращает новое значение
console.log(money1.exchangeTo('eur').getValue()); // 70

const money2 = new Money(200, 'eur');
console.log(money2.getValue()); // 200
const money3 = money2.add(money1);
console.log(money3.getValue()); // 270
const money4 = money3.add(money1);
console.log(money4.getValue()); // 340

console.log(money1.format()); // "$100.00"
console.log(money2.format()); // "€200.00"

const money5 = new Money(10000);
console.log(money5.format()); // "$10,000.00"
