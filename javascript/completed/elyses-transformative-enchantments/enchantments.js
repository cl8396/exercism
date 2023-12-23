// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  return deck.map((card) => card * 2);
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  return deck.reduce(
    (accu, card) => {
      if (card === 3) {
        accu.newDeck.push(3);
        accu.newDeck.push(3);
        accu.newDeck.push(3);
      } else {
        accu.newDeck.push(card);
      }

      return accu;
    },
    { newDeck: [] }
  ).newDeck;
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  let start = deck.length / 2 - 1;
  return deck.slice(start, start + 2);
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  let firstCard = deck.splice(0, 1)[0];
  deck.splice(deck.length / 2, 0, firstCard);
  let lastCard = deck.splice(deck.length - 1, 1)[0];
  deck.splice(deck.length / 2, 0, lastCard);

  return deck;
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  return deck.filter((card) => card === 2);
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  return deck.sort((item1, item2) => {
    if (item1 < item2) {
      return -1;
    }
    if (item1 > item2) {
      return 1;
    }
    if (item1 === item2) {
      return 0;
    }
  });
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  return deck.reverse();
}
