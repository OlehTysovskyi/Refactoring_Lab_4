class OrderDatabaseSingleton {
  constructor() {
    if (OrderDatabaseSingleton.instance) {
      return OrderDatabaseSingleton.instance;
    }
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

module.exports = OrderDatabaseSingleton;
