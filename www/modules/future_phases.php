<div class="nextContainer">
	<div class="next">
	</div>
</div>
<div class="prevContainer">
	<div class="prev">
	</div>
</div>

<script type="text/javascript">

var moon
var currentDay = new Date(new Date());
var range = 40;
var startingDay = new Date(new Date());
startingDay.setDate(currentDay.getDate() - range);
var nextDay = new Date(startingDay);
var prevDay = new Date(startingDay);
console.log(currentDay);
console.log(startingDay);

// future
function loadNexDates(configMoon){
	for (var i = -range; i < range-1; i++) {
		nextDay.setDate(nextDay.getDate() + 1);
		$(".next").append("<div class='date'>" +nextDay.getDate()+ "</div>");
		$(".prev").append("<div class='date'>" +nextDay.getDate()+ "</div>");
		$(".next").css("left",-range*100 + 50 + "px");
		$(".prev").css("right",-range*100 + 50 + "px");
	}
}
//past
function loadPrevDates(configMoon){
// 	for (var i = 0; i < range; i++) {
// 		prevDay.setDate(prevDay.getDate() - 1);
// 		$(".prev").append("<div class='date'>" +prevDay.getDate()+ "</div>");
// 	}
}

</script>
