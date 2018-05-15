<!-- CSS -->
<style>
  .dragme {
    position: fixed;
    top: 40vh;
    left:0;
    right: 0;
    bottom: 40vh;
    background-color: rgba(255, 255, 50, 0.05);
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
  var offcet=0;
  // CLICK
  $(".dragme").mousedown(function(e) {
    isDrag = true;
    originX = e.pageX;
  });
  // DRAG
  $(".dragme").mousemove(function(e) {
    if (isDrag) {
      // calculate the dragged distance
      differenceX = e.pageX - originX;
      // get current positions
      nextPosition = parseInt($(".next").css("left"), 10);
      prevPosition = parseInt($(".prev").css("right"), 10);
      // calculate new positions
      newnextPosition = nextPosition + differenceX;
      newprevPosition = prevPosition - differenceX;
      // change position
      $(".prev").css("right",newprevPosition +"px");
      $(".next").css("left", newnextPosition +"px");

      // update the offcet for records
      offcet -= differenceX/100;
      console.log(offcet.toPrecision(2));
      // equalise the difference
      originX = e.pageX;
    }
  });
  // RELEASE
  $(".dragme").mouseup(function(e) {
    console.log( "MOUSE UP" );
    isDrag = false;
  });
}
window.onload = initDrag();
</script>
