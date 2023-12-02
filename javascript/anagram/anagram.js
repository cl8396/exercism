//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (target, candidates) => {
  let anagramSet = [];
  candidates.forEach((candidate) => {
    anagramSet.push(findSingleAnagram(target, candidate));
  });
  return anagramSet.filter((anagram) => Boolean(anagram));
};

const findSingleAnagram = (target, candidate) => {
  const targetLowerCase = target.toLowerCase();
  const candidateLowerCase = candidate.toLowerCase();

  const anagram = [];
  if (target.length !== candidate.length) {
    return;
  } else {
    candidateLowerCase.split('').forEach((letter, index) => {
      if (targetLowerCase.split('').includes(letter)) {
        anagram.push(candidate[index]);
      }
    });

    return anagram.length === target.length &&
      candidateLowerCase !== targetLowerCase
      ? anagram.join('')
      : null;
  }
};
