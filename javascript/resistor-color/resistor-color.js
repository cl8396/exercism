//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (colorStr) => {
  let value = COLORS.indexOf(colorStr);

  if (value > -1) {
    return value;
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
