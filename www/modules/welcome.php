
<style>
.welcome{
	position: absolute;
	top: 0px;
	bottom: 0px;
	left: 0px;
	right: 0px;
	background-color: rgba(19,19,19,.8);
	color:yellow;
	text-align: center;
	z-index: 20;
	display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
}
.welcomeDisapear{
	opacity: 0;
	transition: opacity 1.5s ease;
	pointer-events: none;
}
.welcomeMsg{
	background: tomato;
	height: 200px;
	width: 200px;
}
/* $(".bigZodiac").css("background-image", "url('img/zodiac/bigs/"+updateZodiac+".png')") */

</style>

<div class="welcome">
	<div class="welcomeMsg">
		<a class="enterBtn">WELCOME</a>
	</div>
</div>

<script>
	$(".enterBtn").click(function() {
  	$(".welcome").addClass("welcomeDisapear");
		// $(".infosCenter").css("opacity",0)
		hideInfos()
		setTimeout(function(){
		  zodiacName();
			updateInfos();
	    unhide();
			// $(".infosCenter").css("opacity",1)
		}, 1000);
		// zodiacName();
	});
</script>
