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
  var calculDate =0
  var calculMonth =1
  var originCurrentPosition = -(range-1)*20;

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
        console.log("DATE : " + calculDate);

        var newDay = calculDate.getDate();
        var newMonth = calculDate.getMonth()+1;
        // console.log("DATE : "+newDay);
        // console.log("MONTH : "+newMonth);

        load_moon_phases(configMoon);
        configAMoon(newMonth);
        day = newDay;
        // console.log("CALC DAY : "+day);
        // if (day>30){
          // calculDate = 1;
          // monthIndex += 1;
          // configAMoon(monthIndex);
          // day = new Date().getDate() + calculDate;
            // monthIndex+=1;

        // }
        // console.log(day);



        // if (day>moon.daysMonth){
        //   day = 0;
        //   moon.month+=1;
        // var  date = new Date();
        // console.log(date);
        // date = date.setDate(date.getDate() - 1);
        // console.log(date);
        // console.log(moon.phase[day].lighting);
        // day = date;
        // }

        // console.log(moon.daysMonth);
        // if (moon.phase[day].dayMonth =="30" ){
        //   // load_moon_phases(configMoon)
        //   console.log("CHANGE DATE");
        // }

        light3dchange();
        text();
      }
      // change position
      $(".prev").css("right",newprevPosition +"px");
      $(".next").css("left", newnextPosition +"px");

      // equalise the difference
      originX = e.pageX;
    }
  });
  // RELEASE
  $(".dragme").mouseup(function(e) {
    console.log( "MOUSE UP" );
    isDrag = false;
    $(".dragme").removeClass("dropme");
  });
}
window.onload = initDrag();
</script>
