import Order from '../models/Order.js';

export default class OrderFactory {
  static createOrder(client, dishes) {
    return new Order(client, dishes);
  }
}
