import OrderService from '../src/services/OrderService.js';
import OrderDatabaseSingleton from '../src/storage/OrderDatabaseSingleton.js';
import Client from '../src/models/Client.js';
import Dish from '../src/models/Dish.js';

describe('Order через OrderService', () => {
    let orderService;

    beforeEach(() => {
        const dbInstance = OrderDatabaseSingleton.getInstance();
        orderService = new OrderService(dbInstance);
    });

    test('Додавання страви до замовлення через сервіс', () => {
        const client = new Client('Іван');
        const order = orderService.createOrder(client);
        const dish = new Dish('Піца', 150);

        orderService.addDishToOrder(order, dish);

        expect(order.dishes).toContain(dish);
    });

    test('Підрахунок загальної вартості замовлення через сервіс', () => {
        const client = new Client('Марія');
        const order = orderService.createOrder(client);

        orderService.addDishToOrder(order, new Dish('Піца', 150));
        orderService.addDishToOrder(order, new Dish('Салат', 50));

        expect(order.getTotalPrice()).toBe(200);
    });

    test('Порожнє замовлення має суму 0', () => {
        const client = new Client('Петро');
        const order = orderService.createOrder(client);
        expect(order.getTotalPrice()).toBe(0);
    });

    test('Додавання кількох однакових страв у замовлення', () => {
        const client = new Client('Олена');
        const order = orderService.createOrder(client);
        const dish = new Dish('Піца', 150);

        orderService.addDishToOrder(order, dish);
        orderService.addDishToOrder(order, dish);

        expect(order.dishes.length).toBe(2);
    });

    test('getOrders повертає всі замовлення', () => {
        const dbInstance = OrderDatabaseSingleton.getInstance();
        dbInstance.orders = []; // очищуємо перед тестом

        const client1 = new Client('Клієнт 1');
        const client2 = new Client('Клієнт 2');

        const order1 = orderService.createOrder(client1);
        const order2 = orderService.createOrder(client2);

        const allOrders = dbInstance.getOrders();
        expect(allOrders).toContain(order1);
        expect(allOrders).toContain(order2);
        expect(allOrders.length).toBe(2);
    });
});
