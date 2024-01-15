'use strict';


const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Извините, пиццы с названием «${pizzaName}» не существует.`;
    }

    return `Заказ принят, готовится пицца «${pizzaName}».`;
  },
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
};

let pizzaName = "Smoked";
console.log(pizzaPalace.order(pizzaName));

pizzaName = "Eror";
console.log(pizzaPalace.order(pizzaName));