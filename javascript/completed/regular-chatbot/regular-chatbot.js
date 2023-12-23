// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  const reg = /chatbot/i;

  let result = command.match(reg);

  return result.index === 0;
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  const reg = new RegExp('emoji[0-9]{4}', 'g');

  return message.replace(reg, '');
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  let reg = /\(\+\d\d\) \d{3}-\d{3}-\d{3}/g;

  if (reg.test(number)) {
    return `Thanks! You can now download me to your phone.`;
  } else {
    return `Oops, it seems like I can't reach out to ${number}`;
  }
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  const reg = /\w*\.\w*/g;

  return userInput.match(reg);
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  const reg = /(\w+), (\w+)/g;

  return fullName.replace(reg, function (match, lastName, firstName) {
    return `Nice to meet you, ${firstName} ${lastName}`;
  });
}
