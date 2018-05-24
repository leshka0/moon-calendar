var d = new Date();
d.setSeconds(0);
d.setHours(0);
d.setMinutes(0);
d.setDate(1);
d.setMonth(0);
d.setYear(2018);

function checkTime(x) {
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
  // var daydiff = (date - d) / (1000 * 60 * 60 * 24);
  console.log("DATE CHECK :");
  console.log(date);
  // return date.toFixed(4);
}

function timeFromBeggining(x) {
  var date = new Date();
  var hours = x.hour;
  var minutes = x.minute;
  var day = x.day - 1;
  var month = x.month;
  var year = x.year;
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setDate(day);
  date.setMonth(month - 1);
  date.setYear(year);
  var daydiff = (date - d) / (1000 * 60 * 60 * 24);
  // console.log(daydiff.toFixed(4));
  return daydiff.toFixed(4);
}

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

// var zodiac []

var zodiac1 = [
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
    sign:   "sagitarius",
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
    sign:   "pices",
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
];

var zodiac2 = [
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
    sign:   "sagitarius",
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
    sign:   "pices",
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
];

var zodiac3 = [
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
    sign:   "sagitarius",
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
    sign:   "pices",
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
];

var zodiac4 = [
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
    sign:   "sagitarius",
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
    sign:   "pices",
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
];

// Test
var test = {
  sign:   "test",
  hour:   15,
  minute: 53,
  day:    24,
  month:  5,
  year:   2018
};

var zodiacQuantity = 12;

// var zodiac3 = [
//   leo3,
//   virgo3,
//   libra3,
//   scorpio3,
//   sagitarius3,
//   capricorn3,
//   aquarius3,
//   pices3,
//   aries3,
//   taurus3,
//   gemini3,
//   cancer3
// ];

function initZodiac() {
  console.log("INIT ZODIAC");
  // + Test
  // var testTime = test;
  // var dist = timeFromBeggining(testTime) * 100;
  // var appendMe =
  //   "<div class='zodiac' style='margin-left : " +
  //   dist +
  //   "px'>" +
  //   test.sign +
  //   " </div>";
  // // console.log(dist);
  // $(".next_zodiac").append(appendMe);
  // $(".prev_zodiac").append(appendMe);

  // + FIRST ONES
  // for (var i = 0; i < zodiac1.length; i++) {
  //   var testTime = zodiac1[i];
  //   var dist = timeFromBeggining(testTime) * 100;
  //   var appendMe =
  //     "<div class='zodiac' style='margin-left : " +
  //     dist +
  //     "px'>" +
  //     "FIRST" +
  //     " </div>";
  //   $(".next_zodiac").append(appendMe);
  //   $(".prev_zodiac").append(appendMe);
  // }

  // + ZODIAC PLACEMENT
  for (var i = 0; i < zodiac1.length; i++) {
    var compareA = zodiac2[i];
    var compareB = zodiac3[i];
    var frequency = compareTime(compareA, compareB);

    for (var j = 0; j < zodiacQuantity; j++) {
      var distfirst = timeFromBeggining(compareA) * 100;
      var dist = distfirst + frequency * j * 100;
      // console.log(compareA);
      var appendMe =
        "<div class='zodiac' style=' color : blue; margin-left : " +
        dist +
        "px'>" +
        zodiac1[i].sign +
        " </div>";
      $(".next_zodiac").append(appendMe);
      $(".prev_zodiac").append(appendMe);
    }
  }

	// + ZODIAC PLACEMENT 2
  for (var i = 0; i < zodiac1.length; i++) {
    var compareA = zodiac1[i];
    var compareB = zodiac2[i];
    var frequency = compareTime(compareA, compareB);

    for (var j = 0; j < zodiacQuantity; j++) {
      var distfirst = timeFromBeggining(compareA) * 100;
      var dist = distfirst + frequency * j * 100;
      // console.log(compareA);
      var appendMe =
        "<div class='zodiac' style=' color : red; margin-left : " +
        dist +
        "px'>" +
        zodiac1[i].sign +
        " </div>";
      $(".next_zodiac").append(appendMe);
      $(".prev_zodiac").append(appendMe);
    }
  }

	// + ZODIAC PLACEMENT 3
  for (var i = 0; i < zodiac1.length; i++) {
    var compareA = zodiac3[i];
    var compareB = zodiac4[i];
    var frequency = compareTime(compareA, compareB);

    for (var j = 0; j < zodiacQuantity; j++) {
      var distfirst = timeFromBeggining(compareA) * 100;
      var dist = distfirst + frequency * j * 100;
      // console.log(compareA);
      var appendMe =
        "<div class='zodiac' style=' color : yellow; margin-left : " +
        dist +
        "px'>" +
        zodiac1[i].sign +
        " </div>";
      $(".next_zodiac").append(appendMe);
      $(".prev_zodiac").append(appendMe);
    }
  }

}

window.onload = initZodiac();

// test time from beggining
var testTime = test;
timeFromBeggining(testTime);

// compare 2 times
// var compareA = leo1;
// var compareB = leo2;
// console.log("compare :");
// compareTime(compareA, compareB);

// checkTime(zodiac1[3]);
// checkTime(zodiac2[3]);
// checkTime(zodiac3[3]);
// checkTime(zodiac4[3]);
