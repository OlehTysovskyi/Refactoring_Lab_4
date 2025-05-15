import IOrderDatabase from '../interfaces/IOrderDatabase.js';

class OrderDatabaseSingleton extends IOrderDatabase {
  constructor() {
    if (OrderDatabaseSingleton.instance) {
      return OrderDatabaseSingleton.instance;
    }
    super();
    this.orders = [];
    OrderDatabaseSingleton.instance = this;
  }

  saveOrder(order) {
    this.orders.push(order);
  }

  getOrders() {
    return this.orders;
  }

  static getInstance() {
    if (!OrderDatabaseSingleton.instance) {
      OrderDatabaseSingleton.instance = new OrderDatabaseSingleton();
    }
    return OrderDatabaseSingleton.instance;
  }
}

export default OrderDatabaseSingleton;
