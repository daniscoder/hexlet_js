// 10. Класс
export default class Cart {
  items = [];

  addItem(item, count) {
    this.items.push({ item, count });
  }

  getItems() {
    return this.items;
  }

  getCost() {
    return this.items.reduce((acc, item) => item.item.price * item.count + acc, 0);
  }

  getCount() {
    return this.items.reduce((acc, item) => item.count + acc, 0);
  }
}

const cart = new Cart();
cart.addItem({ name: 'car', price: 3 }, 5);
cart.addItem({ name: 'house', price: 10 }, 2);
console.log(cart.getItems().length); // 2
console.log(cart.getCost()); // 35
console.log(cart.getItems());
