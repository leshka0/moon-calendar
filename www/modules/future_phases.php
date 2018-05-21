<style>
	.prev{
		font-family: sans-serif;
		color: white;
		position: absolute;
		text-align: right;
	}
	.next{
		font-family: sans-serif;
		position: absolute;
		color: white;
		text-align: left;
	}
	.prevContainer{
		position: absolute;
		top: 46vh;
		right: 65vw;
		left: -500px;
		height: 75px;
		overflow: scroll;
		white-space: nowrap ;
		overflow: hidden;
	}
	.nextContainer{
		position: absolute;
		top: 46vh;
		left: 65vw;
		right: -500px;
		height: 75px;
		white-space: nowrap ;
		overflow: hidden;
	}
	.date{
		text-align: center;
		color: white;
		display: inline-block;
		width: 100px;
		height: 25px;
		margin: 0px;
		/* background-color: rgba(130,130,130,.05); */
		font-size: 10px;
		letter-spacing: 4px;
		border-bottom: 25px solid grey;
		border-image: url("img/ruler2x.png") 100 0 round;
	}
	.currentDate{
		font-family: sans-serif;
		font-size: 10px;
		letter-spacing: 2px;
		color: white;
		position: absolute;
		top: 20vh;
		left: 50%;
		right: auto;
		margin: auto;
		display: flex;
		justify-content: center;
		text-align: center;
	}
	.currentContainer{
		overflow: hidden;
		height: 15px;
		/* background-color: blue; */
	}
	.current{
		/* background-color: red; */
		transition: all .2s ease;
		width: 20px;
		height: 10px;
	}
	.currentDateNumbr{
		text-align: right;
		color: white;
		display: inline-block;
		width: 20px;
		height: 20px;
		margin: 0px;
		/* background-color: rgba(130,130,130,.05); */
		font-size: 10px;
	}
</style>

<div class="nextContainer">
	<div class="next">
	</div>
</div>
<div class="prevContainer">
	<div class="prev">
	</div>
</div>
<div class="currentDate">
	<div style="display: flex; justify-content: center; margin-left:-50%;">
		<div class="currentContainer">
			<div class="current">
			</div>
		</div>
	  &nbsp;May 2018
	</div>
</div>

<script type="text/javascript">

var moon
var currentDay = new Date(new Date());
var range = 100;
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
		$(".current").append("<div class='currentDateNumbr'>" +nextDay.getDate()+ "</div>");
		$(".next").css("left",-range*100 + 50 + "px");
		$(".prev").css("right",-range*100 + 50 + "px");
		$(".current").css("margin-top",-(range-1)*20 + "px");
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
