export default class Order {
  constructor(client) {
    this.client = client;
    this.dishes = [];
  }

  addDish(dish) {
    this.dishes.push(dish);
  }

  getTotalPrice() {
    return this.dishes.reduce((sum, dish) => sum + dish.price, 0);
  }
}
