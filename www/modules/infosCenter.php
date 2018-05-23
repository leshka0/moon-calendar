<style>
	.circle{
	 position: absolute;
	 /* top: 25vh; */
	 /* left: calc(50vw - (50vh / 2)); */
	 left: 35vw;
	 right: 35vw;
	 top: calc(50vh - (30vw / 2));
	 /* bottom: 0; */
	 height: 30vw;
	 /* width: 50vh; */
	 /* height: 50vh; */
	 /* right: auto; */
	 /* background-color: rgba(255,255,0,0.3); */
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
		transition: all 5s ease;
	}
	.hide{
		opacity: 0 !important;
		transition: all 0.8s ease !important;
	}
	.bigZodiac{
		opacity: .7;
		background-image: url("img/zodiac/bigs/sagitarius.png");
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		position: absolute;
		top: 20%;
		bottom: 20%;
		left: 20%;
		right: 20%;
		transition: all 2s ease;
		/* filter: drop-shadow(0px 2px 4px #000000); */
	}
	.zodiacName{
		font-size: 3em;
		position: absolute;
		bottom: calc(20% - 60px);
		left: 0;
		right: 0;
		opacity: 1;
		transition: all 2s ease;
	}
	.percent{
		position: absolute;
		bottom: calc(20% - 75px);
		left: 0;
		right: 0;
		opacity: .2;
	}
	.phaseName{
		position: absolute;
    bottom: calc(20% - 20px);
    left: 0;
    right: 0;
	}
	.distance{
		opacity: .2;
		position: absolute;
    /* bottom: calc(20% - 120px); */
		top: -20px;
    left: 0;
    right: 0;
	}
</style>
<div class="circle"></div>
<div class="infosCenter interface">
	<div class="phaseName ">
		No Moon in
	</div>
	<div class="zodiacName ">
		Sagitarius
	</div>
	<div class="distance ">
		000000KM
	</div>
		<div class="percent ">
			00%
		</div>
	<div class="bigZodiac">
	</div>
</div>


<script type="text/javascript">

function hideInfos() {
	$(".zodiacName").addClass("hide");
	$(".bigZodiac").addClass("hide");
	console.log("hide");
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
