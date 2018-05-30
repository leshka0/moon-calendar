<!-- CSS -->
<style>
  .dragme {
    z-index: 10;
    position: fixed;
    top: 20vh;
    left:0;
    right: 0;
    bottom: 20vh;
    cursor: grab;
    /* background-color: rgba(255, 255, 50, 0.05); */
  }
  .dropme {
    z-index: 10;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    cursor: none;
  }
</style>

<!-- HTML -->
<div class="dragme"></div>

<!-- JAVASCRIPT -->
<script type="text/javascript">
var isDrag = false
var velocity =0;
var originX =0;
var differenceX =0;
var nextPosition =0;
var prevPosition =0;
var nextPosition_moon =0;
var prevPosition_moon =0;
var newnextPosition_moon =0;
var newnextPosition_moon =0;
var currentPosition =0;
var offcet=new Date(new Date()).getHours() / 24;
// console.log("TEST " + offcet);
var currentDateOffcet =0
var currentMonthOffcet =0
var calculDate =0
var calculMonth =1
var originCurrentPosition = -(range-1)*20;
var originMonthPosition = -(rangeMonth-1)*20;
var month = new Date().getMonth()+1;
var velocityInterval;
var updateZodiac
function initDrag(){


  var soundDrag = new Howl({
    volume: .8,
    src: ['sounds/drag.ogg']
    // src: ['drag.ogg', 'sound.mp3']
  });
  var soundDate = new Howl({
    src: ['sounds/date.ogg']
    // src: ['drag.ogg', 'sound.mp3']
  });


  // CLICK
  $(".dragme").mousedown(function(e) {
    if (!cardOn) {
      isDrag = true;
      originX = e.pageX;
      $(".dragme").addClass("dropme");
      hideInfos();
    }
  });

  // DRAG
  var soundOffcet
  var soundOffcetCompare
  var soundmultiplier = 0

  function upDate(e){
    soundOffcet = parseFloat((offcet*1).toFixed(1));
    if (soundOffcet != soundOffcetCompare ){
      if (soundmultiplier >= 1){
        soundDrag.play();
        soundmultiplier = 0
      }else {
        soundmultiplier ++
      }
      soundOffcetCompare = soundOffcet

    }else {
      var soundOffcet = parseFloat((offcet*1).toFixed(1));
    }

      updateInfos()
      // get current positions
      nextPosition = parseInt($(".next").css("left"), 10);
      prevPosition = parseInt($(".prev").css("right"), 10);
      currentPosition = parseInt($(".current").css("margin-top"), 10);
      nextPosition_moon = parseInt($(".next_moon").css("left"), 10);
      prevPosition_moon = parseInt($(".perv_moon").css("right"), 10);

      // calculate new positions
      newnextPosition = nextPosition + differenceX;
      newprevPosition = prevPosition - differenceX;
      newnextPosition_moon = nextPosition_moon + differenceX;
      newprevPosition_moon = prevPosition_moon - differenceX;


      // calculate the offcet and round at 2 decimals
      offcet -= differenceX/100;
      offcet = (offcet.toFixed(2));

      // console.log(offcet);

      // fix the distance -0 bug
      if (offcet<0 && offcet>-1){
        if (differenceX >0) {
        offcet-=1;
        }
        else if (differenceX <0){
        offcet=0;
        }
      }

      // ONLY IF DATE CHANGE
      if (currentDateOffcet != parseInt(offcet)){
        // play sound
        // var vid = $('#audioDate');
        // vid.get(0).play();
        soundDate.play();

        currentDateOffcet = parseInt(offcet)

        //change the date
        newcurrentPosition = originCurrentPosition - (currentDateOffcet*20);
        $(".current").css("margin-top", newcurrentPosition +"px");

        // update the var DAY
        var today = new Date();
        calculDate = new Date(today.setDate(today.getDate() + currentDateOffcet));

        var newDay = calculDate.getDate();
        var newMonth = calculDate.getMonth()+1;
        console.log("NEW MONTH : "+ month);
        console.log("NEW MONTH : "+ newMonth);
        // ONLY IF MONTH IS DIFFERENT
        if (month != newMonth) {
          // change date top
          if (month<newMonth){
            currentMonthOffcet += 1;
          }
          else {
              currentMonthOffcet -= 1;
          }
          newMonthPosition = originMonthPosition - ((currentMonthOffcet)*20);
          $(".month").css("margin-top", newMonthPosition +"px");

          // update the visual
          configAMoon(newMonth);
          load_moon_phases(configMoon);
          console.log("NEW MONTH : "+newMonth);
        }

        day = newDay;
        month = newMonth;

        light3dchange();
        text();
      }
      // change position timeline
      $(".prev").css("right",newprevPosition +"px");
      $(".next").css("left", newnextPosition +"px");
      $(".perv_moon").css("right",newprevPosition_moon +"px");
      $(".next_moon").css("left", newnextPosition_moon +"px");
      $(".circle").css({ WebkitTransform: 'rotate(' + newprevPosition/50 + 'deg)'});

      // equalise the difference
      originX = e.pageX;

  }

  $(".dragme").mousemove(function(e) {
    if (isDrag && !cardOn) {
      // calculate the dragged distance
      differenceX = e.pageX - originX;
      upDate(e);
    }
  });

  // velocity
  function velocityFunc(e){
    differenceX = Math.round(differenceX/1.5);
    if (differenceX<2 && differenceX>-2){
        endDrag();
    }
    else {
      upDate(e);
    }
  }

  // RELEASE
  $(".dragme").mouseup(function(e) {
    velocity = differenceX;
    isDrag = false;
    $(".dragme").removeClass("dropme");
    velocityInterval = setInterval(function(){velocityFunc(e)}, 20);
  });



  function endDrag(){
    clearInterval(velocityInterval);
    zodiacName();
    // detect zodiac name on the left

    updateInfos();
    unhide();
  }



}

var zodiacName
var zodiacPosition
zodiacName = function() {
  nextPosition_moon = parseInt($(".next_moon").css("left"), 10);
// detect zodiac name on the left
$( ".zodiac" ).each(function( index ) {
  zodiacPosition = parseInt($( this ).css("margin-left"), 10);
  if (-zodiacPosition > nextPosition_moon) {
    updateZodiac = $( this ).children().attr('name');
  }
});
console.log("THE SIGN IS : "+updateZodiac);
// console.log("zodiacPosition IS : "+zodiacPosition);w
$(".zodiacName").html(updateZodiac)
$(".bigZodiac").css("background-image", "url('img/zodiac/bigs/"+updateZodiac+".png')")
$(".bigZodiacWhite").css("background-image", "url('img/zodiac/whites/"+updateZodiac+".png')")

}

// window.onload = initDrag();
// window.onload = zodiacName();
$( document ).ready( initDrag )
// $( document ).ready( zodiacName )
// window.addEventListener("load", function(event) {
//     zodiacName();
// });

</script>
