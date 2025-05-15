import OrderFactory from '../src/factories/OrderFactory.js';
import Dish from '../src/models/Dish.js';

describe('OrderFactory', () => {
  test('створює замовлення з переданим клієнтом і стравами', () => {
    const client = { name: 'Олег', phone: '123456789' };
    const dishes = [
      new Dish('Піцца', 120),
      new Dish('Сік', 30)
    ];

    const order = OrderFactory.createOrder(client, dishes);

    expect(order.client).toEqual(client);
    expect(order.dishes).toEqual(dishes);
    expect(order.total).toBe(150);
  });

  test('створює замовлення без страв', () => {
    const client = { name: 'Олег', phone: '123456789' };
    const order = OrderFactory.createOrder(client, []);

    expect(order.dishes).toEqual([]);
    expect(order.total).toBe(0);
  });
});
