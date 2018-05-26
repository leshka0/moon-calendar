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
		left: 50%;
		width: 50vw;
		height: 50vh;
		/* background-color: rgba(255,255,0,0.1); */
		margin-left: -25%;
		right: auto;
		/* display: flex; */
		justify-content: center;
		text-align: center;
		opacity: 1;
		transition: all 2s ease, opacity 5s ease;
	}
	.hide{
		opacity: 0 !important;
		transition: opacity 0.8s ease !important;
	}
	.bigZodiac{
		z-index: 1;
		background-image: url("img/zodiac/bigs/default.png");
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		position: absolute;
		top: -8.5%;
		bottom: -8.5%;
		left: -8.5%;
		right: -8.5%;
		transition: all 3s ease, background-image .2s ease;
	}
	.bigZodiacWhite{
		z-index: 1;
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
		transition: all 3s ease, background-image .2s ease;
	}

	.zodiacName{
		z-index: 1;
		font-family: 'TrajanPro', Arial, sans-serif;
		text-transform: uppercase;
		letter-spacing: 15px;
		font-size: 3em;
		position: absolute;
		bottom: -106px;
		left: 0;
		right: 0;
		opacity: 1;
		transition: all 2s ease;
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
		position: absolute;
    bottom: -62px;
    left: 0;
    right: 0;
		transition: all 2s ease;
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
		color: white;
		z-index: 1;
		position: absolute;
		top: calc(20vh - 56px);
		left: 50%;
		right: auto;
		margin: auto;
		display: flex;
		justify-content: center;
		text-align: center;
	}

</style>
<div class="circle"></div>
<div class="infosCenter interface">
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


<script type="text/javascript">

function hideInfos() {
	$(".zodiacName").addClass("hide");
	$(".bigZodiac").addClass("hide");
	$(".bigZodiacWhite").addClass("hide");
	// console.log("hide");
	// $(".infosCenter").addClass("hide");
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
