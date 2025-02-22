// 3. Контекст (This)
function make(numer, denom) {
  return {
    numer,
    denom,
    setNumer(n) {
      this.numer = n;
    },
    setDenom(d) {
      this.denom = d;
    },
    getNumer() {
      return this.numer;
    },
    getDenom() {
      return this.denom;
    },
    toString() {
      return `${this.getNumer()}/${this.getDenom()}`;
    },
    add(rat) {
      return make(
        this.getNumer() * rat.getDenom() + this.getDenom() * rat.getNumer(),
        this.getDenom() * rat.getDenom(),
      );
    },
  };
}

const rat1 = make();
rat1.setNumer(3);
rat1.setDenom(8);
console.log(rat1.getNumer()); // 3
console.log(rat1.getDenom()); // 8

const rat2 = make(10, 3);
console.log(rat2);

// Формула сложения: a / b + c / d = (a * d + b * c) / (b * d)
const rat3 = rat1.add(rat2);
console.log(rat3);
console.log(rat3.toString()); // '89/24'
