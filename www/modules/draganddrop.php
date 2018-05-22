<!-- CSS -->
<style>
  .dragme {
    position: fixed;
    top: 40vh;
    left:0;
    right: 0;
    bottom: 40vh;
    cursor: col-resize;
    /* background-color: rgba(255, 255, 50, 0.05); */
  }
  .dropme {
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    background-color: transparent;
  }
</style>

<!-- HTML -->
<div class="dragme"></div>

<!-- JAVASCRIPT -->
<script type="text/javascript">
function initDrag(){
  var isDrag = false
  var velocity =0;
  var originX =0;
  var differenceX =0;
  var nextPosition =0;
  var prevPosition =0;
  var currentPosition =0;
  var offcet=0;
  var currentDateOffcet =0
  var currentMonthOffcet =0
  var calculDate =0
  var calculMonth =1
  var originCurrentPosition = -(range-1)*20;
  var originMonthPosition = -(rangeMonth-1)*20;
  var month = new Date().getMonth()+1;

  // CLICK
  $(".dragme").mousedown(function(e) {
    isDrag = true;
    originX = e.pageX;
    $(".dragme").addClass("dropme");
  });
  // DRAG
  $(".dragme").mousemove(function(e) {
    if (isDrag) {
      // calculate the dragged distance
      differenceX = e.pageX - originX;
      // get current positions
      nextPosition = parseInt($(".next").css("left"), 10);
      prevPosition = parseInt($(".prev").css("right"), 10);
      currentPosition = parseInt($(".current").css("margin-top"), 10);
      // calculate new positions
      newnextPosition = nextPosition + differenceX;
      newprevPosition = prevPosition - differenceX;



      // calculate the offcet and round at 2 decimals
      offcet -= differenceX/100;
      offcet = (offcet.toFixed(2));

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
        currentDateOffcet = parseInt(offcet)

        //change the date
        newcurrentPosition = originCurrentPosition - (currentDateOffcet*20);
        $(".current").css("margin-top", newcurrentPosition +"px");

        // update the var DAY
        var today = new Date();
        calculDate = new Date(today.setDate(today.getDate() + currentDateOffcet));
        // console.log("DATE : " + calculDate);

        var newDay = calculDate.getDate();
        var newMonth = calculDate.getMonth()+1;

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

      // equalise the difference
      originX = e.pageX;
    }
  });
  // RELEASE
  $(".dragme").mouseup(function(e) {
    // console.log( "MOUSE UP" );
    isDrag = false;
    $(".dragme").removeClass("dropme");
  });
}
window.onload = initDrag();
</script>
