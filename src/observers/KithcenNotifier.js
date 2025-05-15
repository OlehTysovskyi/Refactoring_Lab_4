import Notifier from '../interfaces/Notifier.js';

export default class KitchenNotifier extends Notifier {
    notify(order) {
        console.log(`Отримано нове замовлення для клієнта ${order.client.name}`);
    }
}
