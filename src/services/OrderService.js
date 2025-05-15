import Order from '../models/Order.js';

class OrderService {
  constructor(orderDatabase, notifier) {
    this.database = orderDatabase;
    this.notifier = notifier;
  }

  addDishToOrder(order, dish) {
    order.addDish(dish);
    this.database.saveOrder(order);
  }

  createOrder(client) {
    const order = new Order(client);
    this.database.saveOrder(order);
    if (this.notifier) {
      this.notifier.notify(order);
    }
    return order;
  }
}

export default OrderService;
