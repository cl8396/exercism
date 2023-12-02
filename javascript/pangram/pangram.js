//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const isPangram = (sentence) => {
  let sentenceArr = sentence.toLowerCase().split('');

  return LETTERS.every((letter) => {
    return sentenceArr.includes(letter);
  });
};
