<style>
	.perv_moon{
		/* font-family: sans-serif; */
		color: white;
		position: absolute;
		text-align: right;
	}
	.next_moon{
		/* font-family: sans-serif; */
		position: absolute;
		/* color: white; */
		text-align: left;
	}
	.perv_moonContainer{
		position: absolute;
		top: calc(46vh + 60px);
		right: calc(50vw + 30vh);
		left: -500px;
		height: 75px;
		overflow: scroll;
		white-space: nowrap ;
		overflow: hidden;
		transition: all 2s ease;
	}
	.next_moonContainer{
		position: absolute;
		top: calc(46vh + 60px);
		left: calc(50vw + 30vh);
		right: -500px;
		height: 75px;
		white-space: nowrap ;
		overflow: hidden;
		transition: all 2s ease;
	}
	.date_moon{
		text-align: center;
		color: white;
		display: inline-block;
		width: 100px;
		height: 22px;
		margin: 0px;
		font-size: 10px;
		/* border-bottom: 25px solid grey; */
		border-image: url("img/ruler2x.png") 100 0 round;
	}
	.next_zodiac{
		position: absolute;
		left: 0;
		right: 0;
	}
	.prev_zodiac{
		position: absolute;
		left: 0;
		right: 0;
	}
	.zodiac{
		position: absolute;
		top: 0;
		left: 0;
	}
	.icoZodiac{
		/* margin-left: 12px; */
		width: 30px;
		height: 30px;
		/* background-color: #322 */
	}
</style>

<div class="next_moonContainer">
	<div class="next_moon interface">
		<div class="next_zodiac"></div>
	</div>
</div>
<div class="perv_moonContainer">
	<div class="perv_moon interface">
		<div class="prev_zodiac"></div>
	</div>
</div>


<script type="text/javascript">

var startingDay_moon = new Date();
startingDay_moon.setDate(1);
startingDay_moon.setMonth(0);
startingDay_moon.setYear(2018);

var range_moon = Math.round((new Date() - startingDay_moon) / (1000 * 60 * 60 * 24));
console.log("startingDay_moon : " + range_moon);

var nextDay_moon = new Date(startingDay_moon);
var perv_moonDay = new Date(startingDay_moon);
console.log("STARTING DAY MOON : " + startingDay_moon);

// clear the timeline
function clearMoonTimeline(){
	$(".next_moon").html("");
	$(".perv_moon").html("");
	currentDay = new Date(new Date());
	startingDay_moon = new Date(new Date());
	startingDay_moon.setDate(currentDay.getDate() - range_moon);
	nextDay_moon = new Date(startingDay_moon);
	perv_moonDay = new Date(startingDay_moon);
}
// load dates timeline
function loadNexDates_moon(configMoon){
	for (var i = 0; i < (range_moon*2)-1; i++) {
		prevDay = day
		nextDay_moon.setDate(nextDay_moon.getDate() + 1);
		day = nextDay_moon.getDate();

		// FULLMOON VALUES FOR 2018
		if (i+1 == 1 || i+1 == 30 || i+1 == 60 || i+1 == 89 || i+1 == 119 || i+1 == 148 || i+1 == 178 || i+1 == 207 || i+1 == 237 || i+1 == 267 || i+1 == 296 || i+1 == 326 || i+1 == 355)  {
			$(".next_moon").append("<div class='date_moon'>" + "FM" +" </div>");
			$(".perv_moon").append("<div class='date_moon'>" + "FM" +" </div>");
			// NEWMOON VALUES FOR 2018
		}else if (i+1 == 16 || i+1 == 45 || i+1 == 75 || i+1 == 105 || i+1 == 134 || i+1 == 163 || i+1 == 193 || i+1 == 222 || i+1 == 251 || i+1 == 281 || i+1 == 310 || i+1 == 340)  {
			$(".next_moon").append("<div class='date_moon'>" + "NM" +" </div>");
			$(".perv_moon").append("<div class='date_moon'>" + "NM" +" </div>");
		}
		else {
			$(".next_moon").append("<div class='date_moon'> &nbsp; </div>");
			$(".perv_moon").append("<div class='date_moon'> &nbsp; </div>");
		}
	}
	$(".next_moon").css("left",-range_moon*100 + 50 + "px");
	$(".perv_moon").css("right",-range_moon*100 + 50 + "px");
}
</script>
