//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (str) => {
  let pairedBoolean = true;
  let expectChar = [];

  /* 
  
  iterate through the string
  if you come across a [, {, ( push the corresponding symbol ], }, ) into a stack
  set the isPairedBoolean to false
  continue to iterate
  if you come across another [, {, ( push another corresponding symbol into stack etc
  HOWEVER, if you come across a ], }, ) we pop off the stack and check it against the symbol. if it does not match, the string is incorrectly nested
  if the value does match, set the boolean to true and continue
  */

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      // opening brackets type
      case '[':
        pairedBoolean = false;
        expectChar.push(']');
        break;

      case '{':
        pairedBoolean = false;
        expectChar.push('}');
        break;

      case '(':
        pairedBoolean = false;
        expectChar.push(')');
        break;

      // closing brackets type
      case ']':
        if (expectChar.pop() === ']') {
          pairedBoolean = true;
          break;
        } else {
          expectChar.push(']');
          break;
        }
      case '}':
        if (expectChar.pop() === '}') {
          pairedBoolean = true;
          break;
        } else {
          expectChar.push('}');

          break;
        }
      case ')':
        if (expectChar.pop() === ')') {
          pairedBoolean = true;
          break;
        } else {
          expectChar.push(')');

          break;
        }
    }
  }

  if (expectChar.length > 0) {
    pairedBoolean = false;
  }
  return pairedBoolean;
};
