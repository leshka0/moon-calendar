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
];

var zodiac5 = [
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
];

var zodiac6 = [
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
];

var zodiac7 = [
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
    day:    17,
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
];

var zodiac8 = [
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
];


var zodiac9 = [
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

function initZodiac() {
  console.log("INIT ZODIAC");

  // + FIRST ONES
	for (var i = 0; i < zodiac1.length; i++) {
    var testTime = zodiac1[i];
    var dist = timeFromBeggining(testTime) * 100;
    zodiac1[i].dist = dist;
    var appendMe =
      "<div class='zodiac' style='margin-left : " +
      zodiac1[i].dist +
      "px'>" +
			icon(zodiac1[i].sign) +
      " </div>";
    $(".next_zodiac").append(appendMe);
    $(".prev_zodiac").append(appendMe);
  }
	for (var i = 0; i < zodiac2.length; i++) {
    var testTime = zodiac2[i];
    var dist = timeFromBeggining(testTime) * 100;
    zodiac2[i].dist = dist
    var appendMe =
      "<div class='zodiac' style='margin-left : " +
      zodiac2[i].dist +
      "px'>" +
			icon(zodiac2[i].sign) +
      " </div>";
    $(".next_zodiac").append(appendMe);
    $(".prev_zodiac").append(appendMe);
  }
	for (var i = 0; i < zodiac3.length; i++) {
    var testTime = zodiac3[i];
    var dist = timeFromBeggining(testTime) * 100;
    zodiac3[i].dist =dist
    var appendMe =
      "<div class='zodiac' style='margin-left : " +
      zodiac3[i].dist +
      "px'>" +
			icon(zodiac3[i].sign) +
      " </div>";
    $(".next_zodiac").append(appendMe);
    $(".prev_zodiac").append(appendMe);
  }
	for (var i = 0; i < zodiac4.length; i++) {
    var testTime = zodiac4[i];
    var dist = timeFromBeggining(testTime) * 100;
    zodiac4[i].dist = dist
    var appendMe =
      "<div class='zodiac' style='margin-left : " +
      zodiac4[i].dist +
      "px'>" +
			icon(zodiac4[i].sign) +
      " </div>";
    $(".next_zodiac").append(appendMe);
    $(".prev_zodiac").append(appendMe);
  }
	for (var i = 0; i < zodiac5.length; i++) {
		var testTime = zodiac5[i];
		var dist = timeFromBeggining(testTime) * 100;
    zodiac5[i].dist = dist;
		var appendMe =
			"<div class='zodiac' style='margin-left : " +
			zodiac5[i].dist +
			"px'>" +
			icon(zodiac5[i].sign) +
			" </div>";
		$(".next_zodiac").append(appendMe);
		$(".prev_zodiac").append(appendMe);
	}

	for (var i = 0; i < zodiac6.length; i++) {
		var testTime = zodiac6[i];
		var dist = timeFromBeggining(testTime) * 100;
    zodiac6[i].dist = dist;
		var appendMe =
			"<div class='zodiac' style='margin-left : " +
			zodiac6[i].dist +
			"px'>" +
			icon(zodiac6[i].sign) +
			" </div>";
		$(".next_zodiac").append(appendMe);
		$(".prev_zodiac").append(appendMe);
	}

	for (var i = 0; i < zodiac7.length; i++) {
		var testTime = zodiac7[i];
		var dist = timeFromBeggining(testTime) * 100;
    zodiac7[i].dist = dist;
		var appendMe =
			"<div class='zodiac' style='margin-left : " +
			zodiac7[i].dist +
			"px'>" +
			icon(zodiac7[i].sign) +
			" </div>";
		$(".next_zodiac").append(appendMe);
		$(".prev_zodiac").append(appendMe);
	}

	for (var i = 0; i < zodiac8.length; i++) {
		var testTime = zodiac8[i];
		var dist = timeFromBeggining(testTime) * 100;
    zodiac8[i].dist = dist;
		var appendMe =
			"<div class='zodiac' style='margin-left : " +
			zodiac8[i].dist +
			"px'>" +
			icon(zodiac8[i].sign) +
			" </div>";
		$(".next_zodiac").append(appendMe);
		$(".prev_zodiac").append(appendMe);
	}

	for (var i = 0; i < zodiac9.length; i++) {
		var testTime = zodiac9[i];
		var dist = timeFromBeggining(testTime) * 100;
    zodiac9[i].dist = dist;
		var appendMe =
			"<div class='zodiac' style='margin-left : " +
			zodiac9[i].dist +
			"px'>" +
			icon(zodiac9[i].sign) +
			" </div>";
		$(".next_zodiac").append(appendMe);
		$(".prev_zodiac").append(appendMe);
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
		// TEST
    // var testTime = test
    // var dist = timeFromBeggining(testTime) * 100;
    // var appendMe =
    //   "<div class='zodiac' style='margin-left : " +
    //   dist +
    //   "px'>" +
    //   icon(test.sign) +
    //   " </div>";
    // $(".next_zodiac").append(appendMe);
    // $(".prev_zodiac").append(appendMe);

}

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
