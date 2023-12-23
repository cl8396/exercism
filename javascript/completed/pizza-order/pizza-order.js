/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */

const PRICE_OF = {
  Margherita: 7,
  Caprese: 9,
  Formaggio: 10,
  ExtraSauce: 1,
  ExtraToppings: 2,
};
export function pizzaPrice(pizza, ...extras) {
  if (extras.length === 0) {
    return PRICE_OF[pizza];
  } else {
    return PRICE_OF[extras.pop()] + pizzaPrice(pizza, ...extras);
  }
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */

export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce((total, order) => {
    return (total += pizzaPrice(order.pizza, ...order.extras));
  }, 0);
}
