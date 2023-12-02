//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const GIGASECOND_IN_MS = 1e12;

export const gigasecond = (date) => {
  const ms = date.getTime();
  const newDate = new Date(ms + GIGASECOND_IN_MS);
  return newDate;
};
