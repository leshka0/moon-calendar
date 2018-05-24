var d = new Date();
d.setSeconds(0);
d.setHours(0);
d.setMinutes(0);
d.setDate(1);
d.setMonth(0);
d.setYear(2018);

function timeFromBeggining(x) {
  var date = new Date();
  var hours = x.hour;
  var minutes = x.minute;
  var day = x.day;
  var month = x.month;
  var year = x.year;
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setDate(day);
  date.setMonth(month - 1);
  date.setYear(year);
  var daydiff = (date - d) / (1000 * 60 * 60 * 24);
  console.log(daydiff.toFixed(4));
}

function compareTime(a, b) {
  var dateA = new Date();
  var hoursA = a.hour;
  var minutesA = a.minute;
  var dayA = a.day;
  var monthA = a.month;
  var yearA = a.year;
  dateA.setHours(hoursA);
  dateA.setMinutes(minutesA);
  dateA.setDate(dayA);
  dateA.setMonth(monthA - 1);
  dateA.setYear(yearA);

  var dateB = new Date();
  var hoursB = b.hour;
  var minutesB = b.minute;
  var dayB = b.day;
  var monthB = b.month;
  var yearB = b.year;
  dateB.setHours(hoursB);
  dateB.setMinutes(minutesB);
  dateB.setDate(dayB);
  dateB.setMonth(monthB - 1);
  dateB.setYear(yearB);

  var daydiff = (dateB - dateA) / (1000 * 60 * 60 * 24);
  console.log(daydiff.toFixed(4));
}
// LEO1
var leo1 = {
  hour: 07,
  minute: 23,
  day: 03,
  month: 1,
  year: 2018
};
// VIRGO
var virgo1 = {
  hour: 08,
  minute: 12,
  day: 05,
  month: 1,
  year: 2018
};
// LIBRA
var libra1 = {
  hour: 12,
  minute: 15,
  day: 07,
  month: 1,
  year: 2018
};
// SCORPIO
var scorpio1 = {
  hour: 20,
  minute: 06,
  day: 09,
  month: 1,
  year: 2018
};
// SAGITARIUS
var sagitarius1 = {
  hour: 07,
  minute: 05,
  day: 12,
  month: 1,
  year: 2018
};
// CAPRICORN
var capricorn1 = {
  hour: 19,
  minute: 43,
  day: 14,
  month: 1,
  year: 2018
};
// AQUARIUS
var aquarius1 = {
  hour: 08,
  minute: 32,
  day: 17,
  month: 1,
  year: 2018
};
// PICES
var pices1 = {
  hour: 20,
  minute: 27,
  day: 19,
  month: 1,
  year: 2018
};
// Aries
var aries1 = {
  hour: 06,
  minute: 27,
  day: 22,
  month: 1,
  year: 2018
};
// Taurus
var taurus1 = {
  hour: 13,
  minute: 40,
  day: 24,
  month: 1,
  year: 2018
};
// Gemini
var gemini1 = {
  hour: 17,
  minute: 40,
  day: 26,
  month: 1,
  year: 2018
};
// Cancer
var cancer1 = {
  hour: 18,
  minute: 58,
  day: 28,
  month: 1,
  year: 2018
};

// leo
var leo2 = {
  hour: 18,
  minute: 53,
  day: 30,
  month: 1,
  year: 2018
};
// VIRGO
var virgo2 = {
  hour: 19,
  minute: 13,
  day: 01,
  month: 2,
  year: 2018
};
// LIBRA
var libra2 = {
  hour: 21,
  minute: 48,
  day: 03,
  month: 2,
  year: 2018
};
// SCORPIO
var scorpio2 = {
  hour: 03,
  minute: 57,
  day: 06,
  month: 2,
  year: 2018
};
// SAGITARIUS
var sagitarius2 = {
  hour: 13,
  minute: 54,
  day: 08,
  month: 2,
  year: 2018
};
// CAPRICORN
var capricorn2 = {
  hour: 02,
  minute: 21,
  day: 11,
  month: 2,
  year: 2018
};
// AQUARIUS
var aquarius2 = {
  hour: 15,
  minute: 12,
  day: 13,
  month: 2,
  year: 2018
};
// PICES
var pices2 = {
  hour: 02,
  minute: 42,
  day: 16,
  month: 2,
  year: 2018
};
// Aries
var aries2 = {
  hour: 12,
  minute: 05,
  day: 18,
  month: 2,
  year: 2018
};
// Taurus
var taurus2 = {
  hour: 19,
  minute: 12,
  day: 20,
  month: 2,
  year: 2018
};
// Gemini
var gemini2 = {
  hour: 00,
  minute: 08,
  day: 23,
  month: 2,
  year: 2018
};
// Cancer
var cancer2 = {
  hour: 03,
  minute: 06,
  day: 25,
  month: 2,
  year: 2018
};

// leo
var leo3 = {
  hour: 04,
  minute: 42,
  day: 27,
  month: 2,
  year: 2018
};
// VIRGO
var virgo3 = {
  hour: 05,
  minute: 58,
  day: 01,
  month: 3,
  year: 2018
};
// LIBRA
var libra3 = {
  hour: 08,
  minute: 21,
  day: 03,
  month: 3,
  year: 2018
};
// SCORPIO
var scorpio3 = {
  hour: 13,
  minute: 23,
  day: 05,
  month: 3,
  year: 2018
};
// SAGITARIUS
var sagitarius3 = {
  hour: 22,
  minute: 03,
  day: 07,
  month: 3,
  year: 2018
};
// CAPRICORN
var capricorn3 = {
  hour: 09,
  minute: 52,
  day: 10,
  month: 3,
  year: 2018
};
// AQUARIUS
var aquarius3 = {
  hour: 22,
  minute: 45,
  day: 12,
  month: 3,
  year: 2018
};
// PICES
var pices3 = {
  hour: 10,
  minute: 12,
  day: 15,
  month: 3,
  year: 2018
};
// Aries
var aries3 = {
  hour: 18,
  minute: 57,
  day: 17,
  month: 3,
  year: 2018
};
// Taurus
var taurus3 = {
  hour: 01,
  minute: 07,
  day: 20,
  month: 3,
  year: 2018
};
// Gemini
var gemini3 = {
  hour: 05,
  minute: 30,
  day: 22,
  month: 3,
  year: 2018
};
// Cancer
var cancer3 = {
  hour: 08,
  minute: 53,
  day: 24,
  month: 3,
  year: 2018
};

// Test
var test = {
  hour: 15,
  minute: 53,
  day: 14,
  month: 5,
  year: 2018
};

// test time from beggining
var testTime = cancer2;
timeFromBeggining(testTime);

// compare 2 times
var compareA = leo1;
var compareB = leo2;
console.log("compare :");
compareTime(compareA, compareB);
// compare 2 times
var compareA = leo2;
var compareB = leo3;
console.log("compare :");
compareTime(compareA, compareB);
// compare 2 times
var compareA = taurus1;
var compareB = taurus2;
console.log("compare :");
compareTime(compareA, compareB);
// compare 2 times
var compareA = taurus2;
var compareB = taurus3;
console.log("compare :");
compareTime(compareA, compareB);
// compare 2 times
var compareA = libra1;
var compareB = libra2;
console.log("compare :");
compareTime(compareA, compareB);
// compare 2 times
var compareA = libra2;
var compareB = libra3;
console.log("compare :");
compareTime(compareA, compareB);
