export const BASE_URL = 'https://bimaafamily.techiedom.com/lms';
export const getWeekday = dateString => {
  // Create a Date object from the input date string
  const date = new Date(dateString);

  // Array to store the names of the weekdays
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Get the numeric representation of the weekday (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
  const weekdayIndex = date.getDay();

  // Return the corresponding weekday name from the array
  return weekdays[weekdayIndex];
};
