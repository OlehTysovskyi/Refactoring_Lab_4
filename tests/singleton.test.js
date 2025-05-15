import OrderDatabaseSingleton from '../src/storage/OrderDatabaseSingleton.js';
import Order from '../src/models/Order.js';
import Client from '../src/models/Client.js';
import Dish from '../src/models/Dish.js';

test('OrderDatabaseSingleton зберігає замовлення як сінглтон', () => {
    const db1 = OrderDatabaseSingleton.getInstance();
    const db2 = OrderDatabaseSingleton.getInstance();

    expect(db1).toBe(db2);

    const client = new Client('Олег');
    const dish = new Dish('Бургер', 100);
    const order = new Order(client, [dish]);

    db1.saveOrder(order);
    expect(db2.getOrders()).toContain(order);
});
