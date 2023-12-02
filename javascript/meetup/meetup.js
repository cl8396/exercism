//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const MONTHS = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

const TEENTH_DAYS = ['13', '14', '15', '16', '17', '18', '19'];

const DAYS = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

export const meetup = (year, month, type, day) => {
  let dayIndex = DAYS.indexOf(day.toLowerCase());

  switch (type) {
    case 'teenth':
      for (let teenthDay of TEENTH_DAYS) {
        let date = new Date(year, month - 1, teenthDay);

        if (date.getDay() === dayIndex) {
          return date;
        }
      }
      break;

    case 'first':
      for (let i = 0; i <= 31; i++) {
        console.log(month - 1);
        let date = new Date(year, month - 1, i);
        if (date.getDay() === dayIndex) {
          return date;
        }
      }
      break;
  }

  /* 


  How to find the first day
  How to find the second day
  How to find the third day
  How to find the x-teenth day


  
  */
};
