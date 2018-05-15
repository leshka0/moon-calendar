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
var nextDay = new Date(currentDay);
var prevDay = new Date(currentDay);

function loadNexDates(configMoon){
	console.log(configMoon);
	for (var i = 0; i < 20; i++) {
		nextDay.setDate(nextDay.getDate() + 1);
		console.log(nextDay.getDate());
		$(".next").append("<div class='date'>" +nextDay.getDate()+ "</div>");
	}
}

function loadPrevDates(configMoon){
	console.log(configMoon);
	for (var i = 0; i < 20; i++) {
		prevDay.setDate(prevDay.getDate() - 1);
		console.log(prevDay.getDate());
		$(".prev").append("<div class='date'>" +prevDay.getDate()+ "</div>");
	}
}

</script>
