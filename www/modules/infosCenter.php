<style>

	.circle{
	 position: absolute;
	 left: calc(50vw - 30vh);;
	 right: calc(50vw - 30vh);;
	 top: calc(50vh - 30vh);
	 height: 60vh;
	 background-position: center;
	 background-size: contain;
	 background-repeat: no-repeat;
	 background-image: url("img/circle.svg");
	}
	.infosCenter{
		font-size: 10px;
		color: white;
		position: absolute;
		top: 25vh;
		/* left: 50%; */
		width: 50vw;
		height: 50vh;
		/* background-color: rgba(255,255,0,0.1); */
		/* margin-left: -25%; */
		right: auto;
		/* display: flex; */
		justify-content: center;
		text-align: center;
		opacity: 1;
		transition: all 1s cubic-bezier(.5,0,.01,1) .3s, opacity 5s cubic-bezier(.5,0,.01,1);
	}
	.infosCenterWrapper{
		/* z-index: 1; */
		position: absolute;
    top: 0;
    left: 25vw;
    bottom: 0;
    right: 25vw;
    overflow-y: scroll;
		overflow-x: hidden;
	}
	.hide{
		opacity: 0 !important;
		transition: opacity 0.8s ease !important;
	}
	.bigZodiac{
		z-index: 2;
		background-image: url("img/zodiac/bigs/default.png");
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		position: absolute;
		top: -8.5%;
		bottom: -8.5%;
		left: -8.5%;
		right: -8.5%;
		transition: all 3s cubic-bezier(.5,0,.01,1), background-image .2s ease, top 1s cubic-bezier(.5,0,.01,1), bottom 1s cubic-bezier(.5,0,.01,1);
	}
	.bigZodiacWhite{
		z-index: 2;
		background-image: url("img/zodiac/whites/default.png");
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		position: absolute;
		top: -8.5%;
		bottom: -8.5%;
		left: -8.5%;
		right: -8.5%;
		opacity: 0;
		transition: all 3s cubic-bezier(.5,0,.01,1), background-image .2s ease, top 1s cubic-bezier(.5,0,.01,1), bottom 1s cubic-bezier(.5,0,.01,1);
	}

	.zodiacName{
		z-index: 11;
		font-family: 'TrajanPro', Arial, sans-serif;
		text-transform: uppercase;
		letter-spacing: 15px;
		font-size: 3em;
		position: absolute;
		bottom: -120px;
		left: 0;
		right: 0;
		opacity: 1;
		transition: all 1s cubic-bezier(.5,0,.01,1);
		cursor: pointer;
	}
	.distance{
		position: absolute;
		bottom: calc(5% - 75px);
		left: 0;
		right: 0;
		opacity: 0;
	}
	.phaseName{
		opacity: 0;
		z-index: 1;
		position: absolute;
    bottom: -68px;
    left: 0;
    right: 0;
		transition: all 1s cubic-bezier(.5,0,.01,1);
	}
	.percent{
		opacity: .2;
		position: absolute;
    /* bottom: calc(20% - 120px); */
		top: -65px;
    left: 0;
    right: 0;
	}
	.currentDate{
		opacity: 0;
		color: white;
		z-index: 1;
		position: absolute;
		top: -88px;
		/* top: calc(20vh - 56px); */
		left: 50%;
		right: auto;
		margin: auto;
		display: flex;
		justify-content: center;
		text-align: center;
	  transition: color 1s cubic-bezier(.5,0,.01,1), top 1s cubic-bezier(.5,0,.01,1);
	}

</style>
<div class="circle"></div>
<div class="infosCenterWrapper">
	<div class="infosCenter interface">
		<!-- DATE -->
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

		<div class="phaseName ">
			<!-- - - - - - - - -->
		</div>
		<a class="zodiacName ">
			<!-- XXXXXXXXXX -->
		</a>
		<div class="distance ">
			<!-- 000000 KM -->
		</div>
			<div class="percent ">
				<!-- 00% -->
			</div>
		<div class="bigZodiac">
		</div>
		<div class="bigZodiacWhite">
		</div>
		<div class="card">
		</div>
	</div>
</div>


<script type="text/javascript">

function hideInfos() {
	$(".zodiacName").addClass("hide");
	$(".bigZodiac").addClass("hide");
	$(".bigZodiacWhite").addClass("hide");
	console.log("hide");
	// $(".infosCenter").addClass("hide");
	$(".next_moonContainer").css("opacity","1")
	$(".perv_moonContainer").css("opacity","1")
	$(".nextContainer").css("opacity","1")
	$(".prevContainer").css("opacity","1")
	$(".currentDate").css("opacity","1")
	$(".phaseName").css("opacity","1")

}
function updateInfos() {
	$(".distance").html(moon.phase[day].dis.toFixed(0)+ " KM");
	$(".percent").html(moon.phase[day].lighting.toFixed(2) + " %");
	$(".phaseName").html(moon.phase[day].phaseName + " IN");
}
function unhide() {
	$(".hide").removeClass("hide");
}


</script>
