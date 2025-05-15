export default class Order {
  constructor(client, dishes = []) {
    this.client = client;
    this.dishes = dishes;
    this.total = this.calculateTotal();
  }

  addDish(dish) {
    this.dishes.push(dish);
    this.total = this.calculateTotal();
  }

  calculateTotal() {
    return this.dishes.reduce((sum, dish) => sum + dish.price, 0);
  }

  getTotalPrice() {
    return this.total;
  }
}

