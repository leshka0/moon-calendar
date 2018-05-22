<style>
	.prev{
		/* font-family: sans-serif; */
		color: white;
		position: absolute;
		text-align: right;
	}
	.next{
		/* font-family: sans-serif; */
		position: absolute;
		/* color: white; */
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
		height: 22px;
		margin: 0px;
		/* background-color: rgba(130,130,130,.05); */
		font-size: 10px;
		letter-spacing: 4px;
		border-bottom: 25px solid grey;
		border-image: url("img/ruler2x.png") 100 0 round;
	}
	.currentDate{
		/* font-family: sans-serif; */

		letter-spacing: 2px;
		/* color: white; */
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
	.monthContainer{
		overflow: hidden;
		height: 15px;
		/* background-color: blue; */
	}
	.current{
		/* background-color: red; */
		transition: all .2s ease;
		width: 19px;
		height: 10px;
	}
	.month{
		/* background-color: red; */
		transition: all .2s ease;
		width: 26px;
		height: 10px;
	}
	.currentDateNumbr{
		text-align: right;
		color: white;
		display: inline-block;
		width: 19px;
		height: 20px;
		margin: 0px;
		/* background-color: rgba(130,130,130,.05); */
		font-size: 10px;
	}
	.monthNumbr{
			text-align: left;
			color: white;
			display: inline-block;
			width: 26px;
			height: 20px;
			margin: 0px;
			background-color: rgba(130,130,130,.05);
			font-size: 10px;
	}
</style>

<div class="nextContainer">
	<div class="next interface">
	</div>
</div>
<div class="prevContainer">
	<div class="prev interface">
	</div>
</div>
<div class="currentDate interface">
	<div style="display: flex; justify-content: center; margin-left:-100%;">
		<div class="currentContainer">
			<div class="current">
			</div>
		</div>
		&nbsp;
		<div class="monthContainer">
			<div class="month">
			</div>
		</div>
		&nbsp;2018
	</div>
</div>

<script type="text/javascript">

var moon
var currentDay = new Date(new Date());
var range = 200;
var rangeMonth = 20;
var startingDay = new Date(new Date());
var startingMonth = new Date(new Date());
startingDay.setDate(currentDay.getDate() - range);
startingMonth.setMonth(currentDay.getMonth() - rangeMonth);
var nextDay = new Date(startingDay);
var prevDay = new Date(startingDay);
var nextMonth = new Date(startingMonth);
// console.log("CURRENT : "+currentDay);
// console.log("STARTING DAY : "+startingDay);
console.log("STARTING MONTH : "+nextMonth);

function monthNames(x){
	switch (x) {
    case 1:
        return "Jan";
        break;
    case 2:
        return "Feb";
        break;
    case 3:
        return "Mar";
        break;
    case 4:
        return "Avr";
        break;
    case 5:
        return "May";
				break;
    case 6:
        return "Jun";
				break;
    case 7:
        return "Jul";
				break;
    case 8:
        return "Aug";
				break;
    case 9:
        return "Sep";
				break;
    case 10:
        return "Oct";
				break;
    case 11:
        return "Nov";
				break;
    case 12:
        return "Dec";
				break;
		default:
		    return "Month";
			}
}

// load dates timeline
function loadNexDates(configMoon){
	for (var i = -range; i < range-1; i++) {
		nextDay.setDate(nextDay.getDate() + 1);
		$(".next").append("<div class='date'>" +nextDay.getDate()+ "</div>");
		$(".prev").append("<div class='date'>" +nextDay.getDate()+ "</div>");
		$(".current").append("<div class='currentDateNumbr'>" +nextDay.getDate()+ "</div>");
	}
	for (var i = -rangeMonth; i < rangeMonth - 1; i++) {
		nextMonth.setMonth( nextMonth.getMonth( ) + 1 );
		$(".month").append("<div class='monthNumbr'>" + monthNames(nextMonth.getMonth()+1) + "</div>");
	}

	$(".next").css("left",-range*100 + 50 + "px");
	$(".prev").css("right",-range*100 + 50 + "px");
	$(".current").css("margin-top",-(range-1)*20 + "px");
	$(".month").css("margin-top",-(rangeMonth-1)*20 + "px");
}

</script>
