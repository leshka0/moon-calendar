<style>
	.infosCenter{
		font-size: 10px;
		letter-spacing: 2px;
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
		transition: all 2s ease;
	}
	.hide{
		opacity: 0;
		transition: all 0.5s ease;
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
		filter: drop-shadow(0px 2px 4px #000000);
	}
	.zodiacName{
		font-size: 3em;
		position: absolute;
		bottom: calc(20% - 60px);
		left: 0;
		right: 0;
	}
	.phaseName{
		position: absolute;
    bottom: calc(20% - 20px);
    left: 0;
    right: 0;
	}
</style>

<div class="infosCenter hide interface">
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
	$(".infosCenter").addClass("hide");
}
function updateInfos() {
	console.log(moon.phase[day]);
	$(".distance").html(moon.phase[day].dis.toFixed(0)+ " KM");
	$(".percent").html(moon.phase[day].lighting.toFixed(2));
	$(".phaseName").html(moon.phase[day].phaseName + " IN");
	$(".hide").removeClass("hide");
}

</script>
