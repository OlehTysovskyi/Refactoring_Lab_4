class Menu {
  constructor() {
    this.dishes = [];
  }

  addDish(dish) {
    this.dishes.push(dish);
  }

  containsDish(dish) {
    return this.dishes.includes(dish);
  }

  getAllDishes() {
    return this.dishes;
  }
}

module.exports = Menu;
