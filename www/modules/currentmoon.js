var day = new Date().getDate();
var dayWeek;
var phase = Math.PI / 2;
var lightRotTween;
var animation = true;

function map_range(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
// include in the webgl
function light3dchange() {
  if (
    moon.phase[day].phaseName == "Waxing" ||
    moon.phase[day].phaseName == "First quarter" ||
    moon.phase[day].phaseName == "Full moon"
  ) {
    // MAP THE %VALUE on pi ROTATION
    lightRotTween = map_range(
      moon.phase[day].lighting,
      0,
      100,
      -(Math.PI / 2),
      Math.PI / 2
    );
    // animate exept after new moon
    if (animation == true) {
      tweenTheLight(lightRotTween);
    } else {
      tweenNotTheLight(lightRotTween);
      animation = true;
    }
  } else if (
    moon.phase[day].phaseName == "Waning" ||
    moon.phase[day].phaseName == "Last quarter"
  ) {
    // MAP THE %VALUE on pi ROTATION
    lightRotTween = map_range(
      moon.phase[day].lighting,
      0,
      100,
      3 * Math.PI / 2,
      Math.PI / 2
    );
    // animate exept after new moon
    if (animation == true) {
      tweenTheLight(lightRotTween);
    } else {
      tweenNotTheLight(lightRotTween);
      animation = true;
    }
  } else if (moon.phase[day].phaseName == "New Moon") {
    // MAP THE %VALUE on pi ROTATION
    var lightRotTween = map_range(
      moon.phase[day].lighting,
      0,
      100,
      3 * Math.PI / 2,
      Math.PI / 2
    );
    tweenNotTheLight(lightRotTween);
    animation = false;
  }
}

//tween the light value
function tweenTheLight(lightRotTween) {
  var counter = { var: lightRot };
  TweenLite.to(counter, 0.2, {
    var: lightRotTween,
    onUpdate: function() {
      lightRot = counter.var;
    }
    // ease: easeOut
  });
}

// don't tween the light to fix the new moon bug
function tweenNotTheLight(lightRotTween) {
  var counter = { var: lightRot };
  lightRot = lightRotTween;
}

function text() {
  // console.log(moon.phase[day]);
  // day = new Date().getDate()
  dayWeek = moon.phase[day].dayWeek;
  var html = "<div class='moon'>";
  html += "<div>" + moon.nameDay[dayWeek] + "</div>";
  html += "<div>" + day + " " + moon.monthName + " " + moon.year + "</div>";
  html += moon.phase[day].svg;
  html +=
    "<div>" +
    moon.phase[day].phaseName +
    " " +
    Math.round(moon.phase[day].lighting) +
    "%</div>";
  html += "</div>";
  // console.log(moon.phase[day].lighting);
  document.getElementById("ex1").innerHTML = html;
}

function example_1(moon) {
  text();
  // include in the webgl
  light3dchange();
}
