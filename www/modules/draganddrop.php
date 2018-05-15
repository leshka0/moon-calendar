<!-- CSS -->
<style>
  .dragme {
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
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
  // CLICK
  $(".dragme").mousedown(function(e) {
    isDrag = true;
    originX = e.pageX;
  });
  // DRAG
  $(".dragme").mousemove(function(e) {
    if (isDrag) {
      differenceX = e.pageX - originX;
      nextPosition = parseInt($(".next").css("left"), 10);
      prevPosition = parseInt($(".prev").css("right"), 10);
      newnextPosition = nextPosition + differenceX;
      newprevPosition = prevPosition - differenceX;
      console.log(newnextPosition);
      $(".prev").css("right",newprevPosition +"px");
      $(".next").css("left", newnextPosition +"px");
      console.log($(".next").css("left"));
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
