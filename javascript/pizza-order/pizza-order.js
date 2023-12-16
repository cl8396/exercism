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
export function pizzaPrice(pizza, ...extras) {
  let cost = 0;

  switch (pizza) {
    case 'Margherita':
      cost += 7;
      break;
    case 'Caprese':
      cost += 9;
      break;
    case 'Formaggio':
      cost += 10;
      break;
  }

  cost += addExtras(extras);

  return cost;
}

function addExtras(extras) {
  let total = 0;

  let extra = extras.pop();

  switch (extra) {
    case 'ExtraSauce':
      total += 1;
      break;
    case 'ExtraToppings':
      total += 2;
      break;
  }

  if (extras.length === 0) {
    return total;
  }

  return (total += addExtras(extras));
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
