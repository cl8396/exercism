//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colorStr) => {
  let value1 = COLORS.indexOf(colorStr[0]);
  let value2 = COLORS.indexOf(colorStr[1]);

  const result = Number([value1, value2].join(''));

  if (result > -1) {
    return result;
  } else {
    throw new Error('not a resistor color');
  }
};

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];
