//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (input) => {
  let result = [];
  Array.from(input).forEach((letter) => {
    switch (letter) {
      case 'C':
        result.push('G');
        break;
      case 'G':
        result.push('C');
        break;
      case 'T':
        result.push('A');
        break;
      case 'A':
        result.push('U');
        break;
    }
  });
  return result.join('');
};
