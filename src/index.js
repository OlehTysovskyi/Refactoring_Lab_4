import Client from './models/Client.js';
import Dish from './models/Dish.js';
import OrderService from './services/OrderService.js';
import OrderDatabaseSingleton from './storage/OrderDatabaseSingleton.js';
import KitchenNotifier from './observers/KithcenNotifier.js';

function main() {
  const client = new Client("Іван");

  const database = OrderDatabaseSingleton.getInstance();
  const notifier = new KitchenNotifier();

  const orderService = new OrderService(database, notifier);

  const order = orderService.createOrder(client);

  const pizza = new Dish("Піца", 150);

  orderService.addDishToOrder(order, pizza);

  console.log(`Замовлення для клієнта ${client.name}:`);
  console.log(order.dishes);
  console.log(`Загальна сума: ${order.getTotalPrice()}`);
}

main();
