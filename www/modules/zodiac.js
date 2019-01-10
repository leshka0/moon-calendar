var d = new Date();
// d.setSeconds(0);
// d.setHours(0);
// d.setMinutes(0);
d.setDate(1);
d.setMonth(0);
d.setYear(2018);
var date = new Date();
// UNUSED
function checkTime(x) {

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
  // var daydiff = (date - d) / (1000 * 60 * 60 * 24);
  // console.log("DATE CHECK :");
  // console.log(date);
	// console.log(x.minute);
}

function timeFromBeggining(x) {

	// var offcetZodiac=new Date(new Date()).getHours() / 24;
	offcetZodiac = 0 - 0.61;
  var hours = x.hour;
  var minutes = x.minute;
  var day = x.day;
  // x.month = x.month - 1;
  var month = x.month - 1;
  var year = x.year;
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setDate(day);
  date.setMonth(month);
  date.setYear(year);
  var daydiff = (date - d) / (1000 * 60 * 60 * 24) + offcetZodiac;
  // console.log(daydiff.toFixed(4));
	// console.log(x.minute);
  x.dist = daydiff
  return daydiff.toFixed(4);
}

// UNUSED
function compareTime(a, b) {
  var dateA = new Date();
  var hoursA = a.hour;
  var minutesA = a.minute;
  var dayA = a.day - 1;
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
  var dayB = b.day - 1;
  var monthB = b.month;
  var yearB = b.year;
  dateB.setHours(hoursB);
  dateB.setMinutes(minutesB);
  dateB.setDate(dayB);
  dateB.setMonth(monthB - 1);
  dateB.setYear(yearB);

  var daydiff = (dateB - dateA) / (1000 * 60 * 60 * 24);
  // console.log(daydiff.toFixed(4));
  return daydiff.toFixed(4);
}
var newMoonPhases = [
  moons2018 = [
  	  {
        type:   "fullmoon",
  	    hour:   02,
  	    minute: 24,
  	    day:    02,
  	    month:  01,
  	    year:   2018
  	  },
  	  {
        type:   "newmoon",
  			hour:   02,
  		  minute: 17,
  		  day:    17,
  	    month:  01,
  	    year:   2018
  	  },
  	  {
        type:   "fullmoon",
  			hour:   13,
  		  minute: 26,
  		  day:    31,
  	    month:  01,
  	    year:   2018
  	  },
  	  {
        type:   "newmoon",
  			hour:   21,
  		  minute: 05,
  		  day:    15,
  	    month:  02,
  	    year:   2018
  	  },
  	  {
        type:   "fullmoon",
  			hour:   00,
  		  minute: 51,
  		  day:    02,
  	    month:  03,
  	    year:   2018
  	  },
  	  {
        type:   "newmoon",
  			hour:   13,
  		  minute: 11,
  		  day:    17,
  	    month:  03,
  	    year:   2018
  	  },
  	  {
        type:   "fullmoon",
  			hour:   12,
  		  minute: 36,
  		  day:    31,
  	    month:  03,
  	    year:   2018
  	  },
  	  {
        type:   "newmoon",
  			hour:   01,
  		  minute: 57,
  		  day:    16,
  	    month:  04,
  	    year:   2018
  	  },
  	  {
        type:   "fullmoon",
  			hour:   00,
  		  minute: 58,
  		  day:    30,
  	    month:  04,
  	    year:   2018
  	  },
  	  {
        type:   "newmoon",
  			hour:   11,
  		  minute: 47,
  		  day:    15,
  	    month:  05,
  	    year:   2018
  	  },
  	  {
        type:   "fullmoon",
  			hour:   14,
  		  minute: 19,
  		  day:    29,
  	    month:  05,
  	    year:   2018
  	  },
  	  {
        type:   "newmoon",
  			hour:   19,
  		  minute: 43,
  		  day:    13,
  	    month:  06,
  	    year:   2018
  	  },
  	  {
        type:   "fullmoon",
  			hour:   04,
  		  minute: 52,
  		  day:    28,
  	    month:  06,
  	    year:   2018
  	  },
  	  {
        type:   "newmoon",
  			hour:   02,
  		  minute: 47,
  		  day:    13,
  	    month:  07,
  	    year:   2018
  	  },
  	  {
        type:   "fullmoon",
  			hour:   20,
  		  minute: 20,
  		  day:    27,
  	    month:  07,
  	    year:   2018
  	  },
  	  {
        type:   "newmoon",
  			hour:   09,
  		  minute: 57,
  		  day:    11,
  	    month:  08,
  	    year:   2018
  	  },
  	  {
        type:   "fullmoon",
  			hour:   11,
  		  minute: 56,
  		  day:    26,
  	    month:  08,
  	    year:   2018
  	  },
  	  {
        type:   "newmoon",
  			hour:   18,
  		  minute: 01,
  		  day:    09,
  	    month:  09,
  	    year:   2018
  	  },
  	  {
        type:   "fullmoon",
  			hour:   02,
  		  minute: 52,
  		  day:    25,
  	    month:  09,
  	    year:   2018
  	  },
  	  {
        type:   "newmoon",
  			hour:   03,
  		  minute: 46,
  		  day:    09,
  	    month:  10,
  	    year:   2018
  	  },
  	  {
        type:   "fullmoon",
  			hour:   16,
  		  minute: 45,
  		  day:    24,
  	    month:  10,
  	    year:   2018
  	  },
  	  {
        type:   "newmoon",
  			hour:   16,
  		  minute: 01,
  		  day:    07,
  	    month:  11,
  	    year:   2018
  	  },
  	  {
        type:   "fullmoon",
  			hour:   05,
  		  minute: 39,
  		  day:    23,
  	    month:  11,
  	    year:   2018
  	  },
  	  {
        type:   "newmoon",
  			hour:   07,
  		  minute: 20,
  		  day:    07,
  	    month:  12,
  	    year:   2018
  	  },
  	  {
        type:   "fullmoon",
  			hour:   17,
  		  minute: 48,
  		  day:    22,
  	    month:  12,
  	    year:   2018
  	  }
  ],

  moons2018 = [
  	  {
        type:   "newmoon",
  			hour:   01,
  		  minute: 28,
  		  day:    06,
  	    month:  01,
  	    year:   2019
  	  },
  	  {
        type:   "fullmoon",
  			hour:   05,
  		  minute: 15,
  		  day:    21,
  	    month:  01,
  	    year:   2019
  	  },
  	  {
        type:   "newmoon",
  			hour:   21,
  		  minute: 03,
  		  day:    04,
  	    month:  02,
  	    year:   2019
  	  },
  	  {
        type:   "fullmoon",
  			hour:   15,
  		  minute: 53,
  		  day:    19,
  	    month:  02,
  	    year:   2019
  	  },
  	  {
        type:   "newmoon",
  			hour:   16,
  		  minute: 03,
  		  day:    06,
  	    month:  03,
  	    year:   2019
  	  },
  	  {
        type:   "fullmoon",
  			hour:   01,
  		  minute: 42,
  		  day:    21,
  	    month:  03,
  	    year:   2019
  	  },
  	  {
        type:   "newmoon",
  			hour:   08,
  		  minute: 50,
  		  day:    05,
  	    month:  04,
  	    year:   2019
  	  },
  	  {
        type:   "fullmoon",
  			hour:   11,
  		  minute: 12,
  		  day:    19,
  	    month:  04,
  	    year:   2019
  	  },
  	  {
        type:   "newmoon",
  			hour:   22,
  		  minute: 45,
  		  day:    04,
  	    month:  05,
  	    year:   2019
  	  },
  	  {
        type:   "fullmoon",
  			hour:   21,
  		  minute: 11,
  		  day:    18,
  	    month:  05,
  	    year:   2019
  	  },
  	  {
        type:   "newmoon",
  			hour:   10,
  		  minute: 01,
  		  day:    03,
  	    month:  06,
  	    year:   2019
  	  },
  	  {
        type:   "fullmoon",
  			hour:   08,
  		  minute: 30,
  		  day:    17,
  	    month:  06,
  	    year:   2019
  	  },
  	  {
        type:   "newmoon",
  			hour:   19,
  		  minute: 16,
  		  day:    02,
  	    month:  07,
  	    year:   2019
  	  },
  	  {
        type:   "fullmoon",
  			hour:   21,
  		  minute: 38,
  		  day:    16,
  	    month:  07,
  	    year:   2019
  	  },
  	  {
        type:   "newmoon",
  			hour:   03,
  		  minute: 11,
  		  day:    01,
  	    month:  08,
  	    year:   2019
  	  },
  	  {
        type:   "fullmoon",
  			hour:   12,
  		  minute: 29,
  		  day:    15,
  	    month:  08,
  	    year:   2019
  	  },
  	  {
        type:   "newmoon",
  			hour:   10,
  		  minute: 37,
  		  day:    30,
  	    month:  08,
  	    year:   2019
  	  },
  	  {
        type:   "fullmoon",
  			hour:   04,
  		  minute: 32,
  		  day:    14,
  	    month:  09,
  	    year:   2019
  	  },
  	  {
        type:   "newmoon",
  			hour:   18,
  		  minute: 26,
  		  day:    28,
  	    month:  09,
  	    year:   2019
  	  },
  	  {
        type:   "fullmoon",
  			hour:   21,
  		  minute: 07,
  		  day:    13,
  	    month:  10,
  	    year:   2019
  	  },
  	  {
        type:   "newmoon",
  			hour:   03,
  		  minute: 38,
  		  day:    28,
  	    month:  10,
  	    year:   2019
  	  },
  	  {
        type:   "fullmoon",
  			hour:   13,
  		  minute: 34,
  		  day:    12,
  	    month:  11,
  	    year:   2019
  	  },
  	  {
        type:   "newmoon",
  			hour:   15,
  		  minute: 05,
  		  day:    26,
  	    month:  11,
  	    year:   2019
  	  },
  	  {
        type:   "fullmoon",
  			hour:   05,
  		  minute: 12,
  		  day:    12,
  	    month:  12,
  	    year:   2019
  	  },
  	  {
        type:   "newmoon",
  			hour:   05,
  		  minute: 12,
  		  day:    26,
  	    month:  12,
  	    year:   2019
  	  }
  ]
];

var zodiacs = [

zodiac1 = [
  {
    sign:   "leo",
    hour:   07,
    minute: 23,
    day:    03,
    month:  1,
    year:   2018
  },
  {
    sign:   "virgo",
    hour:   08,
    minute: 12,
    day:    05,
    month:  1,
    year:   2018
  },
  {
    sign:   "libra",
    hour:   12,
    minute: 15,
    day:    07,
    month:  1,
    year:   2018
  },
  {
    sign:   "scorpio",
    hour:   20,
    minute: 06,
    day:    09,
    month:  1,
    year:   2018
  },
  {
    sign:   "sagittarius",
    hour:   07,
    minute: 05,
    day:    12,
    month:  1,
    year:   2018
  },
  {
    sign:   "capricorn",
    hour:   19,
    minute: 43,
    day:    14,
    month:  1,
    year:   2018
  },
  {
    sign:   "aquarius",
    hour:   08,
    minute: 32,
    day:    17,
    month:  1,
    year:   2018
  },
  {
    sign:   "pisces",
    hour:   20,
    minute: 27,
    day:    19,
    month:  1,
    year:   2018
  },
  {
    sign:   "aries",
    hour:   06,
    minute: 27,
    day:    22,
    month:  1,
    year:   2018
  },
  {
    sign:   "taurus",
    hour:   13,
    minute: 40,
    day:    24,
    month:  1,
    year:   2018
  },
  {
    sign:   "gemini",
    hour:   17,
    minute: 40,
    day:    26,
    month:  1,
    year:   2018
  },
  {
    sign:   "cancer",
    hour:   18,
    minute: 58,
    day:    28,
    month:  1,
    year:   2018
  }
],

zodiac2 = [
  {
    sign:   "leo",
    hour:   18,
    minute: 53,
    day:    30,
    month:  1,
    year:   2018
  },
  {
    sign:   "virgo",
    hour:   19,
    minute: 13,
    day:    01,
    month:  2,
    year:   2018
  },
  {
    sign:   "libra",
    hour:   21,
    minute: 48,
    day:    03,
    month:  2,
    year:   2018
  },
  {
    sign:   "scorpio",
    hour:   03,
    minute: 57,
    day:    06,
    month:  2,
    year:   2018
  },
  {
    sign:   "sagittarius",
    hour:   13,
    minute: 54,
    day:    08,
    month:  2,
    year:   2018
  },
  {
    sign:   "capricorn",
    hour:   02,
    minute: 21,
    day:    11,
    month:  2,
    year:   2018
  },
  {
    sign:   "aquarius",
    hour:   15,
    minute: 12,
    day:    13,
    month:  2,
    year:   2018
  },
  {
    sign:   "pisces",
    hour:   02,
    minute: 42,
    day:    16,
    month:  2,
    year:   2018
  },
  {
    sign:   "aries",
    hour:   12,
    minute: 05,
    day:    18,
    month:  2,
    year:   2018
  },
  {
    sign:   "taurus",
    hour:   19,
    minute: 12,
    day:    20,
    month:  2,
    year:   2018
  },
  {
    sign:   "gemini",
    hour:   00,
    minute: 08,
    day:    23,
    month:  2,
    year:   2018
  },
  {
    sign:   "cancer",
    hour:   03,
    minute: 06,
    day:    25,
    month:  2,
    year:   2018
  }
],

zodiac3 = [
  {
    sign:   "leo",
    hour:   04,
    minute: 42,
    day:    27,
    month:  2,
    year:   2018
  },
  {
    sign:   "virgo",
    hour:   05,
    minute: 58,
    day:    01,
    month:  3,
    year:   2018
  },
  {
    sign:   "libra",
    hour:   08,
    minute: 21,
    day:    03,
    month:  3,
    year:   2018
  },
  {
    sign:   "scorpio",
    hour:   13,
    minute: 23,
    day:    05,
    month:  3,
    year:   2018
  },
  {
    sign:   "sagittarius",
    hour:   22,
    minute: 03,
    day:    07,
    month:  3,
    year:   2018
  },
  {
    sign:   "capricorn",
    hour:   09,
    minute: 52,
    day:    10,
    month:  3,
    year:   2018
  },
  {
    sign:   "aquarius",
    hour:   22,
    minute: 45,
    day:    12,
    month:  3,
    year:   2018
  },
  {
    sign:   "pisces",
    hour:   10,
    minute: 12,
    day:    15,
    month:  3,
    year:   2018
  },
  {
    sign:   "aries",
    hour:   18,
    minute: 57,
    day:    17,
    month:  3,
    year:   2018
  },
  {
    sign:   "taurus",
    hour:   01,
    minute: 07,
    day:    20,
    month:  3,
    year:   2018
  },
  {
    sign:   "gemini",
    hour:   05,
    minute: 30,
    day:    22,
    month:  3,
    year:   2018
  },
  {
    sign:   "cancer",
    hour:   08,
    minute: 53,
    day:    24,
    month:  3,
    year:   2018
  }
],

zodiac4 = [
  {
    sign:   "leo",
    hour:   11,
    minute: 45,
    day:    26,
    month:  3,
    year:   2018
  },
  {
    sign:   "virgo",
    hour:   14,
    minute: 30,
    day:    28,
    month:  3,
    year:   2018
  },
  {
    sign:   "libra",
    hour:   17,
    minute: 52,
    day:    30,
    month:  3,
    year:   2018
  },
  {
    sign:   "scorpio",
    hour:   22,
    minute: 58,
    day:    01,
    month:  4,
    year:   2018
  },
  {
    sign:   "sagittarius",
    hour:   06,
    minute: 55,
    day:    04,
    month:  4,
    year:   2018
  },
  {
    sign:   "capricorn",
    hour:   18,
    minute: 02,
    day:    06,
    month:  4,
    year:   2018
  },
  {
    sign:   "aquarius",
    hour:   06,
    minute: 51,
    day:    09,
    month:  4,
    year:   2018
  },
  {
    sign:   "pisces",
    hour:   18,
    minute: 40,
    day:    11,
    month:  4,
    year:   2018
  },
  {
    sign:   "aries",
    hour:   03,
    minute: 26,
    day:    14,
    month:  4,
    year:   2018
  },
  {
    sign:   "taurus",
    hour:   08,
    minute: 51,
    day:    16,
    month:  4,
    year:   2018
  },
  {
    sign:   "gemini",
    hour:   12,
    minute: 03,
    day:    18,
    month:  4,
    year:   2018
  },
  {
    sign:   "cancer",
    hour:   14,
    minute: 27,
    day:    20,
    month:  4,
    year:   2018
  }
],

zodiac5 = [
  {
    sign:   "leo",
    hour:   17,
    minute: 09,
    day:    22,
    month:  4,
    year:   2018
  },
  {
    sign:   "virgo",
    hour:   20,
    minute: 40,
    day:    24,
    month:  4,
    year:   2018
  },
  {
    sign:   "libra",
    hour:   01,
    minute: 13,
    day:    27,
    month:  4,
    year:   2018
  },
  {
    sign:   "scorpio",
    hour:   07,
    minute: 12,
    day:    29,
    month:  4,
    year:   2018
  },
  {
    sign:   "sagittarius",
    hour:   15,
    minute: 20,
    day:    01,
    month:  5,
    year:   2018
  },
  {
    sign:   "capricorn",
    hour:   02,
    minute: 07,
    day:    04,
    month:  5,
    year:   2018
  },
  {
    sign:   "aquarius",
    hour:   14,
    minute: 49,
    day:    06,
    month:  5,
    year:   2018
  },
  {
    sign:   "pisces",
    hour:   03,
    minute: 11,
    day:    09,
    month:  5,
    year:   2018
  },
  {
    sign:   "aries",
    hour:   12,
    minute: 41,
    day:    11,
    month:  5,
    year:   2018
  },
  {
    sign:   "taurus",
    hour:   18,
    minute: 16,
    day:    13,
    month:  5,
    year:   2018
  },
  {
    sign:   "gemini",
    hour:   20,
    minute: 44,
    day:    15,
    month:  5,
    year:   2018
  },
  {
    sign:   "cancer",
    hour:   21,
    minute: 48,
    day:    17,
    month:  5,
    year:   2018
  }
],

zodiac6 = [
  {
    sign:   "leo",
    hour:   23,
    minute: 11,
    day:    19,
    month:  5,
    year:   2018
  },
  {
    sign:   "virgo",
    hour:   02,
    minute: 03,
    day:    22,
    month:  5,
    year:   2018
  },
  {
    sign:   "libra",
    hour:   06,
    minute: 52,
    day:    24,
    month:  5,
    year:   2018
  },
  {
    sign:   "scorpio",
    hour:   13,
    minute: 40,
    day:    26,
    month:  5,
    year:   2018
  },
  {
    sign:   "sagittarius",
    hour:   22,
    minute: 29,
    day:    28,
    month:  5,
    year:   2018
  },
  {
    sign:   "capricorn",
    hour:   09,
    minute: 27,
    day:    31,
    month:  5,
    year:   2018
  },
  {
    sign:   "aquarius",
    hour:   22,
    minute: 07,
    day:    02,
    month:  6,
    year:   2018
  },
  {
    sign:   "pisces",
    hour:   10,
    minute: 54,
    day:    05,
    month:  6,
    year:   2018
  },
  {
    sign:   "aries",
    hour:   21,
    minute: 26,
    day:    07,
    month:  6,
    year:   2018
  },
  {
    sign:   "taurus",
    hour:   04,
    minute: 04,
    day:    10,
    month:  6,
    year:   2018
  },
  {
    sign:   "gemini",
    hour:   06,
    minute: 53,
    day:    12,
    month:  6,
    year:   2018
  },
  {
    sign:   "cancer",
    hour:   07,
    minute: 20,
    day:    14,
    month:  6,
    year:   2018
  }
],

zodiac7 = [
  {
    sign:   "leo",
    hour:   07,
    minute: 21,
    day:    16,
    month:  6,
    year:   2018
  },
  {
    sign:   "virgo",
    hour:   08,
    minute: 41,
    day:    18,
    month:  6,
    year:   2018
  },
  {
    sign:   "libra",
    hour:   12,
    minute: 30,
    day:    20,
    month:  6,
    year:   2018
  },
  {
    sign:   "scorpio",
    hour:   19,
    minute: 11,
    day:    22,
    month:  6,
    year:   2018
  },
  {
    sign:   "sagittarius",
    hour:   04,
    minute: 30,
    day:    25,
    month:  6,
    year:   2018
  },
  {
    sign:   "capricorn",
    hour:   15,
    minute: 53,
    day:    27,
    month:  6,
    year:   2018
  },
  {
    sign:   "aquarius",
    hour:   04,
    minute: 37,
    day:    30,
    month:  6,
    year:   2018
  },
  {
    sign:   "pisces",
    hour:   17,
    minute: 31,
    day:    02,
    month:  7,
    year:   2018
  },
  {
    sign:   "aries",
    hour:   04,
    minute: 50,
    day:    05,
    month:  7,
    year:   2018
  },
  {
    sign:   "taurus",
    hour:   12,
    minute: 51,
    day:    07,
    month:  7,
    year:   2018
  },
  {
    sign:   "gemini",
    hour:   16,
    minute: 59,
    day:    09,
    month:  7,
    year:   2018
  },
  {
    sign:   "cancer",
    hour:   17,
    minute: 59,
    day:    11,
    month:  7,
    year:   2018
  }
],

zodiac8 = [
  {
    sign:   "leo",
    hour:   17,
    minute: 31,
    day:    13,
    month:  7,
    year:   2018
  },
  {
    sign:   "virgo",
    hour:   17,
    minute: 31,
    day:    15,
    month:  7,
    year:   2018
  },
  {
    sign:   "libra",
    hour:   19,
    minute: 43,
    day:    17,
    month:  7,
    year:   2018
  },
  {
    sign:   "scorpio",
    hour:   01,
    minute: 13,
    day:    20,
    month:  7,
    year:   2018
  },
  {
    sign:   "sagittarius",
    hour:   10,
    minute: 13,
    day:    22,
    month:  7,
    year:   2018
  },
  {
    sign:   "capricorn",
    hour:   21,
    minute: 49,
    day:    24,
    month:  7,
    year:   2018
  },
  {
    sign:   "aquarius",
    hour:   10,
    minute: 41,
    day:    27,
    month:  7,
    year:   2018
  },
  {
    sign:   "pisces",
    hour:   23,
    minute: 28,
    day:    29,
    month:  7,
    year:   2018
  },
  {
    sign:   "aries",
    hour:   10,
    minute: 55,
    day:    01,
    month:  8,
    year:   2018
  },
  {
    sign:   "taurus",
    hour:   19,
    minute: 51,
    day:    03,
    month:  8,
    year:   2018
  },
  {
    sign:   "gemini",
    hour:   01,
    minute: 32,
    day:    06,
    month:  8,
    year:   2018
  },
  {
    sign:   "cancer",
    hour:   04,
    minute: 01,
    day:    08,
    month:  8,
    year:   2018
  }
],

zodiac9 = [
  {
    sign:   "leo",
    hour:   04,
    minute: 18,
    day:    10,
    month:  8,
    year:   2018
  },
  {
    sign:   "virgo",
    hour:   03,
    minute: 59,
    day:    12,
    month:  8,
    year:   2018
  },
  {
    sign:   "libra",
    hour:   04,
    minute: 57,
    day:    14,
    month:  8,
    year:   2018
  },
  {
    sign:   "scorpio",
    hour:   08,
    minute: 55,
    day:    16,
    month:  8,
    year:   2018
  },
  {
    sign:   "sagittarius",
    hour:   16,
    minute: 45,
    day:    18,
    month:  8,
    year:   2018
  },
  {
    sign:   "capricorn",
    hour:   04,
    minute: 01,
    day:    21,
    month:  8,
    year:   2018
  },
  {
    sign:   "aquarius",
    hour:   16,
    minute: 56,
    day:    23,
    month:  8,
    year:   2018
  },
  {
    sign:   "pisces",
    hour:   05,
    minute: 33,
    day:    26,
    month:  8,
    year:   2018
  },
  {
    sign:   "aries",
    hour:   16,
    minute: 36,
    day:    28,
    month:  8,
    year:   2018
  },
  {
    sign:   "taurus",
    hour:   01,
    minute: 31,
    day:    31,
    month:  8,
    year:   2018
  },
  {
    sign:   "gemini",
    hour:   08,
    minute: 02,
    day:    02,
    month:  9,
    year:   2018
  },
  {
    sign:   "cancer",
    hour:   12,
    minute: 04,
    day:    04,
    month:  9,
    year:   2018
  }
],

zodiac10 = [
  {
    sign:   "leo",
    hour:   14,
    minute: 29,
    day:    8,
    month:  9,
    year:   2018
  },
  {
    sign:   "virgo",
    hour:   14,
    minute: 29,
    day:    08,
    month:  9,
    year:   2018
  },
  {
    sign:   "libra",
    hour:   15,
    minute: 20,
    day:    10,
    month:  9,
    year:   2018
  },
  {
    sign:   "scorpio",
    hour:   18,
    minute: 15,
    day:    12,
    month:  9,
    year:   2018
  },
  {
    sign:   "sagittarius",
    hour:   00,
    minute: 45,
    day:    15,
    month:  9,
    year:   2018
  },
  {
    sign:   "capricorn",
    hour:   11,
    minute: 08,
    day:    17,
    month:  9,
    year:   2018
  },
  {
    sign:   "aquarius",
    hour:   23,
    minute: 52,
    day:    19,
    month:  9,
    year:   2018
  },
  {
    sign:   "pisces",
    hour:   12,
    minute: 27,
    day:    22,
    month:  9,
    year:   2018
  },
  {
    sign:   "aries",
    hour:   23,
    minute: 04,
    day:    24,
    month:  9,
    year:   2018
  },
  {
    sign:   "taurus",
    hour:   07,
    minute: 16,
    day:    27,
    month:  9,
    year:   2018
  },
  {
    sign:   "gemini",
    hour:   13,
    minute: 26,
    day:    29,
    month:  9,
    year:   2018
  },
  {
    sign:   "cancer",
    hour:   18,
    minute: 01,
    day:    01,
    month:  10,
    year:   2018
  }
],

zodiac11 = [
  {
    sign:   "leo",
    hour:   21,
    minute: 12,
    day:    03,
    month:  10,
    year:   2018
  },
  {
    sign:   "virgo",
    hour:   23,
    minute: 19,
    day:    05,
    month:  10,
    year:   2018
  },
  {
    sign:   "libra",
    hour:   01,
    minute: 10,
    day:    08,
    month:  10,
    year:   2018
  },
  {
    sign:   "scorpio",
    hour:   04,
    minute: 10,
    day:    10,
    month:  10,
    year:   2018
  },
  {
    sign:   "sagittarius",
    hour:   09,
    minute: 53,
    day:    12,
    month:  10,
    year:   2018
  },
  {
    sign:   "capricorn",
    hour:   19,
    minute: 17,
    day:    14,
    month:  10,
    year:   2018
  },
  {
    sign:   "aquarius",
    hour:   07,
    minute: 36,
    day:    17,
    month:  10,
    year:   2018
  },
  {
    sign:   "pisces",
    hour:   20,
    minute: 21,
    day:    19,
    month:  10,
    year:   2018
  },
  {
    sign:   "aries",
    hour:   06,
    minute: 59,
    day:    22,
    month:  10,
    year:   2018
  },
  {
    sign:   "taurus",
    hour:   14,
    minute: 34,
    day:    24,
    month:  10,
    year:   2018
  },
  {
    sign:   "gemini",
    hour:   19,
    minute: 41,
    day:    26,
    month:  10,
    year:   2018
  },
  {
    sign:   "cancer",
    hour:   23,
    minute: 27,
    day:    28,
    month:  10,
    year:   2018
  }
],

zodiac12 = [
  {
    sign:   "leo",
    hour:   02,
    minute: 42,
    day:    31,
    month:  10,
    year:   2018
  },
  {
    sign:   "virgo",
    hour:   05,
    minute: 48,
    day:    02,
    month:  11,
    year:   2018
  },
  {
    sign:   "libra",
    hour:   09,
    minute: 01,
    day:    04,
    month:  11,
    year:   2018
  },
  {
    sign:   "scorpio",
    hour:   13,
    minute: 03,
    day:    06,
    month:  11,
    year:   2018
  },
  {
    sign:   "sagittarius",
    hour:   19,
    minute: 00,
    day:    08,
    month:  11,
    year:   2018
  },
  {
    sign:   "capricorn",
    hour:   03,
    minute: 55,
    day:    11,
    month:  11,
    year:   2018
  },
  {
    sign:   "aquarius",
    hour:   15,
    minute: 46,
    day:    13,
    month:  11,
    year:   2018
  },
  {
    sign:   "pisces",
    hour:   04,
    minute: 42,
    day:    16,
    month:  11,
    year:   2018
  },
  {
    sign:   "aries",
    hour:   15,
    minute: 56,
    day:    18,
    month:  11,
    year:   2018
  },
  {
    sign:   "taurus",
    hour:   23,
    minute: 43,
    day:    20,
    month:  11,
    year:   2018
  },
  {
    sign:   "gemini",
    hour:   04,
    minute: 11,
    day:    23,
    month:  11,
    year:   2018
  },
  {
    sign:   "cancer",
    hour:   06,
    minute: 38,
    day:    25,
    month:  11,
    year:   2018
  }
],

zodiac13 = [
  {
    sign:   "leo",
    hour:   08,
    minute: 35,
    day:    27,
    month:  11,
    year:   2018
  },
  {
    sign:   "virgo",
    hour:   11,
    minute: 08,
    day:    29,
    month:  11,
    year:   2018
  },
  {
    sign:   "libra",
    hour:   14,
    minute: 49,
    day:    01,
    month:  12,
    year:   2018
  },
  {
    sign:   "scorpio",
    hour:   19,
    minute: 55,
    day:    03,
    month:  12,
    year:   2018
  },
  {
    sign:   "sagittarius",
    hour:   02,
    minute: 49,
    day:    06,
    month:  12,
    year:   2018
  },
  {
    sign:   "capricorn",
    hour:   12,
    minute: 02,
    day:    08,
    month:  12,
    year:   2018
  },
  {
    sign:   "aquarius",
    hour:   23,
    minute: 40,
    day:    10,
    month:  12,
    year:   2018
  },
  {
    sign:   "pisces",
    hour:   12,
    minute: 40,
    day:    13,
    month:  12,
    year:   2018
  },
  {
    sign:   "aries",
    hour:   00,
    minute: 44,
    day:    16,
    month:  12,
    year:   2018
  },
  {
    sign:   "taurus",
    hour:   09,
    minute: 38,
    day:    20,
    month:  12,
    year:   2018
  },
  {
    sign:   "gemini",
    hour:   14,
    minute: 35,
    day:    20,
    month:  12,
    year:   2018
  },
  {
    sign:   "cancer",
    hour:   16,
    minute: 28,
    day:    22,
    month:  12,
    year:   2018
  }
],

zodiac14 = [
  {
    sign:   "leo",
    hour:   16,
    minute: 59,
    day:    24,
    month:  12,
    year:   2018
  },
  {
    sign:   "virgo",
    hour:   17,
    minute: 50,
    day:    26,
    month:  12,
    year:   2018
  },
  {
    sign:   "libra",
    hour:   20,
    minute: 23,
    day:    28,
    month:  12,
    year:   2018
  },
  {
    sign:   "scorpio",
    hour:   01,
    minute: 23,
    day:    31,
    month:  12,
    year:   2018
  },
  {
    sign:   "sagittarius",
    hour:   08,
    minute: 59,
    day:    02,
    month:  01,
    year:   2019
  },
  {
    sign:   "capricorn",
    hour:   18,
    minute: 55,
    day:    04,
    month:  01,
    year:   2019
  },
  {
    sign:   "aquarius",
    hour:   06,
    minute: 46,
    day:    07,
    month:  01,
    year:   2019
  },
  {
    sign:   "pisces",
    hour:   19,
    minute: 44,
    day:    09,
    month:  01,
    year:   2019
  },
  {
    sign:   "aries",
    hour:   08,
    minute: 18,
    day:    12,
    month:  01,
    year:   2019
  },
  {
    sign:   "taurus",
    hour:   18,
    minute: 32,
    day:    14,
    month:  01,
    year:   2019
  },
  {
    sign:   "gemini",
    hour:   01,
    minute: 01,
    day:    17,
    month:  01,
    year:   2019
  },
  {
    sign:   "cancer",
    hour:   03,
    minute: 44,
    day:    19,
    month:  01,
    year:   2019
  }
],

zodiac15 = [
  {
    sign:   "leo",
    hour:   03,
    minute: 55,
    day:    21,
    month:  01,
    year:   2019
  },
  {
    sign:   "virgo",
    hour:   03,
    minute: 22,
    day:    23,
    month:  01,
    year:   2019
  },
  {
    sign:   "libra",
    hour:   04,
    minute: 03,
    day:    25,
    month:  01,
    year:   2019
  },
  {
    sign:   "scorpio",
    hour:   07,
    minute: 31,
    day:    27,
    month:  01,
    year:   2019
  },
  {
    sign:   "sagittarius",
    hour:   14,
    minute: 33,
    day:    30,
    month:  01,
    year:   2019
  },
  {
    sign:   "capricorn",
    hour:   00,
    minute: 48,
    day:    01,
    month:  02,
    year:   2019
  },
  {
    sign:   "aquarius",
    hour:   13,
    minute: 04,
    day:    04,
    month:  02,
    year:   2019
  },
  {
    sign:   "pisces",
    hour:   02,
    minute: 02,
    day:    06,
    month:  02,
    year:   2019
  },
  {
    sign:   "aries",
    hour:   14,
    minute: 35,
    day:    08,
    month:  02,
    year:   2019
  },
  {
    sign:   "taurus",
    hour:   01,
    minute: 29,
    day:    11,
    month:  02,
    year:   2019
  },
  {
    sign:   "gemini",
    hour:   09,
    minute: 32,
    day:    13,
    month:  02,
    year:   2019
  },
  {
    sign:   "cancer",
    hour:   14,
    minute: 03,
    day:    15,
    month:  02,
    year:   2019
  }
]


];

// Test
// var test = {
//   sign:   "test",
//   hour:   12,
//   minute: 00,
//   day:    27,
//   month:  5,
//   year:   2018
// };

// var zodiacQuantity = 12;

function initMoons() {

  for (var j = 0; j < newMoonPhases.length; j++) {
    for (var i = 0; i < newMoonPhases[j].length; i++) {
      var testTime = newMoonPhases[j][i];
      var dist = timeFromBeggining(testTime) * 100;
      newMoonPhases[j][i].dist = dist;
      console.log(testTime);
      var appendMoon =
        "<div class='newMoonPhases' style='margin-left : " +
        newMoonPhases[j][i].dist +
        "px'>" +
        iconMoon(newMoonPhases[j][i].type) +
        " </div>";
      $(".next_zodiac").append(appendMoon);
      $(".prev_zodiac").append(appendMoon);
    }
  }

  function iconMoon(name){
		switch(name){
      case "fullmoon":
				varImg = "<img name='fullMoon' class='icoZodiac' src='img/moonPhases/FM.png' style='border-top: 23px solid transparent;'>"
				return varImg
	    break;
      case "newmoon":
				varImg = "<img name='fullMoon' class='icoZodiac' src='img/moonPhases/NM.png' style='border-top: 23px solid transparent;'>"
				return varImg
	    break;
	    // default:
			// 	varImg = "<img name='default' class='icoZodiac' src='img/zodiac/smalls/default.svg'/>"
			// 	return varImg
		}
	}

}

  function initZodiac() {

    for (var j = 0; j < zodiacs.length; j++) {
    	for (var i = 0; i < zodiacs[j].length; i++) {
        var testTime = zodiacs[j][i];
        var dist = timeFromBeggining(testTime) * 100;
        zodiacs[j][i].dist = dist;
        var appendMe =
          "<div class='zodiac' style='margin-left : " +
          zodiacs[j][i].dist +
          "px'>" +
    			icon(zodiacs[j][i].sign) +
          " </div>";
        $(".next_zodiac").append(appendMe);
        $(".prev_zodiac").append(appendMe);
      }
    }

	function icon(name){
		switch(name){
			case "leo":
				varImg = "<img name='leo' class='icoZodiac' src='img/zodiac/smalls/leo.svg'/>"
				return varImg
	    break;
			case "virgo":
				varImg = "<img name='virgo' class='icoZodiac' src='img/zodiac/smalls/virgo.svg'/>"
				return varImg
	    break;
			case "libra":
				varImg = "<img name='libra' class='icoZodiac' src='img/zodiac/smalls/libra.svg'/>"
				return varImg
	    break;
			case "scorpio":
				varImg = "<img name='scorpio' class='icoZodiac' src='img/zodiac/smalls/scorpio.svg'/>"
				return varImg
	    break;
			case "sagittarius":
				varImg = "<img name='sagittarius' class='icoZodiac' src='img/zodiac/smalls/sagittarius.svg'/>"
				return varImg
	    break;
			case "capricorn":
				varImg = "<img name='capricorn' class='icoZodiac' src='img/zodiac/smalls/capricorn.svg'/>"
				return varImg
	    break;
			case "aquarius":
				varImg = "<img name='aquarius' class='icoZodiac' src='img/zodiac/smalls/aquarius.svg'/>"
				return varImg
	    break;
			case "pisces":
				varImg = "<img name='pisces' class='icoZodiac' src='img/zodiac/smalls/pisces.svg'/>"
				return varImg
	    break;
			case "aries":
				varImg = "<img name='aries' class='icoZodiac' src='img/zodiac/smalls/aries.svg'/>"
				return varImg
	    break;
			case "taurus":
				varImg = "<img name='taurus' class='icoZodiac' src='img/zodiac/smalls/taurus.svg'/>"
				return varImg
	    break;
			case "gemini":
				varImg = "<img name='gemini' class='icoZodiac' src='img/zodiac/smalls/gemini.svg'/>"
				return varImg
	    break;
			case "cancer":
				varImg = "<img name='cancer' class='icoZodiac' src='img/zodiac/smalls/cancer.svg'/>"
				return varImg
	    break;

	    default:
				varImg = "<img name='default' class='icoZodiac' src='img/zodiac/smalls/default.svg'/>"
				return varImg
		}
	}

}

window.onload = initMoons();
window.onload = initZodiac();

// test time from beggining
// var testTime = test;
// timeFromBeggining(testTime);

// compare 2 times
// var compareA = leo1;
// var compareB = leo2;
// console.log("compare :");
// compareTime(compareA, compareB);

// checkTime(zodiac1[3]);
// checkTime(zodiac2[3]);
// checkTime(zodiac3[3]);
// checkTime(zodiac4[3]);
