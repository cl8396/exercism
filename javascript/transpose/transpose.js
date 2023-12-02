//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (string) => {
  let result = [];
  string.forEach((col, index) => {
    let row = [];
    col.forEach((letter) => {
      row.push(letter);
    });
  });
  return result;
};
