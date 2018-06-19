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
		opacity: 0;
		position: absolute;
		top: 46vh;
		right: calc(50vw + 30vh);
		left: -500px;
		height: 75px;
		overflow: scroll;
		white-space: nowrap ;
		overflow: hidden;
		transition: all 1s cubic-bezier(.5,0,.01,1);
	}
	.nextContainer{
		opacity: 0;
		position: absolute;
		top: 46vh;
		left: calc(50vw + 30vh);
		right: -500px;
		height: 75px;
		white-space: nowrap ;
		overflow: hidden;
		transition: all 1s cubic-bezier(.5,0,.01,1);
	}
	.date{
		text-align: center;
		color: #666;
		display: inline-block;
		width: 100px;
		height: 22px;
		margin: 0px;
		/* background-color: rgba(130,130,130,.05); */
		font-size: 10px;
		/* letter-spacing: 4px; */
		border-bottom: 25px solid grey;
		border-image: url("img/ruler2x.png") 100 0 round;
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
		transition: margin-top .2s ease;
		width: 19px;
		height: 10px;
	}
	.month{
		/* background-color: red; */
		transition: margin-top .2s ease;
		width: 36px;
		height: 10px;
	}
	.currentDateNumbr{
		text-align: right;
		display: inline-block;
		width: 19px;
		height: 20px;
		margin: 0px;
		/* background-color: rgba(130,130,130,.05); */
	}
	.monthNumbr{
			text-align: left;
			display: inline-block;
			width: 36px;
			height: 20px;
			margin: 0px;
			background-color: rgba(130,130,130,.05);
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

<script type="text/javascript">

// var moon
var currentDay = new Date(new Date());


var range = 200;
var rangeMonth = 20;
var startingDay = new Date(new Date());
var startingMonth = new Date(new Date());
startingDay.setDate(currentDay.getDate() - range);

// correct the 30th february bug
startingMonth.setDate(1);
startingMonth.setMonth(currentDay.getMonth() - rangeMonth);
// console.log("STARTING DAY : "+startingDay);
// console.log("STARTING MONTH 1 : "+startingMonth);
var timeOffcet = startingDay.getHours() *100 / 24;
$(".prev").css("margin-right",timeOffcet +"px");
$(".next").css("margin-left", -timeOffcet +"px");
// console.log("timeOffcet  : "+startingMonth.getHours());
startingDay.setHours(0);
startingDay.setMinutes(0);
startingMonth.setHours(0);
startingMonth.setMinutes(0);

var nextDay = new Date(startingDay);
var prevDay = new Date(startingDay);
var nextMonth = new Date(startingMonth);
// console.log("CURRENT : "+currentDay);
// console.log("STARTING DAY : "+startingDay);
// console.log("STARTING MONTH : "+nextMonth);

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
		if (nextDay.getDate() == 1){
			$(".next").append("<div class='date'>" +nextDay.getDate()+ monthNames(nextDay.getMonth()+1) +" </div>");
			$(".prev").append("<div class='date'>" +nextDay.getDate()+ monthNames(nextDay.getMonth()+1) +" </div>");
			$(".current").append("<div class='currentDateNumbr'>" +nextDay.getDate()+ "</div>");
		}
		else{
			$(".next").append("<div class='date'>" +nextDay.getDate()+ "</div>");
			$(".prev").append("<div class='date'>" +nextDay.getDate()+ "</div>");
			$(".current").append("<div class='currentDateNumbr'>" +nextDay.getDate()+ "</div>");
		}
	}
	for (var i = -rangeMonth; i < rangeMonth - 1; i++) {
		nextMonth.setMonth( nextMonth.getMonth( ) + 1 );
		// console.log(nextMonth);
		$(".month").append("<div class='monthNumbr'>" + monthNames(nextMonth.getMonth()+1) + "</div>");

	}

	$(".next").css("left",-range*100 + 50 + "px");
	$(".prev").css("right",-range*100 + 50 + "px");
	$(".current").css("margin-top",-(range-1)*20 + "px");
	$(".month").css("margin-top",-(rangeMonth-1)*20 + "px");
}

</script>
