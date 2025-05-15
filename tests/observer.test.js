import KitchenNotifier from '../src/observers/KithcenNotifier.js';
import Order from '../src/models/Order.js';
import Client from '../src/models/Client.js';
import Dish from '../src/models/Dish.js';

test('KitchenNotifier сповіщає про нове замовлення', () => {
    const notifier = new KitchenNotifier();

    console.log = jest.fn();

    const client = new Client("Оля");
    const dish = new Dish("Суші", 200);
    const order = new Order(client, [dish]);

    notifier.notify(order);

    expect(console.log).toHaveBeenCalledWith(
        expect.stringContaining("Отримано нове замовлення для клієнта Оля")
    );
});
